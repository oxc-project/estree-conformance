__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 392
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thisArg",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 401
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 410
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 403,
          "end": 410
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 428
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 442
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 442
                },
                "definite": false,
                "start": 422,
                "end": 442
              }
            ],
            "declare": false,
            "start": 418,
            "end": 443
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 462
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 479,
                  "end": 480
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 493
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 498
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 506
                        }
                      ],
                      "optional": false,
                      "start": 489,
                      "end": 507
                    },
                    "start": 482,
                    "end": 508
                  }
                ],
                "start": 474,
                "end": 508
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 522,
                  "end": 523
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 541
                        },
                        "optional": false,
                        "computed": false,
                        "start": 532,
                        "end": 541
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 542,
                          "end": 549
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 555
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 556,
                            "end": 557
                          },
                          "optional": false,
                          "computed": true,
                          "start": 551,
                          "end": 558
                        }
                      ],
                      "optional": false,
                      "start": 532,
                      "end": 559
                    },
                    "start": 525,
                    "end": 560
                  }
                ],
                "start": 517,
                "end": 560
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 574,
                  "end": 575
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 593
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 601
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 603,
                            "end": 607
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 608,
                            "end": 609
                          },
                          "optional": false,
                          "computed": true,
                          "start": 603,
                          "end": 610
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 616
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 617,
                            "end": 618
                          },
                          "optional": false,
                          "computed": true,
                          "start": 612,
                          "end": 619
                        }
                      ],
                      "optional": false,
                      "start": 584,
                      "end": 620
                    },
                    "start": 577,
                    "end": 621
                  }
                ],
                "start": 569,
                "end": 621
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 635,
                  "end": 636
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 645,
                          "end": 649
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 654
                        },
                        "optional": false,
                        "computed": false,
                        "start": 645,
                        "end": 654
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 662
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 668
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 669,
                            "end": 670
                          },
                          "optional": false,
                          "computed": true,
                          "start": 664,
                          "end": 671
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 673,
                            "end": 677
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 678,
                            "end": 679
                          },
                          "optional": false,
                          "computed": true,
                          "start": 673,
                          "end": 680
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 682,
                            "end": 686
                          },
                          "property": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 687,
                            "end": 688
                          },
                          "optional": false,
                          "computed": true,
                          "start": 682,
                          "end": 689
                        }
                      ],
                      "optional": false,
                      "start": 645,
                      "end": 690
                    },
                    "start": 638,
                    "end": 691
                  }
                ],
                "start": 630,
                "end": 691
              }
            ],
            "start": 448,
            "end": 697
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 713
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 719
                },
                "optional": false,
                "computed": false,
                "start": 709,
                "end": 719
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 709,
              "end": 734
            },
            "start": 702,
            "end": 735
          }
        ],
        "start": 412,
        "end": 737
      },
      "expression": false,
      "start": 373,
      "end": 737
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 759
      },
      "exportKind": "value",
      "start": 739,
      "end": 760
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 373,
  "end": 760
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 373,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 474,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 482,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 499,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 517,
    "end": 521
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 525,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 542,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 555,
    "end": 556
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 569,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 577,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 589,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 608,
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
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 630,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 655,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 686,
    "end": 687
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 702,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 720,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 739,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 746,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  }
]
```

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
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 385
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 396
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
              },
              "start": 396,
              "end": 404
            },
            "accessibility": null,
            "static": false,
            "start": 392,
            "end": 405
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 424,
                "end": 430
              },
              "start": 422,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 410,
            "end": 431
          }
        ],
        "start": 386,
        "end": 433
      },
      "declare": false,
      "start": 371,
      "end": 433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 455
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 466
              },
              "typeArguments": null,
              "start": 462,
              "end": 466
            },
            "start": 460,
            "end": 466
          },
          "start": 456,
          "end": 466
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 469,
          "end": 475
        },
        "start": 467,
        "end": 475
      },
      "body": null,
      "expression": false,
      "start": 435,
      "end": 476
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 497
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            },
            "start": 502,
            "end": 507
          },
          "start": 498,
          "end": 507
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 510,
          "end": 516
        },
        "start": 508,
        "end": 516
      },
      "body": null,
      "expression": false,
      "start": 477,
      "end": 517
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 537
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 539,
                      "end": 549
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 533,
                    "end": 549
                  }
                ],
                "start": 531,
                "end": 551
              }
            ],
            "optional": false,
            "start": 527,
            "end": 552
          },
          "definite": false,
          "start": 523,
          "end": 552
        }
      ],
      "declare": false,
      "start": 519,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              },
              "start": 559,
              "end": 567
            },
            "start": 558,
            "end": 567
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 567
        }
      ],
      "declare": false,
      "start": 554,
      "end": 568
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 575
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 588
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 590,
                      "end": 600
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 584,
                    "end": 600
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 613
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Bumpy wheel",
                      "raw": "\"Bumpy wheel\"",
                      "start": 615,
                      "end": 628
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 602,
                    "end": 628
                  }
                ],
                "start": 582,
                "end": 630
              }
            ],
            "optional": false,
            "start": 578,
            "end": 631
          },
          "definite": false,
          "start": 574,
          "end": 631
        }
      ],
      "declare": false,
      "start": 570,
      "end": 632
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 640,
                "end": 646
              },
              "start": 638,
              "end": 646
            },
            "start": 637,
            "end": 646
          },
          "init": null,
          "definite": false,
          "start": 637,
          "end": 646
        }
      ],
      "declare": false,
      "start": 633,
      "end": 647
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 660
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 667
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 669,
                      "end": 679
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 663,
                    "end": 679
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 692
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 694,
                      "end": 699
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 681,
                    "end": 699
                  }
                ],
                "start": 661,
                "end": 701
              }
            ],
            "optional": false,
            "start": 657,
            "end": 702
          },
          "definite": false,
          "start": 653,
          "end": 702
        }
      ],
      "declare": false,
      "start": 649,
      "end": 703
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 711,
                "end": 717
              },
              "start": 709,
              "end": 717
            },
            "start": 708,
            "end": 717
          },
          "init": null,
          "definite": false,
          "start": 708,
          "end": 717
        }
      ],
      "declare": false,
      "start": 704,
      "end": 718
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
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 725
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 731
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 734,
                      "end": 735
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 737,
                      "end": 739
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 734,
                    "end": 739
                  }
                ],
                "start": 732,
                "end": 741
              }
            ],
            "optional": false,
            "start": 728,
            "end": 742
          },
          "definite": false,
          "start": 724,
          "end": 742
        }
      ],
      "declare": false,
      "start": 720,
      "end": 743
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
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 751,
                "end": 757
              },
              "start": 749,
              "end": 757
            },
            "start": 748,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 748,
          "end": 757
        }
      ],
      "declare": false,
      "start": 744,
      "end": 758
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 780
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 781,
              "end": 782
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 781,
            "end": 782
          }
        ],
        "start": 780,
        "end": 783
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
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
                        "start": 797,
                        "end": 798
                      },
                      "typeArguments": null,
                      "start": 797,
                      "end": 798
                    },
                    "start": 795,
                    "end": 798
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 793,
                  "end": 798
                }
              ],
              "start": 791,
              "end": 800
            },
            "start": 789,
            "end": 800
          },
          "start": 784,
          "end": 800
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 804
          },
          "typeArguments": null,
          "start": 803,
          "end": 804
        },
        "start": 801,
        "end": 804
      },
      "body": null,
      "expression": false,
      "start": 760,
      "end": 805
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
            "typeAnnotation": null,
            "start": 811,
            "end": 812
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 818
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 819,
                "end": 821
              }
            ],
            "optional": false,
            "start": 815,
            "end": 822
          },
          "definite": false,
          "start": 811,
          "end": 822
        }
      ],
      "declare": false,
      "start": 807,
      "end": 823
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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 831,
                "end": 833
              },
              "start": 829,
              "end": 833
            },
            "start": 828,
            "end": 833
          },
          "init": null,
          "definite": false,
          "start": 828,
          "end": 833
        }
      ],
      "declare": false,
      "start": 824,
      "end": 834
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 371,
  "end": 834
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 371,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 392,
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
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 410,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 435,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 469,
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
    "value": "declare",
    "start": 477,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 539,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 590,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 602,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "String",
    "value": "\"Bumpy wheel\"",
    "start": 615,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 669,
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
    "value": "description",
    "start": 681,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 704,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 760,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 807,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  }
]
```

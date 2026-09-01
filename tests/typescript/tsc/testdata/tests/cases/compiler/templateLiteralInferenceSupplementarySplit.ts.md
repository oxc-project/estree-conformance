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
        "name": "Head",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 458
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 469,
              "end": 475
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 459,
            "end": 475
          }
        ],
        "start": 458,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 480
          },
          "typeArguments": null,
          "start": 479,
          "end": 480
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 489,
              "end": 492
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 499,
              "end": 502
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 510,
              "end": 512
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 498,
                "end": 499
              },
              "start": 492,
              "end": 499
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 510
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 508,
                "end": 510
              },
              "start": 502,
              "end": 510
            }
          ],
          "start": 489,
          "end": 512
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 516
          },
          "typeArguments": null,
          "start": 515,
          "end": 516
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 519,
          "end": 524
        },
        "start": 479,
        "end": 524
      },
      "declare": false,
      "start": 449,
      "end": 525
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rest",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 535
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 537
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 546,
              "end": 552
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 536,
            "end": 552
          }
        ],
        "start": 535,
        "end": 553
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 557
          },
          "typeArguments": null,
          "start": 556,
          "end": 557
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 566,
              "end": 569
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 577,
              "end": 580
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 587,
              "end": 589
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 577
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 575,
                "end": 577
              },
              "start": 569,
              "end": 577
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 587
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 586,
                "end": 587
              },
              "start": 580,
              "end": 587
            }
          ],
          "start": 566,
          "end": 589
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 593
          },
          "typeArguments": null,
          "start": 592,
          "end": 593
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 596,
          "end": 601
        },
        "start": 556,
        "end": 601
      },
      "declare": false,
      "start": 526,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 610
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Head",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 617
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "😀abc",
                "raw": "\"\\u{1F600}abc\"",
                "start": 618,
                "end": 632
              },
              "start": 618,
              "end": 632
            }
          ],
          "start": 617,
          "end": 633
        },
        "start": 613,
        "end": 633
      },
      "declare": false,
      "start": 604,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 641
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 648
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "😀abc",
                "raw": "\"\\u{1F600}abc\"",
                "start": 649,
                "end": 663
              },
              "start": 649,
              "end": 663
            }
          ],
          "start": 648,
          "end": 664
        },
        "start": 644,
        "end": 664
      },
      "declare": false,
      "start": 635,
      "end": 665
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "😀",
                  "raw": "\"\\u{1F600}\"",
                  "start": 676,
                  "end": 687
                },
                "start": 676,
                "end": 687
              },
              "start": 674,
              "end": 687
            },
            "start": 673,
            "end": 687
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 690,
                "end": 693
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 697,
                "end": 704
              },
              "start": 690,
              "end": 704
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 709
              },
              "typeArguments": null,
              "start": 708,
              "end": 709
            },
            "start": 690,
            "end": 709
          },
          "definite": false,
          "start": 673,
          "end": 709
        }
      ],
      "declare": false,
      "start": 667,
      "end": 710
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 720,
                  "end": 725
                },
                "start": 720,
                "end": 725
              },
              "start": 718,
              "end": 725
            },
            "start": 717,
            "end": 725
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 728,
                "end": 731
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 735,
                "end": 742
              },
              "start": 728,
              "end": 742
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 747
              },
              "typeArguments": null,
              "start": 746,
              "end": 747
            },
            "start": 728,
            "end": 747
          },
          "definite": false,
          "start": 717,
          "end": 747
        }
      ],
      "declare": false,
      "start": 711,
      "end": 748
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 825
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 828,
            "end": 831
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 832,
            "end": 835
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 836,
            "end": 838
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "typeArguments": null,
            "start": 831,
            "end": 832
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 836
            },
            "typeArguments": null,
            "start": 835,
            "end": 836
          }
        ],
        "start": 828,
        "end": 838
      },
      "declare": false,
      "start": 816,
      "end": 839
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
            "name": "both",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "😀abc",
                  "raw": "\"\\u{1F600}abc\"",
                  "start": 852,
                  "end": 866
                },
                "start": 852,
                "end": 866
              },
              "start": 850,
              "end": 866
            },
            "start": 846,
            "end": 866
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 869,
                "end": 872
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 876,
                "end": 883
              },
              "start": 869,
              "end": 883
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Both",
                "optional": false,
                "typeAnnotation": null,
                "start": 887,
                "end": 891
              },
              "typeArguments": null,
              "start": 887,
              "end": 891
            },
            "start": 869,
            "end": 891
          },
          "definite": false,
          "start": 846,
          "end": 891
        }
      ],
      "declare": false,
      "start": 840,
      "end": 892
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 449,
  "end": 892
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 449,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 461,
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
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 481,
    "end": 488
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 492,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 498,
    "end": 499
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 502,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 508,
    "end": 510
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 526,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 538,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 558,
    "end": 565
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 569,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "_H",
    "start": 575,
    "end": 577
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 580,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 586,
    "end": 587
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 604,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "String",
    "value": "\"\\u{1F600}abc\"",
    "start": 618,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 635,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "\"\\u{1F600}abc\"",
    "start": 649,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 667,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "String",
    "value": "\"\\u{1F600}\"",
    "start": 676,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 694,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 697,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 705,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 711,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 720,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 732,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 735,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 743,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 816,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 828,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 831,
    "end": 832
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 835,
    "end": 836
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 840,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 846,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "String",
    "value": "\"\\u{1F600}abc\"",
    "start": 852,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 869,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 873,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 876,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 884,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  }
]
```

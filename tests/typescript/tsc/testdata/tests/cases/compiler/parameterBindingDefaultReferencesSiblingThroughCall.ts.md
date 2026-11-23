__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 549
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
              "start": 550,
              "end": 551
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 550,
            "end": 551
          }
        ],
        "start": 549,
        "end": 552
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "start": 556,
                "end": 557
              },
              "typeArguments": null,
              "start": 556,
              "end": 557
            },
            "start": 554,
            "end": 557
          },
          "start": 553,
          "end": 557
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
            "start": 560,
            "end": 561
          },
          "typeArguments": null,
          "start": 560,
          "end": 561
        },
        "start": 558,
        "end": 561
      },
      "body": null,
      "expression": false,
      "start": 530,
      "end": 562
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 579
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 582,
                  "end": 583
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 583
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 586,
                      "end": 587
                    },
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 591,
                          "end": 597
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 600,
                          "end": 609
                        }
                      ],
                      "start": 591,
                      "end": 609
                    },
                    "start": 586,
                    "end": 609
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 609
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 582,
                "end": 609
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 612
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 612
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 616
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 616
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 611,
                "end": 616
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 618
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 621,
            "end": 623
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 623
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 650
                },
                "definite": false,
                "start": 637,
                "end": 650
              }
            ],
            "declare": false,
            "start": 631,
            "end": 651
          }
        ],
        "start": 625,
        "end": 653
      },
      "expression": false,
      "start": 564,
      "end": 653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "viaCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 671
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 674,
                  "end": 675
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 674,
                    "end": 675
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 678,
                      "end": 679
                    },
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 683,
                          "end": 689
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 692,
                          "end": 701
                        }
                      ],
                      "start": 683,
                      "end": 701
                    },
                    "start": 678,
                    "end": 701
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 701
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 674,
                "end": 701
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 704
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 709
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      }
                    ],
                    "optional": false,
                    "start": 707,
                    "end": 712
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 712
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 703,
                "end": 712
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 714
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 717,
            "end": 719
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 672,
          "end": 719
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 736,
                      "end": 742
                    },
                    "start": 734,
                    "end": 742
                  },
                  "start": 733,
                  "end": 742
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 746
                },
                "definite": false,
                "start": 733,
                "end": 746
              }
            ],
            "declare": false,
            "start": 727,
            "end": 747
          }
        ],
        "start": 721,
        "end": 749
      },
      "expression": false,
      "start": 655,
      "end": 749
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "viaCallArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 772
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 775,
                  "end": 776
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 776
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 779,
                      "end": 780
                    },
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 784,
                          "end": 790
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 793,
                          "end": 802
                        }
                      ],
                      "start": 784,
                      "end": 802
                    },
                    "start": 779,
                    "end": 802
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 802
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 775,
                "end": 802
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 805
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 810
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 813
                          }
                        ],
                        "start": 811,
                        "end": 814
                      }
                    ],
                    "optional": false,
                    "start": 808,
                    "end": 815
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 815
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 804,
                "end": 815
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 817
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 820,
            "end": 822
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
          "end": 822
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 839,
                      "end": 845
                    },
                    "start": 837,
                    "end": 845
                  },
                  "start": 836,
                  "end": 845
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 848,
                  "end": 849
                },
                "definite": false,
                "start": 836,
                "end": 849
              }
            ],
            "declare": false,
            "start": 830,
            "end": 850
          }
        ],
        "start": 824,
        "end": 852
      },
      "expression": false,
      "start": 751,
      "end": 852
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 852
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 530,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 538,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 564,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "direct",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 588,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 600,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 631,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "viaCall",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 680,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 692,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "viaCallArray",
    "start": 760,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 784,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 793,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 830,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Meta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 517
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 518,
                      "end": 521
                    }
                  ],
                  "start": 517,
                  "end": 522
                },
                "start": 513,
                "end": 522
              },
              "start": 511,
              "end": 522
            },
            "start": 510,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 522
        }
      ],
      "declare": true,
      "start": 496,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fromMetadata",
          "optional": false,
          "typeAnnotation": null,
          "start": 524,
          "end": 536
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 538
          }
        ],
        "optional": false,
        "start": 524,
        "end": 539
      },
      "directive": null,
      "start": 524,
      "end": 540
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 557
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
              "start": 558,
              "end": 559
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 558,
            "end": 559
          }
        ],
        "start": 557,
        "end": 560
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 567
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
              "start": 577,
              "end": 578
            },
            "typeArguments": null,
            "start": 577,
            "end": 578
          },
          "start": 571,
          "end": 578
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepPartial",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 592
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 594
                  },
                  "typeArguments": null,
                  "start": 593,
                  "end": 594
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 595,
                    "end": 596
                  },
                  "typeArguments": null,
                  "start": 595,
                  "end": 596
                },
                "start": 593,
                "end": 597
              }
            ],
            "start": 592,
            "end": 598
          },
          "start": 581,
          "end": 598
        },
        "optional": false,
        "readonly": null,
        "start": 563,
        "end": 600
      },
      "declare": false,
      "start": 541,
      "end": 601
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 613
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 622
          },
          "typeArguments": null,
          "start": 616,
          "end": 622
        },
        "start": 616,
        "end": 624
      },
      "declare": false,
      "start": 602,
      "end": 625
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 640
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
              "start": 641,
              "end": 642
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 641,
            "end": 642
          }
        ],
        "start": 640,
        "end": 643
      },
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
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 651
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Meta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 657
                },
                "typeArguments": {
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
                        "start": 658,
                        "end": 659
                      },
                      "typeArguments": null,
                      "start": 658,
                      "end": 659
                    }
                  ],
                  "start": 657,
                  "end": 660
                },
                "start": 653,
                "end": 660
              },
              "start": 651,
              "end": 660
            },
            "accessibility": null,
            "static": false,
            "start": 646,
            "end": 660
          }
        ],
        "start": 644,
        "end": 662
      },
      "declare": false,
      "start": 626,
      "end": 662
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
      },
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 697
                },
                "typeArguments": {
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
                        "start": 698,
                        "end": 699
                      },
                      "typeArguments": null,
                      "start": 698,
                      "end": 699
                    }
                  ],
                  "start": 697,
                  "end": 700
                },
                "start": 693,
                "end": 700
              },
              "start": 691,
              "end": 700
            },
            "accessibility": null,
            "static": false,
            "start": 687,
            "end": 701
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 713,
                "end": 716
              },
              "start": 711,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 706,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 727
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 735,
                      "end": 738
                    }
                  ],
                  "start": 734,
                  "end": 739
                },
                "start": 729,
                "end": 739
              },
              "start": 727,
              "end": 739
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 740
          }
        ],
        "start": 681,
        "end": 742
      },
      "declare": false,
      "start": 663,
      "end": 742
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 753
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 755
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 754,
            "end": 755
          }
        ],
        "start": 753,
        "end": 756
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 765
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 773
                },
                "typeArguments": null,
                "start": 767,
                "end": 773
              },
              "start": 765,
              "end": 773
            },
            "accessibility": null,
            "static": false,
            "start": 761,
            "end": 773
          }
        ],
        "start": 759,
        "end": 775
      },
      "declare": false,
      "start": 743,
      "end": 776
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromMetadata",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 806
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
              "start": 807,
              "end": 808
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 807,
            "end": 808
          }
        ],
        "start": 806,
        "end": 809
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "meta",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 820
                  },
                  "typeArguments": {
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
                          "start": 821,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 821,
                        "end": 822
                      }
                    ],
                    "start": 820,
                    "end": 823
                  },
                  "start": 816,
                  "end": 823
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeepPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 826,
                    "end": 837
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Meta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 838,
                          "end": 842
                        },
                        "typeArguments": {
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
                                "start": 843,
                                "end": 844
                              },
                              "typeArguments": null,
                              "start": 843,
                              "end": 844
                            }
                          ],
                          "start": 842,
                          "end": 845
                        },
                        "start": 838,
                        "end": 845
                      }
                    ],
                    "start": 837,
                    "end": 846
                  },
                  "start": 826,
                  "end": 846
                }
              ],
              "start": 816,
              "end": 846
            },
            "start": 814,
            "end": 846
          },
          "start": 810,
          "end": 846
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 849,
          "end": 853
        },
        "start": 847,
        "end": 853
      },
      "body": null,
      "expression": false,
      "start": 777,
      "end": 854
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 854
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 496,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "fromMetadata",
    "start": 524,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 541,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 546,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 568,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 571,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 577,
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
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 581,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 602,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 626,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "owner",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 663,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 706,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 743,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 748,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 777,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 785,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "fromMetadata",
    "start": 794,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 826,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  }
]
```

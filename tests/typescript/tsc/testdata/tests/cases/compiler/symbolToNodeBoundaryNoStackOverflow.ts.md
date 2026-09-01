__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 594,
          "end": 604
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 605,
              "end": 606
            }
          ],
          "start": 604,
          "end": 607
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
                "name": "getNextNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 625
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 633,
                        "end": 643
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 644,
                              "end": 645
                            },
                            "typeArguments": null,
                            "start": 644,
                            "end": 645
                          }
                        ],
                        "start": 643,
                        "end": 646
                      },
                      "start": 633,
                      "end": 646
                    },
                    "start": 630,
                    "end": 646
                  },
                  "start": 627,
                  "end": 646
                },
                "start": 625,
                "end": 646
              },
              "accessibility": null,
              "static": false,
              "start": 614,
              "end": 647
            }
          ],
          "start": 608,
          "end": 649
        },
        "declare": false,
        "start": 584,
        "end": 649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 577,
      "end": 649
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createNode",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
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
                            "name": "getNextNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 696,
                            "end": 707
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
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
                                      "start": 710,
                                      "end": 711
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 710,
                                    "end": 711
                                  }
                                ],
                                "start": 709,
                                "end": 712
                              },
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CustomNode",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 718,
                                    "end": 728
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
                                          "start": 729,
                                          "end": 730
                                        },
                                        "typeArguments": null,
                                        "start": 729,
                                        "end": 730
                                      }
                                    ],
                                    "start": 728,
                                    "end": 731
                                  },
                                  "start": 718,
                                  "end": 731
                                },
                                "start": 715,
                                "end": 731
                              },
                              "start": 709,
                              "end": 731
                            },
                            "start": 707,
                            "end": 731
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 696,
                          "end": 732
                        }
                      ],
                      "start": 690,
                      "end": 734
                    },
                    "start": 687,
                    "end": 734
                  },
                  "start": 684,
                  "end": 734
                },
                "start": 682,
                "end": 734
              },
              "start": 672,
              "end": 734
            },
            "init": null,
            "definite": false,
            "start": 672,
            "end": 734
          }
        ],
        "declare": true,
        "start": 658,
        "end": 735
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 651,
      "end": 735
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 746,
        "end": 754
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 755,
              "end": 756
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 755,
            "end": 756
          }
        ],
        "start": 754,
        "end": 757
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "getNode",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CustomNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 773,
                    "end": 783
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
                          "start": 784,
                          "end": 785
                        },
                        "typeArguments": null,
                        "start": 784,
                        "end": 785
                      }
                    ],
                    "start": 783,
                    "end": 786
                  },
                  "start": 773,
                  "end": 786
                },
                "start": 770,
                "end": 786
              },
              "start": 767,
              "end": 786
            },
            "start": 765,
            "end": 786
          },
          "start": 758,
          "end": 786
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 808
            },
            "start": 794,
            "end": 809
          }
        ],
        "start": 788,
        "end": 811
      },
      "expression": false,
      "start": 737,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 813,
          "end": 821
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 844
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 847,
                          "end": 857
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 847,
                        "end": 859
                      },
                      "definite": false,
                      "start": 840,
                      "end": 859
                    }
                  ],
                  "declare": false,
                  "start": 834,
                  "end": 860
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 881
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 889,
                              "end": 893
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getNextNode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 894,
                              "end": 905
                            },
                            "start": 889,
                            "end": 905
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 906,
                                "end": 909
                              }
                            ],
                            "start": 905,
                            "end": 910
                          },
                          "start": 882,
                          "end": 910
                        }
                      ],
                      "start": 881,
                      "end": 911
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 916
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getNextNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 917,
                          "end": 928
                        },
                        "optional": false,
                        "computed": false,
                        "start": 912,
                        "end": 928
                      }
                    ],
                    "optional": false,
                    "start": 873,
                    "end": 929
                  },
                  "start": 866,
                  "end": 930
                }
              ],
              "start": 828,
              "end": 932
            },
            "id": null,
            "generator": false,
            "start": 822,
            "end": 932
          }
        ],
        "optional": false,
        "start": 813,
        "end": 933
      },
      "directive": null,
      "start": 813,
      "end": 934
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 577,
  "end": 934
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 577,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 584,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "CustomNode",
    "start": 594,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "getNextNode",
    "start": 614,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "CustomNode",
    "start": 633,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 651,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 658,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 666,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "createNode",
    "start": 672,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 687,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "getNextNode",
    "start": 696,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 715,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "CustomNode",
    "start": 718,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 737,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "wrapNode",
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
    "value": "T",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "getNode",
    "start": 758,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "CustomNode",
    "start": 773,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 794,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "getNode",
    "start": 801,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "wrapNode",
    "start": 813,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 834,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "createNode",
    "start": 847,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 866,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "wrapNode",
    "start": 873,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 882,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 889,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "getNextNode",
    "start": 894,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 912,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "getNextNode",
    "start": 917,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  }
]
```

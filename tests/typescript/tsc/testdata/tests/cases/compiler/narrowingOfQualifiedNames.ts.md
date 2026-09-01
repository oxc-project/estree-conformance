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
        "name": "IProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "typeAnnotation": {
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
                      "name": "aaa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 71,
                        "end": 77
                      },
                      "start": 69,
                      "end": 77
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 66,
                    "end": 77
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bbb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 89
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 86,
                    "end": 97
                  }
                ],
                "start": 56,
                "end": 103
              },
              "start": 54,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 103
          }
        ],
        "start": 44,
        "end": 105
      },
      "declare": false,
      "start": 22,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "init",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "properties",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IProperties",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 144
              },
              "typeArguments": null,
              "start": 133,
              "end": 144
            },
            "start": 131,
            "end": 144
          },
          "start": 121,
          "end": 144
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 156,
              "end": 170
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FooOK",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 192
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 212
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 216
                      },
                      "start": 202,
                      "end": 216
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 216
                  },
                  "declare": false,
                  "start": 182,
                  "end": 217
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 240
                    },
                    "optional": false,
                    "computed": false,
                    "start": 226,
                    "end": 240
                  },
                  "directive": null,
                  "start": 226,
                  "end": 241
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "init": null,
                        "definite": false,
                        "start": 302,
                        "end": 303
                      }
                    ],
                    "declare": false,
                    "start": 296,
                    "end": 303
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 308,
                        "end": 309
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 311,
                        "end": 312
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 314,
                        "end": 315
                      }
                    ],
                    "start": 307,
                    "end": 316
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 340
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 341,
                            "end": 344
                          },
                          "optional": false,
                          "computed": false,
                          "start": 330,
                          "end": 344
                        },
                        "directive": null,
                        "start": 330,
                        "end": 345
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FooOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 402,
                          "end": 416
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "properties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 436
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 440
                            },
                            "start": 426,
                            "end": 440
                          },
                          "typeArguments": null,
                          "start": 419,
                          "end": 440
                        },
                        "declare": false,
                        "start": 397,
                        "end": 441
                      }
                    ],
                    "start": 318,
                    "end": 499
                  },
                  "start": 291,
                  "end": 499
                }
              ],
              "start": 172,
              "end": 505
            },
            "alternate": null,
            "start": 152,
            "end": 505
          }
        ],
        "start": 146,
        "end": 507
      },
      "expression": false,
      "start": 107,
      "end": 507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 531
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 570,
                              "end": 571
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              },
                              "start": 572,
                              "end": 580
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 570,
                            "end": 580
                          }
                        ],
                        "start": 556,
                        "end": 590
                      },
                      "start": 554,
                      "end": 590
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 552,
                    "end": 590
                  }
                ],
                "start": 542,
                "end": 596
              },
              "start": 540,
              "end": 596
            },
            "accessibility": null,
            "static": false,
            "start": 538,
            "end": 596
          }
        ],
        "start": 532,
        "end": 598
      },
      "declare": false,
      "start": 509,
      "end": 598
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "init2",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 632
              },
              "typeArguments": null,
              "start": 620,
              "end": 632
            },
            "start": 618,
            "end": 632
          },
          "start": 615,
          "end": 632
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 647
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 644,
              "end": 649
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 667
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 677,
                        "end": 680
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 682
                      },
                      "start": 677,
                      "end": 682
                    },
                    "typeArguments": null,
                    "start": 670,
                    "end": 682
                  },
                  "declare": false,
                  "start": 661,
                  "end": 683
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 708,
                          "end": 711
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 712,
                          "end": 713
                        },
                        "start": 708,
                        "end": 713
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 715
                      },
                      "start": 708,
                      "end": 715
                    },
                    "typeArguments": null,
                    "start": 701,
                    "end": 715
                  },
                  "declare": false,
                  "start": 692,
                  "end": 716
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 731
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 744
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 745,
                            "end": 746
                          },
                          "start": 741,
                          "end": 746
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 748
                        },
                        "start": 741,
                        "end": 748
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "start": 741,
                      "end": 750
                    },
                    "typeArguments": null,
                    "start": 734,
                    "end": 750
                  },
                  "declare": false,
                  "start": 725,
                  "end": 751
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 771,
                          "end": 772
                        },
                        "init": null,
                        "definite": false,
                        "start": 771,
                        "end": 772
                      }
                    ],
                    "declare": false,
                    "start": 765,
                    "end": 772
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 777,
                        "end": 778
                      }
                    ],
                    "start": 776,
                    "end": 779
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 801
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 811,
                              "end": 814
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 816
                            },
                            "start": 811,
                            "end": 816
                          },
                          "typeArguments": null,
                          "start": 804,
                          "end": 816
                        },
                        "declare": false,
                        "start": 795,
                        "end": 817
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 836
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 846,
                                "end": 849
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 850,
                                "end": 851
                              },
                              "start": 846,
                              "end": 851
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 852,
                              "end": 853
                            },
                            "start": 846,
                            "end": 853
                          },
                          "typeArguments": null,
                          "start": 839,
                          "end": 853
                        },
                        "declare": false,
                        "start": 830,
                        "end": 854
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 873
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 883,
                                  "end": 886
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 887,
                                  "end": 888
                                },
                                "start": 883,
                                "end": 888
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 889,
                                "end": 890
                              },
                              "start": 883,
                              "end": 890
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 891,
                              "end": 892
                            },
                            "start": 883,
                            "end": 892
                          },
                          "typeArguments": null,
                          "start": 876,
                          "end": 892
                        },
                        "declare": false,
                        "start": 867,
                        "end": 893
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 911,
                              "end": 914
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 915,
                              "end": 916
                            },
                            "optional": false,
                            "computed": false,
                            "start": 911,
                            "end": 916
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 917,
                            "end": 918
                          },
                          "optional": false,
                          "computed": false,
                          "start": 911,
                          "end": 918
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 943,
                                "end": 944
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 954,
                                    "end": 957
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 958,
                                    "end": 959
                                  },
                                  "start": 954,
                                  "end": 959
                                },
                                "typeArguments": null,
                                "start": 947,
                                "end": 959
                              },
                              "declare": false,
                              "start": 938,
                              "end": 960
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 982,
                                "end": 983
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 993,
                                      "end": 996
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 997,
                                      "end": 998
                                    },
                                    "start": 993,
                                    "end": 998
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 999,
                                    "end": 1000
                                  },
                                  "start": 993,
                                  "end": 1000
                                },
                                "typeArguments": null,
                                "start": 986,
                                "end": 1000
                              },
                              "declare": false,
                              "start": 977,
                              "end": 1001
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1023,
                                "end": 1024
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1034,
                                        "end": 1037
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1038,
                                        "end": 1039
                                      },
                                      "start": 1034,
                                      "end": 1039
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1040,
                                      "end": 1041
                                    },
                                    "start": 1034,
                                    "end": 1041
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1042,
                                    "end": 1043
                                  },
                                  "start": 1034,
                                  "end": 1043
                                },
                                "typeArguments": null,
                                "start": 1027,
                                "end": 1043
                              },
                              "declare": false,
                              "start": 1018,
                              "end": 1044
                            },
                            {
                              "type": "ForOfStatement",
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1072,
                                      "end": 1073
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 1072,
                                    "end": 1073
                                  }
                                ],
                                "declare": false,
                                "start": 1066,
                                "end": 1073
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1078,
                                    "end": 1079
                                  }
                                ],
                                "start": 1077,
                                "end": 1080
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1109,
                                      "end": 1110
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1120,
                                          "end": 1123
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1124,
                                          "end": 1125
                                        },
                                        "start": 1120,
                                        "end": 1125
                                      },
                                      "typeArguments": null,
                                      "start": 1113,
                                      "end": 1125
                                    },
                                    "declare": false,
                                    "start": 1104,
                                    "end": 1126
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1152,
                                      "end": 1153
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1163,
                                            "end": 1166
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1167,
                                            "end": 1168
                                          },
                                          "start": 1163,
                                          "end": 1168
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1169,
                                          "end": 1170
                                        },
                                        "start": 1163,
                                        "end": 1170
                                      },
                                      "typeArguments": null,
                                      "start": 1156,
                                      "end": 1170
                                    },
                                    "declare": false,
                                    "start": 1147,
                                    "end": 1171
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1197,
                                      "end": 1198
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "TSQualifiedName",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "foo",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1208,
                                              "end": 1211
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "a",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1212,
                                              "end": 1213
                                            },
                                            "start": 1208,
                                            "end": 1213
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "b",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1214,
                                            "end": 1215
                                          },
                                          "start": 1208,
                                          "end": 1215
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1216,
                                          "end": 1217
                                        },
                                        "start": 1208,
                                        "end": 1217
                                      },
                                      "typeArguments": null,
                                      "start": 1201,
                                      "end": 1217
                                    },
                                    "declare": false,
                                    "start": 1192,
                                    "end": 1218
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1244,
                                            "end": 1247
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1248,
                                            "end": 1249
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1244,
                                          "end": 1249
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1250,
                                          "end": 1251
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1244,
                                        "end": 1251
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1252,
                                        "end": 1253
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1244,
                                      "end": 1253
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1286,
                                            "end": 1287
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "foo",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1297,
                                                "end": 1300
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1301,
                                                "end": 1302
                                              },
                                              "start": 1297,
                                              "end": 1302
                                            },
                                            "typeArguments": null,
                                            "start": 1290,
                                            "end": 1302
                                          },
                                          "declare": false,
                                          "start": 1281,
                                          "end": 1303
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1333,
                                            "end": 1334
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1344,
                                                  "end": 1347
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "a",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1348,
                                                  "end": 1349
                                                },
                                                "start": 1344,
                                                "end": 1349
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "b",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1350,
                                                "end": 1351
                                              },
                                              "start": 1344,
                                              "end": 1351
                                            },
                                            "typeArguments": null,
                                            "start": 1337,
                                            "end": 1351
                                          },
                                          "declare": false,
                                          "start": 1328,
                                          "end": 1352
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1382,
                                            "end": 1383
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "left": {
                                                  "type": "TSQualifiedName",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "foo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1393,
                                                    "end": 1396
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "a",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1397,
                                                    "end": 1398
                                                  },
                                                  "start": 1393,
                                                  "end": 1398
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "b",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1399,
                                                  "end": 1400
                                                },
                                                "start": 1393,
                                                "end": 1400
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "c",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1401,
                                                "end": 1402
                                              },
                                              "start": 1393,
                                              "end": 1402
                                            },
                                            "typeArguments": null,
                                            "start": 1386,
                                            "end": 1402
                                          },
                                          "declare": false,
                                          "start": 1377,
                                          "end": 1403
                                        },
                                        {
                                          "type": "ForOfStatement",
                                          "await": false,
                                          "left": {
                                            "type": "VariableDeclaration",
                                            "kind": "const",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1439,
                                                  "end": 1440
                                                },
                                                "init": null,
                                                "definite": false,
                                                "start": 1439,
                                                "end": 1440
                                              }
                                            ],
                                            "declare": false,
                                            "start": 1433,
                                            "end": 1440
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 1445,
                                                "end": 1446
                                              }
                                            ],
                                            "start": 1444,
                                            "end": 1447
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "A",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1484,
                                                  "end": 1485
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "foo",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1495,
                                                      "end": 1498
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "a",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1499,
                                                      "end": 1500
                                                    },
                                                    "start": 1495,
                                                    "end": 1500
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1488,
                                                  "end": 1500
                                                },
                                                "declare": false,
                                                "start": 1479,
                                                "end": 1501
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "B",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1535,
                                                  "end": 1536
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "foo",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1546,
                                                        "end": 1549
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "a",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1550,
                                                        "end": 1551
                                                      },
                                                      "start": 1546,
                                                      "end": 1551
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "b",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1552,
                                                      "end": 1553
                                                    },
                                                    "start": 1546,
                                                    "end": 1553
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1539,
                                                  "end": 1553
                                                },
                                                "declare": false,
                                                "start": 1530,
                                                "end": 1554
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1588,
                                                  "end": 1589
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "foo",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1599,
                                                          "end": 1602
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "a",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1603,
                                                          "end": 1604
                                                        },
                                                        "start": 1599,
                                                        "end": 1604
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "b",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1605,
                                                        "end": 1606
                                                      },
                                                      "start": 1599,
                                                      "end": 1606
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "c",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1607,
                                                      "end": 1608
                                                    },
                                                    "start": 1599,
                                                    "end": 1608
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1592,
                                                  "end": 1608
                                                },
                                                "declare": false,
                                                "start": 1583,
                                                "end": 1609
                                              }
                                            ],
                                            "start": 1449,
                                            "end": 1635
                                          },
                                          "start": 1429,
                                          "end": 1635
                                        }
                                      ],
                                      "start": 1255,
                                      "end": 1657
                                    },
                                    "alternate": null,
                                    "start": 1240,
                                    "end": 1657
                                  }
                                ],
                                "start": 1082,
                                "end": 1675
                              },
                              "start": 1062,
                              "end": 1675
                            }
                          ],
                          "start": 920,
                          "end": 1689
                        },
                        "alternate": null,
                        "start": 907,
                        "end": 1689
                      }
                    ],
                    "start": 781,
                    "end": 1699
                  },
                  "start": 761,
                  "end": 1699
                }
              ],
              "start": 651,
              "end": 1705
            },
            "alternate": null,
            "start": 640,
            "end": 1705
          }
        ],
        "start": 634,
        "end": 1707
      },
      "expression": false,
      "start": 600,
      "end": 1707
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fish",
        "optional": false,
        "typeAnnotation": null,
        "start": 1736,
        "end": 1740
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1749
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "fish",
                  "raw": "'fish'",
                  "start": 1751,
                  "end": 1757
                },
                "start": 1751,
                "end": 1757
              },
              "start": 1749,
              "end": 1757
            },
            "accessibility": null,
            "static": false,
            "start": 1745,
            "end": 1758
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasFins",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1766
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1768,
                  "end": 1772
                },
                "start": 1768,
                "end": 1772
              },
              "start": 1766,
              "end": 1772
            },
            "accessibility": null,
            "static": false,
            "start": 1759,
            "end": 1772
          }
        ],
        "start": 1743,
        "end": 1774
      },
      "declare": false,
      "start": 1731,
      "end": 1774
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1780,
        "end": 1783
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1792
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "dog",
                  "raw": "'dog'",
                  "start": 1794,
                  "end": 1799
                },
                "start": 1794,
                "end": 1799
              },
              "start": 1792,
              "end": 1799
            },
            "accessibility": null,
            "static": false,
            "start": 1788,
            "end": 1800
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "saysWoof",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1809
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1811,
                  "end": 1815
                },
                "start": 1811,
                "end": 1815
              },
              "start": 1809,
              "end": 1815
            },
            "accessibility": null,
            "static": false,
            "start": 1801,
            "end": 1815
          }
        ],
        "start": 1786,
        "end": 1817
      },
      "declare": false,
      "start": 1775,
      "end": 1817
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pet",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1827
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fish",
              "optional": false,
              "typeAnnotation": null,
              "start": 1830,
              "end": 1834
            },
            "typeArguments": null,
            "start": 1830,
            "end": 1834
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1840
            },
            "typeArguments": null,
            "start": 1837,
            "end": 1840
          }
        ],
        "start": 1830,
        "end": 1840
      },
      "declare": false,
      "start": 1819,
      "end": 1841
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handleDogBroken",
        "optional": false,
        "typeAnnotation": null,
        "start": 1852,
        "end": 1867
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
              "name": "PetType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1875
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "typeAnnotation": null,
                "start": 1884,
                "end": 1887
              },
              "typeArguments": null,
              "start": 1884,
              "end": 1887
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1868,
            "end": 1887
          }
        ],
        "start": 1867,
        "end": 1888
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1894,
                "end": 1901
              },
              "typeArguments": null,
              "start": 1894,
              "end": 1901
            },
            "start": 1892,
            "end": 1901
          },
          "start": 1889,
          "end": 1901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1912,
                  "end": 1915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1920
                },
                "optional": false,
                "computed": false,
                "start": 1912,
                "end": 1920
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "dog",
                "raw": "'dog'",
                "start": 1925,
                "end": 1930
              },
              "start": 1912,
              "end": 1930
            },
            "consequent": {
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
                        "name": "_okay1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1948,
                        "end": 1954
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1957,
                          "end": 1960
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1961,
                          "end": 1969
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1957,
                        "end": 1969
                      },
                      "definite": false,
                      "start": 1948,
                      "end": 1969
                    }
                  ],
                  "declare": false,
                  "start": 1942,
                  "end": 1970
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
                        "name": "_okay2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pet",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2000,
                                "end": 2003
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "saysWoof",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2004,
                                "end": 2012
                              },
                              "start": 2000,
                              "end": 2012
                            },
                            "typeArguments": null,
                            "start": 1993,
                            "end": 2012
                          },
                          "start": 1991,
                          "end": 2012
                        },
                        "start": 1985,
                        "end": 2012
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2015,
                          "end": 2018
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2019,
                          "end": 2027
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2015,
                        "end": 2027
                      },
                      "definite": false,
                      "start": 1985,
                      "end": 2027
                    }
                  ],
                  "declare": false,
                  "start": 1979,
                  "end": 2028
                }
              ],
              "start": 1932,
              "end": 2034
            },
            "alternate": null,
            "start": 1909,
            "end": 2034
          }
        ],
        "start": 1903,
        "end": 2036
      },
      "expression": false,
      "start": 1843,
      "end": 2036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handleDogWorking",
        "optional": false,
        "typeAnnotation": null,
        "start": 2047,
        "end": 2063
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2069,
                "end": 2072
              },
              "typeArguments": null,
              "start": 2069,
              "end": 2072
            },
            "start": 2067,
            "end": 2072
          },
          "start": 2064,
          "end": 2072
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2083,
                  "end": 2086
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2087,
                  "end": 2091
                },
                "optional": false,
                "computed": false,
                "start": 2083,
                "end": 2091
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "dog",
                "raw": "'dog'",
                "start": 2096,
                "end": 2101
              },
              "start": 2083,
              "end": 2101
            },
            "consequent": {
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
                        "name": "_okay1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2119,
                        "end": 2125
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2128,
                          "end": 2131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2132,
                          "end": 2140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2128,
                        "end": 2140
                      },
                      "definite": false,
                      "start": 2119,
                      "end": 2140
                    }
                  ],
                  "declare": false,
                  "start": 2113,
                  "end": 2141
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
                        "name": "_okay2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pet",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2171,
                                "end": 2174
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "saysWoof",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2175,
                                "end": 2183
                              },
                              "start": 2171,
                              "end": 2183
                            },
                            "typeArguments": null,
                            "start": 2164,
                            "end": 2183
                          },
                          "start": 2162,
                          "end": 2183
                        },
                        "start": 2156,
                        "end": 2183
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2186,
                          "end": 2189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2190,
                          "end": 2198
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2186,
                        "end": 2198
                      },
                      "definite": false,
                      "start": 2156,
                      "end": 2198
                    }
                  ],
                  "declare": false,
                  "start": 2150,
                  "end": 2199
                }
              ],
              "start": 2103,
              "end": 2205
            },
            "alternate": null,
            "start": 2080,
            "end": 2205
          }
        ],
        "start": 2074,
        "end": 2207
      },
      "expression": false,
      "start": 2038,
      "end": 2207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 2207
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "IProperties",
    "start": 32,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "aaa",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 107,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 121,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "IProperties",
    "start": 133,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 156,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 182,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "FooOK",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 195,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 226,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 330,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 397,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "FooOrUndefined",
    "start": 402,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 419,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 426,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
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
    "start": 509,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "DeepOptional",
    "start": 519,
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
    "value": "a",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 600,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "init2",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "DeepOptional",
    "start": 620,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 661,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 670,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 692,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 701,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 712,
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
    "value": "b",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 725,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 734,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 795,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 804,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 830,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 839,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 867,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 876,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 915,
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
    "value": "b",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 938,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 947,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 977,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 986,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 993,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1147,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1281,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1328,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1393,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1429,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1433,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1441,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1479,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1488,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1495,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1592,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "Fish",
    "start": 1736,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "String",
    "value": "'fish'",
    "start": 1751,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "hasFins",
    "start": 1759,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1768,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1775,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1780,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1788,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "String",
    "value": "'dog'",
    "start": 1794,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 1801,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1811,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1819,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "Pet",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Fish",
    "start": 1830,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1843,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "handleDogBroken",
    "start": 1852,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "PetType",
    "start": 1868,
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
    "value": "Pet",
    "start": 1884,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "PetType",
    "start": 1894,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 1912,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "String",
    "value": "'dog'",
    "start": 1925,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1942,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "_okay1",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 1957,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "_okay2",
    "start": 1985,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1993,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 2004,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2015,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 2019,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2038,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "handleDogWorking",
    "start": 2047,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2064,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "Pet",
    "start": 2069,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2080,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2087,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2092,
    "end": 2095
  },
  {
    "type": "String",
    "value": "'dog'",
    "start": 2096,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2113,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "_okay1",
    "start": 2119,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2128,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 2132,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2150,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "_okay2",
    "start": 2156,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2164,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2171,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 2175,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "saysWoof",
    "start": 2190,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2206,
    "end": 2207
  }
]
```

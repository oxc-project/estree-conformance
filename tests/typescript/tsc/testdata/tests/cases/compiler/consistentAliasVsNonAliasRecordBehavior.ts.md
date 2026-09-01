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
        "name": "Record2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 233
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 250,
                "end": 253
              },
              "start": 244,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 253
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 256
          }
        ],
        "start": 233,
        "end": 257
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 268
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "typeArguments": null,
          "start": 272,
          "end": 273
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "typeArguments": null,
          "start": 276,
          "end": 277
        },
        "optional": false,
        "readonly": null,
        "start": 260,
        "end": 280
      },
      "declare": false,
      "start": 221,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 305
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 316,
                      "end": 319
                    },
                    "start": 316,
                    "end": 319
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 321,
                    "end": 327
                  }
                ],
                "start": 315,
                "end": 328
              },
              "start": 309,
              "end": 328
            },
            "start": 307,
            "end": 328
          },
          "start": 306,
          "end": 328
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 339
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 340,
                    "end": 346
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 348,
                    "end": 354
                  }
                ],
                "start": 339,
                "end": 355
              },
              "start": 333,
              "end": 355
            },
            "start": 331,
            "end": 355
          },
          "start": 330,
          "end": 355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "start": 363,
              "end": 368
            },
            "directive": null,
            "start": 363,
            "end": 369
          }
        ],
        "start": 357,
        "end": 404
      },
      "expression": false,
      "start": 283,
      "end": 404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "customRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 427
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 438
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 439,
                      "end": 442
                    },
                    "start": 439,
                    "end": 442
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 444,
                    "end": 450
                  }
                ],
                "start": 438,
                "end": 451
              },
              "start": 431,
              "end": 451
            },
            "start": 429,
            "end": 451
          },
          "start": 428,
          "end": 451
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 463
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 464,
                    "end": 470
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 472,
                    "end": 478
                  }
                ],
                "start": 463,
                "end": 479
              },
              "start": 456,
              "end": 479
            },
            "start": 454,
            "end": 479
          },
          "start": 453,
          "end": 479
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              "start": 487,
              "end": 492
            },
            "directive": null,
            "start": 487,
            "end": 493
          }
        ],
        "start": 481,
        "end": 528
      },
      "expression": false,
      "start": 406,
      "end": 528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed1",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 545
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 556
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 557,
                      "end": 560
                    },
                    "start": 557,
                    "end": 560
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 562,
                    "end": 568
                  }
                ],
                "start": 556,
                "end": 569
              },
              "start": 549,
              "end": 569
            },
            "start": 547,
            "end": 569
          },
          "start": 546,
          "end": 569
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 580
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 581,
                    "end": 587
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  }
                ],
                "start": 580,
                "end": 596
              },
              "start": 574,
              "end": 596
            },
            "start": 572,
            "end": 596
          },
          "start": 571,
          "end": 596
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
              },
              "start": 604,
              "end": 609
            },
            "directive": null,
            "start": 604,
            "end": 610
          }
        ],
        "start": 598,
        "end": 621
      },
      "expression": false,
      "start": 530,
      "end": 621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed2",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 638
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 648
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 649,
                      "end": 652
                    },
                    "start": 649,
                    "end": 652
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 654,
                    "end": 660
                  }
                ],
                "start": 648,
                "end": 661
              },
              "start": 642,
              "end": 661
            },
            "start": 640,
            "end": 661
          },
          "start": 639,
          "end": 661
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 673
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 674,
                    "end": 680
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 682,
                    "end": 688
                  }
                ],
                "start": 673,
                "end": 689
              },
              "start": 666,
              "end": 689
            },
            "start": 664,
            "end": 689
          },
          "start": 663,
          "end": 689
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "start": 697,
              "end": 702
            },
            "directive": null,
            "start": 697,
            "end": 703
          }
        ],
        "start": 691,
        "end": 714
      },
      "expression": false,
      "start": 623,
      "end": 714
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord2",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 739
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
              "start": 740,
              "end": 741
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 740,
            "end": 741
          }
        ],
        "start": 739,
        "end": 742
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 752
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 753,
                      "end": 756
                    },
                    "start": 753,
                    "end": 756
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 758,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 758,
                    "end": 759
                  }
                ],
                "start": 752,
                "end": 760
              },
              "start": 746,
              "end": 760
            },
            "start": 744,
            "end": 760
          },
          "start": 743,
          "end": 760
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 771
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 772,
                    "end": 778
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 781
                    },
                    "typeArguments": null,
                    "start": 780,
                    "end": 781
                  }
                ],
                "start": 771,
                "end": 782
              },
              "start": 765,
              "end": 782
            },
            "start": 763,
            "end": 782
          },
          "start": 762,
          "end": 782
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              "start": 790,
              "end": 795
            },
            "directive": null,
            "start": 790,
            "end": 796
          }
        ],
        "start": 784,
        "end": 831
      },
      "expression": false,
      "start": 716,
      "end": 831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "customRecord2",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 855
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
              "start": 856,
              "end": 857
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 856,
            "end": 857
          }
        ],
        "start": 855,
        "end": 858
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 869
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 870,
                      "end": 873
                    },
                    "start": 870,
                    "end": 873
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 875,
                      "end": 876
                    },
                    "typeArguments": null,
                    "start": 875,
                    "end": 876
                  }
                ],
                "start": 869,
                "end": 877
              },
              "start": 862,
              "end": 877
            },
            "start": 860,
            "end": 877
          },
          "start": 859,
          "end": 877
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 889
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 890,
                    "end": 896
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 899
                    },
                    "typeArguments": null,
                    "start": 898,
                    "end": 899
                  }
                ],
                "start": 889,
                "end": 900
              },
              "start": 882,
              "end": 900
            },
            "start": 880,
            "end": 900
          },
          "start": 879,
          "end": 900
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 909
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 913
              },
              "start": 908,
              "end": 913
            },
            "directive": null,
            "start": 908,
            "end": 914
          }
        ],
        "start": 902,
        "end": 949
      },
      "expression": false,
      "start": 833,
      "end": 949
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed3",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 966
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
              "start": 967,
              "end": 968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 967,
            "end": 968
          }
        ],
        "start": 966,
        "end": 969
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 973,
                "end": 980
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 981,
                      "end": 984
                    },
                    "start": 981,
                    "end": 984
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 987
                    },
                    "typeArguments": null,
                    "start": 986,
                    "end": 987
                  }
                ],
                "start": 980,
                "end": 988
              },
              "start": 973,
              "end": 988
            },
            "start": 971,
            "end": 988
          },
          "start": 970,
          "end": 988
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 999
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1009
                    },
                    "typeArguments": null,
                    "start": 1008,
                    "end": 1009
                  }
                ],
                "start": 999,
                "end": 1010
              },
              "start": 993,
              "end": 1010
            },
            "start": 991,
            "end": 1010
          },
          "start": 990,
          "end": 1010
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1019
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1023
              },
              "start": 1018,
              "end": 1023
            },
            "directive": null,
            "start": 1018,
            "end": 1024
          }
        ],
        "start": 1012,
        "end": 1035
      },
      "expression": false,
      "start": 951,
      "end": 1035
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1052
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
              "start": 1053,
              "end": 1054
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1053,
            "end": 1054
          }
        ],
        "start": 1052,
        "end": 1055
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1065
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 1066,
                      "end": 1069
                    },
                    "start": 1066,
                    "end": 1069
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "typeArguments": null,
                    "start": 1071,
                    "end": 1072
                  }
                ],
                "start": 1065,
                "end": 1073
              },
              "start": 1059,
              "end": 1073
            },
            "start": 1057,
            "end": 1073
          },
          "start": 1056,
          "end": 1073
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1078,
                "end": 1085
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1086,
                    "end": 1092
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1094,
                      "end": 1095
                    },
                    "typeArguments": null,
                    "start": 1094,
                    "end": 1095
                  }
                ],
                "start": 1085,
                "end": 1096
              },
              "start": 1078,
              "end": 1096
            },
            "start": 1076,
            "end": 1096
          },
          "start": 1075,
          "end": 1096
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1105
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1109
              },
              "start": 1104,
              "end": 1109
            },
            "directive": null,
            "start": 1104,
            "end": 1110
          }
        ],
        "start": 1098,
        "end": 1121
      },
      "expression": false,
      "start": 1037,
      "end": 1121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 221,
  "end": 1121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 221,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 236,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "defaultRecord",
    "start": 292,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 406,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "customRecord",
    "start": 415,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 530,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "mixed1",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "Record",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "mixed2",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 642,
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
    "value": "'a'",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 666,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 674,
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
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 716,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "defaultRecord2",
    "start": 725,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "Record",
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
    "type": "String",
    "value": "'a'",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 772,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 833,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "customRecord2",
    "start": 842,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 882,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 890,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 951,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "mixed3",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 973,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 980,
    "end": 981
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1000,
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
    "value": "T",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1037,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "mixed4",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "Record2",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  }
]
```

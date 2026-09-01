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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 128
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 137,
                  "end": 145
                },
                "start": 136,
                "end": 145
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 148,
                "end": 151
              },
              "start": 146,
              "end": 151
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 135,
            "end": 152
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 162,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 166
          }
        ],
        "start": 129,
        "end": 199
      },
      "declare": false,
      "start": 117,
      "end": 199
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 208,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "start": 205,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 211
        }
      ],
      "declare": false,
      "start": 201,
      "end": 212
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 239,
              "end": 245
            },
            "start": 237,
            "end": 245
          },
          "start": 236,
          "end": 245
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 248,
          "end": 254
        },
        "start": 246,
        "end": 254
      },
      "body": null,
      "expression": false,
      "start": 214,
      "end": 255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 281,
              "end": 284
            },
            "start": 279,
            "end": 284
          },
          "start": 278,
          "end": 284
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 287,
          "end": 290
        },
        "start": 285,
        "end": 290
      },
      "body": null,
      "expression": false,
      "start": 256,
      "end": 291
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              }
            ],
            "optional": false,
            "start": 301,
            "end": 308
          },
          "definite": false,
          "start": 296,
          "end": 308
        }
      ],
      "declare": false,
      "start": 292,
      "end": 309
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 483
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 487,
              "end": 493
            },
            "start": 485,
            "end": 493
          },
          "start": 484,
          "end": 493
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 496,
          "end": 502
        },
        "start": 494,
        "end": 502
      },
      "body": null,
      "expression": false,
      "start": 462,
      "end": 503
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 525
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 529,
              "end": 532
            },
            "start": 527,
            "end": 532
          },
          "start": 526,
          "end": 532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 535,
          "end": 538
        },
        "start": 533,
        "end": 538
      },
      "body": null,
      "expression": false,
      "start": 504,
      "end": 539
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 546
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              }
            ],
            "optional": false,
            "start": 549,
            "end": 556
          },
          "definite": false,
          "start": 544,
          "end": 556
        }
      ],
      "declare": false,
      "start": 540,
      "end": 557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 587
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSBooleanKeyword",
              "start": 591,
              "end": 598
            },
            "start": 589,
            "end": 598
          },
          "start": 588,
          "end": 598
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 601,
          "end": 608
        },
        "start": 599,
        "end": 608
      },
      "body": null,
      "expression": false,
      "start": 566,
      "end": 609
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 635,
              "end": 638
            },
            "start": 633,
            "end": 638
          },
          "start": 632,
          "end": 638
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 641,
          "end": 644
        },
        "start": 639,
        "end": 644
      },
      "body": null,
      "expression": false,
      "start": 610,
      "end": 645
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 652
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 661
              }
            ],
            "optional": false,
            "start": 655,
            "end": 662
          },
          "definite": false,
          "start": 650,
          "end": 662
        }
      ],
      "declare": false,
      "start": 646,
      "end": 663
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 693
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 701
              },
              "typeArguments": null,
              "start": 697,
              "end": 701
            },
            "start": 695,
            "end": 701
          },
          "start": 694,
          "end": 701
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 708
          },
          "typeArguments": null,
          "start": 704,
          "end": 708
        },
        "start": 702,
        "end": 708
      },
      "body": null,
      "expression": false,
      "start": 672,
      "end": 709
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 731
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 735,
              "end": 738
            },
            "start": 733,
            "end": 738
          },
          "start": 732,
          "end": 738
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 741,
          "end": 744
        },
        "start": 739,
        "end": 744
      },
      "body": null,
      "expression": false,
      "start": 710,
      "end": 745
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 752
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 759
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              }
            ],
            "optional": false,
            "start": 755,
            "end": 762
          },
          "definite": false,
          "start": 750,
          "end": 762
        }
      ],
      "declare": false,
      "start": 746,
      "end": 763
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 803
              },
              "typeArguments": null,
              "start": 797,
              "end": 803
            },
            "start": 795,
            "end": 803
          },
          "start": 794,
          "end": 803
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 812
          },
          "typeArguments": null,
          "start": 806,
          "end": 812
        },
        "start": 804,
        "end": 812
      },
      "body": null,
      "expression": false,
      "start": 772,
      "end": 813
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 835
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            },
            "start": 837,
            "end": 842
          },
          "start": 836,
          "end": 842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 845,
          "end": 848
        },
        "start": 843,
        "end": 848
      },
      "body": null,
      "expression": false,
      "start": 814,
      "end": 849
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 856
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 863
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 865
              }
            ],
            "optional": false,
            "start": 859,
            "end": 866
          },
          "definite": false,
          "start": 854,
          "end": 866
        }
      ],
      "declare": false,
      "start": 850,
      "end": 867
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 897
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 903,
                    "end": 906
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 908,
                      "end": 914
                    },
                    "start": 906,
                    "end": 914
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 903,
                  "end": 914
                }
              ],
              "start": 901,
              "end": 916
            },
            "start": 899,
            "end": 916
          },
          "start": 898,
          "end": 916
        }
      ],
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 924
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 926,
                  "end": 932
                },
                "start": 924,
                "end": 932
              },
              "accessibility": null,
              "static": false,
              "start": 921,
              "end": 932
            }
          ],
          "start": 919,
          "end": 934
        },
        "start": 917,
        "end": 934
      },
      "body": null,
      "expression": false,
      "start": 876,
      "end": 935
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 953,
        "end": 957
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 961,
              "end": 964
            },
            "start": 959,
            "end": 964
          },
          "start": 958,
          "end": 964
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 967,
          "end": 970
        },
        "start": 965,
        "end": 970
      },
      "body": null,
      "expression": false,
      "start": 936,
      "end": 971
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 978
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 985
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 987
              }
            ],
            "optional": false,
            "start": 981,
            "end": 988
          },
          "definite": false,
          "start": 976,
          "end": 988
        }
      ],
      "declare": false,
      "start": 972,
      "end": 989
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1019
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1023,
                "end": 1029
              },
              "start": 1023,
              "end": 1031
            },
            "start": 1021,
            "end": 1031
          },
          "start": 1020,
          "end": 1031
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 1034,
            "end": 1040
          },
          "start": 1034,
          "end": 1042
        },
        "start": 1032,
        "end": 1042
      },
      "body": null,
      "expression": false,
      "start": 998,
      "end": 1043
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1065
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1069,
              "end": 1072
            },
            "start": 1067,
            "end": 1072
          },
          "start": 1066,
          "end": 1072
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1075,
          "end": 1078
        },
        "start": 1073,
        "end": 1078
      },
      "body": null,
      "expression": false,
      "start": 1044,
      "end": 1079
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1086
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1093
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1095
              }
            ],
            "optional": false,
            "start": 1089,
            "end": 1096
          },
          "definite": false,
          "start": 1084,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1080,
      "end": 1097
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1118
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1126,
                "end": 1132
              },
              "start": 1124,
              "end": 1132
            },
            "accessibility": null,
            "static": false,
            "start": 1121,
            "end": 1132
          }
        ],
        "start": 1119,
        "end": 1134
      },
      "declare": false,
      "start": 1106,
      "end": 1134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1156
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "I8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1162
              },
              "typeArguments": null,
              "start": 1160,
              "end": 1162
            },
            "start": 1158,
            "end": 1162
          },
          "start": 1157,
          "end": 1162
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1167
          },
          "typeArguments": null,
          "start": 1165,
          "end": 1167
        },
        "start": 1163,
        "end": 1167
      },
      "body": null,
      "expression": false,
      "start": 1135,
      "end": 1168
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1190
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1194,
              "end": 1197
            },
            "start": 1192,
            "end": 1197
          },
          "start": 1191,
          "end": 1197
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1200,
          "end": 1203
        },
        "start": 1198,
        "end": 1203
      },
      "body": null,
      "expression": false,
      "start": 1169,
      "end": 1204
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1211
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1220
              }
            ],
            "optional": false,
            "start": 1214,
            "end": 1221
          },
          "definite": false,
          "start": 1209,
          "end": 1221
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1222
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1238
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1246,
                "end": 1252
              },
              "start": 1244,
              "end": 1252
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1241,
            "end": 1253
          }
        ],
        "start": 1239,
        "end": 1255
      },
      "abstract": false,
      "declare": false,
      "start": 1231,
      "end": 1255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1273,
        "end": 1278
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1280,
            "end": 1283
          },
          "start": 1279,
          "end": 1283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1286,
            "end": 1287
          },
          "typeArguments": null,
          "start": 1286,
          "end": 1287
        },
        "start": 1284,
        "end": 1287
      },
      "body": null,
      "expression": false,
      "start": 1256,
      "end": 1288
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1311
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            },
            "start": 1313,
            "end": 1318
          },
          "start": 1312,
          "end": 1318
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        },
        "start": 1319,
        "end": 1324
      },
      "body": null,
      "expression": false,
      "start": 1289,
      "end": 1325
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1332
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1339
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              }
            ],
            "optional": false,
            "start": 1335,
            "end": 1342
          },
          "definite": false,
          "start": 1330,
          "end": 1342
        }
      ],
      "declare": false,
      "start": 1326,
      "end": 1343
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1360
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
              "start": 1361,
              "end": 1362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1361,
            "end": 1362
          }
        ],
        "start": 1360,
        "end": 1363
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1369
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
                  "start": 1371,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1371,
                "end": 1372
              },
              "start": 1369,
              "end": 1372
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1366,
            "end": 1373
          }
        ],
        "start": 1364,
        "end": 1375
      },
      "abstract": false,
      "declare": false,
      "start": 1352,
      "end": 1375
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1393,
        "end": 1398
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1402,
                "end": 1404
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1405,
                    "end": 1411
                  }
                ],
                "start": 1404,
                "end": 1412
              },
              "start": 1402,
              "end": 1412
            },
            "start": 1400,
            "end": 1412
          },
          "start": 1399,
          "end": 1412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1415,
            "end": 1417
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1418,
                "end": 1424
              }
            ],
            "start": 1417,
            "end": 1425
          },
          "start": 1415,
          "end": 1425
        },
        "start": 1413,
        "end": 1425
      },
      "body": null,
      "expression": false,
      "start": 1376,
      "end": 1426
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1449
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1453,
              "end": 1456
            },
            "start": 1451,
            "end": 1456
          },
          "start": 1450,
          "end": 1456
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1459,
          "end": 1462
        },
        "start": 1457,
        "end": 1462
      },
      "body": null,
      "expression": false,
      "start": 1427,
      "end": 1463
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1468,
            "end": 1470
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1473,
              "end": 1477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              }
            ],
            "optional": false,
            "start": 1473,
            "end": 1480
          },
          "definite": false,
          "start": 1468,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1512
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1518
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1523,
                  "end": 1529
                },
                "start": 1520,
                "end": 1529
              },
              "start": 1516,
              "end": 1529
            },
            "start": 1514,
            "end": 1529
          },
          "start": 1513,
          "end": 1529
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1534
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1539,
              "end": 1545
            },
            "start": 1536,
            "end": 1545
          },
          "start": 1532,
          "end": 1545
        },
        "start": 1530,
        "end": 1545
      },
      "body": null,
      "expression": false,
      "start": 1490,
      "end": 1546
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1569
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1573,
              "end": 1576
            },
            "start": 1571,
            "end": 1576
          },
          "start": 1570,
          "end": 1576
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1579,
          "end": 1582
        },
        "start": 1577,
        "end": 1582
      },
      "body": null,
      "expression": false,
      "start": 1547,
      "end": 1583
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1588,
            "end": 1590
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1597
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1599
              }
            ],
            "optional": false,
            "start": 1593,
            "end": 1600
          },
          "definite": false,
          "start": 1588,
          "end": 1600
        }
      ],
      "declare": false,
      "start": 1584,
      "end": 1601
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1627,
        "end": 1632
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 1637,
                      "end": 1638
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1637,
                    "end": 1638
                  }
                ],
                "start": 1636,
                "end": 1639
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1643,
                        "end": 1644
                      },
                      "typeArguments": null,
                      "start": 1643,
                      "end": 1644
                    },
                    "start": 1641,
                    "end": 1644
                  },
                  "start": 1640,
                  "end": 1644
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
                    "start": 1649,
                    "end": 1650
                  },
                  "typeArguments": null,
                  "start": 1649,
                  "end": 1650
                },
                "start": 1646,
                "end": 1650
              },
              "start": 1636,
              "end": 1650
            },
            "start": 1634,
            "end": 1650
          },
          "start": 1633,
          "end": 1650
        }
      ],
      "returnType": {
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
                  "start": 1654,
                  "end": 1655
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1654,
                "end": 1655
              }
            ],
            "start": 1653,
            "end": 1656
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "typeArguments": null,
                  "start": 1660,
                  "end": 1661
                },
                "start": 1658,
                "end": 1661
              },
              "start": 1657,
              "end": 1661
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
                "start": 1666,
                "end": 1667
              },
              "typeArguments": null,
              "start": 1666,
              "end": 1667
            },
            "start": 1663,
            "end": 1667
          },
          "start": 1653,
          "end": 1667
        },
        "start": 1651,
        "end": 1667
      },
      "body": null,
      "expression": false,
      "start": 1610,
      "end": 1668
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1686,
        "end": 1691
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1695,
              "end": 1698
            },
            "start": 1693,
            "end": 1698
          },
          "start": 1692,
          "end": 1698
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1701,
          "end": 1704
        },
        "start": 1699,
        "end": 1704
      },
      "body": null,
      "expression": false,
      "start": 1669,
      "end": 1705
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1712
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1715,
              "end": 1719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1720,
                "end": 1721
              }
            ],
            "optional": false,
            "start": 1715,
            "end": 1722
          },
          "definite": false,
          "start": 1710,
          "end": 1722
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1723
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1738
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1742
            },
            "initializer": null,
            "computed": false,
            "start": 1741,
            "end": 1742
          }
        ],
        "start": 1739,
        "end": 1744
      },
      "const": false,
      "declare": false,
      "start": 1732,
      "end": 1744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1762,
        "end": 1767
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1772
              },
              "typeArguments": null,
              "start": 1771,
              "end": 1772
            },
            "start": 1769,
            "end": 1772
          },
          "start": 1768,
          "end": 1772
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1775,
            "end": 1776
          },
          "typeArguments": null,
          "start": 1775,
          "end": 1776
        },
        "start": 1773,
        "end": 1776
      },
      "body": null,
      "expression": false,
      "start": 1745,
      "end": 1777
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1795,
        "end": 1800
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1804,
              "end": 1807
            },
            "start": 1802,
            "end": 1807
          },
          "start": 1801,
          "end": 1807
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1810,
          "end": 1813
        },
        "start": 1808,
        "end": 1813
      },
      "body": null,
      "expression": false,
      "start": 1778,
      "end": 1814
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1819,
            "end": 1821
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1824,
              "end": 1828
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              }
            ],
            "optional": false,
            "start": 1824,
            "end": 1831
          },
          "definite": false,
          "start": 1819,
          "end": 1831
        }
      ],
      "declare": false,
      "start": 1815,
      "end": 1832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1850,
        "end": 1851
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1854,
        "end": 1857
      },
      "expression": false,
      "start": 1841,
      "end": 1857
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1868,
        "end": 1869
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1887,
                    "end": 1890
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1893,
                    "end": 1894
                  },
                  "definite": false,
                  "start": 1887,
                  "end": 1894
                }
              ],
              "declare": false,
              "start": 1883,
              "end": 1895
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1876,
            "end": 1895
          }
        ],
        "start": 1870,
        "end": 1897
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1858,
      "end": 1897
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1920
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1931,
                "end": 1932
              },
              "typeArguments": null,
              "start": 1924,
              "end": 1932
            },
            "start": 1922,
            "end": 1932
          },
          "start": 1921,
          "end": 1932
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1942,
            "end": 1943
          },
          "typeArguments": null,
          "start": 1935,
          "end": 1943
        },
        "start": 1933,
        "end": 1943
      },
      "body": null,
      "expression": false,
      "start": 1898,
      "end": 1944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1967
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1971,
              "end": 1974
            },
            "start": 1969,
            "end": 1974
          },
          "start": 1968,
          "end": 1974
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1977,
          "end": 1980
        },
        "start": 1975,
        "end": 1980
      },
      "body": null,
      "expression": false,
      "start": 1945,
      "end": 1981
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1986,
            "end": 1988
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1991,
              "end": 1995
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1996,
                "end": 1997
              }
            ],
            "optional": false,
            "start": 1991,
            "end": 1998
          },
          "definite": false,
          "start": 1986,
          "end": 1998
        }
      ],
      "declare": false,
      "start": 1982,
      "end": 1999
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2014,
        "end": 2016
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 2019,
              "end": 2022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2024,
                "end": 2030
              },
              "start": 2022,
              "end": 2030
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2019,
            "end": 2030
          }
        ],
        "start": 2017,
        "end": 2032
      },
      "abstract": false,
      "declare": false,
      "start": 2008,
      "end": 2032
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2045
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2063,
                    "end": 2066
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2069,
                    "end": 2070
                  },
                  "definite": false,
                  "start": 2063,
                  "end": 2070
                }
              ],
              "declare": false,
              "start": 2059,
              "end": 2071
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2052,
            "end": 2071
          }
        ],
        "start": 2046,
        "end": 2073
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2033,
      "end": 2073
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2091,
        "end": 2096
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "CC",
                "optional": false,
                "typeAnnotation": null,
                "start": 2100,
                "end": 2102
              },
              "typeArguments": null,
              "start": 2100,
              "end": 2102
            },
            "start": 2098,
            "end": 2102
          },
          "start": 2097,
          "end": 2102
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2105,
            "end": 2107
          },
          "typeArguments": null,
          "start": 2105,
          "end": 2107
        },
        "start": 2103,
        "end": 2107
      },
      "body": null,
      "expression": false,
      "start": 2074,
      "end": 2108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2131
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2135,
              "end": 2138
            },
            "start": 2133,
            "end": 2138
          },
          "start": 2132,
          "end": 2138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2141,
          "end": 2144
        },
        "start": 2139,
        "end": 2144
      },
      "body": null,
      "expression": false,
      "start": 2109,
      "end": 2145
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2152
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2155,
              "end": 2159
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2160,
                "end": 2161
              }
            ],
            "optional": false,
            "start": 2155,
            "end": 2162
          },
          "definite": false,
          "start": 2150,
          "end": 2162
        }
      ],
      "declare": false,
      "start": 2146,
      "end": 2163
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2189,
        "end": 2194
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 2198,
                "end": 2204
              },
              "typeArguments": null,
              "start": 2198,
              "end": 2204
            },
            "start": 2196,
            "end": 2204
          },
          "start": 2195,
          "end": 2204
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 2207,
            "end": 2213
          },
          "typeArguments": null,
          "start": 2207,
          "end": 2213
        },
        "start": 2205,
        "end": 2213
      },
      "body": null,
      "expression": false,
      "start": 2172,
      "end": 2214
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2232,
        "end": 2237
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2241,
              "end": 2244
            },
            "start": 2239,
            "end": 2244
          },
          "start": 2238,
          "end": 2244
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2247,
          "end": 2250
        },
        "start": 2245,
        "end": 2250
      },
      "body": null,
      "expression": false,
      "start": 2215,
      "end": 2251
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2256,
            "end": 2258
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2261,
              "end": 2265
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2266,
                "end": 2267
              }
            ],
            "optional": false,
            "start": 2261,
            "end": 2268
          },
          "definite": false,
          "start": 2256,
          "end": 2268
        }
      ],
      "declare": false,
      "start": 2252,
      "end": 2269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2295,
        "end": 2300
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2304,
              "end": 2306
            },
            "start": 2302,
            "end": 2306
          },
          "start": 2301,
          "end": 2306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2309,
          "end": 2311
        },
        "start": 2307,
        "end": 2311
      },
      "body": null,
      "expression": false,
      "start": 2278,
      "end": 2312
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2330,
        "end": 2335
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2339,
              "end": 2342
            },
            "start": 2337,
            "end": 2342
          },
          "start": 2336,
          "end": 2342
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2345,
          "end": 2348
        },
        "start": 2343,
        "end": 2348
      },
      "body": null,
      "expression": false,
      "start": 2313,
      "end": 2349
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2354,
            "end": 2356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2363
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2364,
                "end": 2365
              }
            ],
            "optional": false,
            "start": 2359,
            "end": 2366
          },
          "definite": false,
          "start": 2354,
          "end": 2366
        }
      ],
      "declare": false,
      "start": 2350,
      "end": 2367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 2374
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 214,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 256,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 264,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 301,
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
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 462,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 470,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 504,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 512,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 544,
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
    "value": "foo3",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 566,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 574,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 591,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 601,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 610,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 618,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "declare",
    "start": 672,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 680,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 697,
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
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 710,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 772,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 780,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "RegExp",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 806,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 814,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 822,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 850,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 876,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 903,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 936,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 944,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 981,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 998,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1052,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1089,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1106,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1143,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1169,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1177,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1209,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1256,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1264,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1273,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
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
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1289,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1297,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1306,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1352,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1358,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1384,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1393,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1405,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1427,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1435,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1444,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1473,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1490,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1498,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1507,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1520,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1536,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1564,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1584,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1593,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1610,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1618,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1627,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1646,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1677,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1686,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1715,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1732,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1745,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1753,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1762,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1786,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1795,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1810,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1815,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1819,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1824,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1841,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1858,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1876,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1887,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1898,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1906,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1915,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1924,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1945,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1953,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1962,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1977,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1991,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 2014,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2019,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2033,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 2043,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2059,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2063,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2074,
    "end": 2081
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2082,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2091,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 2105,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2109,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2117,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2126,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2141,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2146,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2150,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2155,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2172,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2180,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2189,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2198,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2215,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2223,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2232,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2241,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2247,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2261,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2278,
    "end": 2285
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2286,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2295,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2313,
    "end": 2320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2321,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2330,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2339,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2354,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2359,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  }
]
```

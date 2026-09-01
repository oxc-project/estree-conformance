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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 107
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 107
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 91,
                "end": 107
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 121
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 121
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 109,
                "end": 121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 140
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 140
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 123,
                "end": 140
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 161
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 161
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 142,
                "end": 161
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 174
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 174
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 174
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 176
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 188
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 201
                  },
                  "optional": false,
                  "computed": false,
                  "start": 184,
                  "end": 201
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-GB",
                    "raw": "'en-GB'",
                    "start": 202,
                    "end": 209
                  }
                ],
                "start": 180,
                "end": 210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 226
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 180,
            "end": 228
          },
          "definite": false,
          "start": 89,
          "end": 228
        }
      ],
      "declare": false,
      "start": 83,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 252,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 270,
            "end": 277
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 279,
            "end": 281
          }
        ],
        "start": 248,
        "end": 282
      },
      "directive": null,
      "start": 248,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 305
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 319,
            "end": 326
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 346
                },
                "value": {
                  "type": "Literal",
                  "value": "lessPrecision",
                  "raw": "'lessPrecision'",
                  "start": 348,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 330,
                "end": 363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 382
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 384,
                  "end": 387
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 365,
                "end": 387
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 401
                },
                "value": {
                  "type": "Literal",
                  "value": "trunc",
                  "raw": "'trunc'",
                  "start": 403,
                  "end": 410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 389,
                "end": 410
              }
            ],
            "start": 328,
            "end": 412
          }
        ],
        "start": 297,
        "end": 413
      },
      "directive": null,
      "start": 297,
      "end": 414
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 461
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 461
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 450,
                "end": 461
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 463
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 474
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 487
                  },
                  "optional": false,
                  "computed": false,
                  "start": 470,
                  "end": 487
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-GB",
                    "raw": "'en-GB'",
                    "start": 488,
                    "end": 495
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "signDisplay",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 510
                        },
                        "value": {
                          "type": "Literal",
                          "value": "negative",
                          "raw": "'negative'",
                          "start": 512,
                          "end": 522
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 499,
                        "end": 522
                      }
                    ],
                    "start": 497,
                    "end": 524
                  }
                ],
                "start": 466,
                "end": 525
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 541
              },
              "optional": false,
              "computed": false,
              "start": 466,
              "end": 541
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 466,
            "end": 543
          },
          "definite": false,
          "start": 448,
          "end": 543
        }
      ],
      "declare": false,
      "start": 442,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 580
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 593
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 594,
            "end": 601
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 616
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 618,
                  "end": 622
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 605,
                "end": 622
              }
            ],
            "start": 603,
            "end": 624
          }
        ],
        "start": 572,
        "end": 625
      },
      "directive": null,
      "start": 572,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 648
          },
          "optional": false,
          "computed": false,
          "start": 631,
          "end": 648
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 649,
            "end": 656
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 671
                },
                "value": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 673,
                  "end": 679
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 660,
                "end": 679
              }
            ],
            "start": 658,
            "end": 681
          }
        ],
        "start": 627,
        "end": 682
      },
      "directive": null,
      "start": 627,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 692
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 705
          },
          "optional": false,
          "computed": false,
          "start": 688,
          "end": 705
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 706,
            "end": 713
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 728
                },
                "value": {
                  "type": "Literal",
                  "value": "always",
                  "raw": "'always'",
                  "start": 730,
                  "end": 738
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 717,
                "end": 738
              }
            ],
            "start": 715,
            "end": 740
          }
        ],
        "start": 684,
        "end": 741
      },
      "directive": null,
      "start": 684,
      "end": 742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 767
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 780
              },
              "optional": false,
              "computed": false,
              "start": 763,
              "end": 780
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 781,
                "end": 788
              }
            ],
            "start": 759,
            "end": 789
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 801
          },
          "optional": false,
          "computed": false,
          "start": 759,
          "end": 801
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 802,
            "end": 804
          },
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 806,
            "end": 809
          }
        ],
        "optional": false,
        "start": 759,
        "end": 810
      },
      "directive": null,
      "start": 759,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 820
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 833
              },
              "optional": false,
              "computed": false,
              "start": 816,
              "end": 833
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 834,
                "end": 841
              }
            ],
            "start": 812,
            "end": 842
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 854
          },
          "optional": false,
          "computed": false,
          "start": 812,
          "end": 854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "10n",
            "bigint": "10",
            "start": 855,
            "end": 858
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "1000n",
            "bigint": "1000",
            "start": 860,
            "end": 865
          }
        ],
        "optional": false,
        "start": 812,
        "end": 866
      },
      "directive": null,
      "start": 812,
      "end": 867
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 876
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberFormat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 889
                },
                "optional": false,
                "computed": false,
                "start": 872,
                "end": 889
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "en-GB",
                  "raw": "'en-GB'",
                  "start": 890,
                  "end": 897
                }
              ],
              "start": 868,
              "end": 898
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 917
            },
            "optional": false,
            "computed": false,
            "start": 868,
            "end": 917
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 918,
              "end": 920
            },
            {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 922,
              "end": 926
            }
          ],
          "optional": false,
          "start": 868,
          "end": 927
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 928,
          "end": 929
        },
        "optional": false,
        "computed": true,
        "start": 868,
        "end": 930
      },
      "directive": null,
      "start": 868,
      "end": 931
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberFormat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 953
                },
                "optional": false,
                "computed": false,
                "start": 936,
                "end": 953
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "en-GB",
                  "raw": "'en-GB'",
                  "start": 954,
                  "end": 961
                }
              ],
              "start": 932,
              "end": 962
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 981
            },
            "optional": false,
            "computed": false,
            "start": 932,
            "end": 981
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 982,
              "end": 985
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "1000n",
              "bigint": "1000",
              "start": 987,
              "end": 992
            }
          ],
          "optional": false,
          "start": 932,
          "end": 993
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 994,
          "end": 995
        },
        "optional": false,
        "computed": true,
        "start": 932,
        "end": 996
      },
      "directive": null,
      "start": 932,
      "end": 997
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1060
              },
              "optional": false,
              "computed": false,
              "start": 1043,
              "end": 1060
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1061,
                "end": 1068
              }
            ],
            "start": 1039,
            "end": 1069
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1070,
            "end": 1076
          },
          "optional": false,
          "computed": false,
          "start": 1039,
          "end": 1076
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-12.3E-4",
            "raw": "'-12.3E-4'",
            "start": 1077,
            "end": 1087
          }
        ],
        "optional": false,
        "start": 1039,
        "end": 1088
      },
      "directive": null,
      "start": 1039,
      "end": 1089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1098
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1111
              },
              "optional": false,
              "computed": false,
              "start": 1094,
              "end": 1111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1112,
                "end": 1119
              }
            ],
            "start": 1090,
            "end": 1120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1132
          },
          "optional": false,
          "computed": false,
          "start": 1090,
          "end": 1132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "123.4",
            "raw": "'123.4'",
            "start": 1133,
            "end": 1140
          },
          {
            "type": "Literal",
            "value": "567.8",
            "raw": "'567.8'",
            "start": 1142,
            "end": 1149
          }
        ],
        "optional": false,
        "start": 1090,
        "end": 1150
      },
      "directive": null,
      "start": 1090,
      "end": 1151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1156,
                "end": 1160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1173
              },
              "optional": false,
              "computed": false,
              "start": 1156,
              "end": 1173
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1174,
                "end": 1181
              }
            ],
            "start": 1152,
            "end": 1182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRangeToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1201
          },
          "optional": false,
          "computed": false,
          "start": 1152,
          "end": 1201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "123E-4",
            "raw": "'123E-4'",
            "start": 1202,
            "end": 1210
          },
          {
            "type": "Literal",
            "value": "567E8",
            "raw": "'567E8'",
            "start": 1212,
            "end": 1219
          }
        ],
        "optional": false,
        "start": 1152,
        "end": 1220
      },
      "directive": null,
      "start": 1152,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1226,
              "end": 1243
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1244,
                "end": 1251
              }
            ],
            "start": 1222,
            "end": 1252
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1253,
            "end": 1259
          },
          "optional": false,
          "computed": false,
          "start": 1222,
          "end": 1259
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "'Infinity'",
            "start": 1260,
            "end": 1270
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1271
      },
      "directive": null,
      "start": 1222,
      "end": 1272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1294
              },
              "optional": false,
              "computed": false,
              "start": 1277,
              "end": 1294
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1295,
                "end": 1302
              }
            ],
            "start": 1273,
            "end": 1303
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1304,
            "end": 1310
          },
          "optional": false,
          "computed": false,
          "start": 1273,
          "end": 1310
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "'-Infinity'",
            "start": 1311,
            "end": 1322
          }
        ],
        "optional": false,
        "start": 1273,
        "end": 1323
      },
      "directive": null,
      "start": 1273,
      "end": 1324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1329,
                "end": 1333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1334,
                "end": 1346
              },
              "optional": false,
              "computed": false,
              "start": 1329,
              "end": 1346
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1347,
                "end": 1354
              }
            ],
            "start": 1325,
            "end": 1355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1362
          },
          "optional": false,
          "computed": false,
          "start": 1325,
          "end": 1362
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "'+Infinity'",
            "start": 1363,
            "end": 1374
          }
        ],
        "optional": false,
        "start": 1325,
        "end": 1375
      },
      "directive": null,
      "start": 1325,
      "end": 1376
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
            "name": "nf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1420,
            "end": 1422
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1429,
                "end": 1433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1434,
                "end": 1446
              },
              "optional": false,
              "computed": false,
              "start": 1429,
              "end": 1446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "\"en-US\"",
                "start": 1447,
                "end": 1454
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1460,
                      "end": 1465
                    },
                    "value": {
                      "type": "Literal",
                      "value": "currency",
                      "raw": "\"currency\"",
                      "start": 1467,
                      "end": 1477
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1460,
                    "end": 1477
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "currency",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1481,
                      "end": 1489
                    },
                    "value": {
                      "type": "Literal",
                      "value": "EUR",
                      "raw": "\"EUR\"",
                      "start": 1491,
                      "end": 1496
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1481,
                    "end": 1496
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maximumFractionDigits",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1500,
                      "end": 1521
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1523,
                      "end": 1524
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1500,
                    "end": 1524
                  }
                ],
                "start": 1456,
                "end": 1527
              }
            ],
            "start": 1425,
            "end": 1528
          },
          "definite": false,
          "start": 1420,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1414,
      "end": 1529
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
            "name": "filtered",
            "optional": false,
            "typeAnnotation": null,
            "start": 1537,
            "end": 1545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1548,
                            "end": 1550
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "formatRangeToParts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1554,
                            "end": 1572
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1548,
                          "end": 1572
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 1573,
                            "end": 1576
                          },
                          {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 1578,
                            "end": 1581
                          }
                        ],
                        "optional": false,
                        "start": 1548,
                        "end": 1582
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1586,
                        "end": 1592
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1548,
                      "end": 1592
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "part",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1594,
                            "end": 1598
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "part",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1603,
                              "end": 1607
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1608,
                              "end": 1612
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1603,
                            "end": 1612
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "value": "approximatelySign",
                            "raw": "\"approximatelySign\"",
                            "start": 1617,
                            "end": 1636
                          },
                          "start": 1603,
                          "end": 1636
                        },
                        "id": null,
                        "generator": false,
                        "start": 1593,
                        "end": 1636
                      }
                    ],
                    "optional": false,
                    "start": 1548,
                    "end": 1637
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1641,
                    "end": 1644
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1548,
                  "end": 1644
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "part",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1646,
                        "end": 1650
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "part",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1655,
                        "end": 1659
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1660,
                        "end": 1665
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1655,
                      "end": 1665
                    },
                    "id": null,
                    "generator": false,
                    "start": 1645,
                    "end": 1665
                  }
                ],
                "optional": false,
                "start": 1548,
                "end": 1666
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 1670,
                "end": 1674
              },
              "optional": false,
              "computed": false,
              "start": 1548,
              "end": 1674
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1675,
                "end": 1677
              }
            ],
            "optional": false,
            "start": 1548,
            "end": 1678
          },
          "definite": false,
          "start": 1537,
          "end": 1678
        }
      ],
      "declare": false,
      "start": 1531,
      "end": 1679
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 1679
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "roundingPriority",
    "start": 91,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "roundingMode",
    "start": 109,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "roundingIncrement",
    "start": 123,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "trailingZeroDisplay",
    "start": 142,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 163,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 189,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 211,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 257,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 306,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "roundingPriority",
    "start": 330,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "String",
    "value": "'lessPrecision'",
    "start": 348,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "roundingIncrement",
    "start": 365,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "roundingMode",
    "start": 389,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "'trunc'",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "signDisplay",
    "start": 450,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 475,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "signDisplay",
    "start": 499,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "String",
    "value": "'negative'",
    "start": 512,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 526,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 581,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "String",
    "value": "'en-GB'",
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
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 605,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 636,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 660,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "new",
    "start": 684,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 693,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 717,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "String",
    "value": "'always'",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 768,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 781,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "formatRange",
    "start": 790,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 821,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 834,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "formatRange",
    "start": 843,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "1000n",
    "start": 860,
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
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 877,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 890,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "formatRangeToParts",
    "start": 899,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 920,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 927,
    "end": 928
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 932,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 941,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 954,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "formatRangeToParts",
    "start": 963,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 985,
    "end": 986
  },
  {
    "type": "Numeric",
    "value": "1000n",
    "start": 987,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 993,
    "end": 994
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1048,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "String",
    "value": "'-12.3E-4'",
    "start": 1077,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1090,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1099,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "formatRange",
    "start": 1121,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "String",
    "value": "'123.4'",
    "start": 1133,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "String",
    "value": "'567.8'",
    "start": 1142,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1161,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1174,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "formatRangeToParts",
    "start": 1183,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "String",
    "value": "'123E-4'",
    "start": 1202,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "String",
    "value": "'567E8'",
    "start": 1212,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1226,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1231,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1244,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "String",
    "value": "'Infinity'",
    "start": 1260,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1282,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1295,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "String",
    "value": "'-Infinity'",
    "start": 1311,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1334,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 1356,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "String",
    "value": "'+Infinity'",
    "start": 1363,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1414,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1429,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1434,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "String",
    "value": "\"currency\"",
    "start": 1467,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1481,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "String",
    "value": "\"EUR\"",
    "start": 1491,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "maximumFractionDigits",
    "start": 1500,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1531,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "filtered",
    "start": 1537,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "formatRangeToParts",
    "start": 1554,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1594,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1600,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "String",
    "value": "\"approximatelySign\"",
    "start": 1617,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1641,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1646,
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
    "value": "=>",
    "start": 1652,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1660,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 1670,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  }
]
```

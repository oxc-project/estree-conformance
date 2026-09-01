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
                  "name": "notation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 58
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "notation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 58
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 50,
                "end": 58
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "style",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "style",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 65
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 78
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 78
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 78
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 80
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
                    "start": 87,
                    "end": 91
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 104
                  },
                  "optional": false,
                  "computed": false,
                  "start": 87,
                  "end": 104
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-NZ",
                    "raw": "'en-NZ'",
                    "start": 105,
                    "end": 112
                  }
                ],
                "start": 83,
                "end": 113
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 129
              },
              "optional": false,
              "computed": false,
              "start": 83,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 83,
            "end": 131
          },
          "definite": false,
          "start": 48,
          "end": 131
        }
      ],
      "declare": false,
      "start": 42,
      "end": 132
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
            "start": 155,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 172
          },
          "optional": false,
          "computed": false,
          "start": 155,
          "end": 172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-NZ",
            "raw": "'en-NZ'",
            "start": 173,
            "end": 180
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 182,
            "end": 184
          }
        ],
        "start": 151,
        "end": 185
      },
      "directive": null,
      "start": 151,
      "end": 186
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
            "start": 221,
            "end": 225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 238
          },
          "optional": false,
          "computed": false,
          "start": 221,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-NZ",
            "raw": "'en-NZ'",
            "start": 239,
            "end": 246
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
                  "name": "numberingSystem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 265
                },
                "value": {
                  "type": "Literal",
                  "value": "arab",
                  "raw": "'arab'",
                  "start": 267,
                  "end": 273
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 273
              }
            ],
            "start": 248,
            "end": 275
          }
        ],
        "start": 217,
        "end": 276
      },
      "directive": null,
      "start": 217,
      "end": 277
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
                  "name": "currency",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 307
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "currency",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 307
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 307
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "currencySign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 321
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "currencySign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 321
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 309,
                "end": 321
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 323
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
                    "start": 330,
                    "end": 334
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 347
                  },
                  "optional": false,
                  "computed": false,
                  "start": 330,
                  "end": 347
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-NZ",
                    "raw": "'en-NZ'",
                    "start": 348,
                    "end": 355
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
                          "start": 359,
                          "end": 364
                        },
                        "value": {
                          "type": "Literal",
                          "value": "currency",
                          "raw": "'currency'",
                          "start": 366,
                          "end": 376
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 359,
                        "end": 376
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
                          "start": 378,
                          "end": 386
                        },
                        "value": {
                          "type": "Literal",
                          "value": "NZD",
                          "raw": "'NZD'",
                          "start": 388,
                          "end": 393
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 378,
                        "end": 393
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currencySign",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 407
                        },
                        "value": {
                          "type": "Literal",
                          "value": "accounting",
                          "raw": "'accounting'",
                          "start": 409,
                          "end": 421
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 395,
                        "end": 421
                      }
                    ],
                    "start": 357,
                    "end": 423
                  }
                ],
                "start": 326,
                "end": 424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 440
              },
              "optional": false,
              "computed": false,
              "start": 326,
              "end": 440
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 326,
            "end": 442
          },
          "definite": false,
          "start": 297,
          "end": 442
        }
      ],
      "declare": false,
      "start": 291,
      "end": 443
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
                  "name": "unit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 466
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 466
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 462,
                "end": 466
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unitDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 479
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unitDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 479
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 468,
                "end": 479
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 481
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
                    "start": 488,
                    "end": 492
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 505
                  },
                  "optional": false,
                  "computed": false,
                  "start": 488,
                  "end": 505
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-NZ",
                    "raw": "'en-NZ'",
                    "start": 506,
                    "end": 513
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
                          "start": 517,
                          "end": 522
                        },
                        "value": {
                          "type": "Literal",
                          "value": "unit",
                          "raw": "'unit'",
                          "start": 524,
                          "end": 530
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 517,
                        "end": 530
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "value": {
                          "type": "Literal",
                          "value": "kilogram",
                          "raw": "'kilogram'",
                          "start": 538,
                          "end": 548
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 532,
                        "end": 548
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unitDisplay",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 550,
                          "end": 561
                        },
                        "value": {
                          "type": "Literal",
                          "value": "narrow",
                          "raw": "'narrow'",
                          "start": 563,
                          "end": 571
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 550,
                        "end": 571
                      }
                    ],
                    "start": 515,
                    "end": 573
                  }
                ],
                "start": 484,
                "end": 574
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 590
              },
              "optional": false,
              "computed": false,
              "start": 484,
              "end": 590
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 484,
            "end": 592
          },
          "definite": false,
          "start": 460,
          "end": 592
        }
      ],
      "declare": false,
      "start": 454,
      "end": 593
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
                  "name": "compactDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 628
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compactDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 628
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 614,
                "end": 628
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 630
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
                    "start": 637,
                    "end": 641
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 642,
                    "end": 654
                  },
                  "optional": false,
                  "computed": false,
                  "start": 637,
                  "end": 654
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-NZ",
                    "raw": "'en-NZ'",
                    "start": 655,
                    "end": 662
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
                          "name": "notation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 666,
                          "end": 674
                        },
                        "value": {
                          "type": "Literal",
                          "value": "compact",
                          "raw": "'compact'",
                          "start": 676,
                          "end": 685
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 666,
                        "end": 685
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compactDisplay",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 701
                        },
                        "value": {
                          "type": "Literal",
                          "value": "long",
                          "raw": "'long'",
                          "start": 703,
                          "end": 709
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 687,
                        "end": 709
                      }
                    ],
                    "start": 664,
                    "end": 711
                  }
                ],
                "start": 633,
                "end": 712
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 728
              },
              "optional": false,
              "computed": false,
              "start": 633,
              "end": 728
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 633,
            "end": 730
          },
          "definite": false,
          "start": 612,
          "end": 730
        }
      ],
      "declare": false,
      "start": 606,
      "end": 731
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
            "start": 753,
            "end": 757
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 770
          },
          "optional": false,
          "computed": false,
          "start": 753,
          "end": 770
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-NZ",
            "raw": "'en-NZ'",
            "start": 771,
            "end": 778
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
                  "start": 782,
                  "end": 793
                },
                "value": {
                  "type": "Literal",
                  "value": "always",
                  "raw": "'always'",
                  "start": 795,
                  "end": 803
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 782,
                "end": 803
              }
            ],
            "start": 780,
            "end": 805
          }
        ],
        "start": 749,
        "end": 806
      },
      "directive": null,
      "start": 749,
      "end": 807
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
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 868
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberFormatPartTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 869,
                      "end": 890
                    },
                    "start": 864,
                    "end": 890
                  },
                  "typeArguments": null,
                  "start": 864,
                  "end": 890
                },
                "start": 864,
                "end": 892
              },
              "start": 862,
              "end": 892
            },
            "start": 857,
            "end": 892
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "compact",
                "raw": "'compact'",
                "start": 897,
                "end": 906
              },
              {
                "type": "Literal",
                "value": "unit",
                "raw": "'unit'",
                "start": 908,
                "end": 914
              },
              {
                "type": "Literal",
                "value": "unknown",
                "raw": "'unknown'",
                "start": 916,
                "end": 925
              }
            ],
            "start": 895,
            "end": 927
          },
          "definite": false,
          "start": 857,
          "end": 927
        }
      ],
      "declare": false,
      "start": 851,
      "end": 928
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 928
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "notation",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "signDisplay",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 92,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 114,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 160,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 226,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "numberingSystem",
    "start": 250,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "String",
    "value": "'arab'",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 299,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "currencySign",
    "start": 309,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 335,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "style",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 366,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 378,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "String",
    "value": "'NZD'",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "currencySign",
    "start": 395,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "String",
    "value": "'accounting'",
    "start": 409,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 425,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
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
    "value": "const",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "unit",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "unitDisplay",
    "start": 468,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 493,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 506,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 517,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "String",
    "value": "'unit'",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "unit",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "'kilogram'",
    "start": 538,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "unitDisplay",
    "start": 550,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "String",
    "value": "'narrow'",
    "start": 563,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 575,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "compactDisplay",
    "start": 614,
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
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 642,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "String",
    "value": "'en-NZ'",
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
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "notation",
    "start": 666,
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
    "value": "'compact'",
    "start": 676,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "compactDisplay",
    "start": 687,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "String",
    "value": "'long'",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ".",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 713,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 758,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "String",
    "value": "'en-NZ'",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "signDisplay",
    "start": 782,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "String",
    "value": "'always'",
    "start": 795,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "NumberFormatPartTypes",
    "start": 869,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 895,
    "end": 896
  },
  {
    "type": "String",
    "value": "'compact'",
    "start": 897,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907
  },
  {
    "type": "String",
    "value": "'unit'",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 914,
    "end": 915
  },
  {
    "type": "String",
    "value": "'unknown'",
    "start": 916,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  }
]
```

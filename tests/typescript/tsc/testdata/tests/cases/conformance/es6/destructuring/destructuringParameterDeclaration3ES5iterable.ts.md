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
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 228
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 235
              },
              "typeArguments": null,
              "start": 229,
              "end": 235
            }
          ],
          "start": 228,
          "end": 236
        },
        "start": 223,
        "end": 236
      },
      "declare": false,
      "start": 204,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 251
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
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 266
                  },
                  "typeArguments": null,
                  "start": 260,
                  "end": 266
                }
              ],
              "start": 259,
              "end": 267
            },
            "start": 254,
            "end": 267
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            },
            "start": 270,
            "end": 278
          }
        ],
        "start": 254,
        "end": 278
      },
      "declare": false,
      "start": 237,
      "end": 279
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 301
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 309
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 310,
                  "end": 316
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 317,
                  "end": 323
                }
              ],
              "start": 310,
              "end": 323
            }
          ],
          "start": 309,
          "end": 324
        },
        "start": 304,
        "end": 324
      },
      "declare": false,
      "start": 280,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 343
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 353,
                    "end": 359
                  }
                ],
                "start": 346,
                "end": 359
              },
              "start": 345,
              "end": 362
            },
            "start": 343,
            "end": 362
          },
          "value": null,
          "start": 339,
          "end": 362
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 364,
        "end": 367
      },
      "expression": false,
      "start": 327,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 379
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 384
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 380,
          "end": 384
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 386,
        "end": 389
      },
      "expression": false,
      "start": 368,
      "end": 389
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 413
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 420
                  }
                ],
                "start": 413,
                "end": 421
              },
              "start": 408,
              "end": 421
            },
            "start": 406,
            "end": 421
          },
          "value": null,
          "start": 402,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 426
      },
      "expression": false,
      "start": 390,
      "end": 426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 438
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 443
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayString",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 456
              },
              "typeArguments": null,
              "start": 445,
              "end": 456
            },
            "start": 443,
            "end": 456
          },
          "value": null,
          "start": 439,
          "end": 456
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 458,
        "end": 461
      },
      "expression": false,
      "start": 427,
      "end": 461
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 473
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 496
              },
              "typeArguments": null,
              "start": 480,
              "end": 496
            },
            "start": 478,
            "end": 496
          },
          "value": null,
          "start": 474,
          "end": 496
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 498,
        "end": 501
      },
      "expression": false,
      "start": 462,
      "end": 501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 513
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 516
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 524
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 526
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 527
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 529,
        "end": 532
      },
      "expression": false,
      "start": 502,
      "end": 532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a10",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 545
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 551
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 556
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 557
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 558
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 564
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 560,
              "end": 564
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 546,
          "end": 565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 567,
        "end": 570
      },
      "expression": false,
      "start": 533,
      "end": 570
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a11",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 594,
              "end": 598
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 601,
                "end": 607
              },
              "start": 601,
              "end": 609
            },
            "start": 599,
            "end": 609
          },
          "start": 584,
          "end": 609
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 611,
        "end": 614
      },
      "expression": false,
      "start": 571,
      "end": 614
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 626
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 630,
                "end": 631
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 633,
                "end": 634
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 636,
                "end": 637
              }
            ],
            "start": 629,
            "end": 638
          },
          "definite": false,
          "start": 621,
          "end": 638
        }
      ],
      "declare": false,
      "start": 617,
      "end": 639
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
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 650
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 654,
                "end": 658
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 660,
                "end": 665
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 667,
                "end": 674
              }
            ],
            "start": 653,
            "end": 675
          },
          "definite": false,
          "start": 644,
          "end": 675
        }
      ],
      "declare": false,
      "start": 640,
      "end": 676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 679
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 689
                },
                "start": 681,
                "end": 689
              }
            ],
            "start": 680,
            "end": 690
          }
        ],
        "optional": false,
        "start": 677,
        "end": 691
      },
      "directive": null,
      "start": 677,
      "end": 692
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 695
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
            },
            "start": 696,
            "end": 704
          }
        ],
        "optional": false,
        "start": 693,
        "end": 705
      },
      "directive": null,
      "start": 693,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 708,
          "end": 710
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 712,
                "end": 713
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 715,
                "end": 716
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 720,
                        "end": 728
                      }
                    ],
                    "start": 719,
                    "end": 729
                  }
                ],
                "start": 718,
                "end": 730
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 732,
                "end": 737
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 739,
                "end": 743
              }
            ],
            "start": 711,
            "end": 744
          }
        ],
        "optional": false,
        "start": 708,
        "end": 745
      },
      "directive": null,
      "start": 708,
      "end": 746
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 794
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 796,
                "end": 797
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 799,
                "end": 800
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 804,
                        "end": 812
                      }
                    ],
                    "start": 803,
                    "end": 813
                  }
                ],
                "start": 802,
                "end": 814
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 816,
                "end": 821
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 823,
                "end": 827
              }
            ],
            "start": 795,
            "end": 828
          }
        ],
        "optional": false,
        "start": 791,
        "end": 829
      },
      "directive": null,
      "start": 791,
      "end": 830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 860,
          "end": 863
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 865,
                "end": 866
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 868,
                "end": 869
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 871,
                "end": 872
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 874,
                "end": 879
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 881,
                "end": 885
              }
            ],
            "start": 864,
            "end": 886
          }
        ],
        "optional": false,
        "start": 860,
        "end": 887
      },
      "directive": null,
      "start": 860,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 929,
          "end": 932
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 934,
                "end": 935
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 937,
                "end": 938
              }
            ],
            "start": 933,
            "end": 939
          }
        ],
        "optional": false,
        "start": 929,
        "end": 940
      },
      "directive": null,
      "start": 929,
      "end": 941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 998,
          "end": 1001
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1003,
                "end": 1004
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1006,
                "end": 1007
              }
            ],
            "start": 1002,
            "end": 1008
          }
        ],
        "optional": false,
        "start": 998,
        "end": 1009
      },
      "directive": null,
      "start": 998,
      "end": 1010
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1114
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
              "start": 1115,
              "end": 1116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1115,
            "end": 1116
          }
        ],
        "start": 1114,
        "end": 1117
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1122
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1124,
                  "end": 1125
                },
                "typeArguments": null,
                "start": 1124,
                "end": 1125
              },
              "start": 1124,
              "end": 1127
            },
            "start": 1122,
            "end": 1127
          },
          "value": null,
          "start": 1118,
          "end": 1127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1129,
        "end": 1132
      },
      "expression": false,
      "start": 1102,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1136
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1137,
                  "end": 1143
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1144,
                  "end": 1150
                }
              ],
              "start": 1137,
              "end": 1150
            }
          ],
          "start": 1136,
          "end": 1151
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1152,
            "end": 1159
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1161,
            "end": 1162
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1164,
            "end": 1165
          }
        ],
        "optional": false,
        "start": 1133,
        "end": 1166
      },
      "directive": null,
      "start": 1133,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1172,
            "end": 1179
          },
          {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 1181,
            "end": 1188
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1189
      },
      "directive": null,
      "start": 1168,
      "end": 1190
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1197,
        "end": 1198
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1202
            },
            "initializer": null,
            "computed": false,
            "start": 1201,
            "end": 1202
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1205
            },
            "initializer": null,
            "computed": false,
            "start": 1204,
            "end": 1205
          }
        ],
        "start": 1199,
        "end": 1207
      },
      "const": false,
      "declare": false,
      "start": 1192,
      "end": 1207
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1221
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
            },
            "initializer": null,
            "computed": false,
            "start": 1224,
            "end": 1225
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "initializer": null,
            "computed": false,
            "start": 1227,
            "end": 1228
          }
        ],
        "start": 1222,
        "end": 1230
      },
      "const": true,
      "declare": false,
      "start": 1208,
      "end": 1230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1244
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
              "start": 1245,
              "end": 1246
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1261
              },
              "typeArguments": null,
              "start": 1255,
              "end": 1261
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1245,
            "end": 1261
          }
        ],
        "start": 1244,
        "end": 1262
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1267
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1269,
                  "end": 1270
                },
                "typeArguments": null,
                "start": 1269,
                "end": 1270
              },
              "start": 1269,
              "end": 1272
            },
            "start": 1267,
            "end": 1272
          },
          "value": null,
          "start": 1263,
          "end": 1272
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1274,
        "end": 1277
      },
      "expression": false,
      "start": 1231,
      "end": 1277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1278,
          "end": 1282
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1283,
            "end": 1284
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1286,
            "end": 1287
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1289,
            "end": 1290
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1293
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1295
            },
            "optional": false,
            "computed": false,
            "start": 1292,
            "end": 1295
          }
        ],
        "optional": false,
        "start": 1278,
        "end": 1296
      },
      "directive": null,
      "start": 1278,
      "end": 1297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1298,
          "end": 1302
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1303,
            "end": 1304
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1306,
            "end": 1307
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1309,
            "end": 1310
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1316
            },
            "optional": false,
            "computed": false,
            "start": 1312,
            "end": 1316
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1319
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            },
            "optional": false,
            "computed": false,
            "start": 1318,
            "end": 1321
          }
        ],
        "optional": false,
        "start": 1298,
        "end": 1322
      },
      "directive": null,
      "start": 1298,
      "end": 1323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 204,
  "end": 1325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "arrayString",
    "start": 209,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 237,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "someArray",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 280,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "stringOrNumArray",
    "start": 285,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 327,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 427,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "arrayString",
    "start": 445,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 462,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "stringOrNumArray",
    "start": 480,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 502,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 547,
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
    "value": "b",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 571,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "number",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 621,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 644,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 653,
    "end": 654
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 667,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 711,
    "end": 712
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 719,
    "end": 720
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 720,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 804,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 881,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 933,
    "end": 934
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 935,
    "end": 936
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1102,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1118,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1137,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1152,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 1181,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1219,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1231,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1247,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1278,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1298,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323
  }
]
```

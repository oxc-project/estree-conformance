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
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 27
          }
        ],
        "start": 13,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 200
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 207
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 196,
              "end": 207
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 213
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 209,
              "end": 221
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 230
              },
              "typeArguments": null,
              "start": 225,
              "end": 230
            },
            "start": 223,
            "end": 230
          },
          "start": 194,
          "end": 230
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 232,
        "end": 235
      },
      "expression": false,
      "start": 164,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers2",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 266
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 273,
              "end": 279
            },
            "start": 271,
            "end": 279
          },
          "start": 267,
          "end": 279
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 287
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 294
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 283,
              "end": 294
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "typeArguments": null,
              "start": 298,
              "end": 303
            },
            "start": 296,
            "end": 303
          },
          "start": 281,
          "end": 303
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 305,
        "end": 308
      },
      "expression": false,
      "start": 236,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers3",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 339
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 346
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 353
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 342,
              "end": 353
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "typeArguments": null,
              "start": 357,
              "end": 362
            },
            "start": 355,
            "end": 362
          },
          "start": 340,
          "end": 362
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 370
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 378
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 366,
              "end": 378
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 387
              },
              "typeArguments": null,
              "start": 382,
              "end": 387
            },
            "start": 380,
            "end": 387
          },
          "start": 364,
          "end": 387
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 389,
        "end": 392
      },
      "expression": false,
      "start": 309,
      "end": 392
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 403
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 406,
            "end": 408
          },
          "definite": false,
          "start": 398,
          "end": 408
        }
      ],
      "declare": false,
      "start": 394,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "shadowedVariable",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 498
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 506
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 513
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 501,
              "end": 513
            }
          ],
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 524
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 519,
                  "end": 532
                }
              ],
              "start": 517,
              "end": 534
            },
            "start": 515,
            "end": 534
          },
          "start": 499,
          "end": 534
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 549
          },
          "typeArguments": null,
          "start": 537,
          "end": 549
        },
        "start": 535,
        "end": 549
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 564
            },
            "start": 552,
            "end": 564
          }
        ],
        "start": 550,
        "end": 566
      },
      "expression": false,
      "start": 473,
      "end": 566
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferenced",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 590
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 597
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 604
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 593,
              "end": 604
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 613
              },
              "typeArguments": null,
              "start": 608,
              "end": 613
            },
            "start": 606,
            "end": 613
          },
          "start": 591,
          "end": 613
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 615,
        "end": 619
      },
      "expression": false,
      "start": 568,
      "end": 619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedNestedAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 653
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 665
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 672
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 661,
                    "end": 672
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 674
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 656,
              "end": 674
            }
          ],
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 681
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 683,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 688
                    },
                    "start": 681,
                    "end": 688
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 680,
                  "end": 688
                }
              ],
              "start": 678,
              "end": 690
            },
            "start": 676,
            "end": 690
          },
          "start": 654,
          "end": 690
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 692,
        "end": 695
      },
      "expression": false,
      "start": 620,
      "end": 695
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedArrayAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 728
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
              "start": 730,
              "end": 731
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 734
            },
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 742
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 749
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 738,
                  "end": 749
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 751
            }
          ],
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
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 759
                },
                "typeArguments": null,
                "start": 754,
                "end": 759
              },
              "start": 754,
              "end": 761
            },
            "start": 752,
            "end": 761
          },
          "start": 729,
          "end": 761
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 763,
        "end": 766
      },
      "expression": false,
      "start": 696,
      "end": 766
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInCode",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 800
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 807
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 796,
              "end": 807
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 816
              },
              "typeArguments": null,
              "start": 811,
              "end": 816
            },
            "start": 809,
            "end": 816
          },
          "start": 794,
          "end": 816
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
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 836
            },
            "start": 824,
            "end": 837
          }
        ],
        "start": 818,
        "end": 839
      },
      "expression": false,
      "start": 768,
      "end": 839
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInSignarture",
        "optional": false,
        "typeAnnotation": null,
        "start": 850,
        "end": 872
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 879
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 886
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 875,
              "end": 886
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 895
              },
              "typeArguments": null,
              "start": 890,
              "end": 895
            },
            "start": 888,
            "end": 895
          },
          "start": 873,
          "end": 895
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 910
          },
          "typeArguments": null,
          "start": 898,
          "end": 910
        },
        "start": 896,
        "end": 910
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 929
            },
            "start": 917,
            "end": 930
          }
        ],
        "start": 911,
        "end": 932
      },
      "expression": false,
      "start": 841,
      "end": 932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInSignartureKeyword",
        "optional": false,
        "typeAnnotation": null,
        "start": 943,
        "end": 972
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "function",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 983
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 990
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 975,
              "end": 990
            }
          ],
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
                    "name": "function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 1004
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1006,
                      "end": 1012
                    },
                    "start": 1004,
                    "end": 1012
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 996,
                  "end": 1012
                }
              ],
              "start": 994,
              "end": 1014
            },
            "start": 992,
            "end": 1014
          },
          "start": 973,
          "end": 1014
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1029
          },
          "typeArguments": null,
          "start": 1017,
          "end": 1029
        },
        "start": 1015,
        "end": 1029
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1043,
                "end": 1047
              },
              "start": 1043,
              "end": 1048
            },
            "start": 1036,
            "end": 1049
          }
        ],
        "start": 1030,
        "end": 1051
      },
      "expression": false,
      "start": 934,
      "end": 1051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInInferredType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1086
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1089,
                "end": 1093
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 1095,
                "end": 1100
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1089,
              "end": 1100
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1109
              },
              "typeArguments": null,
              "start": 1104,
              "end": 1109
            },
            "start": 1102,
            "end": 1109
          },
          "start": 1087,
          "end": 1109
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1128
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1133,
                    "end": 1137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1151
                      },
                      "typeArguments": null,
                      "start": 1139,
                      "end": 1151
                    },
                    "start": 1137,
                    "end": 1151
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1133,
                  "end": 1151
                }
              ],
              "start": 1131,
              "end": 1153
            },
            "declare": false,
            "start": 1117,
            "end": 1153
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1165,
                  "end": 1169
                },
                "start": 1165,
                "end": 1170
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1180
                },
                "typeArguments": null,
                "start": 1174,
                "end": 1180
              },
              "start": 1165,
              "end": 1180
            },
            "start": 1158,
            "end": 1180
          }
        ],
        "start": 1111,
        "end": 1182
      },
      "expression": false,
      "start": 1053,
      "end": 1182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInNestedFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1219
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1226
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1233
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1222,
              "end": 1233
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1242
              },
              "typeArguments": null,
              "start": 1237,
              "end": 1242
            },
            "start": 1235,
            "end": 1242
          },
          "start": 1220,
          "end": 1242
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1281
                      },
                      "typeArguments": null,
                      "start": 1269,
                      "end": 1281
                    },
                    "start": 1267,
                    "end": 1281
                  },
                  "start": 1266,
                  "end": 1281
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1283,
                "end": 1291
              },
              "expression": false,
              "start": 1257,
              "end": 1291
            },
            "start": 1250,
            "end": 1291
          }
        ],
        "start": 1244,
        "end": 1293
      },
      "expression": false,
      "start": 1184,
      "end": 1293
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedNestedAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 1304,
        "end": 1325
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1329
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1333,
                      "end": 1337
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1344
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1333,
                    "end": 1344
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1346
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1328,
              "end": 1346
            }
          ],
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1353
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1355,
                        "end": 1360
                      },
                      "typeArguments": null,
                      "start": 1355,
                      "end": 1360
                    },
                    "start": 1353,
                    "end": 1360
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1352,
                  "end": 1360
                }
              ],
              "start": 1350,
              "end": 1362
            },
            "start": 1348,
            "end": 1362
          },
          "start": 1326,
          "end": 1362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1377
          },
          "typeArguments": null,
          "start": 1365,
          "end": 1377
        },
        "start": 1363,
        "end": 1377
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1393
            },
            "start": 1381,
            "end": 1394
          }
        ],
        "start": 1378,
        "end": 1396
      },
      "expression": false,
      "start": 1295,
      "end": 1396
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedArrayAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 1407,
        "end": 1427
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
              "start": 1429,
              "end": 1430
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1433
            },
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1437,
                    "end": 1441
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1448
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1437,
                  "end": 1448
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1450
            }
          ],
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
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1458
                },
                "typeArguments": null,
                "start": 1453,
                "end": 1458
              },
              "start": 1453,
              "end": 1460
            },
            "start": 1451,
            "end": 1460
          },
          "start": 1428,
          "end": 1460
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1470,
            "end": 1475
          },
          "typeArguments": null,
          "start": 1463,
          "end": 1475
        },
        "start": 1461,
        "end": 1475
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1486,
              "end": 1491
            },
            "start": 1479,
            "end": 1492
          }
        ],
        "start": 1476,
        "end": 1494
      },
      "expression": false,
      "start": 1398,
      "end": 1494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1521
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1525,
              "end": 1536
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1539,
                        "end": 1543
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1550
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1539,
                      "end": 1550
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1554,
                        "end": 1559
                      },
                      "typeArguments": null,
                      "start": 1554,
                      "end": 1559
                    },
                    "start": 1552,
                    "end": 1559
                  },
                  "start": 1537,
                  "end": 1559
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1561,
                "end": 1565
              },
              "expression": false,
              "start": 1536,
              "end": 1565
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1525,
            "end": 1565
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1572
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1575,
                        "end": 1579
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1575,
                      "end": 1586
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1595
                      },
                      "typeArguments": null,
                      "start": 1590,
                      "end": 1595
                    },
                    "start": 1588,
                    "end": 1595
                  },
                  "start": 1573,
                  "end": 1595
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1607,
                          "end": 1614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1615,
                          "end": 1618
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1607,
                        "end": 1618
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1624
                        }
                      ],
                      "optional": false,
                      "start": 1607,
                      "end": 1625
                    },
                    "directive": null,
                    "start": 1607,
                    "end": 1626
                  }
                ],
                "start": 1597,
                "end": 1632
              },
              "expression": false,
              "start": 1572,
              "end": 1632
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1567,
            "end": 1632
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1635
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1638,
                        "end": 1642
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1644,
                        "end": 1649
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1638,
                      "end": 1649
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1653,
                        "end": 1658
                      },
                      "typeArguments": null,
                      "start": 1653,
                      "end": 1658
                    },
                    "start": 1651,
                    "end": 1658
                  },
                  "start": 1636,
                  "end": 1658
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1670,
                          "end": 1677
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1678,
                          "end": 1681
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1670,
                        "end": 1681
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1682,
                          "end": 1687
                        }
                      ],
                      "optional": false,
                      "start": 1670,
                      "end": 1688
                    },
                    "directive": null,
                    "start": 1670,
                    "end": 1689
                  }
                ],
                "start": 1660,
                "end": 1695
              },
              "expression": false,
              "start": 1635,
              "end": 1695
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1634,
            "end": 1695
          }
        ],
        "start": 1522,
        "end": 1697
      },
      "abstract": false,
      "declare": false,
      "start": 1497,
      "end": 1697
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInCodeClas",
        "optional": false,
        "typeAnnotation": null,
        "start": 1705,
        "end": 1725
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1740
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1743,
                        "end": 1747
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1754
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1743,
                      "end": 1754
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1758,
                        "end": 1763
                      },
                      "typeArguments": null,
                      "start": 1758,
                      "end": 1763
                    },
                    "start": 1756,
                    "end": 1763
                  },
                  "start": 1741,
                  "end": 1763
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1769,
                          "end": 1776
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1777,
                          "end": 1780
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1769,
                        "end": 1780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1781,
                          "end": 1786
                        }
                      ],
                      "optional": false,
                      "start": 1769,
                      "end": 1787
                    },
                    "directive": null,
                    "start": 1769,
                    "end": 1788
                  }
                ],
                "start": 1765,
                "end": 1791
              },
              "expression": false,
              "start": 1740,
              "end": 1791
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1729,
            "end": 1791
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1797,
              "end": 1798
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1801,
                        "end": 1805
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1807,
                        "end": 1812
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1801,
                      "end": 1812
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1816,
                        "end": 1821
                      },
                      "typeArguments": null,
                      "start": 1816,
                      "end": 1821
                    },
                    "start": 1814,
                    "end": 1821
                  },
                  "start": 1799,
                  "end": 1821
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1833,
                          "end": 1840
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1844
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1833,
                        "end": 1844
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1845,
                          "end": 1850
                        }
                      ],
                      "optional": false,
                      "start": 1833,
                      "end": 1851
                    },
                    "directive": null,
                    "start": 1833,
                    "end": 1852
                  }
                ],
                "start": 1823,
                "end": 1858
              },
              "expression": false,
              "start": 1798,
              "end": 1858
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1793,
            "end": 1858
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1861
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1864,
                        "end": 1868
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1870,
                        "end": 1875
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1864,
                      "end": 1875
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1879,
                        "end": 1884
                      },
                      "typeArguments": null,
                      "start": 1879,
                      "end": 1884
                    },
                    "start": 1877,
                    "end": 1884
                  },
                  "start": 1862,
                  "end": 1884
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1896,
                          "end": 1903
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1904,
                          "end": 1907
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1896,
                        "end": 1907
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1913
                        }
                      ],
                      "optional": false,
                      "start": 1896,
                      "end": 1914
                    },
                    "directive": null,
                    "start": 1896,
                    "end": 1915
                  }
                ],
                "start": 1886,
                "end": 1921
              },
              "expression": false,
              "start": 1861,
              "end": 1921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1860,
            "end": 1921
          }
        ],
        "start": 1726,
        "end": 1923
      },
      "abstract": false,
      "declare": false,
      "start": 1699,
      "end": 1923
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1931,
        "end": 1958
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1962,
              "end": 1973
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1976,
                        "end": 1980
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1982,
                        "end": 1987
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1976,
                      "end": 1987
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1991,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "start": 1991,
                      "end": 1996
                    },
                    "start": 1989,
                    "end": 1996
                  },
                  "start": 1974,
                  "end": 1996
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2008,
                        "end": 2013
                      },
                      "typeArguments": null,
                      "start": 2001,
                      "end": 2013
                    },
                    "start": 1999,
                    "end": 2013
                  },
                  "start": 1998,
                  "end": 2013
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2019,
                          "end": 2026
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2027,
                          "end": 2030
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2019,
                        "end": 2030
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2031,
                          "end": 2036
                        }
                      ],
                      "optional": false,
                      "start": 2019,
                      "end": 2037
                    },
                    "directive": null,
                    "start": 2019,
                    "end": 2038
                  }
                ],
                "start": 2015,
                "end": 2041
              },
              "expression": false,
              "start": 1973,
              "end": 2041
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1962,
            "end": 2041
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2047,
              "end": 2048
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2055
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2057,
                        "end": 2062
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2051,
                      "end": 2062
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Named",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2066,
                            "end": 2071
                          },
                          "typeArguments": null,
                          "start": 2066,
                          "end": 2071
                        },
                        {
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
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2076,
                                "end": 2077
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "alias",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2086,
                                    "end": 2091
                                  },
                                  "typeArguments": null,
                                  "start": 2079,
                                  "end": 2091
                                },
                                "start": 2077,
                                "end": 2091
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 2076,
                              "end": 2091
                            }
                          ],
                          "start": 2074,
                          "end": 2093
                        }
                      ],
                      "start": 2066,
                      "end": 2093
                    },
                    "start": 2064,
                    "end": 2093
                  },
                  "start": 2049,
                  "end": 2093
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2095,
                "end": 2111
              },
              "expression": false,
              "start": 2048,
              "end": 2111
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2043,
            "end": 2111
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2124
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2131
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2138
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2127,
                      "end": 2138
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2142,
                        "end": 2147
                      },
                      "typeArguments": null,
                      "start": 2142,
                      "end": 2147
                    },
                    "start": 2140,
                    "end": 2147
                  },
                  "start": 2125,
                  "end": 2147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2157,
                    "end": 2162
                  },
                  "typeArguments": null,
                  "start": 2150,
                  "end": 2162
                },
                "start": 2148,
                "end": 2162
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2180,
                        "end": 2184
                      },
                      "start": 2180,
                      "end": 2185
                    },
                    "start": 2173,
                    "end": 2185
                  }
                ],
                "start": 2163,
                "end": 2191
              },
              "expression": false,
              "start": 2124,
              "end": 2191
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2113,
            "end": 2191
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mRerturnTypeNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2211
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2214,
                        "end": 2218
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2220,
                        "end": 2225
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2214,
                      "end": 2225
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2229,
                        "end": 2234
                      },
                      "typeArguments": null,
                      "start": 2229,
                      "end": 2234
                    },
                    "start": 2227,
                    "end": 2234
                  },
                  "start": 2212,
                  "end": 2234
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2237,
                    "end": 2248
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2256,
                          "end": 2261
                        },
                        "typeArguments": null,
                        "start": 2249,
                        "end": 2261
                      }
                    ],
                    "start": 2248,
                    "end": 2262
                  },
                  "start": 2237,
                  "end": 2262
                },
                "start": 2235,
                "end": 2262
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2280,
                        "end": 2284
                      },
                      "start": 2280,
                      "end": 2285
                    },
                    "start": 2273,
                    "end": 2285
                  }
                ],
                "start": 2263,
                "end": 2291
              },
              "expression": false,
              "start": 2211,
              "end": 2291
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2193,
            "end": 2291
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2306
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2309,
                        "end": 2313
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2315,
                        "end": 2320
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2309,
                      "end": 2320
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2324,
                        "end": 2329
                      },
                      "typeArguments": null,
                      "start": 2324,
                      "end": 2329
                    },
                    "start": 2322,
                    "end": 2329
                  },
                  "start": 2307,
                  "end": 2329
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2341,
                        "end": 2346
                      },
                      "typeArguments": null,
                      "start": 2334,
                      "end": 2346
                    },
                    "start": 2332,
                    "end": 2346
                  },
                  "start": 2331,
                  "end": 2346
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2365,
                        "end": 2369
                      },
                      "start": 2365,
                      "end": 2370
                    },
                    "start": 2358,
                    "end": 2370
                  }
                ],
                "start": 2348,
                "end": 2376
              },
              "expression": false,
              "start": 2306,
              "end": 2376
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2296,
            "end": 2376
          }
        ],
        "start": 1959,
        "end": 2378
      },
      "abstract": false,
      "declare": false,
      "start": 1925,
      "end": 2378
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notReferencedFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2408,
                          "end": 2412
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2414,
                          "end": 2419
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2408,
                        "end": 2419
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2423,
                          "end": 2428
                        },
                        "typeArguments": null,
                        "start": 2423,
                        "end": 2428
                      },
                      "start": 2421,
                      "end": 2428
                    },
                    "start": 2406,
                    "end": 2428
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2433,
                    "end": 2437
                  },
                  "start": 2430,
                  "end": 2437
                },
                "start": 2405,
                "end": 2437
              },
              "start": 2403,
              "end": 2437
            },
            "start": 2384,
            "end": 2437
          },
          "init": null,
          "definite": false,
          "start": 2384,
          "end": 2437
        }
      ],
      "declare": false,
      "start": 2380,
      "end": 2438
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureReturnTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2486,
                          "end": 2490
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2492,
                          "end": 2497
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2486,
                        "end": 2497
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2501,
                          "end": 2506
                        },
                        "typeArguments": null,
                        "start": 2501,
                        "end": 2506
                      },
                      "start": 2499,
                      "end": 2506
                    },
                    "start": 2484,
                    "end": 2506
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2518,
                      "end": 2523
                    },
                    "typeArguments": null,
                    "start": 2511,
                    "end": 2523
                  },
                  "start": 2508,
                  "end": 2523
                },
                "start": 2483,
                "end": 2523
              },
              "start": 2481,
              "end": 2523
            },
            "start": 2443,
            "end": 2523
          },
          "init": null,
          "definite": false,
          "start": 2443,
          "end": 2523
        }
      ],
      "declare": false,
      "start": 2439,
      "end": 2524
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureParamTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2571,
                          "end": 2575
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2577,
                          "end": 2582
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2571,
                        "end": 2582
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2586,
                          "end": 2591
                        },
                        "typeArguments": null,
                        "start": 2586,
                        "end": 2591
                      },
                      "start": 2584,
                      "end": 2591
                    },
                    "start": 2569,
                    "end": 2591
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2603,
                          "end": 2608
                        },
                        "typeArguments": null,
                        "start": 2596,
                        "end": 2608
                      },
                      "start": 2594,
                      "end": 2608
                    },
                    "start": 2593,
                    "end": 2608
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2613,
                    "end": 2617
                  },
                  "start": 2610,
                  "end": 2617
                },
                "start": 2568,
                "end": 2617
              },
              "start": 2566,
              "end": 2617
            },
            "start": 2529,
            "end": 2617
          },
          "init": null,
          "definite": false,
          "start": 2529,
          "end": 2617
        }
      ],
      "declare": false,
      "start": 2525,
      "end": 2618
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notReferencedCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2654,
                          "end": 2658
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2660,
                          "end": 2665
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2654,
                        "end": 2665
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2669,
                          "end": 2674
                        },
                        "typeArguments": null,
                        "start": 2669,
                        "end": 2674
                      },
                      "start": 2667,
                      "end": 2674
                    },
                    "start": 2652,
                    "end": 2674
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2679,
                    "end": 2683
                  },
                  "start": 2676,
                  "end": 2683
                },
                "start": 2647,
                "end": 2683
              },
              "start": 2645,
              "end": 2683
            },
            "start": 2624,
            "end": 2683
          },
          "init": null,
          "definite": false,
          "start": 2624,
          "end": 2683
        }
      ],
      "declare": false,
      "start": 2620,
      "end": 2684
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureReturnTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2738,
                          "end": 2742
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2744,
                          "end": 2749
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2738,
                        "end": 2749
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2753,
                          "end": 2758
                        },
                        "typeArguments": null,
                        "start": 2753,
                        "end": 2758
                      },
                      "start": 2751,
                      "end": 2758
                    },
                    "start": 2736,
                    "end": 2758
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2775
                    },
                    "typeArguments": null,
                    "start": 2763,
                    "end": 2775
                  },
                  "start": 2760,
                  "end": 2775
                },
                "start": 2731,
                "end": 2775
              },
              "start": 2729,
              "end": 2775
            },
            "start": 2689,
            "end": 2775
          },
          "init": null,
          "definite": false,
          "start": 2689,
          "end": 2775
        }
      ],
      "declare": false,
      "start": 2685,
      "end": 2776
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureParamTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2830,
                          "end": 2834
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2836,
                          "end": 2841
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2830,
                        "end": 2841
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2845,
                          "end": 2850
                        },
                        "typeArguments": null,
                        "start": 2845,
                        "end": 2850
                      },
                      "start": 2843,
                      "end": 2850
                    },
                    "start": 2828,
                    "end": 2850
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2862,
                          "end": 2867
                        },
                        "typeArguments": null,
                        "start": 2855,
                        "end": 2867
                      },
                      "start": 2853,
                      "end": 2867
                    },
                    "start": 2852,
                    "end": 2867
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2872,
                    "end": 2876
                  },
                  "start": 2869,
                  "end": 2876
                },
                "start": 2822,
                "end": 2876
              },
              "start": 2820,
              "end": 2876
            },
            "start": 2781,
            "end": 2876
          },
          "init": null,
          "definite": false,
          "start": 2781,
          "end": 2876
        }
      ],
      "declare": false,
      "start": 2777,
      "end": 2877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2890,
        "end": 2912
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2919,
                      "end": 2923
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2925,
                      "end": 2930
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2919,
                    "end": 2930
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2934,
                      "end": 2939
                    },
                    "typeArguments": null,
                    "start": 2934,
                    "end": 2939
                  },
                  "start": 2932,
                  "end": 2939
                },
                "start": 2917,
                "end": 2939
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2942,
                "end": 2946
              },
              "start": 2940,
              "end": 2946
            },
            "start": 2916,
            "end": 2946
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2955,
                      "end": 2959
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2961,
                      "end": 2966
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2955,
                    "end": 2966
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2970,
                      "end": 2975
                    },
                    "typeArguments": null,
                    "start": 2970,
                    "end": 2975
                  },
                  "start": 2968,
                  "end": 2975
                },
                "start": 2953,
                "end": 2975
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2978,
                "end": 2982
              },
              "start": 2976,
              "end": 2982
            },
            "start": 2948,
            "end": 2982
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2988,
              "end": 2989
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2992,
                      "end": 2996
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2998,
                      "end": 3003
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2992,
                    "end": 3003
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3007,
                      "end": 3012
                    },
                    "typeArguments": null,
                    "start": 3007,
                    "end": 3012
                  },
                  "start": 3005,
                  "end": 3012
                },
                "start": 2990,
                "end": 3012
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2984,
            "end": 3014
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3017
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3020,
                      "end": 3024
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3026,
                      "end": 3031
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3020,
                    "end": 3031
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3035,
                      "end": 3040
                    },
                    "typeArguments": null,
                    "start": 3035,
                    "end": 3040
                  },
                  "start": 3033,
                  "end": 3040
                },
                "start": 3018,
                "end": 3040
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3016,
            "end": 3042
          }
        ],
        "start": 2913,
        "end": 3044
      },
      "declare": false,
      "start": 2880,
      "end": 3044
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 3056,
        "end": 3087
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3094,
                      "end": 3098
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3100,
                      "end": 3105
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3094,
                    "end": 3105
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3109,
                      "end": 3114
                    },
                    "typeArguments": null,
                    "start": 3109,
                    "end": 3114
                  },
                  "start": 3107,
                  "end": 3114
                },
                "start": 3092,
                "end": 3114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3126,
                      "end": 3131
                    },
                    "typeArguments": null,
                    "start": 3119,
                    "end": 3131
                  },
                  "start": 3117,
                  "end": 3131
                },
                "start": 3116,
                "end": 3131
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3134,
                "end": 3138
              },
              "start": 3132,
              "end": 3138
            },
            "start": 3091,
            "end": 3138
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3143,
                      "end": 3147
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3149,
                      "end": 3154
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3143,
                    "end": 3154
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3158,
                      "end": 3163
                    },
                    "typeArguments": null,
                    "start": 3158,
                    "end": 3163
                  },
                  "start": 3156,
                  "end": 3163
                },
                "start": 3141,
                "end": 3163
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3173,
                  "end": 3178
                },
                "typeArguments": null,
                "start": 3166,
                "end": 3178
              },
              "start": 3164,
              "end": 3178
            },
            "start": 3140,
            "end": 3178
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3189,
                      "end": 3193
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3195,
                      "end": 3200
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3189,
                    "end": 3200
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3204,
                      "end": 3209
                    },
                    "typeArguments": null,
                    "start": 3204,
                    "end": 3209
                  },
                  "start": 3202,
                  "end": 3209
                },
                "start": 3187,
                "end": 3209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3221,
                      "end": 3226
                    },
                    "typeArguments": null,
                    "start": 3214,
                    "end": 3226
                  },
                  "start": 3212,
                  "end": 3226
                },
                "start": 3211,
                "end": 3226
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3229,
                "end": 3233
              },
              "start": 3227,
              "end": 3233
            },
            "start": 3182,
            "end": 3233
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3242,
                      "end": 3246
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3248,
                      "end": 3253
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3242,
                    "end": 3253
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3257,
                      "end": 3262
                    },
                    "typeArguments": null,
                    "start": 3257,
                    "end": 3262
                  },
                  "start": 3255,
                  "end": 3262
                },
                "start": 3240,
                "end": 3262
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3272,
                  "end": 3277
                },
                "typeArguments": null,
                "start": 3265,
                "end": 3277
              },
              "start": 3263,
              "end": 3277
            },
            "start": 3235,
            "end": 3277
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3283,
              "end": 3284
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3287,
                      "end": 3291
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3293,
                      "end": 3298
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3287,
                    "end": 3298
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3302,
                          "end": 3307
                        },
                        "typeArguments": null,
                        "start": 3302,
                        "end": 3307
                      },
                      {
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
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3312,
                              "end": 3313
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "alias",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3322,
                                  "end": 3327
                                },
                                "typeArguments": null,
                                "start": 3315,
                                "end": 3327
                              },
                              "start": 3313,
                              "end": 3327
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3312,
                            "end": 3327
                          }
                        ],
                        "start": 3310,
                        "end": 3329
                      }
                    ],
                    "start": 3302,
                    "end": 3329
                  },
                  "start": 3300,
                  "end": 3329
                },
                "start": 3285,
                "end": 3329
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3279,
            "end": 3330
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3332,
              "end": 3343
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3346,
                      "end": 3350
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3357
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3346,
                    "end": 3357
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3361,
                      "end": 3366
                    },
                    "typeArguments": null,
                    "start": 3361,
                    "end": 3366
                  },
                  "start": 3359,
                  "end": 3366
                },
                "start": 3344,
                "end": 3366
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3376,
                  "end": 3381
                },
                "typeArguments": null,
                "start": 3369,
                "end": 3381
              },
              "start": 3367,
              "end": 3381
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3332,
            "end": 3382
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mRerturnTypeNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 3384,
              "end": 3402
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3405,
                      "end": 3409
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3411,
                      "end": 3416
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3405,
                    "end": 3416
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3420,
                      "end": 3425
                    },
                    "typeArguments": null,
                    "start": 3420,
                    "end": 3425
                  },
                  "start": 3418,
                  "end": 3425
                },
                "start": 3403,
                "end": 3425
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3428,
                  "end": 3439
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3447,
                        "end": 3452
                      },
                      "typeArguments": null,
                      "start": 3440,
                      "end": 3452
                    }
                  ],
                  "start": 3439,
                  "end": 3453
                },
                "start": 3428,
                "end": 3453
              },
              "start": 3426,
              "end": 3453
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3384,
            "end": 3454
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 3459,
              "end": 3469
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3472,
                      "end": 3476
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3478,
                      "end": 3483
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3472,
                    "end": 3483
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3487,
                      "end": 3492
                    },
                    "typeArguments": null,
                    "start": 3487,
                    "end": 3492
                  },
                  "start": 3485,
                  "end": 3492
                },
                "start": 3470,
                "end": 3492
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3504,
                      "end": 3509
                    },
                    "typeArguments": null,
                    "start": 3497,
                    "end": 3509
                  },
                  "start": 3495,
                  "end": 3509
                },
                "start": 3494,
                "end": 3509
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3459,
            "end": 3511
          }
        ],
        "start": 3088,
        "end": 3513
      },
      "declare": false,
      "start": 3046,
      "end": 3513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3513
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "duplicateIndetifiers",
    "start": 173,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "alias2",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "duplicateIndetifiers2",
    "start": 245,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 289,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "duplicateIndetifiers3",
    "start": 318,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "name",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "alias2",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 473,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "shadowedVariable",
    "start": 482,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 537,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 552,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 559,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 568,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "notReferenced",
    "start": 577,
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
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 620,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "notReferencedNestedAlias",
    "start": 629,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 696,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "notReferencedArrayAlias",
    "start": 705,
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
    "value": "[",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 744,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "referencedInCode",
    "start": 777,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 824,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 831,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 841,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "referencedInSignarture",
    "start": 850,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 875,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 898,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 917,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 924,
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
    "type": "Keyword",
    "value": "function",
    "start": 934,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "referencedInSignartureKeyword",
    "start": 943,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "function",
    "start": 975,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 985,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "function",
    "start": 996,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1006,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1024,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1053,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "referencedInInferredType",
    "start": 1062,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1089,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1095,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1117,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "Named2",
    "start": 1122,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1158,
    "end": 1164
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1171,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "Named2",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1184,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "referencedInNestedFunction",
    "start": 1193,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1222,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1228,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1257,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1295,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "referencedNestedAlias",
    "start": 1304,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1388,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1398,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "referencedArrayAlias",
    "start": 1407,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1437,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Named",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1470,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1479,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1486,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1497,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "NotReferencedClass",
    "start": 1503,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1525,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1539,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1545,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1575,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1590,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1607,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1619,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1638,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1644,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "Named",
    "start": 1653,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1670,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1699,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "ReferencedInCodeClas",
    "start": 1705,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1729,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1743,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1749,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1758,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1769,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1864,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1870,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1879,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1896,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1908,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1925,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "ReferencedInSignartureClass",
    "start": 1931,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1962,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 1982,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1991,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2019,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2031,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2043,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2051,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2057,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "o",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2079,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2086,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "mReturnType",
    "start": 2113,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2127,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2133,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2142,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2150,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2157,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2173,
    "end": 2179
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2180,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "mRerturnTypeNested",
    "start": 2193,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2214,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2229,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 2237,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2249,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2256,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2273,
    "end": 2279
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2280,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "mParameter",
    "start": 2296,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2309,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2315,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2324,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2334,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2341,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2358,
    "end": 2364
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2365,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2380,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "notReferencedFnType",
    "start": 2384,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2408,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2414,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2423,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2430,
    "end": 2432
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2433,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2439,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "referencedInSignartureReturnTypeFnType",
    "start": 2443,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2492,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2501,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2508,
    "end": 2510
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2511,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2518,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2525,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "referencedInSignartureParamTypeFnType",
    "start": 2529,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2571,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2577,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2586,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2596,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2603,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2610,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2613,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2620,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "notReferencedCtorType",
    "start": 2624,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2654,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2660,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2669,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2676,
    "end": 2678
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2679,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2685,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "referencedInSignartureReturnTypeCtorType",
    "start": 2689,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2731,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2738,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2744,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2753,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2760,
    "end": 2762
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2763,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2770,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2777,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "referencedInSignartureParamTypeCtorType",
    "start": 2781,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2822,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2830,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2845,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2855,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2862,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2869,
    "end": 2871
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2872,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2880,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "NotReferencedInterface",
    "start": 2890,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2919,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2925,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2934,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2942,
    "end": 2946
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2948,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2955,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2961,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 2970,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2978,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2984,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2992,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 2998,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3007,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3020,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3026,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3035,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3046,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "ReferencedInSignartureInterface",
    "start": 3056,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3094,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3100,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3109,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3119,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3126,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3134,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3143,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3149,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3158,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3166,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3173,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3182,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3189,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3195,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3204,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3214,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3221,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3229,
    "end": 3233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3235,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3242,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3248,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3257,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3265,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3272,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3279,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3287,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3293,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3302,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3315,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3322,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "mReturnType",
    "start": 3332,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3346,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3352,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3361,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3369,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3376,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "mRerturnTypeNested",
    "start": 3384,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3405,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3411,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3420,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 3428,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3440,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3447,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "mParameter",
    "start": 3459,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3472,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3478,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 3487,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3497,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 3504,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3512,
    "end": 3513
  }
]
```

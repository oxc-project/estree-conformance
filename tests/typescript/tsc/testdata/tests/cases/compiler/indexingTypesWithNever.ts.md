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
        "name": "TestObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 42
          }
        ],
        "start": 15,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 99
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 109
          },
          "typeArguments": null,
          "start": 102,
          "end": 109
        },
        "indexType": {
          "type": "TSNeverKeyword",
          "start": 110,
          "end": 115
        },
        "start": 102,
        "end": 116
      },
      "declare": false,
      "start": 87,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 132
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 135,
        "end": 137
      },
      "declare": false,
      "start": 119,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EmptyObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 203
          },
          "typeArguments": null,
          "start": 195,
          "end": 203
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptyObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 218
            },
            "typeArguments": null,
            "start": 210,
            "end": 218
          },
          "start": 204,
          "end": 218
        },
        "start": 195,
        "end": 219
      },
      "declare": false,
      "start": 180,
      "end": 220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 249
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
              "start": 250,
              "end": 251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 251
          }
        ],
        "start": 249,
        "end": 252
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 258,
                "end": 259
              },
              "typeArguments": null,
              "start": 258,
              "end": 259
            },
            "start": 256,
            "end": 259
          },
          "start": 253,
          "end": 259
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "typeArguments": null,
            "start": 262,
            "end": 263
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 264,
            "end": 269
          },
          "start": 262,
          "end": 270
        },
        "start": 260,
        "end": 270
      },
      "body": null,
      "expression": false,
      "start": 222,
      "end": 271
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 305
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 318
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 322
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ctest",
                      "raw": "\"ctest\"",
                      "start": 324,
                      "end": 331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 321,
                    "end": 331
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 334
                    },
                    "value": {
                      "type": "Literal",
                      "value": "dtest",
                      "raw": "\"dtest\"",
                      "start": 336,
                      "end": 343
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 333,
                    "end": 343
                  }
                ],
                "start": 319,
                "end": 345
              }
            ],
            "optional": false,
            "start": 308,
            "end": 346
          },
          "definite": false,
          "start": 298,
          "end": 346
        }
      ],
      "declare": false,
      "start": 292,
      "end": 347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ind",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 395,
                          "end": 401
                        },
                        "start": 393,
                        "end": 401
                      },
                      "start": 390,
                      "end": 401
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 404,
                      "end": 410
                    },
                    "start": 402,
                    "end": 410
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 389,
                  "end": 410
                }
              ],
              "start": 387,
              "end": 412
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 412
          }
        ],
        "start": 376,
        "end": 413
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            },
            "start": 420,
            "end": 423
          },
          "start": 417,
          "end": 423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "typeArguments": null,
            "start": 427,
            "end": 428
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 429,
            "end": 434
          },
          "start": 427,
          "end": 435
        },
        "start": 425,
        "end": 435
      },
      "body": null,
      "expression": false,
      "start": 349,
      "end": 436
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 470
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 487
                    },
                    "value": {
                      "type": "Literal",
                      "value": "etest",
                      "raw": "\"etest\"",
                      "start": 489,
                      "end": 496
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 486,
                    "end": 496
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ftest",
                      "raw": "\"ftest\"",
                      "start": 501,
                      "end": 508
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 498,
                    "end": 508
                  }
                ],
                "start": 484,
                "end": 510
              }
            ],
            "optional": false,
            "start": 473,
            "end": 511
          },
          "definite": false,
          "start": 463,
          "end": 511
        }
      ],
      "declare": false,
      "start": 457,
      "end": 512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 541
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
              "start": 545,
              "end": 546
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
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
                    "start": 569,
                    "end": 570
                  },
                  "typeArguments": null,
                  "start": 569,
                  "end": 570
                },
                "start": 563,
                "end": 570
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 574
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 576
                  },
                  "typeArguments": null,
                  "start": 575,
                  "end": 576
                },
                "start": 573,
                "end": 577
              },
              "optional": false,
              "readonly": null,
              "start": 555,
              "end": 579
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 545,
            "end": 579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
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
                  "start": 599,
                  "end": 600
                },
                "typeArguments": null,
                "start": 599,
                "end": 600
              },
              "start": 593,
              "end": 600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 600
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
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
                  "start": 620,
                  "end": 621
                },
                "typeArguments": null,
                "start": 620,
                "end": 621
              },
              "start": 614,
              "end": 621
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 604,
            "end": 621
          }
        ],
        "start": 541,
        "end": 623
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 629,
                "end": 630
              },
              "typeArguments": null,
              "start": 629,
              "end": 630
            },
            "start": 627,
            "end": 630
          },
          "start": 624,
          "end": 630
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 635,
              "end": 636
            },
            "start": 633,
            "end": 636
          },
          "start": 632,
          "end": 636
        },
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
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "typeArguments": null,
              "start": 641,
              "end": 642
            },
            "start": 639,
            "end": 642
          },
          "start": 638,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "typeArguments": null,
            "start": 645,
            "end": 646
          },
          "indexType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 648
                },
                "typeArguments": null,
                "start": 647,
                "end": 648
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 652
                },
                "typeArguments": null,
                "start": 651,
                "end": 652
              }
            ],
            "start": 647,
            "end": 652
          },
          "start": 645,
          "end": 653
        },
        "start": 643,
        "end": 653
      },
      "body": null,
      "expression": false,
      "start": 514,
      "end": 654
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 688
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 701
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 705
                    },
                    "value": {
                      "type": "Literal",
                      "value": "gtest",
                      "raw": "\"gtest\"",
                      "start": 707,
                      "end": 714
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 704,
                    "end": 714
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 717
                    },
                    "value": {
                      "type": "Literal",
                      "value": "htest",
                      "raw": "\"htest\"",
                      "start": 719,
                      "end": 726
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 716,
                    "end": 726
                  }
                ],
                "start": 702,
                "end": 728
              },
              {
                "type": "Literal",
                "value": "g",
                "raw": "\"g\"",
                "start": 730,
                "end": 733
              },
              {
                "type": "Literal",
                "value": "h",
                "raw": "\"h\"",
                "start": 735,
                "end": 738
              }
            ],
            "optional": false,
            "start": 691,
            "end": 739
          },
          "definite": false,
          "start": 681,
          "end": 739
        }
      ],
      "declare": false,
      "start": 675,
      "end": 740
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
            "name": "obj",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 798
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 800,
                        "end": 806
                      },
                      "start": 798,
                      "end": 806
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 797,
                    "end": 807
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 809
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 811,
                        "end": 817
                      },
                      "start": 809,
                      "end": 817
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 808,
                    "end": 817
                  }
                ],
                "start": 796,
                "end": 818
              },
              "start": 794,
              "end": 818
            },
            "start": 791,
            "end": 818
          },
          "init": null,
          "definite": false,
          "start": 791,
          "end": 818
        }
      ],
      "declare": true,
      "start": 777,
      "end": 818
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
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 838,
                "end": 843
              },
              "start": 836,
              "end": 843
            },
            "start": 833,
            "end": 843
          },
          "init": null,
          "definite": false,
          "start": 833,
          "end": 843
        }
      ],
      "declare": true,
      "start": 819,
      "end": 843
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 858
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 864
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 868
            },
            "optional": false,
            "computed": true,
            "start": 861,
            "end": 869
          },
          "definite": false,
          "start": 851,
          "end": 869
        }
      ],
      "declare": false,
      "start": 845,
      "end": 869
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredPropNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 972
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
              "start": 973,
              "end": 974
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 973,
            "end": 974
          }
        ],
        "start": 972,
        "end": 975
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 984
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
                "start": 994,
                "end": 995
              },
              "typeArguments": null,
              "start": 994,
              "end": 995
            },
            "start": 988,
            "end": 995
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1000,
              "end": 1009
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1019
                },
                "typeArguments": null,
                "start": 1018,
                "end": 1019
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "typeArguments": null,
                "start": 1020,
                "end": 1021
              },
              "start": 1018,
              "end": 1022
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1025,
              "end": 1030
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "typeArguments": null,
              "start": 1033,
              "end": 1034
            },
            "start": 1000,
            "end": 1034
          },
          "optional": "-",
          "readonly": null,
          "start": 978,
          "end": 1036
        },
        "indexType": {
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
              "start": 1043,
              "end": 1044
            },
            "typeArguments": null,
            "start": 1043,
            "end": 1044
          },
          "start": 1037,
          "end": 1044
        },
        "start": 978,
        "end": 1045
      },
      "declare": false,
      "start": 950,
      "end": 1046
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalPropNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1070
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
              "start": 1071,
              "end": 1072
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1071,
            "end": 1072
          }
        ],
        "start": 1070,
        "end": 1073
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1082
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
                "start": 1092,
                "end": 1093
              },
              "typeArguments": null,
              "start": 1092,
              "end": 1093
            },
            "start": 1086,
            "end": 1093
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1098,
              "end": 1107
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1116,
                  "end": 1117
                },
                "typeArguments": null,
                "start": 1116,
                "end": 1117
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1119
                },
                "typeArguments": null,
                "start": 1118,
                "end": 1119
              },
              "start": 1116,
              "end": 1120
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1124
              },
              "typeArguments": null,
              "start": 1123,
              "end": 1124
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1127,
              "end": 1132
            },
            "start": 1098,
            "end": 1132
          },
          "optional": "-",
          "readonly": null,
          "start": 1076,
          "end": 1134
        },
        "indexType": {
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
              "start": 1141,
              "end": 1142
            },
            "typeArguments": null,
            "start": 1141,
            "end": 1142
          },
          "start": 1135,
          "end": 1142
        },
        "start": 1076,
        "end": 1143
      },
      "declare": false,
      "start": 1048,
      "end": 1144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1164
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
              "start": 1165,
              "end": 1166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1165,
            "end": 1166
          }
        ],
        "start": 1164,
        "end": 1167
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1174
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequiredPropNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1178,
            "end": 1195
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
                  "start": 1196,
                  "end": 1197
                },
                "typeArguments": null,
                "start": 1196,
                "end": 1197
              }
            ],
            "start": 1195,
            "end": 1198
          },
          "start": 1178,
          "end": 1198
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1202
            },
            "typeArguments": null,
            "start": 1201,
            "end": 1202
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "typeArguments": null,
            "start": 1203,
            "end": 1204
          },
          "start": 1201,
          "end": 1205
        },
        "optional": false,
        "readonly": null,
        "start": 1170,
        "end": 1207
      },
      "declare": false,
      "start": 1146,
      "end": 1208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
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
              "start": 1228,
              "end": 1229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1228,
            "end": 1229
          }
        ],
        "start": 1227,
        "end": 1230
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1237
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OptionalPropNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1241,
            "end": 1258
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
                  "start": 1259,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1259,
                "end": 1260
              }
            ],
            "start": 1258,
            "end": 1261
          },
          "start": 1241,
          "end": 1261
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1266
            },
            "typeArguments": null,
            "start": 1265,
            "end": 1266
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "typeArguments": null,
            "start": 1267,
            "end": 1268
          },
          "start": 1265,
          "end": 1269
        },
        "optional": true,
        "readonly": null,
        "start": 1233,
        "end": 1271
      },
      "declare": false,
      "start": 1209,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Match",
        "optional": false,
        "typeAnnotation": null,
        "start": 1279,
        "end": 1284
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1285,
            "end": 1288
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Act",
              "optional": false,
              "typeAnnotation": null,
              "start": 1290,
              "end": 1293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1290,
            "end": 1293
          }
        ],
        "start": 1284,
        "end": 1294
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1301
              },
              "typeArguments": null,
              "start": 1298,
              "end": 1301
            }
          ],
          "start": 1297,
          "end": 1302
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Act",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1315
              },
              "typeArguments": null,
              "start": 1312,
              "end": 1315
            }
          ],
          "start": 1311,
          "end": 1316
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1323,
                "end": 1326
              }
            ],
            "start": 1322,
            "end": 1327
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1337,
                  "end": 1340
                },
                "typeArguments": null,
                "start": 1337,
                "end": 1340
              }
            ],
            "start": 1336,
            "end": 1341
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Match",
              "raw": "\"Match\"",
              "start": 1344,
              "end": 1351
            },
            "start": 1344,
            "end": 1351
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Did not match 2",
              "raw": "\"Did not match 2\"",
              "start": 1354,
              "end": 1371
            },
            "start": 1354,
            "end": 1371
          },
          "start": 1322,
          "end": 1371
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Did not match 1",
            "raw": "\"Did not match 1\"",
            "start": 1377,
            "end": 1394
          },
          "start": 1377,
          "end": 1394
        },
        "start": 1297,
        "end": 1394
      },
      "declare": false,
      "start": 1274,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1412
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1413,
            "end": 1416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Act",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1418,
            "end": 1421
          }
        ],
        "start": 1412,
        "end": 1422
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Match",
            "optional": false,
            "typeAnnotation": null,
            "start": 1425,
            "end": 1430
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1434
                },
                "typeArguments": null,
                "start": 1431,
                "end": 1434
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1436,
                  "end": 1439
                },
                "typeArguments": null,
                "start": 1436,
                "end": 1439
              }
            ],
            "start": 1430,
            "end": 1440
          },
          "start": 1425,
          "end": 1440
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Match",
            "raw": "\"Match\"",
            "start": 1449,
            "end": 1456
          },
          "start": 1449,
          "end": 1456
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 1462,
            "end": 1464
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1473,
              "end": 1476
            },
            "typeArguments": null,
            "start": 1473,
            "end": 1476
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1484
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1485,
                    "end": 1493
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1497
                        },
                        "typeArguments": null,
                        "start": 1494,
                        "end": 1497
                      }
                    ],
                    "start": 1493,
                    "end": 1498
                  },
                  "start": 1485,
                  "end": 1498
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1500,
                    "end": 1508
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Act",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1509,
                          "end": 1512
                        },
                        "typeArguments": null,
                        "start": 1509,
                        "end": 1512
                      }
                    ],
                    "start": 1508,
                    "end": 1513
                  },
                  "start": 1500,
                  "end": 1513
                }
              ],
              "start": 1484,
              "end": 1514
            },
            "start": 1479,
            "end": 1514
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Match",
              "raw": "\"Match\"",
              "start": 1517,
              "end": 1524
            },
            "start": 1517,
            "end": 1524
          },
          "start": 1462,
          "end": 1524
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Did not match",
            "raw": "\"Did not match\"",
            "start": 1530,
            "end": 1545
          },
          "start": 1530,
          "end": 1545
        },
        "start": 1425,
        "end": 1545
      },
      "declare": false,
      "start": 1397,
      "end": 1546
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1555
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1561
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1563,
                "end": 1569
              },
              "start": 1561,
              "end": 1569
            },
            "accessibility": null,
            "static": false,
            "start": 1560,
            "end": 1570
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1572
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1574,
                "end": 1580
              },
              "start": 1572,
              "end": 1580
            },
            "accessibility": null,
            "static": false,
            "start": 1571,
            "end": 1581
          },
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
              "start": 1582,
              "end": 1583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1586,
                "end": 1593
              },
              "start": 1584,
              "end": 1593
            },
            "accessibility": null,
            "static": false,
            "start": 1582,
            "end": 1593
          }
        ],
        "start": 1558,
        "end": 1595
      },
      "declare": false,
      "start": 1548,
      "end": 1596
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1602,
        "end": 1604
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1610
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1612,
                "end": 1618
              },
              "start": 1610,
              "end": 1618
            },
            "accessibility": null,
            "static": false,
            "start": 1609,
            "end": 1619
          },
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
              "start": 1620,
              "end": 1621
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1624,
                "end": 1631
              },
              "start": 1622,
              "end": 1631
            },
            "accessibility": null,
            "static": false,
            "start": 1620,
            "end": 1631
          }
        ],
        "start": 1607,
        "end": 1633
      },
      "declare": false,
      "start": 1597,
      "end": 1634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1642
      },
      "typeParameters": null,
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
              "start": 1647,
              "end": 1648
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1651,
                "end": 1658
              },
              "start": 1649,
              "end": 1658
            },
            "accessibility": null,
            "static": false,
            "start": 1647,
            "end": 1658
          }
        ],
        "start": 1645,
        "end": 1660
      },
      "declare": false,
      "start": 1635,
      "end": 1661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1669
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 1672,
        "end": 1674
      },
      "declare": false,
      "start": 1662,
      "end": 1675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1682,
        "end": 1689
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1692,
          "end": 1709
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1712
              },
              "typeArguments": null,
              "start": 1710,
              "end": 1712
            }
          ],
          "start": 1709,
          "end": 1713
        },
        "start": 1692,
        "end": 1713
      },
      "declare": false,
      "start": 1677,
      "end": 1714
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1740,
        "end": 1747
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1750,
          "end": 1767
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1770
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1770
            }
          ],
          "start": 1767,
          "end": 1771
        },
        "start": 1750,
        "end": 1771
      },
      "declare": false,
      "start": 1735,
      "end": 1772
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1792,
        "end": 1799
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1802,
          "end": 1819
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1820,
                "end": 1822
              },
              "typeArguments": null,
              "start": 1820,
              "end": 1822
            }
          ],
          "start": 1819,
          "end": 1823
        },
        "start": 1802,
        "end": 1823
      },
      "declare": false,
      "start": 1787,
      "end": 1824
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1846,
        "end": 1853
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1856,
          "end": 1873
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1874,
                "end": 1876
              },
              "typeArguments": null,
              "start": 1874,
              "end": 1876
            }
          ],
          "start": 1873,
          "end": 1877
        },
        "start": 1856,
        "end": 1877
      },
      "declare": false,
      "start": 1841,
      "end": 1878
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
            "name": "p3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1922,
                  "end": 1932
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1933,
                            "end": 1936
                          },
                          "start": 1933,
                          "end": 1936
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 1939,
                            "end": 1942
                          },
                          "start": 1939,
                          "end": 1942
                        }
                      ],
                      "start": 1933,
                      "end": 1942
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P3Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1944,
                        "end": 1951
                      },
                      "typeArguments": null,
                      "start": 1944,
                      "end": 1951
                    }
                  ],
                  "start": 1932,
                  "end": 1952
                },
                "start": 1922,
                "end": 1952
              },
              "start": 1920,
              "end": 1952
            },
            "start": 1910,
            "end": 1952
          },
          "init": null,
          "definite": false,
          "start": 1910,
          "end": 1952
        }
      ],
      "declare": true,
      "start": 1896,
      "end": 1953
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
            "name": "p2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1980,
                  "end": 1990
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1991,
                        "end": 1994
                      },
                      "start": 1991,
                      "end": 1994
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 2003
                      },
                      "typeArguments": null,
                      "start": 1996,
                      "end": 2003
                    }
                  ],
                  "start": 1990,
                  "end": 2004
                },
                "start": 1980,
                "end": 2004
              },
              "start": 1978,
              "end": 2004
            },
            "start": 1968,
            "end": 2004
          },
          "init": null,
          "definite": false,
          "start": 1968,
          "end": 2004
        }
      ],
      "declare": true,
      "start": 1954,
      "end": 2005
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
            "name": "p1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2042
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2043,
                      "end": 2048
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2057
                      },
                      "typeArguments": null,
                      "start": 2050,
                      "end": 2057
                    }
                  ],
                  "start": 2042,
                  "end": 2058
                },
                "start": 2032,
                "end": 2058
              },
              "start": 2030,
              "end": 2058
            },
            "start": 2020,
            "end": 2058
          },
          "init": null,
          "definite": false,
          "start": 2020,
          "end": 2058
        }
      ],
      "declare": true,
      "start": 2006,
      "end": 2059
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
            "name": "p0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2086,
                  "end": 2096
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2097,
                      "end": 2102
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2104,
                        "end": 2111
                      },
                      "typeArguments": null,
                      "start": 2104,
                      "end": 2111
                    }
                  ],
                  "start": 2096,
                  "end": 2112
                },
                "start": 2086,
                "end": 2112
              },
              "start": 2084,
              "end": 2112
            },
            "start": 2074,
            "end": 2112
          },
          "init": null,
          "definite": false,
          "start": 2074,
          "end": 2112
        }
      ],
      "declare": true,
      "start": 2060,
      "end": 2113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2120,
        "end": 2127
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2130,
          "end": 2143
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2144,
                "end": 2146
              },
              "typeArguments": null,
              "start": 2144,
              "end": 2146
            }
          ],
          "start": 2143,
          "end": 2147
        },
        "start": 2130,
        "end": 2147
      },
      "declare": false,
      "start": 2115,
      "end": 2148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2189,
        "end": 2196
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2199,
          "end": 2212
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2213,
                "end": 2215
              },
              "typeArguments": null,
              "start": 2213,
              "end": 2215
            }
          ],
          "start": 2212,
          "end": 2216
        },
        "start": 2199,
        "end": 2216
      },
      "declare": false,
      "start": 2184,
      "end": 2217
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2255
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2258,
          "end": 2271
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2272,
                "end": 2274
              },
              "typeArguments": null,
              "start": 2272,
              "end": 2274
            }
          ],
          "start": 2271,
          "end": 2275
        },
        "start": 2258,
        "end": 2275
      },
      "declare": false,
      "start": 2243,
      "end": 2276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2295,
        "end": 2302
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2305,
          "end": 2318
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 2319,
                "end": 2321
              },
              "typeArguments": null,
              "start": 2319,
              "end": 2321
            }
          ],
          "start": 2318,
          "end": 2322
        },
        "start": 2305,
        "end": 2322
      },
      "declare": false,
      "start": 2290,
      "end": 2323
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
            "name": "p3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2360,
                  "end": 2370
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2373,
                            "end": 2374
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2376,
                              "end": 2382
                            },
                            "start": 2374,
                            "end": 2382
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2373,
                          "end": 2383
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2384,
                            "end": 2385
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2387,
                              "end": 2393
                            },
                            "start": 2385,
                            "end": 2393
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2384,
                          "end": 2393
                        }
                      ],
                      "start": 2371,
                      "end": 2395
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P3Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2397,
                        "end": 2404
                      },
                      "typeArguments": null,
                      "start": 2397,
                      "end": 2404
                    }
                  ],
                  "start": 2370,
                  "end": 2405
                },
                "start": 2360,
                "end": 2405
              },
              "start": 2358,
              "end": 2405
            },
            "start": 2352,
            "end": 2405
          },
          "init": null,
          "definite": false,
          "start": 2352,
          "end": 2405
        }
      ],
      "declare": true,
      "start": 2338,
      "end": 2406
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
            "name": "p2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2429,
                  "end": 2439
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2442,
                            "end": 2443
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2445,
                              "end": 2451
                            },
                            "start": 2443,
                            "end": 2451
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2442,
                          "end": 2451
                        }
                      ],
                      "start": 2440,
                      "end": 2453
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2455,
                        "end": 2462
                      },
                      "typeArguments": null,
                      "start": 2455,
                      "end": 2462
                    }
                  ],
                  "start": 2439,
                  "end": 2463
                },
                "start": 2429,
                "end": 2463
              },
              "start": 2427,
              "end": 2463
            },
            "start": 2421,
            "end": 2463
          },
          "init": null,
          "definite": false,
          "start": 2421,
          "end": 2463
        }
      ],
      "declare": true,
      "start": 2407,
      "end": 2464
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
            "name": "p1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2487,
                  "end": 2497
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2498,
                      "end": 2500
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2502,
                        "end": 2509
                      },
                      "typeArguments": null,
                      "start": 2502,
                      "end": 2509
                    }
                  ],
                  "start": 2497,
                  "end": 2510
                },
                "start": 2487,
                "end": 2510
              },
              "start": 2485,
              "end": 2510
            },
            "start": 2479,
            "end": 2510
          },
          "init": null,
          "definite": false,
          "start": 2479,
          "end": 2510
        }
      ],
      "declare": true,
      "start": 2465,
      "end": 2511
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
            "name": "p0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2545,
                      "end": 2547
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2549,
                        "end": 2556
                      },
                      "typeArguments": null,
                      "start": 2549,
                      "end": 2556
                    }
                  ],
                  "start": 2544,
                  "end": 2557
                },
                "start": 2534,
                "end": 2557
              },
              "start": 2532,
              "end": 2557
            },
            "start": 2526,
            "end": 2557
          },
          "init": null,
          "definite": false,
          "start": 2526,
          "end": 2557
        }
      ],
      "declare": true,
      "start": 2512,
      "end": 2558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2565,
        "end": 2567
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2573
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2576,
                "end": 2582
              },
              "start": 2574,
              "end": 2582
            },
            "accessibility": null,
            "static": false,
            "start": 2572,
            "end": 2583
          },
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
              "start": 2584,
              "end": 2585
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2588,
                "end": 2594
              },
              "start": 2586,
              "end": 2594
            },
            "accessibility": null,
            "static": false,
            "start": 2584,
            "end": 2595
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2596,
              "end": 2597
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2599,
                "end": 2606
              },
              "start": 2597,
              "end": 2606
            },
            "accessibility": null,
            "static": false,
            "start": 2596,
            "end": 2606
          }
        ],
        "start": 2570,
        "end": 2608
      },
      "declare": false,
      "start": 2560,
      "end": 2609
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2615,
        "end": 2617
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2622,
              "end": 2623
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2626,
                "end": 2632
              },
              "start": 2624,
              "end": 2632
            },
            "accessibility": null,
            "static": false,
            "start": 2622,
            "end": 2633
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2634,
              "end": 2635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2637,
                "end": 2644
              },
              "start": 2635,
              "end": 2644
            },
            "accessibility": null,
            "static": false,
            "start": 2634,
            "end": 2644
          }
        ],
        "start": 2620,
        "end": 2646
      },
      "declare": false,
      "start": 2610,
      "end": 2647
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2655
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2660,
              "end": 2661
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2663,
                "end": 2670
              },
              "start": 2661,
              "end": 2670
            },
            "accessibility": null,
            "static": false,
            "start": 2660,
            "end": 2670
          }
        ],
        "start": 2658,
        "end": 2672
      },
      "declare": false,
      "start": 2648,
      "end": 2673
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2679,
        "end": 2681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 2684,
        "end": 2686
      },
      "declare": false,
      "start": 2674,
      "end": 2687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2694,
        "end": 2701
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2704,
          "end": 2721
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2722,
                "end": 2724
              },
              "typeArguments": null,
              "start": 2722,
              "end": 2724
            }
          ],
          "start": 2721,
          "end": 2725
        },
        "start": 2704,
        "end": 2725
      },
      "declare": false,
      "start": 2689,
      "end": 2726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2752,
        "end": 2759
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2762,
          "end": 2779
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2780,
                "end": 2782
              },
              "typeArguments": null,
              "start": 2780,
              "end": 2782
            }
          ],
          "start": 2779,
          "end": 2783
        },
        "start": 2762,
        "end": 2783
      },
      "declare": false,
      "start": 2747,
      "end": 2784
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2804,
        "end": 2811
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2814,
          "end": 2831
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2832,
                "end": 2834
              },
              "typeArguments": null,
              "start": 2832,
              "end": 2834
            }
          ],
          "start": 2831,
          "end": 2835
        },
        "start": 2814,
        "end": 2835
      },
      "declare": false,
      "start": 2799,
      "end": 2836
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2865
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2868,
          "end": 2885
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null,
                "start": 2886,
                "end": 2888
              },
              "typeArguments": null,
              "start": 2886,
              "end": 2888
            }
          ],
          "start": 2885,
          "end": 2889
        },
        "start": 2868,
        "end": 2889
      },
      "declare": false,
      "start": 2853,
      "end": 2890
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
            "name": "o3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2934,
                  "end": 2944
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2945,
                            "end": 2948
                          },
                          "start": 2945,
                          "end": 2948
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 2951,
                            "end": 2954
                          },
                          "start": 2951,
                          "end": 2954
                        }
                      ],
                      "start": 2945,
                      "end": 2954
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O3Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2956,
                        "end": 2963
                      },
                      "typeArguments": null,
                      "start": 2956,
                      "end": 2963
                    }
                  ],
                  "start": 2944,
                  "end": 2964
                },
                "start": 2934,
                "end": 2964
              },
              "start": 2932,
              "end": 2964
            },
            "start": 2922,
            "end": 2964
          },
          "init": null,
          "definite": false,
          "start": 2922,
          "end": 2964
        }
      ],
      "declare": true,
      "start": 2908,
      "end": 2965
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
            "name": "o2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2992,
                  "end": 3002
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3003,
                        "end": 3006
                      },
                      "start": 3003,
                      "end": 3006
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O2Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3008,
                        "end": 3015
                      },
                      "typeArguments": null,
                      "start": 3008,
                      "end": 3015
                    }
                  ],
                  "start": 3002,
                  "end": 3016
                },
                "start": 2992,
                "end": 3016
              },
              "start": 2990,
              "end": 3016
            },
            "start": 2980,
            "end": 3016
          },
          "init": null,
          "definite": false,
          "start": 2980,
          "end": 3016
        }
      ],
      "declare": true,
      "start": 2966,
      "end": 3017
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
            "name": "o1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3044,
                  "end": 3054
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3055,
                      "end": 3060
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O1Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3062,
                        "end": 3069
                      },
                      "typeArguments": null,
                      "start": 3062,
                      "end": 3069
                    }
                  ],
                  "start": 3054,
                  "end": 3070
                },
                "start": 3044,
                "end": 3070
              },
              "start": 3042,
              "end": 3070
            },
            "start": 3032,
            "end": 3070
          },
          "init": null,
          "definite": false,
          "start": 3032,
          "end": 3070
        }
      ],
      "declare": true,
      "start": 3018,
      "end": 3071
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
            "name": "o0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3098,
                  "end": 3108
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3109,
                      "end": 3114
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O0Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3116,
                        "end": 3123
                      },
                      "typeArguments": null,
                      "start": 3116,
                      "end": 3123
                    }
                  ],
                  "start": 3108,
                  "end": 3124
                },
                "start": 3098,
                "end": 3124
              },
              "start": 3096,
              "end": 3124
            },
            "start": 3086,
            "end": 3124
          },
          "init": null,
          "definite": false,
          "start": 3086,
          "end": 3124
        }
      ],
      "declare": true,
      "start": 3072,
      "end": 3125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3132,
        "end": 3139
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3142,
          "end": 3155
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null,
                "start": 3156,
                "end": 3158
              },
              "typeArguments": null,
              "start": 3156,
              "end": 3158
            }
          ],
          "start": 3155,
          "end": 3159
        },
        "start": 3142,
        "end": 3159
      },
      "declare": false,
      "start": 3127,
      "end": 3160
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3227,
        "end": 3234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3237,
          "end": 3250
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3253
              },
              "typeArguments": null,
              "start": 3251,
              "end": 3253
            }
          ],
          "start": 3250,
          "end": 3254
        },
        "start": 3237,
        "end": 3254
      },
      "declare": false,
      "start": 3222,
      "end": 3255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3299,
        "end": 3306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3309,
          "end": 3322
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3323,
                "end": 3325
              },
              "typeArguments": null,
              "start": 3323,
              "end": 3325
            }
          ],
          "start": 3322,
          "end": 3326
        },
        "start": 3309,
        "end": 3326
      },
      "declare": false,
      "start": 3294,
      "end": 3327
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3353
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3356,
          "end": 3369
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null,
                "start": 3370,
                "end": 3372
              },
              "typeArguments": null,
              "start": 3370,
              "end": 3372
            }
          ],
          "start": 3369,
          "end": 3373
        },
        "start": 3356,
        "end": 3373
      },
      "declare": false,
      "start": 3341,
      "end": 3374
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
            "name": "o3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3411,
                  "end": 3421
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3424,
                            "end": 3425
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3428,
                              "end": 3434
                            },
                            "start": 3426,
                            "end": 3434
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3424,
                          "end": 3435
                        },
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
                            "start": 3436,
                            "end": 3437
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3440,
                              "end": 3446
                            },
                            "start": 3438,
                            "end": 3446
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3436,
                          "end": 3446
                        }
                      ],
                      "start": 3422,
                      "end": 3448
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O3Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3450,
                        "end": 3457
                      },
                      "typeArguments": null,
                      "start": 3450,
                      "end": 3457
                    }
                  ],
                  "start": 3421,
                  "end": 3458
                },
                "start": 3411,
                "end": 3458
              },
              "start": 3409,
              "end": 3458
            },
            "start": 3403,
            "end": 3458
          },
          "init": null,
          "definite": false,
          "start": 3403,
          "end": 3458
        }
      ],
      "declare": true,
      "start": 3389,
      "end": 3459
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
            "name": "o2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3482,
                  "end": 3492
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3495,
                            "end": 3496
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3499,
                              "end": 3505
                            },
                            "start": 3497,
                            "end": 3505
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3495,
                          "end": 3505
                        }
                      ],
                      "start": 3493,
                      "end": 3507
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O2Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3509,
                        "end": 3516
                      },
                      "typeArguments": null,
                      "start": 3509,
                      "end": 3516
                    }
                  ],
                  "start": 3492,
                  "end": 3517
                },
                "start": 3482,
                "end": 3517
              },
              "start": 3480,
              "end": 3517
            },
            "start": 3474,
            "end": 3517
          },
          "init": null,
          "definite": false,
          "start": 3474,
          "end": 3517
        }
      ],
      "declare": true,
      "start": 3460,
      "end": 3518
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
            "name": "o1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3541,
                  "end": 3551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3552,
                      "end": 3554
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O1Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3556,
                        "end": 3563
                      },
                      "typeArguments": null,
                      "start": 3556,
                      "end": 3563
                    }
                  ],
                  "start": 3551,
                  "end": 3564
                },
                "start": 3541,
                "end": 3564
              },
              "start": 3539,
              "end": 3564
            },
            "start": 3533,
            "end": 3564
          },
          "init": null,
          "definite": false,
          "start": 3533,
          "end": 3564
        }
      ],
      "declare": true,
      "start": 3519,
      "end": 3565
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
            "name": "o0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3588,
                  "end": 3598
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3599,
                      "end": 3601
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O0Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3603,
                        "end": 3610
                      },
                      "typeArguments": null,
                      "start": 3603,
                      "end": 3610
                    }
                  ],
                  "start": 3598,
                  "end": 3611
                },
                "start": 3588,
                "end": 3611
              },
              "start": 3586,
              "end": 3611
            },
            "start": 3580,
            "end": 3611
          },
          "init": null,
          "definite": false,
          "start": 3580,
          "end": 3611
        }
      ],
      "declare": true,
      "start": 3566,
      "end": 3612
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 3641,
        "end": 3648
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
              "start": 3649,
              "end": 3650
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3659,
                "end": 3665
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
                      "start": 3666,
                      "end": 3669
                    },
                    "start": 3666,
                    "end": 3669
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3671,
                    "end": 3677
                  }
                ],
                "start": 3665,
                "end": 3678
              },
              "start": 3659,
              "end": 3678
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3649,
            "end": 3678
          }
        ],
        "start": 3648,
        "end": 3679
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3682,
            "end": 3683
          },
          "typeArguments": null,
          "start": 3682,
          "end": 3683
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 3684,
            "end": 3687
          },
          "start": 3684,
          "end": 3687
        },
        "start": 3682,
        "end": 3688
      },
      "declare": false,
      "start": 3636,
      "end": 3689
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3696,
        "end": 3700
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3703,
          "end": 3710
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3713,
                        "end": 3714
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 3716,
                            "end": 3719
                          },
                          "start": 3716,
                          "end": 3719
                        },
                        "start": 3714,
                        "end": 3719
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3713,
                      "end": 3719
                    }
                  ],
                  "start": 3711,
                  "end": 3721
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3726,
                        "end": 3727
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 3729,
                            "end": 3732
                          },
                          "start": 3729,
                          "end": 3732
                        },
                        "start": 3727,
                        "end": 3732
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3726,
                      "end": 3732
                    }
                  ],
                  "start": 3724,
                  "end": 3734
                }
              ],
              "start": 3711,
              "end": 3734
            }
          ],
          "start": 3710,
          "end": 3735
        },
        "start": 3703,
        "end": 3735
      },
      "declare": false,
      "start": 3691,
      "end": 3736
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3756,
        "end": 3760
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3763,
          "end": 3770
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3773,
                    "end": 3774
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 3776,
                        "end": 3779
                      },
                      "start": 3776,
                      "end": 3779
                    },
                    "start": 3774,
                    "end": 3779
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3773,
                  "end": 3779
                }
              ],
              "start": 3771,
              "end": 3781
            }
          ],
          "start": 3770,
          "end": 3782
        },
        "start": 3763,
        "end": 3782
      },
      "declare": false,
      "start": 3751,
      "end": 3783
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3797,
        "end": 3801
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3804,
          "end": 3811
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 3812,
              "end": 3817
            }
          ],
          "start": 3811,
          "end": 3818
        },
        "start": 3804,
        "end": 3818
      },
      "declare": false,
      "start": 3792,
      "end": 3819
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3830
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
    "value": "TestObj",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "TestObj",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "EmptyObj",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 180,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Result2",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "EmptyObj",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "EmptyObj",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 222,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "genericFn1",
    "start": 239,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "genericFn1",
    "start": 308,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "String",
    "value": "\"ctest\"",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"dtest\"",
    "start": 336,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 349,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 357,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "genericFn2",
    "start": 366,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "ind",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
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
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 457,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "genericFn2",
    "start": 473,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"etest\"",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "String",
    "value": "\"ftest\"",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 514,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 522,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "genericFn3",
    "start": 531,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 547,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 585,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 593,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 606,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "U",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "V",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 675,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 681,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "genericFn3",
    "start": 691,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "String",
    "value": "\"gtest\"",
    "start": 707,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"htest\"",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734
  },
  {
    "type": "String",
    "value": "\"h\"",
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
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 777,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 785,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 819,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 827,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 838,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 845,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 851,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 950,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 955,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 985,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 988,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "-",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1000,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1010,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1025,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 1053,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
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
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1098,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1108,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1127,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "RequiredProps",
    "start": 1151,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 1178,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "OptionalProps",
    "start": 1214,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 1241,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "Match",
    "start": 1279,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "String",
    "value": "\"Match\"",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "String",
    "value": "\"Did not match 2\"",
    "start": 1354,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "String",
    "value": "\"Did not match 1\"",
    "start": 1377,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1397,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 1402,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "Match",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1441,
    "end": 1448
  },
  {
    "type": "String",
    "value": "\"Match\"",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1465,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "Match",
    "start": 1479,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 1485,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "Exp",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 1500,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "Act",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "String",
    "value": "\"Match\"",
    "start": 1517,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "String",
    "value": "\"Did not match\"",
    "start": 1530,
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
    "value": "type",
    "start": 1548,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1563,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1574,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1586,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 1602,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1612,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1624,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1635,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 1640,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1651,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1662,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "P3Names",
    "start": 1682,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 1692,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1735,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "P2Names",
    "start": 1740,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 1750,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1787,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "P1Names",
    "start": 1792,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 1802,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1841,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "P0Names",
    "start": 1846,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "RequiredPropNames",
    "start": 1856,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1896,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1904,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "p3NameTest",
    "start": 1910,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 1922,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "P3Names",
    "start": 1944,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1954,
    "end": 1961
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1962,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "p2NameTest",
    "start": 1968,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 1980,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "P2Names",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2006,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2014,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "p1NameTest",
    "start": 2020,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2032,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2043,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "P1Names",
    "start": 2050,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2060,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2068,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "p0NameTest",
    "start": 2074,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2086,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2097,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "P0Names",
    "start": 2104,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2115,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "P3Props",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "RequiredProps",
    "start": 2130,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2184,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "P2Props",
    "start": 2189,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "RequiredProps",
    "start": 2199,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 2213,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2243,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "P1Props",
    "start": 2248,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "RequiredProps",
    "start": 2258,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2272,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2290,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "P0Props",
    "start": 2295,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "RequiredProps",
    "start": 2305,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 2319,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2338,
    "end": 2345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2346,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "p3Test",
    "start": 2352,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2360,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2376,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "P3Props",
    "start": 2397,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2407,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2415,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "p2Test",
    "start": 2421,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2429,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2445,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "P2Props",
    "start": 2455,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2465,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2473,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "p1Test",
    "start": 2479,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2487,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "P1Props",
    "start": 2502,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2512,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2520,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "p0Test",
    "start": 2526,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2534,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "P0Props",
    "start": 2549,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2560,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "O3",
    "start": 2565,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2576,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2599,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2610,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2615,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2626,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2637,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2653,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2674,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "O0",
    "start": 2679,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2689,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "O3Names",
    "start": 2694,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 2704,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "O3",
    "start": 2722,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2747,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "O2Names",
    "start": 2752,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 2762,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2780,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2799,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "O1Names",
    "start": 2804,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 2814,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2832,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2853,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "O0Names",
    "start": 2858,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "OptionalPropNames",
    "start": 2868,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "O0",
    "start": 2886,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2908,
    "end": 2915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2916,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "o3NameTest",
    "start": 2922,
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
    "value": "ExpectType",
    "start": 2934,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2945,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2951,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "O3Names",
    "start": 2956,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2966,
    "end": 2973
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2974,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "o2NameTest",
    "start": 2980,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 2992,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3003,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "O2Names",
    "start": 3008,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3018,
    "end": 3025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3026,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "o1NameTest",
    "start": 3032,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 3044,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3055,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "O1Names",
    "start": 3062,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3072,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3080,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "o0NameTest",
    "start": 3086,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 3098,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "never",
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
    "value": "O0Names",
    "start": 3116,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3127,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "O3Props",
    "start": 3132,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "OptionalProps",
    "start": 3142,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "O3",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3222,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "O2Props",
    "start": 3227,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "OptionalProps",
    "start": 3237,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3251,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3294,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "O1Props",
    "start": 3299,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "OptionalProps",
    "start": 3309,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3323,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3341,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "O0Props",
    "start": 3346,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "OptionalProps",
    "start": 3356,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "O0",
    "start": 3370,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3389,
    "end": 3396
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3397,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "o3Test",
    "start": 3403,
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
    "value": "ExpectType",
    "start": 3411,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "string",
    "start": 3428,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3440,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "O3Props",
    "start": 3450,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3460,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3468,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "o2Test",
    "start": 3474,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 3482,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3499,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Identifier",
    "value": "O2Props",
    "start": 3509,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3519,
    "end": 3526
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3527,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "o1Test",
    "start": 3533,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 3541,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "O1Props",
    "start": 3556,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3566,
    "end": 3573
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3574,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "o0Test",
    "start": 3580,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "ExpectType",
    "start": 3588,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "O0Props",
    "start": 3603,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3636,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 3641,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3651,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3659,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3666,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3671,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3684,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3691,
    "end": 3695
  },
  {
    "type": "Identifier",
    "value": "Res1",
    "start": 3696,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 3703,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3716,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 3729,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3751,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "Res2",
    "start": 3756,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 3763,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3776,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3792,
    "end": 3796
  },
  {
    "type": "Identifier",
    "value": "Res3",
    "start": 3797,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 3804,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3812,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3818,
    "end": 3819
  }
]
```

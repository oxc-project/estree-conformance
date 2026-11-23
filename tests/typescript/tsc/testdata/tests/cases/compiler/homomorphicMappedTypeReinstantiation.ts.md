__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "either",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 80
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 80,
        "end": 86
      },
      "params": [
        {
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "typeArguments": null,
              "start": 90,
              "end": 91
            },
            "start": 88,
            "end": 91
          },
          "start": 87,
          "end": 91
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "typeArguments": null,
              "start": 96,
              "end": 97
            },
            "start": 94,
            "end": 97
          },
          "start": 93,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "typeArguments": null,
              "start": 100,
              "end": 101
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            }
          ],
          "start": 100,
          "end": 105
        },
        "start": 98,
        "end": 105
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 130
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
                    "name": "verbose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 140
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 142,
                      "end": 149
                    },
                    "start": 140,
                    "end": 149
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 133,
                  "end": 149
                }
              ],
              "start": 131,
              "end": 151
            }
          ],
          "start": 130,
          "end": 152
        },
        "start": 123,
        "end": 152
      },
      "declare": false,
      "start": 108,
      "end": 153
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
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 185
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 185
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 188,
                      "end": 194
                    }
                  ],
                  "start": 178,
                  "end": 194
                },
                "start": 177,
                "end": 197
              },
              "start": 175,
              "end": 197
            },
            "start": 168,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 197
        }
      ],
      "declare": true,
      "start": 154,
      "end": 198
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 224
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 225,
                  "end": 226
                },
                "optional": false,
                "computed": true,
                "start": 217,
                "end": 227
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 240
                    },
                    "optional": false,
                    "computed": false,
                    "start": 229,
                    "end": 240
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 246
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 255
                      },
                      "id": null,
                      "generator": false,
                      "start": 241,
                      "end": 255
                    }
                  ],
                  "optional": false,
                  "start": 229,
                  "end": 256
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 257,
                  "end": 258
                },
                "optional": false,
                "computed": true,
                "start": 229,
                "end": 259
              }
            ],
            "optional": false,
            "start": 210,
            "end": 260
          },
          "definite": false,
          "start": 205,
          "end": 260
        }
      ],
      "declare": false,
      "start": 199,
      "end": 261
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadonlyOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 294
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
                    "name": "verbose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 304
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 306,
                      "end": 313
                    },
                    "start": 304,
                    "end": 313
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 297,
                  "end": 313
                }
              ],
              "start": 295,
              "end": 315
            }
          ],
          "start": 294,
          "end": 316
        },
        "start": 286,
        "end": 316
      },
      "declare": false,
      "start": 263,
      "end": 317
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
            "name": "readonlyOptions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 365
                      },
                      "typeArguments": null,
                      "start": 350,
                      "end": 365
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 368,
                      "end": 374
                    }
                  ],
                  "start": 350,
                  "end": 374
                },
                "start": 349,
                "end": 377
              },
              "start": 347,
              "end": 377
            },
            "start": 332,
            "end": 377
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 377
        }
      ],
      "declare": true,
      "start": 318,
      "end": 378
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readonlyOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 412
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 413,
                  "end": 414
                },
                "optional": false,
                "computed": true,
                "start": 397,
                "end": 415
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readonlyOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 432
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 436
                    },
                    "optional": false,
                    "computed": false,
                    "start": 417,
                    "end": 436
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 442
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 451
                      },
                      "id": null,
                      "generator": false,
                      "start": 437,
                      "end": 451
                    }
                  ],
                  "optional": false,
                  "start": 417,
                  "end": 452
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 453,
                  "end": 454
                },
                "optional": false,
                "computed": true,
                "start": 417,
                "end": 455
              }
            ],
            "optional": false,
            "start": 390,
            "end": 456
          },
          "definite": false,
          "start": 385,
          "end": 456
        }
      ],
      "declare": false,
      "start": 379,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nullable",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 472
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
              "start": 473,
              "end": 474
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 473,
            "end": 474
          }
        ],
        "start": 472,
        "end": 475
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 481,
          "end": 482
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
              "start": 492,
              "end": 493
            },
            "typeArguments": null,
            "start": 492,
            "end": 493
          },
          "start": 486,
          "end": 493
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
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
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 500
            },
            {
              "type": "TSNullKeyword",
              "start": 503,
              "end": 507
            }
          ],
          "start": 496,
          "end": 507
        },
        "optional": false,
        "readonly": null,
        "start": 478,
        "end": 509
      },
      "declare": false,
      "start": 459,
      "end": 510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NullableOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 542
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
                    "name": "verbose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 552
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 554,
                      "end": 561
                    },
                    "start": 552,
                    "end": 561
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 545,
                  "end": 561
                }
              ],
              "start": 543,
              "end": 563
            }
          ],
          "start": 542,
          "end": 564
        },
        "start": 534,
        "end": 564
      },
      "declare": false,
      "start": 511,
      "end": 565
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
            "name": "nullableOptions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NullableOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 598,
                        "end": 613
                      },
                      "typeArguments": null,
                      "start": 598,
                      "end": 613
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 616,
                      "end": 622
                    }
                  ],
                  "start": 598,
                  "end": 622
                },
                "start": 597,
                "end": 625
              },
              "start": 595,
              "end": 625
            },
            "start": 580,
            "end": 625
          },
          "init": null,
          "definite": false,
          "start": 580,
          "end": 625
        }
      ],
      "declare": true,
      "start": 566,
      "end": 626
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 635
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullableOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 660
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 661,
                  "end": 662
                },
                "optional": false,
                "computed": true,
                "start": 645,
                "end": 663
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nullableOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 665,
                      "end": 680
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 684
                    },
                    "optional": false,
                    "computed": false,
                    "start": 665,
                    "end": 684
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 685,
                          "end": 690
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 694,
                        "end": 699
                      },
                      "id": null,
                      "generator": false,
                      "start": 685,
                      "end": 699
                    }
                  ],
                  "optional": false,
                  "start": 665,
                  "end": 700
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 701,
                  "end": 702
                },
                "optional": false,
                "computed": true,
                "start": 665,
                "end": 703
              }
            ],
            "optional": false,
            "start": 638,
            "end": 704
          },
          "definite": false,
          "start": 633,
          "end": 704
        }
      ],
      "declare": false,
      "start": 627,
      "end": 705
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
            "name": "unionOptions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 736,
                        "end": 743
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
                                      "start": 746,
                                      "end": 747
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 749,
                                        "end": 756
                                      },
                                      "start": 747,
                                      "end": 756
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 746,
                                    "end": 756
                                  }
                                ],
                                "start": 744,
                                "end": 758
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 763,
                                      "end": 764
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 766,
                                        "end": 772
                                      },
                                      "start": 764,
                                      "end": 772
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 763,
                                    "end": 772
                                  }
                                ],
                                "start": 761,
                                "end": 774
                              }
                            ],
                            "start": 744,
                            "end": 774
                          }
                        ],
                        "start": 743,
                        "end": 775
                      },
                      "start": 736,
                      "end": 775
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 778,
                      "end": 784
                    }
                  ],
                  "start": 736,
                  "end": 784
                },
                "start": 735,
                "end": 787
              },
              "start": 733,
              "end": 787
            },
            "start": 721,
            "end": 787
          },
          "init": null,
          "definite": false,
          "start": 721,
          "end": 787
        }
      ],
      "declare": true,
      "start": 707,
      "end": 788
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 797
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 806
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unionOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 819
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 820,
                  "end": 821
                },
                "optional": false,
                "computed": true,
                "start": 807,
                "end": 822
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unionOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 836
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 840
                    },
                    "optional": false,
                    "computed": false,
                    "start": 824,
                    "end": 840
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 841,
                          "end": 846
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 850,
                        "end": 855
                      },
                      "id": null,
                      "generator": false,
                      "start": 841,
                      "end": 855
                    }
                  ],
                  "optional": false,
                  "start": 824,
                  "end": 856
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 857,
                  "end": 858
                },
                "optional": false,
                "computed": true,
                "start": 824,
                "end": 859
              }
            ],
            "optional": false,
            "start": 800,
            "end": 860
          },
          "definite": false,
          "start": 795,
          "end": 860
        }
      ],
      "declare": false,
      "start": 789,
      "end": 861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasedUnionOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 868,
        "end": 887
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 897
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
                        "start": 900,
                        "end": 901
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 903,
                          "end": 910
                        },
                        "start": 901,
                        "end": 910
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 900,
                      "end": 910
                    }
                  ],
                  "start": 898,
                  "end": 912
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 917,
                        "end": 918
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 920,
                          "end": 926
                        },
                        "start": 918,
                        "end": 926
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 917,
                      "end": 926
                    }
                  ],
                  "start": 915,
                  "end": 928
                }
              ],
              "start": 898,
              "end": 928
            }
          ],
          "start": 897,
          "end": 929
        },
        "start": 890,
        "end": 929
      },
      "declare": false,
      "start": 863,
      "end": 930
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
            "name": "aliasedUnionOptions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AliasedUnionOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 967,
                        "end": 986
                      },
                      "typeArguments": null,
                      "start": 967,
                      "end": 986
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 989,
                      "end": 995
                    }
                  ],
                  "start": 967,
                  "end": 995
                },
                "start": 966,
                "end": 998
              },
              "start": 964,
              "end": 998
            },
            "start": 945,
            "end": 998
          },
          "init": null,
          "definite": false,
          "start": 945,
          "end": 998
        }
      ],
      "declare": true,
      "start": 931,
      "end": 999
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1006,
            "end": 1008
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1017
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aliasedUnionOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1037
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1038,
                  "end": 1039
                },
                "optional": false,
                "computed": true,
                "start": 1018,
                "end": 1040
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aliasedUnionOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1042,
                      "end": 1061
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1062,
                      "end": 1065
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1042,
                    "end": 1065
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1066,
                          "end": 1071
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1075,
                        "end": 1080
                      },
                      "id": null,
                      "generator": false,
                      "start": 1066,
                      "end": 1080
                    }
                  ],
                  "optional": false,
                  "start": 1042,
                  "end": 1081
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1082,
                  "end": 1083
                },
                "optional": false,
                "computed": true,
                "start": 1042,
                "end": 1084
              }
            ],
            "optional": false,
            "start": 1011,
            "end": 1085
          },
          "definite": false,
          "start": 1006,
          "end": 1085
        }
      ],
      "declare": false,
      "start": 1000,
      "end": 1086
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1098
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
              "name": "verbose",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1112,
                "end": 1119
              },
              "start": 1110,
              "end": 1119
            },
            "accessibility": null,
            "static": false,
            "start": 1103,
            "end": 1119
          }
        ],
        "start": 1101,
        "end": 1121
      },
      "declare": false,
      "start": 1088,
      "end": 1122
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1130
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1140
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1146
              },
              "typeArguments": null,
              "start": 1141,
              "end": 1146
            }
          ],
          "start": 1140,
          "end": 1147
        },
        "start": 1133,
        "end": 1147
      },
      "declare": false,
      "start": 1123,
      "end": 1148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1154,
        "end": 1156
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1159,
          "end": 1166
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1172
              },
              "typeArguments": null,
              "start": 1167,
              "end": 1172
            }
          ],
          "start": 1166,
          "end": 1173
        },
        "start": 1159,
        "end": 1173
      },
      "declare": false,
      "start": 1149,
      "end": 1174
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1193,
                  "end": 1195
                },
                "typeArguments": null,
                "start": 1193,
                "end": 1195
              },
              "start": 1191,
              "end": 1195
            },
            "start": 1189,
            "end": 1195
          },
          "init": null,
          "definite": false,
          "start": 1189,
          "end": 1195
        }
      ],
      "declare": true,
      "start": 1175,
      "end": 1196
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
            "name": "a2",
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
                  "start": 1215,
                  "end": 1217
                },
                "typeArguments": null,
                "start": 1215,
                "end": 1217
              },
              "start": 1213,
              "end": 1217
            },
            "start": 1211,
            "end": 1217
          },
          "init": null,
          "definite": false,
          "start": 1211,
          "end": 1217
        }
      ],
      "declare": true,
      "start": 1197,
      "end": 1218
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1245,
                        "end": 1250
                      },
                      "typeArguments": null,
                      "start": 1245,
                      "end": 1250
                    }
                  ],
                  "start": 1244,
                  "end": 1251
                },
                "start": 1237,
                "end": 1251
              },
              "start": 1235,
              "end": 1251
            },
            "start": 1233,
            "end": 1251
          },
          "init": null,
          "definite": false,
          "start": 1233,
          "end": 1251
        }
      ],
      "declare": true,
      "start": 1219,
      "end": 1252
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1259,
            "end": 1261
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1270
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1271,
                "end": 1273
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1275,
                "end": 1277
              }
            ],
            "optional": false,
            "start": 1264,
            "end": 1278
          },
          "definite": false,
          "start": 1259,
          "end": 1278
        }
      ],
      "declare": false,
      "start": 1253,
      "end": 1279
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1286,
            "end": 1288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "either",
              "optional": false,
              "typeAnnotation": null,
              "start": 1291,
              "end": 1297
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1300
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1304
              }
            ],
            "optional": false,
            "start": 1291,
            "end": 1305
          },
          "definite": false,
          "start": 1286,
          "end": 1305
        }
      ],
      "declare": false,
      "start": 1280,
      "end": 1306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1306
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "verbose",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 199,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 229,
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
    "value": "map",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "ReadonlyOptions",
    "start": 268,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 286,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "verbose",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 318,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 326,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "readonlyOptions",
    "start": 332,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "ReadonlyOptions",
    "start": 350,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "readonlyOptions",
    "start": 397,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "readonlyOptions",
    "start": 417,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 443,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 459,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Nullable",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 483,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 486,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 501,
    "end": 502
  },
  {
    "type": "Null",
    "value": "null",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 511,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "NullableOptions",
    "start": 516,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Nullable",
    "start": 534,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "verbose",
    "start": 545,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 566,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 574,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "nullableOptions",
    "start": 580,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "NullableOptions",
    "start": 598,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "const",
    "start": 627,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "nullableOptions",
    "start": 645,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "nullableOptions",
    "start": 665,
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
    "value": "map",
    "start": 681,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 707,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 715,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "unionOptions",
    "start": 721,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 736,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 789,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 795,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "unionOptions",
    "start": 807,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "unionOptions",
    "start": 824,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 847,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 850,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 856,
    "end": 857
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 863,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "AliasedUnionOptions",
    "start": 868,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 890,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 903,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 931,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 939,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "aliasedUnionOptions",
    "start": 945,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "AliasedUnionOptions",
    "start": 967,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1000,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "aliasedUnionOptions",
    "start": 1018,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "aliasedUnionOptions",
    "start": 1042,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "map",
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
    "type": "Identifier",
    "value": "value",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1075,
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
    "value": "[",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "verbose",
    "start": 1103,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1133,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 1167,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1175,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1197,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1219,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1227,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1233,
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
    "value": "Partial",
    "start": 1237,
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
    "value": "Named",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1291,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  }
]
```

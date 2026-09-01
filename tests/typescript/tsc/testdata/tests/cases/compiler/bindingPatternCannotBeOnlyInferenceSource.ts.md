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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [],
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
            "start": 25,
            "end": 26
          },
          "typeArguments": null,
          "start": 25,
          "end": 26
        },
        "start": 23,
        "end": 26
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 27
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
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 36
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 39,
            "end": 42
          },
          "definite": false,
          "start": 34,
          "end": 42
        }
      ],
      "declare": false,
      "start": 28,
      "end": 43
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 94,
                "end": 96
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 101,
            "end": 104
          },
          "definite": false,
          "start": 92,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 128,
            "end": 131
          },
          "definite": false,
          "start": 123,
          "end": 131
        }
      ],
      "declare": false,
      "start": 117,
      "end": 132
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e2",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 161
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 165,
            "end": 168
          },
          "definite": false,
          "start": 154,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 214
      },
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
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": {
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
                    "start": 221,
                    "end": 225
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 227,
                      "end": 230
                    },
                    "start": 225,
                    "end": 230
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 221,
                  "end": 231
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extraProps",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 245,
                          "end": 251
                        },
                        "start": 243,
                        "end": 251
                      },
                      "start": 233,
                      "end": 251
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 254,
                      "end": 257
                    },
                    "start": 252,
                    "end": 257
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 232,
                  "end": 257
                }
              ],
              "start": 219,
              "end": 259
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 259
          }
        ],
        "start": 214,
        "end": 260
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 266,
                    "end": 267
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 276,
                    "end": 277
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 266,
                  "end": 277
                }
              ],
              "start": 265,
              "end": 278
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
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
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  },
                  "start": 285,
                  "end": 288
                },
                "start": 279,
                "end": 288
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
                  "start": 291,
                  "end": 292
                },
                "typeArguments": null,
                "start": 291,
                "end": 292
              },
              "start": 289,
              "end": 292
            },
            "start": 265,
            "end": 292
          }
        ],
        "start": 263,
        "end": 294
      },
      "declare": false,
      "start": 201,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFuncs",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 307
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  },
                  "start": 325,
                  "end": 333
                },
                "start": 322,
                "end": 333
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 341
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 343,
                        "end": 346
                      },
                      "start": 341,
                      "end": 346
                    },
                    "value": null,
                    "start": 337,
                    "end": 346
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 351,
                    "end": 355
                  },
                  "start": 348,
                  "end": 355
                },
                "start": 336,
                "end": 355
              },
              "start": 334,
              "end": 355
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 312,
            "end": 355
          }
        ],
        "start": 310,
        "end": 357
      },
      "declare": false,
      "start": 296,
      "end": 358
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDestructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFuncs",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 395
              },
              "typeArguments": null,
              "start": 389,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 395
          }
        ],
        "start": 378,
        "end": 396
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 414
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
              "start": 424,
              "end": 425
            },
            "typeArguments": null,
            "start": 424,
            "end": 425
          },
          "start": 418,
          "end": 425
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 434
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                            "start": 447,
                            "end": 448
                          },
                          "typeArguments": null,
                          "start": 447,
                          "end": 448
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 449,
                            "end": 452
                          },
                          "typeArguments": null,
                          "start": 449,
                          "end": 452
                        },
                        "start": 447,
                        "end": 453
                      }
                    ],
                    "start": 446,
                    "end": 454
                  },
                  "start": 436,
                  "end": 454
                },
                "start": 434,
                "end": 454
              },
              "value": null,
              "start": 430,
              "end": 454
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 459,
              "end": 463
            },
            "start": 456,
            "end": 463
          },
          "start": 429,
          "end": 463
        },
        "optional": true,
        "readonly": true,
        "start": 399,
        "end": 465
      },
      "declare": false,
      "start": 359,
      "end": 466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Destructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 485
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
              "start": 486,
              "end": 487
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFuncs",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 502
              },
              "typeArguments": null,
              "start": 496,
              "end": 502
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 486,
            "end": 502
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 528
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
                      "start": 529,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 530
                  }
                ],
                "start": 528,
                "end": 531
              },
              "start": 514,
              "end": 531
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 504,
            "end": 531
          }
        ],
        "start": 485,
        "end": 532
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dispatch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dispatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 554
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 555,
                      "end": 558
                    }
                  ],
                  "start": 554,
                  "end": 559
                },
                "start": 546,
                "end": 559
              },
              "start": 544,
              "end": 559
            },
            "start": 536,
            "end": 559
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "funcs",
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
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 568,
                "end": 569
              },
              "start": 566,
              "end": 569
            },
            "start": 561,
            "end": 569
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 575
            },
            "typeArguments": null,
            "start": 574,
            "end": 575
          },
          "start": 571,
          "end": 575
        },
        "start": 535,
        "end": 575
      },
      "declare": false,
      "start": 467,
      "end": 576
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
            "name": "funcs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 589
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 603
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 609,
                          "end": 616
                        },
                        "start": 607,
                        "end": 616
                      },
                      "start": 606,
                      "end": 616
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 619,
                      "end": 623
                    },
                    "start": 617,
                    "end": 623
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 627,
                    "end": 629
                  },
                  "id": null,
                  "generator": false,
                  "start": 605,
                  "end": 629
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 598,
                "end": 629
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 640
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 646,
                          "end": 652
                        },
                        "start": 644,
                        "end": 652
                      },
                      "start": 643,
                      "end": 652
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        },
                        "start": 656,
                        "end": 664
                      },
                      "start": 654,
                      "end": 664
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 667,
                      "end": 671
                    },
                    "start": 665,
                    "end": 671
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 675,
                    "end": 677
                  },
                  "id": null,
                  "generator": false,
                  "start": 642,
                  "end": 677
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 635,
                "end": 677
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 688
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 694,
                          "end": 700
                        },
                        "start": 692,
                        "end": 700
                      },
                      "start": 691,
                      "end": 700
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 706,
                          "end": 712
                        },
                        "start": 704,
                        "end": 712
                      },
                      "start": 702,
                      "end": 712
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ccc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 719,
                          "end": 726
                        },
                        "start": 717,
                        "end": 726
                      },
                      "start": 714,
                      "end": 726
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 729,
                      "end": 733
                    },
                    "start": 727,
                    "end": 733
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 737,
                    "end": 739
                  },
                  "id": null,
                  "generator": false,
                  "start": 690,
                  "end": 739
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 683,
                "end": 739
              }
            ],
            "start": 592,
            "end": 742
          },
          "definite": false,
          "start": 583,
          "end": 742
        }
      ],
      "declare": false,
      "start": 577,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TFuncs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 756
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 772
        },
        "typeArguments": null,
        "start": 759,
        "end": 772
      },
      "declare": false,
      "start": 744,
      "end": 773
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useReduxDispatch1",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 808
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
              "start": 809,
              "end": 810
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 841
                    },
                    "typeArguments": null,
                    "start": 834,
                    "end": 841
                  }
                ],
                "start": 833,
                "end": 842
              },
              "start": 819,
              "end": 842
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 842
          }
        ],
        "start": 808,
        "end": 843
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "destructuring",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Destructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 872
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 880
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 883
                    },
                    "typeArguments": null,
                    "start": 882,
                    "end": 883
                  }
                ],
                "start": 872,
                "end": 884
              },
              "start": 859,
              "end": 884
            },
            "start": 857,
            "end": 884
          },
          "start": 844,
          "end": 884
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
            "start": 887,
            "end": 888
          },
          "typeArguments": null,
          "start": 887,
          "end": 888
        },
        "start": 885,
        "end": 888
      },
      "body": null,
      "expression": false,
      "start": 774,
      "end": 889
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
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 898
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useReduxDispatch1",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 918
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 925,
                    "end": 926
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 928,
                    "end": 929
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 950
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 957
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 953,
                            "end": 957
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 962,
                            "end": 963
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 964,
                                  "end": 965
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 966,
                                  "end": 971
                                },
                                "optional": false,
                                "computed": false,
                                "start": 964,
                                "end": 971
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 975,
                                    "end": 976
                                  },
                                  "start": 972,
                                  "end": 976
                                }
                              ],
                              "optional": false,
                              "start": 964,
                              "end": 977
                            }
                          ],
                          "optional": false,
                          "start": 962,
                          "end": 978
                        },
                        "id": null,
                        "generator": false,
                        "start": 952,
                        "end": 978
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 945,
                      "end": 978
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1014,
                        "end": 1019
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1025,
                              "end": 1026
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1022,
                            "end": 1026
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1031,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1033,
                                  "end": 1034
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1035,
                                  "end": 1040
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1033,
                                "end": 1040
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1044,
                                    "end": 1045
                                  },
                                  "start": 1041,
                                  "end": 1045
                                }
                              ],
                              "optional": false,
                              "start": 1033,
                              "end": 1046
                            }
                          ],
                          "optional": false,
                          "start": 1031,
                          "end": 1047
                        },
                        "id": null,
                        "generator": false,
                        "start": 1021,
                        "end": 1047
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1014,
                      "end": 1047
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1062
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1068,
                              "end": 1069
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1065,
                            "end": 1069
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1074,
                            "end": 1075
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1076,
                                  "end": 1077
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcC",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1078,
                                  "end": 1083
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1076,
                                "end": 1083
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1087,
                                    "end": 1088
                                  },
                                  "start": 1084,
                                  "end": 1088
                                }
                              ],
                              "optional": false,
                              "start": 1076,
                              "end": 1089
                            }
                          ],
                          "optional": false,
                          "start": 1074,
                          "end": 1090
                        },
                        "id": null,
                        "generator": false,
                        "start": 1064,
                        "end": 1090
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1057,
                      "end": 1090
                    }
                  ],
                  "start": 935,
                  "end": 1097
                },
                "id": null,
                "generator": false,
                "start": 924,
                "end": 1098
              }
            ],
            "optional": false,
            "start": 901,
            "end": 1100
          },
          "definite": false,
          "start": 896,
          "end": 1100
        }
      ],
      "declare": false,
      "start": 890,
      "end": 1101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 128,
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
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Dispatch",
    "start": 206,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "extraProps",
    "start": 233,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 279,
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
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 296,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "IFuncs",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 359,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "IDestructuring",
    "start": 364,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 381,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "IFuncs",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 401,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 411,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 415,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 436,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 456,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 467,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Destructuring",
    "start": 472,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 488,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "IFuncs",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 506,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "IDestructuring",
    "start": 514,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "dispatch",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "Dispatch",
    "start": 546,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 571,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "funcs1",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "funcA",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "funcB",
    "start": 635,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 646,
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
    "value": "bb",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "funcC",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "ccc",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 744,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "TFuncs1",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 759,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "funcs1",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 774,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "useReduxDispatch1",
    "start": 791,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 811,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "IDestructuring",
    "start": 819,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "TFuncs1",
    "start": 834,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "destructuring",
    "start": 844,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "Destructuring",
    "start": 859,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "TFuncs1",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "useReduxDispatch1",
    "start": 901,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "funcA",
    "start": 945,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 959,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "funcA",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "funcB",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "funcB",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "funcC",
    "start": 1057,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "funcC",
    "start": 1078,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  }
]
```

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
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
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
              "start": 70,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 71
          }
        ],
        "start": 69,
        "end": 72
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 83
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "value",
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
                        "start": 89,
                        "end": 97
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      },
                      "start": 99,
                      "end": 106
                    },
                    "start": 88,
                    "end": 106
                  },
                  "start": 86,
                  "end": 106
                },
                "start": 84,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 79,
            "end": 114
          }
        ],
        "start": 73,
        "end": 116
      },
      "declare": false,
      "start": 58,
      "end": 116
    },
    {
      "type": "EmptyStatement",
      "start": 116,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 142
          }
        ],
        "start": 131,
        "end": 144
      },
      "declare": false,
      "start": 119,
      "end": 144
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 156
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "typeArguments": null,
          "start": 165,
          "end": 166
        }
      ],
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 178
          }
        ],
        "start": 167,
        "end": 180
      },
      "declare": false,
      "start": 145,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 200
                  }
                ],
                "start": 198,
                "end": 201
              },
              "start": 197,
              "end": 201
            },
            "start": 195,
            "end": 201
          },
          "start": 194,
          "end": 201
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  }
                ],
                "start": 207,
                "end": 210
              },
              "start": 206,
              "end": 210
            },
            "start": 204,
            "end": 210
          },
          "start": 203,
          "end": 210
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "start": 218,
              "end": 223
            },
            "directive": null,
            "start": 218,
            "end": 224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "directive": null,
            "start": 229,
            "end": 235
          }
        ],
        "start": 212,
        "end": 247
      },
      "expression": false,
      "start": 182,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 260
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 271
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 272,
                    "end": 273
                  }
                ],
                "start": 271,
                "end": 274
              },
              "start": 264,
              "end": 274
            },
            "start": 262,
            "end": 274
          },
          "start": 261,
          "end": 274
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 286
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 286,
                "end": 289
              },
              "start": 279,
              "end": 289
            },
            "start": 277,
            "end": 289
          },
          "start": 276,
          "end": 289
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 297,
              "end": 302
            },
            "directive": null,
            "start": 297,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "start": 308,
              "end": 313
            },
            "directive": null,
            "start": 308,
            "end": 314
          }
        ],
        "start": 291,
        "end": 326
      },
      "expression": false,
      "start": 249,
      "end": 326
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList1",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 344
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 358
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 370,
                              "end": 371
                            },
                            "typeArguments": null,
                            "start": 370,
                            "end": 371
                          },
                          "start": 368,
                          "end": 371
                        },
                        "start": 364,
                        "end": 371
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 376,
                        "end": 380
                      },
                      "start": 373,
                      "end": 380
                    },
                    "start": 363,
                    "end": 380
                  },
                  "start": 361,
                  "end": 380
                },
                "start": 359,
                "end": 380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 383,
                "end": 387
              },
              "start": 381,
              "end": 387
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 351,
            "end": 388
          }
        ],
        "start": 345,
        "end": 390
      },
      "declare": false,
      "start": 328,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList1",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 408
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 422
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 434,
                              "end": 435
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 435
                          },
                          "start": 432,
                          "end": 435
                        },
                        "start": 428,
                        "end": 435
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 440,
                        "end": 444
                      },
                      "start": 437,
                      "end": 444
                    },
                    "start": 427,
                    "end": 444
                  },
                  "start": 425,
                  "end": 444
                },
                "start": 423,
                "end": 444
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 447,
                "end": 451
              },
              "start": 445,
              "end": 451
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 415,
            "end": 452
          }
        ],
        "start": 409,
        "end": 454
      },
      "declare": false,
      "start": 392,
      "end": 454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 468
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList1",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 478
              },
              "typeArguments": null,
              "start": 472,
              "end": 478
            },
            "start": 470,
            "end": 478
          },
          "start": 469,
          "end": 478
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
                "name": "BList1",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 489
              },
              "typeArguments": null,
              "start": 483,
              "end": 489
            },
            "start": 481,
            "end": 489
          },
          "start": 480,
          "end": 489
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "start": 497,
              "end": 502
            },
            "directive": null,
            "start": 497,
            "end": 503
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 513
              },
              "start": 508,
              "end": 513
            },
            "directive": null,
            "start": 508,
            "end": 514
          }
        ],
        "start": 491,
        "end": 526
      },
      "expression": false,
      "start": 456,
      "end": 526
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList2",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 544
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 558
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 570,
                              "end": 571
                            },
                            "typeArguments": null,
                            "start": 570,
                            "end": 571
                          },
                          "start": 568,
                          "end": 571
                        },
                        "start": 564,
                        "end": 571
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 576,
                        "end": 583
                      },
                      "start": 573,
                      "end": 583
                    },
                    "start": 563,
                    "end": 583
                  },
                  "start": 561,
                  "end": 583
                },
                "start": 559,
                "end": 583
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 586,
                "end": 590
              },
              "start": 584,
              "end": 590
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 551,
            "end": 591
          }
        ],
        "start": 545,
        "end": 593
      },
      "declare": false,
      "start": 528,
      "end": 593
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList2",
        "optional": false,
        "typeAnnotation": null,
        "start": 605,
        "end": 611
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 625
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 637,
                              "end": 638
                            },
                            "typeArguments": null,
                            "start": 637,
                            "end": 638
                          },
                          "start": 635,
                          "end": 638
                        },
                        "start": 631,
                        "end": 638
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 643,
                        "end": 647
                      },
                      "start": 640,
                      "end": 647
                    },
                    "start": 630,
                    "end": 647
                  },
                  "start": 628,
                  "end": 647
                },
                "start": 626,
                "end": 647
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 650,
                "end": 654
              },
              "start": 648,
              "end": 654
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 618,
            "end": 655
          }
        ],
        "start": 612,
        "end": 657
      },
      "declare": false,
      "start": 595,
      "end": 657
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 668,
        "end": 671
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList2",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "typeArguments": null,
              "start": 675,
              "end": 681
            },
            "start": 673,
            "end": 681
          },
          "start": 672,
          "end": 681
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
                "name": "BList2",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 692
              },
              "typeArguments": null,
              "start": 686,
              "end": 692
            },
            "start": 684,
            "end": 692
          },
          "start": 683,
          "end": 692
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "start": 700,
              "end": 705
            },
            "directive": null,
            "start": 700,
            "end": 706
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 712
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "start": 711,
              "end": 716
            },
            "directive": null,
            "start": 711,
            "end": 717
          }
        ],
        "start": 694,
        "end": 729
      },
      "expression": false,
      "start": 659,
      "end": 729
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList3",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 747
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 761
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 773,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 774
                          },
                          "start": 771,
                          "end": 774
                        },
                        "start": 767,
                        "end": 774
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 779,
                        "end": 783
                      },
                      "start": 776,
                      "end": 783
                    },
                    "start": 766,
                    "end": 783
                  },
                  "start": 764,
                  "end": 783
                },
                "start": 762,
                "end": 783
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 786,
                "end": 790
              },
              "start": 784,
              "end": 790
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 754,
            "end": 791
          }
        ],
        "start": 748,
        "end": 793
      },
      "declare": false,
      "start": 731,
      "end": 793
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList3",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 811
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 825
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 837,
                              "end": 838
                            },
                            "typeArguments": null,
                            "start": 837,
                            "end": 838
                          },
                          "start": 835,
                          "end": 838
                        },
                        "start": 831,
                        "end": 838
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 849,
                            "end": 852
                          },
                          "start": 847,
                          "end": 852
                        },
                        "start": 840,
                        "end": 852
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 857,
                        "end": 861
                      },
                      "start": 854,
                      "end": 861
                    },
                    "start": 830,
                    "end": 861
                  },
                  "start": 828,
                  "end": 861
                },
                "start": 826,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 864,
                "end": 868
              },
              "start": 862,
              "end": 868
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 818,
            "end": 869
          }
        ],
        "start": 812,
        "end": 871
      },
      "declare": false,
      "start": 795,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 885
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList3",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 895
              },
              "typeArguments": null,
              "start": 889,
              "end": 895
            },
            "start": 887,
            "end": 895
          },
          "start": 886,
          "end": 895
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
                "name": "BList3",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 906
              },
              "typeArguments": null,
              "start": 900,
              "end": 906
            },
            "start": 898,
            "end": 906
          },
          "start": 897,
          "end": 906
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 915
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 918,
                "end": 919
              },
              "start": 914,
              "end": 919
            },
            "directive": null,
            "start": 914,
            "end": 920
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "start": 925,
              "end": 930
            },
            "directive": null,
            "start": 925,
            "end": 931
          }
        ],
        "start": 908,
        "end": 943
      },
      "expression": false,
      "start": 873,
      "end": 943
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList4",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 961
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 975
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 987,
                              "end": 988
                            },
                            "typeArguments": null,
                            "start": 987,
                            "end": 988
                          },
                          "start": 985,
                          "end": 988
                        },
                        "start": 981,
                        "end": 988
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
                          "start": 993,
                          "end": 994
                        },
                        "typeArguments": null,
                        "start": 993,
                        "end": 994
                      },
                      "start": 990,
                      "end": 994
                    },
                    "start": 980,
                    "end": 994
                  },
                  "start": 978,
                  "end": 994
                },
                "start": 976,
                "end": 994
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 997,
                "end": 1001
              },
              "start": 995,
              "end": 1001
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 968,
            "end": 1002
          }
        ],
        "start": 962,
        "end": 1004
      },
      "declare": false,
      "start": 945,
      "end": 1004
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1022
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1036
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
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
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1046,
                          "end": 1049
                        },
                        "start": 1042,
                        "end": 1049
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1054,
                          "end": 1055
                        },
                        "typeArguments": null,
                        "start": 1054,
                        "end": 1055
                      },
                      "start": 1051,
                      "end": 1055
                    },
                    "start": 1041,
                    "end": 1055
                  },
                  "start": 1039,
                  "end": 1055
                },
                "start": 1037,
                "end": 1055
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1058,
                "end": 1062
              },
              "start": 1056,
              "end": 1062
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1029,
            "end": 1063
          }
        ],
        "start": 1023,
        "end": 1065
      },
      "declare": false,
      "start": 1006,
      "end": 1065
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1076,
        "end": 1079
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1083,
                "end": 1089
              },
              "typeArguments": null,
              "start": 1083,
              "end": 1089
            },
            "start": 1081,
            "end": 1089
          },
          "start": 1080,
          "end": 1089
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
                "name": "BList4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1100
              },
              "typeArguments": null,
              "start": 1094,
              "end": 1100
            },
            "start": 1092,
            "end": 1100
          },
          "start": 1091,
          "end": 1100
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1109
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1113
              },
              "start": 1108,
              "end": 1113
            },
            "directive": null,
            "start": 1108,
            "end": 1114
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1124
              },
              "start": 1119,
              "end": 1124
            },
            "directive": null,
            "start": 1119,
            "end": 1125
          }
        ],
        "start": 1102,
        "end": 1137
      },
      "expression": false,
      "start": 1067,
      "end": 1137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1171
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
              "start": 1172,
              "end": 1173
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1172,
            "end": 1173
          }
        ],
        "start": 1171,
        "end": 1174
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1182
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1190,
                      "end": 1191
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "start": 1188,
                  "end": 1191
                },
                "start": 1183,
                "end": 1191
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1194,
                "end": 1198
              },
              "start": 1192,
              "end": 1198
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1179,
            "end": 1198
          }
        ],
        "start": 1177,
        "end": 1200
      },
      "declare": false,
      "start": 1161,
      "end": 1200
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
            "name": "bu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1218,
                  "end": 1223
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1224,
                      "end": 1231
                    }
                  ],
                  "start": 1223,
                  "end": 1232
                },
                "start": 1218,
                "end": 1232
              },
              "start": 1216,
              "end": 1232
            },
            "start": 1214,
            "end": 1232
          },
          "init": null,
          "definite": false,
          "start": 1214,
          "end": 1232
        }
      ],
      "declare": true,
      "start": 1202,
      "end": 1233
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
            "name": "bs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1255
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1256,
                      "end": 1262
                    }
                  ],
                  "start": 1255,
                  "end": 1263
                },
                "start": 1250,
                "end": 1263
              },
              "start": 1248,
              "end": 1263
            },
            "start": 1246,
            "end": 1263
          },
          "init": null,
          "definite": false,
          "start": 1246,
          "end": 1263
        }
      ],
      "declare": true,
      "start": 1234,
      "end": 1264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1265,
          "end": 1267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1272
        },
        "start": 1265,
        "end": 1272
      },
      "directive": null,
      "start": 1265,
      "end": 1273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1276
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1281
        },
        "start": 1274,
        "end": 1281
      },
      "directive": null,
      "start": 1274,
      "end": 1282
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
            "name": "bfu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "type": "TSUnknownKeyword",
                              "start": 1311,
                              "end": 1318
                            },
                            "start": 1309,
                            "end": 1318
                          },
                          "start": 1308,
                          "end": 1318
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1323,
                          "end": 1327
                        },
                        "start": 1320,
                        "end": 1327
                      },
                      "start": 1307,
                      "end": 1327
                    }
                  ],
                  "start": 1306,
                  "end": 1328
                },
                "start": 1301,
                "end": 1328
              },
              "start": 1299,
              "end": 1328
            },
            "start": 1296,
            "end": 1328
          },
          "init": null,
          "definite": false,
          "start": 1296,
          "end": 1328
        }
      ],
      "declare": true,
      "start": 1284,
      "end": 1329
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
            "name": "bfs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1352
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "start": 1357,
                              "end": 1363
                            },
                            "start": 1355,
                            "end": 1363
                          },
                          "start": 1354,
                          "end": 1363
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1368,
                          "end": 1372
                        },
                        "start": 1365,
                        "end": 1372
                      },
                      "start": 1353,
                      "end": 1372
                    }
                  ],
                  "start": 1352,
                  "end": 1373
                },
                "start": 1347,
                "end": 1373
              },
              "start": 1345,
              "end": 1373
            },
            "start": 1342,
            "end": 1373
          },
          "init": null,
          "definite": false,
          "start": 1342,
          "end": 1373
        }
      ],
      "declare": true,
      "start": 1330,
      "end": 1374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1381,
          "end": 1384
        },
        "start": 1375,
        "end": 1384
      },
      "directive": null,
      "start": 1375,
      "end": 1385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1386,
          "end": 1389
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1392,
          "end": 1395
        },
        "start": 1386,
        "end": 1395
      },
      "directive": null,
      "start": 1386,
      "end": 1396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1409
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
              "start": 1410,
              "end": 1411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1410,
            "end": 1411
          }
        ],
        "start": 1409,
        "end": 1412
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1420
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1428,
                      "end": 1429
                    },
                    "typeArguments": null,
                    "start": 1428,
                    "end": 1429
                  },
                  "start": 1426,
                  "end": 1429
                },
                "start": 1421,
                "end": 1429
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1432,
                "end": 1436
              },
              "start": 1430,
              "end": 1436
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1417,
            "end": 1436
          }
        ],
        "start": 1415,
        "end": 1438
      },
      "declare": false,
      "start": 1398,
      "end": 1438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1450
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
              "start": 1451,
              "end": 1452
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1451,
            "end": 1452
          }
        ],
        "start": 1450,
        "end": 1453
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1461
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1469,
                      "end": 1470
                    },
                    "typeArguments": null,
                    "start": 1469,
                    "end": 1470
                  },
                  "start": 1467,
                  "end": 1470
                },
                "start": 1462,
                "end": 1470
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1473,
                "end": 1477
              },
              "start": 1471,
              "end": 1477
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1458,
            "end": 1477
          }
        ],
        "start": 1456,
        "end": 1479
      },
      "declare": false,
      "start": 1439,
      "end": 1479
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
            "name": "b1fu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1499,
                  "end": 1505
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "type": "TSUnknownKeyword",
                              "start": 1510,
                              "end": 1517
                            },
                            "start": 1508,
                            "end": 1517
                          },
                          "start": 1507,
                          "end": 1517
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1522,
                          "end": 1526
                        },
                        "start": 1519,
                        "end": 1526
                      },
                      "start": 1506,
                      "end": 1526
                    }
                  ],
                  "start": 1505,
                  "end": 1527
                },
                "start": 1499,
                "end": 1527
              },
              "start": 1497,
              "end": 1527
            },
            "start": 1493,
            "end": 1527
          },
          "init": null,
          "definite": false,
          "start": 1493,
          "end": 1527
        }
      ],
      "declare": true,
      "start": 1481,
      "end": 1528
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
            "name": "b2fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "start": 1558,
                              "end": 1564
                            },
                            "start": 1556,
                            "end": 1564
                          },
                          "start": 1555,
                          "end": 1564
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1569,
                          "end": 1573
                        },
                        "start": 1566,
                        "end": 1573
                      },
                      "start": 1554,
                      "end": 1573
                    }
                  ],
                  "start": 1553,
                  "end": 1574
                },
                "start": 1547,
                "end": 1574
              },
              "start": 1545,
              "end": 1574
            },
            "start": 1541,
            "end": 1574
          },
          "init": null,
          "definite": false,
          "start": 1541,
          "end": 1574
        }
      ],
      "declare": true,
      "start": 1529,
      "end": 1575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1576,
          "end": 1580
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1583,
          "end": 1587
        },
        "start": 1576,
        "end": 1587
      },
      "directive": null,
      "start": 1576,
      "end": 1588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1589,
          "end": 1593
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1596,
          "end": 1600
        },
        "start": 1589,
        "end": 1600
      },
      "directive": null,
      "start": 1589,
      "end": 1601
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1615
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
              "start": 1616,
              "end": 1617
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1616,
            "end": 1617
          }
        ],
        "start": 1615,
        "end": 1618
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1626
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1634,
                      "end": 1635
                    },
                    "typeArguments": null,
                    "start": 1634,
                    "end": 1635
                  },
                  "start": 1632,
                  "end": 1635
                },
                "start": 1627,
                "end": 1635
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1638,
                "end": 1642
              },
              "start": 1636,
              "end": 1642
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1623,
            "end": 1643
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1644,
              "end": 1647
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 1651,
                  "end": 1652
                },
                "typeArguments": null,
                "start": 1651,
                "end": 1652
              },
              "start": 1649,
              "end": 1652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1644,
            "end": 1652
          }
        ],
        "start": 1621,
        "end": 1654
      },
      "declare": false,
      "start": 1603,
      "end": 1654
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
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "type": "TSUnknownKeyword",
                              "start": 1685,
                              "end": 1692
                            },
                            "start": 1683,
                            "end": 1692
                          },
                          "start": 1682,
                          "end": 1692
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1697,
                          "end": 1701
                        },
                        "start": 1694,
                        "end": 1701
                      },
                      "start": 1681,
                      "end": 1701
                    }
                  ],
                  "start": 1680,
                  "end": 1702
                },
                "start": 1672,
                "end": 1702
              },
              "start": 1670,
              "end": 1702
            },
            "start": 1668,
            "end": 1702
          },
          "init": null,
          "definite": false,
          "start": 1668,
          "end": 1702
        }
      ],
      "declare": true,
      "start": 1656,
      "end": 1703
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
            "name": "sy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1728
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "start": 1733,
                              "end": 1739
                            },
                            "start": 1731,
                            "end": 1739
                          },
                          "start": 1730,
                          "end": 1739
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1744,
                          "end": 1748
                        },
                        "start": 1741,
                        "end": 1748
                      },
                      "start": 1729,
                      "end": 1748
                    }
                  ],
                  "start": 1728,
                  "end": 1749
                },
                "start": 1720,
                "end": 1749
              },
              "start": 1718,
              "end": 1749
            },
            "start": 1716,
            "end": 1749
          },
          "init": null,
          "definite": false,
          "start": 1716,
          "end": 1749
        }
      ],
      "declare": true,
      "start": 1704,
      "end": 1750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 1751,
          "end": 1753
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null,
          "start": 1756,
          "end": 1758
        },
        "start": 1751,
        "end": 1758
      },
      "directive": null,
      "start": 1751,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null,
          "start": 1770,
          "end": 1772
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 1775,
          "end": 1777
        },
        "start": 1770,
        "end": 1777
      },
      "directive": null,
      "start": 1770,
      "end": 1778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1785,
        "end": 1793
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
              "start": 1794,
              "end": 1795
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1794,
            "end": 1795
          }
        ],
        "start": 1793,
        "end": 1796
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1804
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1812,
                      "end": 1813
                    },
                    "typeArguments": null,
                    "start": 1812,
                    "end": 1813
                  },
                  "start": 1810,
                  "end": 1813
                },
                "start": 1805,
                "end": 1813
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1816,
                "end": 1820
              },
              "start": 1814,
              "end": 1820
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1801,
            "end": 1821
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1822,
              "end": 1825
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 1829,
                  "end": 1830
                },
                "typeArguments": null,
                "start": 1829,
                "end": 1830
              },
              "start": 1827,
              "end": 1830
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1822,
            "end": 1830
          }
        ],
        "start": 1799,
        "end": 1832
      },
      "declare": false,
      "start": 1780,
      "end": 1832
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1838,
        "end": 1846
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
              "start": 1847,
              "end": 1848
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1847,
            "end": 1848
          }
        ],
        "start": 1846,
        "end": 1849
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1857
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1865,
                      "end": 1866
                    },
                    "typeArguments": null,
                    "start": 1865,
                    "end": 1866
                  },
                  "start": 1863,
                  "end": 1866
                },
                "start": 1858,
                "end": 1866
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1869,
                "end": 1873
              },
              "start": 1867,
              "end": 1873
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1854,
            "end": 1874
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1878
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 1882,
                  "end": 1883
                },
                "typeArguments": null,
                "start": 1882,
                "end": 1883
              },
              "start": 1880,
              "end": 1883
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1875,
            "end": 1883
          }
        ],
        "start": 1852,
        "end": 1885
      },
      "declare": false,
      "start": 1833,
      "end": 1885
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1911
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "type": "TSUnknownKeyword",
                              "start": 1916,
                              "end": 1923
                            },
                            "start": 1914,
                            "end": 1923
                          },
                          "start": 1913,
                          "end": 1923
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1928,
                          "end": 1932
                        },
                        "start": 1925,
                        "end": 1932
                      },
                      "start": 1912,
                      "end": 1932
                    }
                  ],
                  "start": 1911,
                  "end": 1933
                },
                "start": 1903,
                "end": 1933
              },
              "start": 1901,
              "end": 1933
            },
            "start": 1899,
            "end": 1933
          },
          "init": null,
          "definite": false,
          "start": 1899,
          "end": 1933
        }
      ],
      "declare": true,
      "start": 1887,
      "end": 1934
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1951,
                  "end": 1959
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                              "start": 1964,
                              "end": 1970
                            },
                            "start": 1962,
                            "end": 1970
                          },
                          "start": 1961,
                          "end": 1970
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1975,
                          "end": 1979
                        },
                        "start": 1972,
                        "end": 1979
                      },
                      "start": 1960,
                      "end": 1979
                    }
                  ],
                  "start": 1959,
                  "end": 1980
                },
                "start": 1951,
                "end": 1980
              },
              "start": 1949,
              "end": 1980
            },
            "start": 1947,
            "end": 1980
          },
          "init": null,
          "definite": false,
          "start": 1947,
          "end": 1980
        }
      ],
      "declare": true,
      "start": 1935,
      "end": 1981
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1982,
          "end": 1984
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1989
        },
        "start": 1982,
        "end": 1989
      },
      "directive": null,
      "start": 1982,
      "end": 1990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2001,
          "end": 2003
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2006,
          "end": 2008
        },
        "start": 2001,
        "end": 2008
      },
      "directive": null,
      "start": 2001,
      "end": 2009
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 2009
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 89,
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
    "value": "T",
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
    "value": "=>",
    "start": 99,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "interface",
    "start": 119,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 145,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 157,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 249,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 264,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 279,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
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
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 328,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "AList1",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 373,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 392,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "BList1",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 415,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 437,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "AList1",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "BList1",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 501,
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
    "value": "b",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 528,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "AList2",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 595,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "BList2",
    "start": 605,
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
    "value": "forEach",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 637,
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
    "value": "=>",
    "start": 640,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 659,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "AList2",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "BList2",
    "start": 686,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "b",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 731,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "AList3",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 776,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 795,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "BList3",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 818,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 840,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 854,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "AList3",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "BList3",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 945,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "AList4",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 968,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 981,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 990,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 997,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1006,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "BList4",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1029,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "AList4",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "BList4",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Bivar",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 1194,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1202,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "bu",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "Bivar",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1224,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1234,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "Bivar",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "bu",
    "start": 1265,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "bu",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1284,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "bfu",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "Bivar",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1311,
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
    "value": "=>",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1323,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1330,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "bfs",
    "start": 1342,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "Bivar",
    "start": 1347,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1357,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1368,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "bfu",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "bfs",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "bfs",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "bfu",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "Bivar1",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1410,
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
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1421,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1432,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1439,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "Bivar2",
    "start": 1444,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "set",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1462,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1473,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "b1fu",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "Bivar1",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1522,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1529,
    "end": 1536
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "b2fs",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "Bivar2",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1558,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "b1fu",
    "start": 1576,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "b2fs",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "b2fs",
    "start": 1589,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "b1fu",
    "start": 1596,
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
    "value": "type",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "SetLike",
    "start": 1608,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1627,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1638,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1656,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "SetLike1",
    "start": 1672,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1680,
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
    "value": "x",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1697,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1704,
    "end": 1711
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1712,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "sy",
    "start": 1716,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "SetLike1",
    "start": 1720,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1744,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "sy",
    "start": 1756,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "sy",
    "start": 1770,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1775,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1780,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "SetLike1",
    "start": 1785,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1805,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 1816,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1833,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "SetLike2",
    "start": 1838,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1854,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1858,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1869,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1887,
    "end": 1894
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "SetLike1",
    "start": 1903,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1916,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1935,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1947,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "SetLike2",
    "start": 1951,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1964,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1975,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1987,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2001,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2006,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  }
]
```

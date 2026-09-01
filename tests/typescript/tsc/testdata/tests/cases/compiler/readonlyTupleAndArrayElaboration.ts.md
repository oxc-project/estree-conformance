__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 43
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 47,
                  "end": 48
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 50,
                  "end": 51
                }
              ],
              "start": 46,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              },
              "typeArguments": null,
              "start": 56,
              "end": 61
            },
            "start": 46,
            "end": 61
          },
          "definite": false,
          "start": 38,
          "end": 61
        }
      ],
      "declare": false,
      "start": 34,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distanceFromOrigin",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 91
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 101,
                  "end": 107
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                }
              ],
              "start": 100,
              "end": 116
            },
            "start": 98,
            "end": 116
          },
          "start": 92,
          "end": 116
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sqrt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 140
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 146,
                      "end": 147
                    },
                    "start": 141,
                    "end": 147
                  },
                  "operator": "+",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 155,
                      "end": 156
                    },
                    "start": 150,
                    "end": 156
                  },
                  "start": 141,
                  "end": 156
                }
              ],
              "optional": false,
              "start": 131,
              "end": 157
            },
            "start": 124,
            "end": 158
          }
        ],
        "start": 118,
        "end": 160
      },
      "expression": false,
      "start": 64,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distanceFromOrigin",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 186
          }
        ],
        "optional": false,
        "start": 162,
        "end": 187
      },
      "directive": null,
      "start": 162,
      "end": 188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arryFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 213
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
                "start": 217,
                "end": 223
              },
              "start": 217,
              "end": 225
            },
            "start": 215,
            "end": 225
          },
          "start": 214,
          "end": 225
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 228,
          "end": 232
        },
        "start": 226,
        "end": 232
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 246
          }
        ],
        "optional": false,
        "start": 234,
        "end": 247
      },
      "directive": null,
      "start": 234,
      "end": 248
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arryFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 274
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
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 283
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 284,
                    "end": 290
                  }
                ],
                "start": 283,
                "end": 291
              },
              "start": 278,
              "end": 291
            },
            "start": 276,
            "end": 291
          },
          "start": 275,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        },
        "start": 292,
        "end": 298
      },
      "body": null,
      "expression": false,
      "start": 250,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 307
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 313
          }
        ],
        "optional": false,
        "start": 300,
        "end": 314
      },
      "directive": null,
      "start": 300,
      "end": 315
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 343,
                    "end": 349
                  },
                  "start": 343,
                  "end": 351
                },
                "start": 334,
                "end": 351
              },
              "start": 332,
              "end": 351
            },
            "start": 331,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 351
        }
      ],
      "declare": true,
      "start": 317,
      "end": 352
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 378
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 379,
                        "end": 385
                      },
                      "start": 379,
                      "end": 387
                    }
                  ],
                  "start": 378,
                  "end": 388
                },
                "start": 370,
                "end": 388
              },
              "start": 368,
              "end": 388
            },
            "start": 367,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 367,
          "end": 388
        }
      ],
      "declare": true,
      "start": 353,
      "end": 389
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 420
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 421,
                      "end": 427
                    }
                  ],
                  "start": 420,
                  "end": 428
                },
                "start": 407,
                "end": 428
              },
              "start": 405,
              "end": 428
            },
            "start": 404,
            "end": 428
          },
          "init": null,
          "definite": false,
          "start": 404,
          "end": 428
        }
      ],
      "declare": true,
      "start": 390,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 438
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 440
          }
        ],
        "optional": false,
        "start": 431,
        "end": 441
      },
      "directive": null,
      "start": 431,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 450
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 452
          }
        ],
        "optional": false,
        "start": 443,
        "end": 453
      },
      "directive": null,
      "start": 443,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 462
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 464
          }
        ],
        "optional": false,
        "start": 455,
        "end": 465
      },
      "directive": null,
      "start": 455,
      "end": 466
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 488,
                        "end": 489
                      },
                      "start": 488,
                      "end": 489
                    }
                  ],
                  "start": 487,
                  "end": 490
                },
                "start": 478,
                "end": 490
              },
              "start": 476,
              "end": 490
            },
            "start": 474,
            "end": 490
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 494,
                "end": 495
              }
            ],
            "start": 493,
            "end": 496
          },
          "definite": false,
          "start": 474,
          "end": 496
        }
      ],
      "declare": false,
      "start": 468,
      "end": 497
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 517,
                  "end": 519
                },
                "start": 508,
                "end": 519
              },
              "start": 506,
              "end": 519
            },
            "start": 504,
            "end": 519
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 524
          },
          "definite": false,
          "start": 504,
          "end": 524
        }
      ],
      "declare": false,
      "start": 498,
      "end": 525
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 547,
                        "end": 548
                      },
                      "start": 547,
                      "end": 548
                    }
                  ],
                  "start": 546,
                  "end": 549
                },
                "start": 537,
                "end": 549
              },
              "start": 535,
              "end": 549
            },
            "start": 533,
            "end": 549
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 553,
                "end": 554
              }
            ],
            "start": 552,
            "end": 555
          },
          "definite": false,
          "start": 533,
          "end": 555
        }
      ],
      "declare": false,
      "start": 527,
      "end": 556
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 567,
                "end": 569
              },
              "start": 565,
              "end": 569
            },
            "start": 563,
            "end": 569
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 574
          },
          "definite": false,
          "start": 563,
          "end": 574
        }
      ],
      "declare": false,
      "start": 557,
      "end": 575
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 588,
                      "end": 589
                    },
                    "start": 588,
                    "end": 589
                  }
                ],
                "start": 587,
                "end": 590
              },
              "start": 585,
              "end": 590
            },
            "start": 583,
            "end": 590
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 594,
                "end": 595
              }
            ],
            "start": 593,
            "end": 596
          },
          "definite": false,
          "start": 583,
          "end": 596
        }
      ],
      "declare": false,
      "start": 577,
      "end": 597
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 617,
                  "end": 619
                },
                "start": 608,
                "end": 619
              },
              "start": 606,
              "end": 619
            },
            "start": 604,
            "end": 619
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 624
          },
          "definite": false,
          "start": 604,
          "end": 624
        }
      ],
      "declare": false,
      "start": 598,
      "end": 625
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 638,
                      "end": 639
                    },
                    "start": 638,
                    "end": 639
                  }
                ],
                "start": 637,
                "end": 640
              },
              "start": 635,
              "end": 640
            },
            "start": 633,
            "end": 640
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 644,
                "end": 645
              }
            ],
            "start": 643,
            "end": 646
          },
          "definite": false,
          "start": 633,
          "end": 646
        }
      ],
      "declare": false,
      "start": 627,
      "end": 647
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 658,
                "end": 660
              },
              "start": 656,
              "end": 660
            },
            "start": 654,
            "end": 660
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 665
          },
          "definite": false,
          "start": 654,
          "end": 665
        }
      ],
      "declare": false,
      "start": 648,
      "end": 666
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
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 687,
                    "end": 693
                  },
                  "start": 687,
                  "end": 695
                },
                "start": 678,
                "end": 695
              },
              "start": 676,
              "end": 695
            },
            "start": 674,
            "end": 695
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 699,
                "end": 700
              }
            ],
            "start": 698,
            "end": 701
          },
          "definite": false,
          "start": 674,
          "end": 701
        }
      ],
      "declare": false,
      "start": 668,
      "end": 702
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
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 722,
                    "end": 729
                  },
                  "start": 722,
                  "end": 731
                },
                "start": 713,
                "end": 731
              },
              "start": 711,
              "end": 731
            },
            "start": 709,
            "end": 731
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 736
          },
          "definite": false,
          "start": 709,
          "end": 736
        }
      ],
      "declare": false,
      "start": 703,
      "end": 737
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
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 758,
                    "end": 764
                  },
                  "start": 758,
                  "end": 766
                },
                "start": 749,
                "end": 766
              },
              "start": 747,
              "end": 766
            },
            "start": 745,
            "end": 766
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 770,
                "end": 771
              }
            ],
            "start": 769,
            "end": 772
          },
          "definite": false,
          "start": 745,
          "end": 772
        }
      ],
      "declare": false,
      "start": 739,
      "end": 773
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 784,
                  "end": 791
                },
                "start": 784,
                "end": 793
              },
              "start": 782,
              "end": 793
            },
            "start": 780,
            "end": 793
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 798
          },
          "definite": false,
          "start": 780,
          "end": 798
        }
      ],
      "declare": false,
      "start": 774,
      "end": 799
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 811,
                  "end": 817
                },
                "start": 811,
                "end": 819
              },
              "start": 809,
              "end": 819
            },
            "start": 807,
            "end": 819
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 823,
                "end": 824
              }
            ],
            "start": 822,
            "end": 825
          },
          "definite": false,
          "start": 807,
          "end": 825
        }
      ],
      "declare": false,
      "start": 801,
      "end": 826
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 846,
                    "end": 853
                  },
                  "start": 846,
                  "end": 856
                },
                "start": 837,
                "end": 856
              },
              "start": 835,
              "end": 856
            },
            "start": 833,
            "end": 856
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 861
          },
          "definite": false,
          "start": 833,
          "end": 861
        }
      ],
      "declare": false,
      "start": 827,
      "end": 862
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 874,
                  "end": 880
                },
                "start": 874,
                "end": 882
              },
              "start": 872,
              "end": 882
            },
            "start": 870,
            "end": 882
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 886,
                "end": 887
              }
            ],
            "start": 885,
            "end": 888
          },
          "definite": false,
          "start": 870,
          "end": 888
        }
      ],
      "declare": false,
      "start": 864,
      "end": 889
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 900,
                  "end": 907
                },
                "start": 900,
                "end": 909
              },
              "start": 898,
              "end": 909
            },
            "start": 896,
            "end": 909
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 914
          },
          "definite": false,
          "start": 896,
          "end": 914
        }
      ],
      "declare": false,
      "start": 890,
      "end": 915
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
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 938,
                        "end": 939
                      },
                      "start": 938,
                      "end": 939
                    }
                  ],
                  "start": 937,
                  "end": 940
                },
                "start": 928,
                "end": 940
              },
              "start": 926,
              "end": 940
            },
            "start": 923,
            "end": 940
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 944,
                "end": 945
              }
            ],
            "start": 943,
            "end": 946
          },
          "definite": false,
          "start": 923,
          "end": 946
        }
      ],
      "declare": false,
      "start": 917,
      "end": 947
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
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 968,
                    "end": 975
                  },
                  "start": 968,
                  "end": 977
                },
                "start": 959,
                "end": 977
              },
              "start": 957,
              "end": 977
            },
            "start": 954,
            "end": 977
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 983
          },
          "definite": false,
          "start": 954,
          "end": 983
        }
      ],
      "declare": false,
      "start": 948,
      "end": 984
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
            "name": "ta3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1007,
                        "end": 1008
                      },
                      "start": 1007,
                      "end": 1008
                    }
                  ],
                  "start": 1006,
                  "end": 1009
                },
                "start": 997,
                "end": 1009
              },
              "start": 995,
              "end": 1009
            },
            "start": 992,
            "end": 1009
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1013,
                "end": 1014
              }
            ],
            "start": 1012,
            "end": 1015
          },
          "definite": false,
          "start": 992,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1016
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
            "name": "ta4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1028,
                  "end": 1034
                },
                "start": 1028,
                "end": 1036
              },
              "start": 1026,
              "end": 1036
            },
            "start": 1023,
            "end": 1036
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1042
          },
          "definite": false,
          "start": 1023,
          "end": 1042
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1043
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
            "name": "ta5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1057,
                      "end": 1058
                    },
                    "start": 1057,
                    "end": 1058
                  }
                ],
                "start": 1056,
                "end": 1059
              },
              "start": 1054,
              "end": 1059
            },
            "start": 1051,
            "end": 1059
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1063,
                "end": 1064
              }
            ],
            "start": 1062,
            "end": 1065
          },
          "definite": false,
          "start": 1051,
          "end": 1065
        }
      ],
      "declare": false,
      "start": 1045,
      "end": 1066
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
            "name": "ta6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 1087,
                    "end": 1094
                  },
                  "start": 1087,
                  "end": 1096
                },
                "start": 1078,
                "end": 1096
              },
              "start": 1076,
              "end": 1096
            },
            "start": 1073,
            "end": 1096
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1102
          },
          "definite": false,
          "start": 1073,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1103
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
            "name": "ta7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1117,
                      "end": 1118
                    },
                    "start": 1117,
                    "end": 1118
                  }
                ],
                "start": 1116,
                "end": 1119
              },
              "start": 1114,
              "end": 1119
            },
            "start": 1111,
            "end": 1119
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1123,
                "end": 1124
              }
            ],
            "start": 1122,
            "end": 1125
          },
          "definite": false,
          "start": 1111,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1105,
      "end": 1126
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
            "name": "ta8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 1138,
                  "end": 1145
                },
                "start": 1138,
                "end": 1147
              },
              "start": 1136,
              "end": 1147
            },
            "start": 1133,
            "end": 1147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1150,
            "end": 1153
          },
          "definite": false,
          "start": 1133,
          "end": 1153
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1154
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
            "name": "at1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1176,
                    "end": 1182
                  },
                  "start": 1176,
                  "end": 1184
                },
                "start": 1167,
                "end": 1184
              },
              "start": 1165,
              "end": 1184
            },
            "start": 1162,
            "end": 1184
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1188,
                "end": 1189
              }
            ],
            "start": 1187,
            "end": 1190
          },
          "definite": false,
          "start": 1162,
          "end": 1190
        }
      ],
      "declare": false,
      "start": 1156,
      "end": 1191
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
            "name": "at2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1213,
                        "end": 1214
                      },
                      "start": 1213,
                      "end": 1214
                    }
                  ],
                  "start": 1212,
                  "end": 1215
                },
                "start": 1203,
                "end": 1215
              },
              "start": 1201,
              "end": 1215
            },
            "start": 1198,
            "end": 1215
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1221
          },
          "definite": false,
          "start": 1198,
          "end": 1221
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1222
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
            "name": "at3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1244,
                    "end": 1250
                  },
                  "start": 1244,
                  "end": 1252
                },
                "start": 1235,
                "end": 1252
              },
              "start": 1233,
              "end": 1252
            },
            "start": 1230,
            "end": 1252
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1256,
                "end": 1257
              }
            ],
            "start": 1255,
            "end": 1258
          },
          "definite": false,
          "start": 1230,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1259
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
            "name": "at4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1272,
                      "end": 1273
                    },
                    "start": 1272,
                    "end": 1273
                  }
                ],
                "start": 1271,
                "end": 1274
              },
              "start": 1269,
              "end": 1274
            },
            "start": 1266,
            "end": 1274
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1280
          },
          "definite": false,
          "start": 1266,
          "end": 1280
        }
      ],
      "declare": false,
      "start": 1260,
      "end": 1281
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
            "name": "at5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1294,
                  "end": 1300
                },
                "start": 1294,
                "end": 1302
              },
              "start": 1292,
              "end": 1302
            },
            "start": 1289,
            "end": 1302
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1306,
                "end": 1307
              }
            ],
            "start": 1305,
            "end": 1308
          },
          "definite": false,
          "start": 1289,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1283,
      "end": 1309
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
            "name": "at6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1331,
                        "end": 1332
                      },
                      "start": 1331,
                      "end": 1332
                    }
                  ],
                  "start": 1330,
                  "end": 1333
                },
                "start": 1321,
                "end": 1333
              },
              "start": 1319,
              "end": 1333
            },
            "start": 1316,
            "end": 1333
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1339
          },
          "definite": false,
          "start": 1316,
          "end": 1339
        }
      ],
      "declare": false,
      "start": 1310,
      "end": 1340
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
            "name": "at7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1353,
                  "end": 1359
                },
                "start": 1353,
                "end": 1361
              },
              "start": 1351,
              "end": 1361
            },
            "start": 1348,
            "end": 1361
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1365,
                "end": 1366
              }
            ],
            "start": 1364,
            "end": 1367
          },
          "definite": false,
          "start": 1348,
          "end": 1367
        }
      ],
      "declare": false,
      "start": 1342,
      "end": 1368
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
            "name": "at8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1381,
                      "end": 1382
                    },
                    "start": 1381,
                    "end": 1382
                  }
                ],
                "start": 1380,
                "end": 1383
              },
              "start": 1378,
              "end": 1383
            },
            "start": 1375,
            "end": 1383
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1389
          },
          "definite": false,
          "start": 1375,
          "end": 1389
        }
      ],
      "declare": false,
      "start": 1369,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 1390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "distanceFromOrigin",
    "start": 73,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
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
    "value": "number",
    "start": 109,
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
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 143,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 152,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "distanceFromOrigin",
    "start": 162,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 190,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 198,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "arryFn",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "arryFn",
    "start": 234,
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
    "value": "point",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 250,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 258,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "arryFn2",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "arryFn2",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 317,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 334,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 353,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 367,
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
    "value": "Readonly",
    "start": 370,
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
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 390,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 398,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 407,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "arryFn2",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "arryFn2",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "arryFn2",
    "start": 455,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 468,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 498,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 504,
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
    "value": "readonly",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 527,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 537,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 546,
    "end": 547
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 552,
    "end": 553
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 557,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 598,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 604,
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
    "value": "readonly",
    "start": 608,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 627,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 648,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "t8",
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
    "type": "Punctuator",
    "value": "[",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 668,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 678,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 703,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 713,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 722,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 739,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 745,
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
    "value": "readonly",
    "start": 749,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 758,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 774,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 784,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 801,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 807,
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
    "value": "[",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
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
    "value": "a6",
    "start": 833,
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
    "value": "readonly",
    "start": 837,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 846,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
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
    "value": "a5",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 864,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 885,
    "end": 886
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "a8",
    "start": 896,
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
    "value": "boolean",
    "start": 900,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "a7",
    "start": 912,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 917,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "ta1",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 928,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 937,
    "end": 938
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 943,
    "end": 944
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 948,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "ta2",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 959,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 968,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "ta1",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 986,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "ta3",
    "start": 992,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "ta4",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "ta3",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1045,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "ta5",
    "start": 1051,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "ta6",
    "start": 1073,
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
    "value": "readonly",
    "start": 1078,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1087,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "ta5",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "ta7",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1127,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "ta8",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "ta7",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1156,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "at1",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1167,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1192,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "at2",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "at1",
    "start": 1218,
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
    "value": "const",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "at3",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1260,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "at4",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "at3",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1283,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "at5",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1294,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1310,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "at6",
    "start": 1316,
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
    "value": "readonly",
    "start": 1321,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "at5",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1342,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "at7",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1369,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "at8",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "at7",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  }
]
```

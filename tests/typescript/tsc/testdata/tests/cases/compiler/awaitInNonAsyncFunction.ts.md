__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "normalFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 76
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 87
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                ],
                "start": 87,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "start": 78,
            "end": 95
          },
          "start": 77,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "init": null,
                  "definite": false,
                  "start": 118,
                  "end": 119
                }
              ],
              "declare": false,
              "start": 112,
              "end": 119
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 123,
              "end": 125
            },
            "body": {
              "type": "EmptyStatement",
              "start": 126,
              "end": 127
            },
            "start": 101,
            "end": 127
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "start": 137,
              "end": 144
            },
            "start": 130,
            "end": 145
          }
        ],
        "start": 97,
        "end": 147
      },
      "expression": false,
      "start": 57,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 177
        },
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    }
                  ],
                  "start": 188,
                  "end": 196
                },
                "start": 181,
                "end": 196
              },
              "start": 179,
              "end": 196
            },
            "start": 178,
            "end": 196
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForOfStatement",
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "init": null,
                    "definite": false,
                    "start": 219,
                    "end": 220
                  }
                ],
                "declare": false,
                "start": 213,
                "end": 220
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 224,
                "end": 226
              },
              "body": {
                "type": "EmptyStatement",
                "start": 227,
                "end": 228
              },
              "start": 202,
              "end": 228
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "start": 238,
                "end": 245
              },
              "start": 231,
              "end": 246
            }
          ],
          "start": 198,
          "end": 248
        },
        "expression": false,
        "start": 156,
        "end": 248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 248
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
            "name": "functionExpression",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 274
          },
          "init": {
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 296
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ],
                      "start": 296,
                      "end": 304
                    },
                    "start": 289,
                    "end": 304
                  },
                  "start": 287,
                  "end": 304
                },
                "start": 286,
                "end": 304
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "init": null,
                        "definite": false,
                        "start": 327,
                        "end": 328
                      }
                    ],
                    "declare": false,
                    "start": 321,
                    "end": 328
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 332,
                    "end": 334
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 335,
                    "end": 336
                  },
                  "start": 310,
                  "end": 336
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    },
                    "start": 339,
                    "end": 346
                  },
                  "directive": null,
                  "start": 339,
                  "end": 347
                }
              ],
              "start": 306,
              "end": 349
            },
            "expression": false,
            "start": 277,
            "end": 349
          },
          "definite": false,
          "start": 256,
          "end": 349
        }
      ],
      "declare": false,
      "start": 250,
      "end": 349
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
            "name": "arrowFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 366
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 380
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        }
                      ],
                      "start": 380,
                      "end": 388
                    },
                    "start": 373,
                    "end": 388
                  },
                  "start": 371,
                  "end": 388
                },
                "start": 370,
                "end": 388
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 414,
                          "end": 415
                        },
                        "init": null,
                        "definite": false,
                        "start": 414,
                        "end": 415
                      }
                    ],
                    "declare": false,
                    "start": 408,
                    "end": 415
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 419,
                    "end": 421
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 422,
                    "end": 423
                  },
                  "start": 397,
                  "end": 423
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "start": 433,
                    "end": 440
                  },
                  "start": 426,
                  "end": 441
                }
              ],
              "start": 393,
              "end": 443
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 443
          },
          "definite": false,
          "start": 357,
          "end": 443
        }
      ],
      "declare": false,
      "start": 351,
      "end": 444
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generatorFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 469
      },
      "generator": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 480
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 481,
                    "end": 487
                  }
                ],
                "start": 480,
                "end": 488
              },
              "start": 473,
              "end": 488
            },
            "start": 471,
            "end": 488
          },
          "start": 470,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 512
                  },
                  "init": null,
                  "definite": false,
                  "start": 511,
                  "end": 512
                }
              ],
              "declare": false,
              "start": 505,
              "end": 512
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 516,
              "end": 518
            },
            "body": {
              "type": "EmptyStatement",
              "start": 519,
              "end": 520
            },
            "start": 494,
            "end": 520
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "start": 529,
                "end": 536
              },
              "start": 523,
              "end": 536
            },
            "directive": null,
            "start": 523,
            "end": 537
          }
        ],
        "start": 490,
        "end": 539
      },
      "expression": false,
      "start": 446,
      "end": 539
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clazz",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 552
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
              "start": 557,
              "end": 568
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
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
                        "start": 572,
                        "end": 579
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 580,
                            "end": 586
                          }
                        ],
                        "start": 579,
                        "end": 587
                      },
                      "start": 572,
                      "end": 587
                    },
                    "start": 570,
                    "end": 587
                  },
                  "start": 569,
                  "end": 587
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 613
                          },
                          "init": null,
                          "definite": false,
                          "start": 612,
                          "end": 613
                        }
                      ],
                      "declare": false,
                      "start": 606,
                      "end": 613
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 617,
                      "end": 619
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 620,
                      "end": 621
                    },
                    "start": 595,
                    "end": 621
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 632,
                        "end": 633
                      },
                      "start": 626,
                      "end": 633
                    },
                    "directive": null,
                    "start": 626,
                    "end": 634
                  }
                ],
                "start": 589,
                "end": 638
              },
              "expression": false,
              "start": 568,
              "end": 638
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 557,
            "end": 638
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 647
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
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
                        "start": 651,
                        "end": 658
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 659,
                            "end": 665
                          }
                        ],
                        "start": 658,
                        "end": 666
                      },
                      "start": 651,
                      "end": 666
                    },
                    "start": 649,
                    "end": 666
                  },
                  "start": 648,
                  "end": 666
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 690
                          },
                          "init": null,
                          "definite": false,
                          "start": 689,
                          "end": 690
                        }
                      ],
                      "declare": false,
                      "start": 683,
                      "end": 690
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 694,
                      "end": 696
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 697,
                      "end": 698
                    },
                    "start": 672,
                    "end": 698
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 710
                      },
                      "start": 703,
                      "end": 710
                    },
                    "directive": null,
                    "start": 703,
                    "end": 711
                  }
                ],
                "start": 668,
                "end": 715
              },
              "expression": false,
              "start": 647,
              "end": 715
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 641,
            "end": 715
          }
        ],
        "start": 553,
        "end": 717
      },
      "abstract": false,
      "declare": false,
      "start": 541,
      "end": 717
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "init": null,
            "definite": false,
            "start": 736,
            "end": 737
          }
        ],
        "declare": false,
        "start": 730,
        "end": 737
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 741,
        "end": 743
      },
      "body": {
        "type": "EmptyStatement",
        "start": 744,
        "end": 745
      },
      "start": 719,
      "end": 745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 752,
          "end": 756
        },
        "start": 746,
        "end": 756
      },
      "directive": null,
      "start": 746,
      "end": 757
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 757
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "normalFunc",
    "start": 66,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 120,
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
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 156,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "exportedFunc",
    "start": 165,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 250,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "functionExpression",
    "start": 256,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 286,
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
    "value": "Promise",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 321,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
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
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 351,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "arrowFunc",
    "start": 357,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 373,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 381,
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
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 426,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "generatorFunc",
    "start": 456,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 541,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "clazz",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 557,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 572,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 614,
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
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 626,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 651,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 683,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 703,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 746,
    "end": 751
  },
  {
    "type": "Null",
    "value": "null",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  }
]
```

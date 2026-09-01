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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
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
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 34,
        "end": 37
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 42
                      },
                      "typeArguments": null,
                      "start": 41,
                      "end": 42
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  ],
                  "start": 41,
                  "end": 51
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 55
                      },
                      "typeArguments": null,
                      "start": 54,
                      "end": 55
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 58,
                      "end": 67
                    }
                  ],
                  "start": 54,
                  "end": 67
                }
              ],
              "start": 41,
              "end": 67
            },
            "start": 39,
            "end": 67
          },
          "start": 38,
          "end": 67
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "directive": null,
                  "start": 92,
                  "end": 94
                }
              ],
              "start": 82,
              "end": 132
            },
            "alternate": null,
            "start": 75,
            "end": 132
          }
        ],
        "start": 69,
        "end": 134
      },
      "expression": false,
      "start": 23,
      "end": 134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 147
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
              "start": 148,
              "end": 149
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 149
          }
        ],
        "start": 147,
        "end": 150
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 155
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 155
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    }
                  ],
                  "start": 154,
                  "end": 164
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 168
                      },
                      "typeArguments": null,
                      "start": 167,
                      "end": 168
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 171,
                      "end": 180
                    }
                  ],
                  "start": 167,
                  "end": 180
                }
              ],
              "start": 154,
              "end": 180
            },
            "start": 152,
            "end": 180
          },
          "start": 151,
          "end": 180
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 207
              },
              "start": 192,
              "end": 207
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
                  },
                  "directive": null,
                  "start": 219,
                  "end": 221
                }
              ],
              "start": 209,
              "end": 259
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "directive": null,
                  "start": 279,
                  "end": 281
                }
              ],
              "start": 269,
              "end": 322
            },
            "start": 188,
            "end": 322
          }
        ],
        "start": 182,
        "end": 324
      },
      "expression": false,
      "start": 136,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 337
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
              "start": 338,
              "end": 339
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 339
          }
        ],
        "start": 337,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 345
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 348,
                      "end": 354
                    }
                  ],
                  "start": 344,
                  "end": 354
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 361,
                      "end": 367
                    }
                  ],
                  "start": 357,
                  "end": 367
                }
              ],
              "start": 344,
              "end": 367
            },
            "start": 342,
            "end": 367
          },
          "start": 341,
          "end": 367
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 387
                },
                "prefix": true,
                "start": 379,
                "end": 387
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 392,
                "end": 400
              },
              "start": 379,
              "end": 400
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 413
                  },
                  "directive": null,
                  "start": 412,
                  "end": 414
                }
              ],
              "start": 402,
              "end": 452
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 473
                  },
                  "directive": null,
                  "start": 472,
                  "end": 474
                }
              ],
              "start": 462,
              "end": 512
            },
            "start": 375,
            "end": 512
          }
        ],
        "start": 369,
        "end": 514
      },
      "expression": false,
      "start": 326,
      "end": 514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 525,
        "end": 527
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
              "start": 528,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 529
          }
        ],
        "start": 527,
        "end": 530
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 534,
                        "end": 535
                      },
                      "typeArguments": null,
                      "start": 534,
                      "end": 535
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 538,
                        "end": 539
                      },
                      "start": 538,
                      "end": 539
                    }
                  ],
                  "start": 534,
                  "end": 539
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 543
                      },
                      "typeArguments": null,
                      "start": 542,
                      "end": 543
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 546,
                        "end": 547
                      },
                      "start": 546,
                      "end": 547
                    }
                  ],
                  "start": 542,
                  "end": 547
                }
              ],
              "start": 534,
              "end": 547
            },
            "start": 532,
            "end": 547
          },
          "start": 531,
          "end": 547
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 581,
                  "end": 582
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 585
                    },
                    "directive": null,
                    "start": 584,
                    "end": 586
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 587,
                    "end": 593
                  }
                ],
                "start": 576,
                "end": 593
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 617,
                  "end": 618
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 621
                    },
                    "directive": null,
                    "start": 620,
                    "end": 622
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 623,
                    "end": 629
                  }
                ],
                "start": 612,
                "end": 629
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 658
                    },
                    "directive": null,
                    "start": 657,
                    "end": 659
                  }
                ],
                "start": 648,
                "end": 659
              }
            ],
            "start": 555,
            "end": 692
          }
        ],
        "start": 549,
        "end": 694
      },
      "expression": false,
      "start": 516,
      "end": 694
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 707
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
              "start": 708,
              "end": 709
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 718,
                  "end": 724
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 727,
                  "end": 733
                }
              ],
              "start": 718,
              "end": 733
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 708,
            "end": 733
          }
        ],
        "start": 707,
        "end": 734
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 739
                  },
                  "typeArguments": null,
                  "start": 738,
                  "end": 739
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 742,
                  "end": 748
                }
              ],
              "start": 738,
              "end": 748
            },
            "start": 736,
            "end": 748
          },
          "start": 735,
          "end": 748
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 764
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 767,
                    "end": 768
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 773,
                    "end": 780
                  },
                  "start": 767,
                  "end": 780
                },
                "definite": false,
                "start": 762,
                "end": 780
              }
            ],
            "declare": false,
            "start": 756,
            "end": 781
          }
        ],
        "start": 750,
        "end": 806
      },
      "expression": false,
      "start": 696,
      "end": 806
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 806
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 58,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 326,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 379,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 388,
    "end": 391
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 392,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 516,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 544,
    "end": 545
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
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
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 576,
    "end": 580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 587,
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
    "value": "case",
    "start": 612,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 696,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 710,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 769,
    "end": 772
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  }
]
```

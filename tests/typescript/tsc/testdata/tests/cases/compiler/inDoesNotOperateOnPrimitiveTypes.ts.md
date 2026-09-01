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
            "type": "Identifier",
            "decorators": [],
            "name": "validHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 21,
                    "end": 22
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 31,
                    "end": 37
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 21,
                  "end": 37
                }
              ],
              "start": 20,
              "end": 38
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
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
                      "start": 49,
                      "end": 50
                    },
                    "typeArguments": null,
                    "start": 49,
                    "end": 50
                  },
                  "start": 47,
                  "end": 50
                },
                "start": 42,
                "end": 50
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  },
                  "start": 57,
                  "end": 65
                },
                "start": 54,
                "end": 65
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
              },
              "start": 68,
              "end": 77
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 95
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 104
                    },
                    "start": 92,
                    "end": 104
                  },
                  "start": 85,
                  "end": 105
                }
              ],
              "start": 81,
              "end": 113
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 113
          },
          "definite": false,
          "start": 6,
          "end": 113
        }
      ],
      "declare": false,
      "start": 0,
      "end": 114
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
            "name": "alsoValidHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 137
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 141,
                    "end": 142
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 141,
                  "end": 142
                }
              ],
              "start": 140,
              "end": 143
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
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
                      "start": 154,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 152,
                  "end": 155
                },
                "start": 147,
                "end": 155
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "start": 159,
                "end": 170
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 175,
                "end": 182
              },
              "start": 173,
              "end": 182
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 200
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 209
                    },
                    "start": 197,
                    "end": 209
                  },
                  "start": 190,
                  "end": 210
                }
              ],
              "start": 186,
              "end": 263
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 263
          },
          "definite": false,
          "start": 122,
          "end": 263
        }
      ],
      "declare": false,
      "start": 116,
      "end": 264
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidHasKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 288
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
              "start": 289,
              "end": 290
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 299,
                  "end": 305
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 308,
                  "end": 314
                }
              ],
              "start": 299,
              "end": 314
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 289,
            "end": 314
          }
        ],
        "start": 288,
        "end": 315
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                "start": 326,
                "end": 327
              },
              "typeArguments": null,
              "start": 326,
              "end": 327
            },
            "start": 324,
            "end": 327
          },
          "start": 319,
          "end": 327
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 336,
              "end": 342
            },
            "start": 334,
            "end": 342
          },
          "start": 331,
          "end": 342
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 347,
          "end": 354
        },
        "start": 345,
        "end": 354
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 378
              },
              "start": 366,
              "end": 378
            },
            "start": 359,
            "end": 379
          }
        ],
        "start": 355,
        "end": 439
      },
      "expression": false,
      "start": 266,
      "end": 439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union1",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 456
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
              "start": 457,
              "end": 458
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 476,
                  "end": 482
                }
              ],
              "start": 467,
              "end": 482
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 457,
            "end": 482
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 494,
              "end": 501
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 484,
            "end": 501
          }
        ],
        "start": 456,
        "end": 502
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "typeArguments": null,
                  "start": 510,
                  "end": 511
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 515
                  },
                  "typeArguments": null,
                  "start": 514,
                  "end": 515
                }
              ],
              "start": 510,
              "end": 515
            },
            "start": 508,
            "end": 515
          },
          "start": 503,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 521,
                "end": 526
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 535
              },
              "start": 521,
              "end": 535
            },
            "directive": null,
            "start": 521,
            "end": 536
          }
        ],
        "start": 517,
        "end": 596
      },
      "expression": false,
      "start": 441,
      "end": 596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union2",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 613
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
              "start": 614,
              "end": 615
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 624,
              "end": 630
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 630
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 642,
                  "end": 648
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 651,
                  "end": 657
                }
              ],
              "start": 642,
              "end": 657
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 657
          }
        ],
        "start": 613,
        "end": 658
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 667
                  },
                  "typeArguments": null,
                  "start": 666,
                  "end": 667
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "typeArguments": null,
                  "start": 670,
                  "end": 671
                }
              ],
              "start": 666,
              "end": 671
            },
            "start": 664,
            "end": 671
          },
          "start": 659,
          "end": 671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 677,
                "end": 682
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 691
              },
              "start": 677,
              "end": 691
            },
            "directive": null,
            "start": 677,
            "end": 692
          },
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 752
                },
                "prefix": true,
                "start": 740,
                "end": 752
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 757,
                "end": 765
              },
              "start": 740,
              "end": 765
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 773,
                      "end": 778
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 787
                    },
                    "start": 773,
                    "end": 787
                  },
                  "directive": null,
                  "start": 773,
                  "end": 788
                }
              ],
              "start": 767,
              "end": 798
            },
            "alternate": null,
            "start": 736,
            "end": 798
          }
        ],
        "start": 673,
        "end": 800
      },
      "expression": false,
      "start": 598,
      "end": 800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union3",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 817
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
              "start": 818,
              "end": 819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 818,
            "end": 819
          }
        ],
        "start": 817,
        "end": 820
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 828,
                    "end": 829
                  },
                  "typeArguments": null,
                  "start": 828,
                  "end": 829
                },
                {
                  "type": "TSStringKeyword",
                  "start": 832,
                  "end": 838
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                }
              ],
              "start": 828,
              "end": 847
            },
            "start": 826,
            "end": 847
          },
          "start": 821,
          "end": 847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 853,
                "end": 858
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 867
              },
              "start": 853,
              "end": 867
            },
            "directive": null,
            "start": 853,
            "end": 868
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 928
                  },
                  "prefix": true,
                  "start": 916,
                  "end": 928
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 933,
                  "end": 941
                },
                "start": 916,
                "end": 941
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 957
                  },
                  "prefix": true,
                  "start": 945,
                  "end": 957
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 962,
                  "end": 970
                },
                "start": 945,
                "end": 970
              },
              "start": 916,
              "end": 970
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 978,
                      "end": 983
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 987,
                      "end": 992
                    },
                    "start": 978,
                    "end": 992
                  },
                  "directive": null,
                  "start": 978,
                  "end": 993
                }
              ],
              "start": 972,
              "end": 1045
            },
            "alternate": null,
            "start": 912,
            "end": 1045
          }
        ],
        "start": 849,
        "end": 1047
      },
      "expression": false,
      "start": 802,
      "end": 1047
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1064
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
              "start": 1065,
              "end": 1066
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1075,
                  "end": 1081
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1084,
                    "end": 1091
                  },
                  "start": 1084,
                  "end": 1091
                }
              ],
              "start": 1075,
              "end": 1091
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1065,
            "end": 1091
          }
        ],
        "start": 1064,
        "end": 1092
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "start": 1098,
            "end": 1101
          },
          "start": 1093,
          "end": 1101
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1107,
                "end": 1112
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1121
              },
              "start": 1107,
              "end": 1121
            },
            "directive": null,
            "start": 1107,
            "end": 1122
          }
        ],
        "start": 1103,
        "end": 1164
      },
      "expression": false,
      "start": 1049,
      "end": 1164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1175,
        "end": 1181
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
              "start": 1182,
              "end": 1183
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1192,
                  "end": 1198
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1201,
                  "end": 1207
                }
              ],
              "start": 1192,
              "end": 1207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1182,
            "end": 1207
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1210
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1219,
                  "end": 1225
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1228,
                  "end": 1234
                }
              ],
              "start": 1219,
              "end": 1234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1209,
            "end": 1234
          }
        ],
        "start": 1181,
        "end": 1235
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
                  },
                  "typeArguments": null,
                  "start": 1239,
                  "end": 1240
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "typeArguments": null,
                  "start": 1243,
                  "end": 1244
                }
              ],
              "start": 1239,
              "end": 1244
            },
            "start": 1237,
            "end": 1244
          },
          "start": 1236,
          "end": 1244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1823,
                "end": 1828
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1832,
                "end": 1833
              },
              "start": 1823,
              "end": 1833
            },
            "directive": null,
            "start": 1823,
            "end": 1834
          },
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1850,
                  "end": 1851
                },
                "prefix": true,
                "start": 1843,
                "end": 1851
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 1856,
                "end": 1864
              },
              "start": 1843,
              "end": 1864
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 1876,
                      "end": 1881
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1885,
                      "end": 1886
                    },
                    "start": 1876,
                    "end": 1886
                  },
                  "directive": null,
                  "start": 1876,
                  "end": 1887
                }
              ],
              "start": 1866,
              "end": 1893
            },
            "alternate": null,
            "start": 1839,
            "end": 1893
          }
        ],
        "start": 1246,
        "end": 1895
      },
      "expression": false,
      "start": 1166,
      "end": 1895
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1919
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
              "start": 1920,
              "end": 1921
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1930,
              "end": 1936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1920,
            "end": 1936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1948,
                    "end": 1949
                  },
                  "start": 1948,
                  "end": 1949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1952,
                    "end": 1953
                  },
                  "start": 1952,
                  "end": 1953
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1956,
                    "end": 1957
                  },
                  "start": 1956,
                  "end": 1957
                }
              ],
              "start": 1948,
              "end": 1957
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1957
          }
        ],
        "start": 1919,
        "end": 1958
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                    "start": 1966,
                    "end": 1967
                  },
                  "typeArguments": null,
                  "start": 1966,
                  "end": 1967
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
                  },
                  "typeArguments": null,
                  "start": 1970,
                  "end": 1971
                }
              ],
              "start": 1966,
              "end": 1971
            },
            "start": 1964,
            "end": 1971
          },
          "start": 1959,
          "end": 1971
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1977,
                "end": 1982
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1986,
                "end": 1991
              },
              "start": 1977,
              "end": 1991
            },
            "directive": null,
            "start": 1977,
            "end": 1992
          }
        ],
        "start": 1973,
        "end": 2052
      },
      "expression": false,
      "start": 1897,
      "end": 2052
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2063,
        "end": 2076
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
              "start": 2077,
              "end": 2078
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2077,
            "end": 2078
          }
        ],
        "start": 2076,
        "end": 2079
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                    "start": 2087,
                    "end": 2088
                  },
                  "typeArguments": null,
                  "start": 2087,
                  "end": 2088
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2092,
                        "end": 2093
                      },
                      "start": 2092,
                      "end": 2093
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2096,
                        "end": 2097
                      },
                      "start": 2096,
                      "end": 2097
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2100,
                        "end": 2101
                      },
                      "start": 2100,
                      "end": 2101
                    }
                  ],
                  "start": 2092,
                  "end": 2101
                }
              ],
              "start": 2087,
              "end": 2102
            },
            "start": 2085,
            "end": 2102
          },
          "start": 2080,
          "end": 2102
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 2108,
                "end": 2113
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 2117,
                "end": 2122
              },
              "start": 2108,
              "end": 2122
            },
            "directive": null,
            "start": 2108,
            "end": 2123
          }
        ],
        "start": 2104,
        "end": 2182
      },
      "expression": false,
      "start": 2054,
      "end": 2182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2182
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "validHasKey",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 23,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 92,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "alsoValidHasKey",
    "start": 122,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 147,
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
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 197,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "invalidHasKey",
    "start": 275,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 291,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 366,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 370,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 441,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "union1",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 459,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 486,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "String",
    "value": "\"key\"",
    "start": 521,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 598,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "union2",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 624,
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
    "value": "U",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 634,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 659,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 677,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 683,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 740,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 747,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 753,
    "end": 756
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 773,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 779,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 802,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "union3",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 821,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 832,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 853,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 859,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 912,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 916,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 929,
    "end": 932
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 933,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 942,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 945,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 958,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 962,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 978,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 984,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 987,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1049,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "union4",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1067,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1075,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1084,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 1107,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1166,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "union5",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1211,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1829,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1839,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1843,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1852,
    "end": 1855
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 1856,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 1876,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1882,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1897,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "intersection1",
    "start": 1906,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1922,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1930,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1959,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 1977,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1983,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1986,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2054,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "intersection2",
    "start": 2063,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2080,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 2108,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2114,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2181,
    "end": 2182
  }
]
```

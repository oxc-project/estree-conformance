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
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 15,
              "end": 18
            },
            "start": 13,
            "end": 18
          },
          "start": 12,
          "end": 18
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
                  "start": 37,
                  "end": 38
                },
                "prefix": true,
                "start": 30,
                "end": 38
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 43,
                "end": 53
              },
              "start": 30,
              "end": 53
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
                    "start": 65,
                    "end": 66
                  },
                  "directive": null,
                  "start": 65,
                  "end": 67
                }
              ],
              "start": 55,
              "end": 81
            },
            "alternate": null,
            "start": 26,
            "end": 81
          }
        ],
        "start": 20,
        "end": 83
      },
      "expression": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 100,
              "end": 107
            },
            "start": 98,
            "end": 107
          },
          "start": 97,
          "end": 107
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
                  "start": 126,
                  "end": 127
                },
                "prefix": true,
                "start": 119,
                "end": 127
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 132,
                "end": 142
              },
              "start": 119,
              "end": 142
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
                    "start": 154,
                    "end": 155
                  },
                  "directive": null,
                  "start": 154,
                  "end": 156
                }
              ],
              "start": 144,
              "end": 175
            },
            "alternate": null,
            "start": 115,
            "end": 175
          }
        ],
        "start": 109,
        "end": 177
      },
      "expression": false,
      "start": 85,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 190
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 194,
              "end": 196
            },
            "start": 192,
            "end": 196
          },
          "start": 191,
          "end": 196
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
                  "start": 215,
                  "end": 216
                },
                "prefix": true,
                "start": 208,
                "end": 216
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 221,
                "end": 231
              },
              "start": 208,
              "end": 231
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
                    "start": 243,
                    "end": 244
                  },
                  "directive": null,
                  "start": 243,
                  "end": 245
                }
              ],
              "start": 233,
              "end": 264
            },
            "alternate": null,
            "start": 204,
            "end": 264
          }
        ],
        "start": 198,
        "end": 266
      },
      "expression": false,
      "start": 179,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 279
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
              "start": 280,
              "end": 281
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 280,
            "end": 281
          }
        ],
        "start": 279,
        "end": 282
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "typeArguments": null,
              "start": 286,
              "end": 287
            },
            "start": 284,
            "end": 287
          },
          "start": 283,
          "end": 287
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
                  "start": 306,
                  "end": 307
                },
                "prefix": true,
                "start": 299,
                "end": 307
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 312,
                "end": 322
              },
              "start": 299,
              "end": 322
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
                    "start": 334,
                    "end": 335
                  },
                  "directive": null,
                  "start": 334,
                  "end": 336
                }
              ],
              "start": 324,
              "end": 359
            },
            "alternate": null,
            "start": 295,
            "end": 359
          }
        ],
        "start": 289,
        "end": 361
      },
      "expression": false,
      "start": 268,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 374
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 383,
                      "end": 389
                    },
                    "start": 381,
                    "end": 389
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 380,
                  "end": 389
                }
              ],
              "start": 378,
              "end": 391
            },
            "start": 376,
            "end": 391
          },
          "start": 375,
          "end": 391
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
                  "start": 410,
                  "end": 411
                },
                "prefix": true,
                "start": 403,
                "end": 411
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 416,
                "end": 426
              },
              "start": 403,
              "end": 426
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
                    "start": 438,
                    "end": 439
                  },
                  "directive": null,
                  "start": 438,
                  "end": 440
                }
              ],
              "start": 428,
              "end": 456
            },
            "alternate": null,
            "start": 399,
            "end": 456
          }
        ],
        "start": 393,
        "end": 458
      },
      "expression": false,
      "start": 363,
      "end": 458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 471
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 481,
                  "end": 487
                },
                "start": 478,
                "end": 487
              },
              "start": 475,
              "end": 487
            },
            "start": 473,
            "end": 487
          },
          "start": 472,
          "end": 487
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
                  "start": 506,
                  "end": 507
                },
                "prefix": true,
                "start": 499,
                "end": 507
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 512,
                "end": 522
              },
              "start": 499,
              "end": 522
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
                    "start": 534,
                    "end": 535
                  },
                  "directive": null,
                  "start": 534,
                  "end": 536
                }
              ],
              "start": 524,
              "end": 559
            },
            "alternate": null,
            "start": 495,
            "end": 559
          }
        ],
        "start": 489,
        "end": 561
      },
      "expression": false,
      "start": 460,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 575
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 579,
                  "end": 585
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 595,
                      "end": 601
                    },
                    "start": 592,
                    "end": 601
                  },
                  "start": 589,
                  "end": 601
                }
              ],
              "start": 579,
              "end": 602
            },
            "start": 577,
            "end": 602
          },
          "start": 576,
          "end": 602
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
                  "start": 621,
                  "end": 622
                },
                "prefix": true,
                "start": 614,
                "end": 622
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 627,
                "end": 637
              },
              "start": 614,
              "end": 637
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
                    "start": 649,
                    "end": 650
                  },
                  "directive": null,
                  "start": 649,
                  "end": 651
                }
              ],
              "start": 639,
              "end": 674
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
                    "start": 694,
                    "end": 695
                  },
                  "directive": null,
                  "start": 694,
                  "end": 696
                }
              ],
              "start": 684,
              "end": 713
            },
            "start": 610,
            "end": 713
          }
        ],
        "start": 604,
        "end": 715
      },
      "expression": false,
      "start": 563,
      "end": 715
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 726,
        "end": 729
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 735,
                        "end": 736
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 738,
                          "end": 744
                        },
                        "start": 736,
                        "end": 744
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 735,
                      "end": 744
                    }
                  ],
                  "start": 733,
                  "end": 746
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    },
                    "start": 753,
                    "end": 762
                  },
                  "start": 750,
                  "end": 762
                }
              ],
              "start": 733,
              "end": 763
            },
            "start": 731,
            "end": 763
          },
          "start": 730,
          "end": 763
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
                  "start": 782,
                  "end": 783
                },
                "prefix": true,
                "start": 775,
                "end": 783
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 788,
                "end": 798
              },
              "start": 775,
              "end": 798
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
                    "start": 810,
                    "end": 811
                  },
                  "directive": null,
                  "start": 810,
                  "end": 812
                }
              ],
              "start": 800,
              "end": 835
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
                    "start": 855,
                    "end": 856
                  },
                  "directive": null,
                  "start": 855,
                  "end": 857
                }
              ],
              "start": 845,
              "end": 881
            },
            "start": 771,
            "end": 881
          }
        ],
        "start": 765,
        "end": 883
      },
      "expression": false,
      "start": 717,
      "end": 883
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 897
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 904
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        "start": 904,
                        "end": 912
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 903,
                      "end": 912
                    }
                  ],
                  "start": 901,
                  "end": 914
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 919,
                        "end": 920
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 922,
                          "end": 928
                        },
                        "start": 920,
                        "end": 928
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 919,
                      "end": 928
                    }
                  ],
                  "start": 917,
                  "end": 930
                }
              ],
              "start": 901,
              "end": 930
            },
            "start": 899,
            "end": 930
          },
          "start": 898,
          "end": 930
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
                  "start": 949,
                  "end": 950
                },
                "prefix": true,
                "start": 942,
                "end": 950
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 955,
                "end": 965
              },
              "start": 942,
              "end": 965
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
                    "start": 977,
                    "end": 978
                  },
                  "directive": null,
                  "start": 977,
                  "end": 979
                }
              ],
              "start": 967,
              "end": 995
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
                    "start": 1015,
                    "end": 1016
                  },
                  "directive": null,
                  "start": 1015,
                  "end": 1017
                }
              ],
              "start": 1005,
              "end": 1057
            },
            "start": 938,
            "end": 1057
          }
        ],
        "start": 932,
        "end": 1059
      },
      "expression": false,
      "start": 885,
      "end": 1059
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f100",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1096
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
              "start": 1097,
              "end": 1098
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1097,
            "end": 1098
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1101
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
                  "start": 1116,
                  "end": 1117
                },
                "typeArguments": null,
                "start": 1116,
                "end": 1117
              },
              "start": 1110,
              "end": 1117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1100,
            "end": 1117
          }
        ],
        "start": 1096,
        "end": 1118
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
                "start": 1124,
                "end": 1125
              },
              "typeArguments": null,
              "start": 1124,
              "end": 1125
            },
            "start": 1122,
            "end": 1125
          },
          "start": 1119,
          "end": 1125
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "keys",
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
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1134
                },
                "typeArguments": null,
                "start": 1133,
                "end": 1134
              },
              "start": 1133,
              "end": 1136
            },
            "start": 1131,
            "end": 1136
          },
          "start": 1127,
          "end": 1136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1140,
          "end": 1144
        },
        "start": 1138,
        "end": 1144
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "init": null,
                  "definite": false,
                  "start": 1162,
                  "end": 1163
                }
              ],
              "declare": false,
              "start": 1156,
              "end": 1163
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1171
            },
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1189,
                        "end": 1193
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1199
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1200,
                          "end": 1201
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1196,
                        "end": 1202
                      },
                      "definite": false,
                      "start": 1189,
                      "end": 1202
                    }
                  ],
                  "declare": false,
                  "start": 1183,
                  "end": 1203
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1223,
                        "end": 1227
                      },
                      "prefix": true,
                      "start": 1216,
                      "end": 1227
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "'function'",
                      "start": 1231,
                      "end": 1241
                    },
                    "start": 1216,
                    "end": 1241
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1255,
                          "end": 1259
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1260,
                          "end": 1264
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1255,
                        "end": 1264
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1265,
                          "end": 1268
                        }
                      ],
                      "optional": false,
                      "start": 1255,
                      "end": 1269
                    },
                    "directive": null,
                    "start": 1255,
                    "end": 1270
                  },
                  "alternate": null,
                  "start": 1212,
                  "end": 1270
                }
              ],
              "start": 1173,
              "end": 1276
            },
            "start": 1151,
            "end": 1276
          }
        ],
        "start": 1145,
        "end": 1278
      },
      "expression": false,
      "start": 1083,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "configureStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1325
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1327
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1336,
              "end": 1342
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1326,
            "end": 1342
          }
        ],
        "start": 1325,
        "end": 1343
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1360,
                      "end": 1364
                    },
                    "start": 1357,
                    "end": 1364
                  },
                  "start": 1354,
                  "end": 1364
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1368,
                    "end": 1374
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1381,
                            "end": 1382
                          },
                          "typeArguments": null,
                          "start": 1381,
                          "end": 1382
                        },
                        "start": 1375,
                        "end": 1382
                      },
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1390,
                            "end": 1394
                          },
                          "start": 1387,
                          "end": 1394
                        },
                        "start": 1384,
                        "end": 1394
                      }
                    ],
                    "start": 1374,
                    "end": 1395
                  },
                  "start": 1368,
                  "end": 1395
                }
              ],
              "start": 1353,
              "end": 1395
            },
            "start": 1351,
            "end": 1395
          },
          "start": 1344,
          "end": 1395
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "rootReducer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1426,
                          "end": 1430
                        },
                        "start": 1423,
                        "end": 1430
                      },
                      "start": 1420,
                      "end": 1430
                    },
                    "start": 1418,
                    "end": 1430
                  },
                  "start": 1407,
                  "end": 1430
                },
                "init": null,
                "definite": false,
                "start": 1407,
                "end": 1430
              }
            ],
            "declare": false,
            "start": 1403,
            "end": 1431
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
                  "name": "reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1447,
                  "end": 1454
                },
                "prefix": true,
                "start": 1440,
                "end": 1454
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "'function'",
                "start": 1459,
                "end": 1469
              },
              "start": 1440,
              "end": 1469
            },
            "consequent": {
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
                      "name": "rootReducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1481,
                      "end": 1492
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1495,
                      "end": 1502
                    },
                    "start": 1481,
                    "end": 1502
                  },
                  "directive": null,
                  "start": 1481,
                  "end": 1503
                }
              ],
              "start": 1471,
              "end": 1509
            },
            "alternate": null,
            "start": 1436,
            "end": 1509
          }
        ],
        "start": 1397,
        "end": 1511
      },
      "expression": false,
      "start": 1302,
      "end": 1511
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f101",
        "optional": false,
        "typeAnnotation": null,
        "start": 1522,
        "end": 1526
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1530,
                  "end": 1536
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1545
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1546,
                        "end": 1552
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1554,
                        "end": 1557
                      }
                    ],
                    "start": 1545,
                    "end": 1558
                  },
                  "start": 1539,
                  "end": 1558
                }
              ],
              "start": 1530,
              "end": 1558
            },
            "start": 1528,
            "end": 1558
          },
          "start": 1527,
          "end": 1558
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 1580,
                    "end": 1581
                  },
                  "prefix": true,
                  "start": 1573,
                  "end": 1581
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 1586,
                  "end": 1594
                },
                "start": 1573,
                "end": 1594
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1599
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1600,
                  "end": 1608
                },
                "optional": false,
                "computed": false,
                "start": 1598,
                "end": 1608
              },
              "start": 1573,
              "end": 1608
            },
            "start": 1566,
            "end": 1609
          }
        ],
        "start": 1560,
        "end": 1611
      },
      "expression": false,
      "start": 1513,
      "end": 1611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1611
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 39,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 43,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "unknown",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 119,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 128,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 132,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 179,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "if",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 217,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 308,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 312,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 363,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Identifier",
    "value": "string",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
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
    "value": "if",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 403,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 412,
    "end": 415
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 416,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 460,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 508,
    "end": 511
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 512,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 534,
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
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 563,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 592,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 614,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 623,
    "end": 626
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 627,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 717,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 726,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 775,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 784,
    "end": 787
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 788,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 885,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 938,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 942,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 951,
    "end": 954
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 955,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1083,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "f100",
    "start": 1092,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1102,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1110,
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
    "value": ">",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1119,
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
    "value": ",",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": "]",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1156,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1231,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1260,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1302,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "configureStore",
    "start": 1311,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Identifier",
    "value": "object",
    "start": 1336,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1360,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1368,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1375,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1387,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1390,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "rootReducer",
    "start": 1407,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1426,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1440,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1455,
    "end": 1458
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1459,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "rootReducer",
    "start": 1481,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 1495,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1513,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "f101",
    "start": 1522,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1530,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1546,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1554,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1566,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 1586,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1595,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 1600,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611
  }
]
```

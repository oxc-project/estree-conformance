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
            "name": "nonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 21,
                "end": 23
              },
              "start": 19,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 36
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 41,
          "end": 46
        },
        "start": 29,
        "end": 46
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 59
            },
            "directive": null,
            "start": 52,
            "end": 60
          }
        ],
        "start": 48,
        "end": 62
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 79
            },
            "directive": null,
            "start": 72,
            "end": 80
          }
        ],
        "start": 68,
        "end": 82
      },
      "start": 25,
      "end": 82
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
                      "start": 103,
                      "end": 104
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 106,
                        "end": 112
                      },
                      "start": 104,
                      "end": 112
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 103,
                    "end": 112
                  }
                ],
                "start": 101,
                "end": 114
              },
              "start": 99,
              "end": 114
            },
            "start": 96,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 114
        }
      ],
      "declare": true,
      "start": 84,
      "end": 115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 127
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 135
        },
        "start": 120,
        "end": 135
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 148
            },
            "directive": null,
            "start": 141,
            "end": 149
          }
        ],
        "start": 137,
        "end": 151
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 168
            },
            "directive": null,
            "start": 161,
            "end": 169
          }
        ],
        "start": 157,
        "end": 171
      },
      "start": 116,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
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
              "start": 185,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 186
          }
        ],
        "start": 184,
        "end": 187
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
                "start": 191,
                "end": 192
              },
              "typeArguments": null,
              "start": 191,
              "end": 192
            },
            "start": 189,
            "end": 192
          },
          "start": 188,
          "end": 192
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
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 209
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "start": 202,
              "end": 215
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 230
                  },
                  "directive": null,
                  "start": 223,
                  "end": 231
                }
              ],
              "start": 217,
              "end": 235
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 256
                  },
                  "directive": null,
                  "start": 249,
                  "end": 257
                }
              ],
              "start": 243,
              "end": 261
            },
            "start": 198,
            "end": 261
          }
        ],
        "start": 194,
        "end": 263
      },
      "expression": false,
      "start": 173,
      "end": 263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 276
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
              "start": 277,
              "end": 278
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 287,
              "end": 293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 293
          }
        ],
        "start": 276,
        "end": 294
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
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
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
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 316
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "start": 309,
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
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 337
                  },
                  "directive": null,
                  "start": 330,
                  "end": 338
                }
              ],
              "start": 324,
              "end": 342
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 363
                  },
                  "directive": null,
                  "start": 356,
                  "end": 364
                }
              ],
              "start": 350,
              "end": 368
            },
            "start": 305,
            "end": 368
          }
        ],
        "start": 301,
        "end": 370
      },
      "expression": false,
      "start": 265,
      "end": 370
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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "xyz",
                      "raw": "\"xyz\"",
                      "start": 391,
                      "end": 396
                    },
                    "start": 391,
                    "end": 396
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
                          "start": 401,
                          "end": 402
                        },
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
                        "accessibility": null,
                        "static": false,
                        "start": 401,
                        "end": 410
                      }
                    ],
                    "start": 399,
                    "end": 412
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 415,
                    "end": 424
                  }
                ],
                "start": 391,
                "end": 424
              },
              "start": 389,
              "end": 424
            },
            "start": 384,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 384,
          "end": 424
        }
      ],
      "declare": true,
      "start": 372,
      "end": 425
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 437
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 447
        },
        "start": 430,
        "end": 447
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 460
            },
            "directive": null,
            "start": 453,
            "end": 461
          }
        ],
        "start": 449,
        "end": 463
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 480
            },
            "directive": null,
            "start": 473,
            "end": 481
          }
        ],
        "start": 469,
        "end": 483
      },
      "start": 426,
      "end": 483
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 496
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 510
        },
        "start": 489,
        "end": 510
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 523
            },
            "directive": null,
            "start": 516,
            "end": 524
          }
        ],
        "start": 512,
        "end": 526
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 543
            },
            "directive": null,
            "start": 536,
            "end": 544
          }
        ],
        "start": 532,
        "end": 546
      },
      "start": 485,
      "end": 546
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 559
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 564,
          "end": 568
        },
        "start": 552,
        "end": 568
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 581
            },
            "directive": null,
            "start": 574,
            "end": 582
          }
        ],
        "start": 570,
        "end": 584
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 601
            },
            "directive": null,
            "start": 594,
            "end": 602
          }
        ],
        "start": 590,
        "end": 604
      },
      "start": 548,
      "end": 604
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 617
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 630
        },
        "start": 610,
        "end": 630
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 643
            },
            "directive": null,
            "start": 636,
            "end": 644
          }
        ],
        "start": 632,
        "end": 646
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 663
            },
            "directive": null,
            "start": 656,
            "end": 664
          }
        ],
        "start": 652,
        "end": 666
      },
      "start": 606,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 698
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 709,
                    "end": 716
                  },
                  "start": 707,
                  "end": 716
                },
                "start": 702,
                "end": 716
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              },
              "start": 717,
              "end": 725
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 743
                    },
                    "prefix": true,
                    "start": 737,
                    "end": 743
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "'foo'",
                          "start": 760,
                          "end": 765
                        },
                        "start": 753,
                        "end": 766
                      }
                    ],
                    "start": 745,
                    "end": 770
                  },
                  "alternate": null,
                  "start": 733,
                  "end": 770
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 782
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "xyz",
                      "raw": "'xyz'",
                      "start": 787,
                      "end": 792
                    },
                    "start": 777,
                    "end": 792
                  },
                  "consequent": {
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
                          "start": 809,
                          "end": 814
                        },
                        "start": 802,
                        "end": 815
                      }
                    ],
                    "start": 794,
                    "end": 868
                  },
                  "alternate": null,
                  "start": 773,
                  "end": 868
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 878,
                    "end": 880
                  },
                  "start": 871,
                  "end": 881
                }
              ],
              "start": 729,
              "end": 883
            },
            "id": null,
            "generator": false,
            "start": 701,
            "end": 883
          },
          "definite": false,
          "start": 695,
          "end": 883
        }
      ],
      "declare": false,
      "start": 689,
      "end": 884
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 884
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 37,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 84,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 223,
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
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 265,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
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
    "value": "nonNull",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 372,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "String",
    "value": "\"xyz\"",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "a",
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
    "value": "|",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 415,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 501,
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
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 516,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 560,
    "end": 563
  },
  {
    "type": "Null",
    "value": "null",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 574,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 610,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 618,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 621,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 636,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "nonNull",
    "start": 656,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 689,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 702,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 709,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 738,
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
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 753,
    "end": 759
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 783,
    "end": 786
  },
  {
    "type": "String",
    "value": "'xyz'",
    "start": 787,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 802,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 809,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877
  },
  {
    "type": "String",
    "value": "''",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  }
]
```

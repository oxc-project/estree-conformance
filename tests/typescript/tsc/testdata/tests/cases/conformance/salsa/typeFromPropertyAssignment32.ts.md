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
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "start": 39,
            "end": 48
          }
        ],
        "start": 33,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 66
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 69,
          "end": 72
        },
        "start": 51,
        "end": 72
      },
      "directive": null,
      "start": 51,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 73,
          "end": 87
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
                },
                "start": 100,
                "end": 108
              },
              "start": 99,
              "end": 108
            }
          ],
          "returnType": null,
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 124
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  },
                  "start": 123,
                  "end": 128
                },
                "start": 116,
                "end": 129
              }
            ],
            "start": 110,
            "end": 131
          },
          "expression": false,
          "start": 90,
          "end": 131
        },
        "start": 73,
        "end": 131
      },
      "directive": null,
      "start": 73,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 147
        },
        "right": {
          "type": "Literal",
          "value": 44444,
          "raw": "44444",
          "start": 150,
          "end": 155
        },
        "start": 132,
        "end": 155
      },
      "directive": null,
      "start": 132,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p5",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 172
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 172
        },
        "right": {
          "type": "Literal",
          "value": 555555,
          "raw": "555555",
          "start": 175,
          "end": 181
        },
        "start": 157,
        "end": 181
      },
      "directive": null,
      "start": 157,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p6",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "optional": false,
          "computed": false,
          "start": 183,
          "end": 198
        },
        "right": {
          "type": "Literal",
          "value": 66666,
          "raw": "66666",
          "start": 201,
          "end": 206
        },
        "start": 183,
        "end": 206
      },
      "directive": null,
      "start": 183,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 220
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p7",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 223
          },
          "optional": false,
          "computed": false,
          "start": 208,
          "end": 223
        },
        "right": {
          "type": "Literal",
          "value": 777777,
          "raw": "777777",
          "start": 226,
          "end": 232
        },
        "start": 208,
        "end": 232
      },
      "directive": null,
      "start": 208,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p8",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 249
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 249
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 252,
          "end": 257
        },
        "start": 234,
        "end": 257
      },
      "directive": null,
      "start": 234,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p9",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 288
          },
          "optional": false,
          "computed": false,
          "start": 273,
          "end": 288
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 291,
          "end": 296
        },
        "start": 273,
        "end": 296
      },
      "directive": null,
      "start": 273,
      "end": 297
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 320,
                                  "end": 332
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 333,
                                  "end": 335
                                },
                                "optional": false,
                                "computed": false,
                                "start": 320,
                                "end": 335
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 338,
                                  "end": 350
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 351,
                                  "end": 353
                                },
                                "optional": false,
                                "computed": false,
                                "start": 338,
                                "end": 353
                              },
                              "start": 320,
                              "end": 353
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandoMerge",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 356,
                                "end": 368
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 369,
                                "end": 371
                              },
                              "optional": false,
                              "computed": false,
                              "start": 356,
                              "end": 371
                            },
                            "start": 320,
                            "end": 371
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExpandoMerge",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 374,
                              "end": 386
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 387,
                              "end": 389
                            },
                            "optional": false,
                            "computed": false,
                            "start": 374,
                            "end": 389
                          },
                          "start": 320,
                          "end": 389
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExpandoMerge",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 404
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 405,
                            "end": 407
                          },
                          "optional": false,
                          "computed": false,
                          "start": 392,
                          "end": 407
                        },
                        "start": 320,
                        "end": 407
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExpandoMerge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 422
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 423,
                          "end": 425
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 425
                      },
                      "start": 320,
                      "end": 425
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpandoMerge",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 440
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 443
                      },
                      "optional": false,
                      "computed": false,
                      "start": 428,
                      "end": 443
                    },
                    "start": 320,
                    "end": 443
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoMerge",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 458
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 461
                    },
                    "optional": false,
                    "computed": false,
                    "start": 446,
                    "end": 461
                  },
                  "start": 320,
                  "end": 461
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 476
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 479
                  },
                  "optional": false,
                  "computed": false,
                  "start": 464,
                  "end": 479
                },
                "start": 320,
                "end": 479
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 494
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 496
                  },
                  "optional": false,
                  "computed": false,
                  "start": 482,
                  "end": 496
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 497,
                    "end": 499
                  }
                ],
                "optional": false,
                "start": 482,
                "end": 500
              },
              "start": 320,
              "end": 500
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 515
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1001,
                  "raw": "1001",
                  "start": 516,
                  "end": 520
                }
              ],
              "optional": false,
              "start": 503,
              "end": 521
            },
            "start": 320,
            "end": 521
          },
          "definite": false,
          "start": 316,
          "end": 521
        }
      ],
      "declare": false,
      "start": 312,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 523
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
    "value": "ExpandoMerge",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 51,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "111",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 73,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 132,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "44444",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 157,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "555555",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 183,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "66666",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 208,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "777777",
    "start": 226,
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
    "value": "ExpandoMerge",
    "start": 234,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 273,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 320,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 338,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 356,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 374,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 392,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 410,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 428,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 446,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 464,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 482,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 503,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "1001",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 42
                  },
                  "init": {
                    "type": "Literal",
                    "value": 333,
                    "raw": "333",
                    "start": 45,
                    "end": 48
                  },
                  "definite": false,
                  "start": 40,
                  "end": 48
                }
              ],
              "declare": false,
              "start": 36,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 49
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 67
                  },
                  "init": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 70,
                    "end": 71
                  },
                  "definite": false,
                  "start": 65,
                  "end": 71
                }
              ],
              "declare": false,
              "start": 61,
              "end": 72
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 72
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 90
                  },
                  "init": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 93,
                    "end": 94
                  },
                  "definite": false,
                  "start": 88,
                  "end": 94
                }
              ],
              "declare": false,
              "start": 84,
              "end": 95
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 77,
            "end": 95
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 113
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 116,
                    "end": 117
                  },
                  "definite": false,
                  "start": 111,
                  "end": 117
                }
              ],
              "declare": false,
              "start": 107,
              "end": 118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 100,
            "end": 118
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 136
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 139,
                    "end": 140
                  },
                  "definite": false,
                  "start": 134,
                  "end": 140
                }
              ],
              "declare": false,
              "start": 130,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 123,
            "end": 141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 159
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 162,
                    "end": 163
                  },
                  "definite": false,
                  "start": 157,
                  "end": 163
                }
              ],
              "declare": false,
              "start": 153,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 146,
            "end": 164
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 182
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 185,
                    "end": 186
                  },
                  "definite": false,
                  "start": 180,
                  "end": 186
                }
              ],
              "declare": false,
              "start": 176,
              "end": 187
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 169,
            "end": 187
          }
        ],
        "start": 23,
        "end": 189
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 189
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 212
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 232
                  },
                  "init": {
                    "type": "Literal",
                    "value": 222,
                    "raw": "222",
                    "start": 235,
                    "end": 238
                  },
                  "definite": false,
                  "start": 230,
                  "end": 238
                }
              ],
              "declare": false,
              "start": 226,
              "end": 239
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 219,
            "end": 239
          }
        ],
        "start": 213,
        "end": 241
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 190,
      "end": 241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "333",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 190,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 200,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "222",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  }
]
```

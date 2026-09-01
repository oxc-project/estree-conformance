__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 17
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lineTokens",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 19,
          "end": 29
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "token",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 36
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "lineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 70,
                            "end": 80
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "optional": false,
                          "computed": true,
                          "start": 70,
                          "end": 87
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "trim",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 92
                        },
                        "optional": false,
                        "computed": false,
                        "start": 70,
                        "end": 92
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 70,
                      "end": 94
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "=",
                      "raw": "'='",
                      "start": 99,
                      "end": 102
                    },
                    "start": 70,
                    "end": 102
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 111
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 114,
                      "end": 115
                    },
                    "start": 106,
                    "end": 115
                  },
                  "start": 70,
                  "end": 115
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "token",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 129
                    },
                    "optional": false,
                    "computed": false,
                    "start": 119,
                    "end": 129
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 134,
                    "end": 136
                  },
                  "start": 119,
                  "end": 136
                },
                "start": 70,
                "end": 136
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokens",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 146
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 155,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    },
                    "optional": false,
                    "computed": true,
                    "start": 140,
                    "end": 157
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 162
                  },
                  "optional": false,
                  "computed": false,
                  "start": 140,
                  "end": 162
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "attribute.name.html",
                  "raw": "'attribute.name.html'",
                  "start": 167,
                  "end": 188
                },
                "start": 140,
                "end": 188
              },
              "start": 70,
              "end": 188
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 209
                    },
                    "operator": "===",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 228
                        },
                        "optional": false,
                        "computed": false,
                        "start": 215,
                        "end": 228
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 231,
                        "end": 232
                      },
                      "start": 215,
                      "end": 232
                    },
                    "start": 204,
                    "end": 233
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "appendText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 258,
                                "end": 268
                              },
                              "value": {
                                "type": "Literal",
                                "value": "\"\"",
                                "raw": "'\\\"\\\"'",
                                "start": 270,
                                "end": 276
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 258,
                              "end": 276
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "advanceCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 290
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 292,
                                "end": 293
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 278,
                              "end": 293
                            }
                          ],
                          "start": 256,
                          "end": 295
                        },
                        "start": 249,
                        "end": 296
                      }
                    ],
                    "start": 235,
                    "end": 306
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 324,
                              "end": 330
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 336
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 339,
                                "end": 340
                              },
                              "start": 331,
                              "end": 340
                            },
                            "optional": false,
                            "computed": true,
                            "start": 324,
                            "end": 341
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 342,
                            "end": 346
                          },
                          "optional": false,
                          "computed": false,
                          "start": 324,
                          "end": 346
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "attribute.value.html",
                          "raw": "'attribute.value.html'",
                          "start": 351,
                          "end": 373
                        },
                        "start": 324,
                        "end": 373
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 383
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 384,
                                "end": 389
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 392,
                                "end": 393
                              },
                              "start": 384,
                              "end": 393
                            },
                            "optional": false,
                            "computed": true,
                            "start": 377,
                            "end": 394
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 395,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 377,
                          "end": 399
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 404,
                          "end": 406
                        },
                        "start": 377,
                        "end": 406
                      },
                      "start": 324,
                      "end": 406
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "appendText",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 431,
                                  "end": 441
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "\"\"",
                                  "raw": "'\\\"\\\"'",
                                  "start": 443,
                                  "end": 449
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 431,
                                "end": 449
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "advanceCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 451,
                                  "end": 463
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 465,
                                  "end": 466
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 451,
                                "end": 466
                              }
                            ],
                            "start": 429,
                            "end": 468
                          },
                          "start": 422,
                          "end": 469
                        }
                      ],
                      "start": 408,
                      "end": 479
                    },
                    "alternate": null,
                    "start": 320,
                    "end": 479
                  },
                  "start": 200,
                  "end": 479
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 495,
                    "end": 499
                  },
                  "start": 488,
                  "end": 500
                }
              ],
              "start": 190,
              "end": 506
            },
            "alternate": null,
            "start": 66,
            "end": 506
          }
        ],
        "start": 60,
        "end": 508
      },
      "expression": false,
      "start": 47,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 508
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "lineTokens",
    "start": 19,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "token",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "lineTokens",
    "start": 70,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 95,
    "end": 98
  },
  {
    "type": "String",
    "value": "'='",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 103,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "token",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 130,
    "end": 133
  },
  {
    "type": "String",
    "value": "''",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 163,
    "end": 166
  },
  {
    "type": "String",
    "value": "'attribute.name.html'",
    "start": 167,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "appendText",
    "start": 258,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "String",
    "value": "'\\\"\\\"'",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "advanceCount",
    "start": 278,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 315,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 337,
    "end": 338
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 347,
    "end": 350
  },
  {
    "type": "String",
    "value": "'attribute.value.html'",
    "start": 351,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 374,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 400,
    "end": 403
  },
  {
    "type": "String",
    "value": "''",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "appendText",
    "start": 431,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "'\\\"\\\"'",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "advanceCount",
    "start": 451,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 488,
    "end": 494
  },
  {
    "type": "Null",
    "value": "null",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  }
]
```

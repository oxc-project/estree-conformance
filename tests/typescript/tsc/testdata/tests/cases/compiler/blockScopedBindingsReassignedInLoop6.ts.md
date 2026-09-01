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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 30,
                        "end": 31
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 33,
                        "end": 34
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 35
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 39,
                        "end": 40
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 42,
                        "end": 43
                      }
                    ],
                    "start": 38,
                    "end": 44
                  },
                  "definite": false,
                  "start": 29,
                  "end": 44
                }
              ],
              "declare": false,
              "start": 25,
              "end": 44
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "start": 46,
              "end": 51
            },
            "update": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "start": 53,
                  "end": 56
                },
                {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "start": 58,
                  "end": 61
                }
              ],
              "start": 53,
              "end": 61
            },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 88
                            },
                            "start": 87,
                            "end": 90
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 94
                            },
                            "start": 93,
                            "end": 96
                          },
                          "start": 87,
                          "end": 96
                        },
                        "id": null,
                        "generator": false,
                        "start": 81,
                        "end": 96
                      },
                      "definite": false,
                      "start": 77,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 73,
                  "end": 97
                },
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
                      "start": 110,
                      "end": 111
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 115,
                      "end": 116
                    },
                    "start": 110,
                    "end": 116
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 130,
                    "end": 136
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 155
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 159,
                        "end": 160
                      },
                      "start": 154,
                      "end": 160
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 175
                        },
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 178,
                          "end": 179
                        },
                        "start": 174,
                        "end": 179
                      },
                      "directive": null,
                      "start": 174,
                      "end": 180
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 206,
                      "end": 213
                    },
                    "start": 150,
                    "end": 213
                  },
                  "start": 106,
                  "end": 213
                }
              ],
              "start": 63,
              "end": 219
            },
            "start": 20,
            "end": 219
          }
        ],
        "start": 14,
        "end": 221
      },
      "expression": false,
      "start": 0,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
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
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 254,
                              "end": 255
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 257,
                              "end": 258
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 254,
                            "end": 258
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 261
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 265
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 267,
                                    "end": 268
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 264,
                                  "end": 268
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 263,
                              "end": 269
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 260,
                            "end": 269
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 270
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 271
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 276,
                              "end": 277
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 279,
                              "end": 280
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 276,
                            "end": 280
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 282,
                              "end": 283
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 286,
                                    "end": 287
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 289,
                                    "end": 290
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 286,
                                  "end": 290
                                }
                              ],
                              "start": 285,
                              "end": 291
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 282,
                            "end": 291
                          }
                        ],
                        "start": 275,
                        "end": 292
                      }
                    ],
                    "start": 274,
                    "end": 293
                  },
                  "definite": false,
                  "start": 252,
                  "end": 293
                }
              ],
              "declare": false,
              "start": 248,
              "end": 293
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 296
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              "start": 295,
              "end": 300
            },
            "update": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "start": 302,
                  "end": 305
                },
                {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "start": 307,
                  "end": 310
                }
              ],
              "start": 302,
              "end": 310
            },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 336,
                              "end": 337
                            },
                            "start": 336,
                            "end": 339
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 343
                            },
                            "start": 342,
                            "end": 345
                          },
                          "start": 336,
                          "end": 345
                        },
                        "id": null,
                        "generator": false,
                        "start": 330,
                        "end": 345
                      },
                      "definite": false,
                      "start": 326,
                      "end": 345
                    }
                  ],
                  "declare": false,
                  "start": 322,
                  "end": 346
                },
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
                      "start": 359,
                      "end": 360
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 364,
                      "end": 365
                    },
                    "start": 359,
                    "end": 365
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 379,
                    "end": 385
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 404
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 408,
                        "end": 409
                      },
                      "start": 403,
                      "end": 409
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 423,
                          "end": 424
                        },
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 427,
                          "end": 428
                        },
                        "start": 423,
                        "end": 428
                      },
                      "directive": null,
                      "start": 423,
                      "end": 429
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 455,
                      "end": 462
                    },
                    "start": 399,
                    "end": 462
                  },
                  "start": 355,
                  "end": 462
                }
              ],
              "start": 312,
              "end": 468
            },
            "start": 243,
            "end": 468
          }
        ],
        "start": 237,
        "end": 470
      },
      "expression": false,
      "start": 223,
      "end": 470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
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
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 84,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 112,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "break",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 145,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 156,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 189,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "c",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Numeric",
    "value": "2",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 302,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 307,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 333,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 361,
    "end": 363
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 394,
    "end": 398
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
    "type": "Identifier",
    "value": "y",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 405,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "type": "Keyword",
    "value": "else",
    "start": 438,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  }
]
```

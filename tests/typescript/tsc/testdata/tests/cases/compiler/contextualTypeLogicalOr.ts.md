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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 30,
            "end": 33
          },
          "definite": false,
          "start": 26,
          "end": 33
        }
      ],
      "declare": false,
      "start": 22,
      "end": 34
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 47,
                                      "end": 48
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 53,
                                          "end": 54
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 56,
                                          "end": 57
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 3,
                                          "raw": "3",
                                          "start": 59,
                                          "end": 60
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 4,
                                          "raw": "4",
                                          "start": 62,
                                          "end": 63
                                        }
                                      ],
                                      "start": 52,
                                      "end": 64
                                    },
                                    "start": 47,
                                    "end": 64
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 72,
                                      "end": 73
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 78,
                                          "end": 79
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 81,
                                          "end": 82
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 3,
                                          "raw": "3",
                                          "start": 84,
                                          "end": 85
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 4,
                                          "raw": "4",
                                          "start": 87,
                                          "end": 88
                                        }
                                      ],
                                      "start": 77,
                                      "end": 89
                                    },
                                    "start": 72,
                                    "end": 89
                                  },
                                  "start": 47,
                                  "end": 89
                                },
                                "operator": "||",
                                "right": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 97,
                                    "end": 98
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 103,
                                        "end": 104
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 106,
                                        "end": 107
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3",
                                        "start": 109,
                                        "end": 110
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 112,
                                        "end": 113
                                      }
                                    ],
                                    "start": 102,
                                    "end": 114
                                  },
                                  "start": 97,
                                  "end": 114
                                },
                                "start": 47,
                                "end": 114
                              },
                              "operator": "||",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 122,
                                  "end": 123
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 128,
                                      "end": 129
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 131,
                                      "end": 132
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3",
                                      "start": 134,
                                      "end": 135
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4",
                                      "start": 137,
                                      "end": 138
                                    }
                                  ],
                                  "start": 127,
                                  "end": 139
                                },
                                "start": 122,
                                "end": 139
                              },
                              "start": 47,
                              "end": 139
                            },
                            "operator": "||",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 147,
                                "end": 148
                              },
                              "operator": "&&",
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 153,
                                    "end": 154
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 156,
                                    "end": 157
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3",
                                    "start": 159,
                                    "end": 160
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4",
                                    "start": 162,
                                    "end": 163
                                  }
                                ],
                                "start": 152,
                                "end": 164
                              },
                              "start": 147,
                              "end": 164
                            },
                            "start": 47,
                            "end": 164
                          },
                          "operator": "||",
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 173
                            },
                            "operator": "&&",
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 178,
                                  "end": 179
                                },
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 181,
                                  "end": 182
                                },
                                {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 184,
                                  "end": 185
                                },
                                {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 187,
                                  "end": 188
                                }
                              ],
                              "start": 177,
                              "end": 189
                            },
                            "start": 172,
                            "end": 189
                          },
                          "start": 47,
                          "end": 189
                        },
                        "operator": "||",
                        "right": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 198
                          },
                          "operator": "&&",
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 203,
                                "end": 204
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 206,
                                "end": 207
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 209,
                                "end": 210
                              },
                              {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 212,
                                "end": 213
                              }
                            ],
                            "start": 202,
                            "end": 214
                          },
                          "start": 197,
                          "end": 214
                        },
                        "start": 47,
                        "end": 214
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "operator": "&&",
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 228,
                              "end": 229
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 231,
                              "end": 232
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 234,
                              "end": 235
                            },
                            {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 237,
                              "end": 238
                            }
                          ],
                          "start": 227,
                          "end": 239
                        },
                        "start": 222,
                        "end": 239
                      },
                      "start": 47,
                      "end": 239
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 248
                      },
                      "operator": "&&",
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 253,
                            "end": 254
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 256,
                            "end": 257
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 259,
                            "end": 260
                          },
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 262,
                            "end": 263
                          }
                        ],
                        "start": 252,
                        "end": 264
                      },
                      "start": 247,
                      "end": 264
                    },
                    "start": 47,
                    "end": 264
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 278,
                          "end": 279
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 281,
                          "end": 282
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 284,
                          "end": 285
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 287,
                          "end": 288
                        }
                      ],
                      "start": 277,
                      "end": 289
                    },
                    "start": 272,
                    "end": 289
                  },
                  "start": 47,
                  "end": 289
                },
                "operator": "||",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "operator": "&&",
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 303,
                        "end": 304
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 306,
                        "end": 307
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 309,
                        "end": 310
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 312,
                        "end": 313
                      }
                    ],
                    "start": 302,
                    "end": 314
                  },
                  "start": 297,
                  "end": 314
                },
                "start": 47,
                "end": 314
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 323
                },
                "operator": "&&",
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 328,
                      "end": 329
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 331,
                      "end": 332
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 334,
                      "end": 335
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 337,
                      "end": 338
                    }
                  ],
                  "start": 327,
                  "end": 339
                },
                "start": 322,
                "end": 339
              },
              "start": 47,
              "end": 339
            },
            "operator": "||",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 348
              },
              "operator": "&&",
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 353,
                    "end": 354
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 356,
                    "end": 357
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 359,
                    "end": 360
                  },
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 362,
                    "end": 363
                  }
                ],
                "start": 352,
                "end": 364
              },
              "start": 347,
              "end": 364
            },
            "start": 47,
            "end": 364
          },
          "definite": false,
          "start": 39,
          "end": 364
        }
      ],
      "declare": false,
      "start": 35,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 365
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 52,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 90,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 115,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 165,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 265,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  }
]
```

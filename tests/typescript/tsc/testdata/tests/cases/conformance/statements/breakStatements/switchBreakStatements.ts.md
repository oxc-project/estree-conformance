__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 8,
        "end": 10
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 23,
            "end": 26
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 36,
              "end": 42
            }
          ],
          "start": 18,
          "end": 42
        }
      ],
      "start": 0,
      "end": 44
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 59,
          "end": 61
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 74,
              "end": 77
            },
            "consequent": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ONE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "start": 87,
                "end": 97
              }
            ],
            "start": 69,
            "end": 97
          }
        ],
        "start": 51,
        "end": 99
      },
      "start": 46,
      "end": 99
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 104
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 111
        },
        "body": {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 121,
            "end": 123
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 136,
                "end": 139
              },
              "consequent": [
                {
                  "type": "BreakStatement",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "THREE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 160
                  },
                  "start": 149,
                  "end": 161
                }
              ],
              "start": 131,
              "end": 161
            }
          ],
          "start": 113,
          "end": 163
        },
        "start": 106,
        "end": 163
      },
      "start": 101,
      "end": 163
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 169
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 179,
          "end": 181
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 194,
              "end": 197
            },
            "consequent": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FIVE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 211
                },
                "body": {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 229,
                    "end": 231
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 252,
                        "end": 255
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FOUR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 283
                          },
                          "start": 273,
                          "end": 284
                        }
                      ],
                      "start": 247,
                      "end": 284
                    }
                  ],
                  "start": 221,
                  "end": 294
                },
                "start": 207,
                "end": 294
              }
            ],
            "start": 189,
            "end": 294
          }
        ],
        "start": 171,
        "end": 296
      },
      "start": 165,
      "end": 296
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 306,
        "end": 308
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 321,
            "end": 324
          },
          "consequent": [
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SIX",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 337
              },
              "body": {
                "type": "SwitchStatement",
                "discriminant": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 355,
                  "end": 357
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 378,
                      "end": 381
                    },
                    "consequent": [
                      {
                        "type": "BreakStatement",
                        "label": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SIX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 408
                        },
                        "start": 399,
                        "end": 409
                      }
                    ],
                    "start": 373,
                    "end": 409
                  }
                ],
                "start": 347,
                "end": 419
              },
              "start": 334,
              "end": 419
            }
          ],
          "start": 316,
          "end": 419
        }
      ],
      "start": 298,
      "end": 421
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 428
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 438,
          "end": 440
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 453,
              "end": 456
            },
            "consequent": [
              {
                "type": "SwitchStatement",
                "discriminant": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 474,
                  "end": 476
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 497,
                      "end": 500
                    },
                    "consequent": [
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 526,
                          "end": 528
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 557,
                              "end": 560
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SEVEN",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 592,
                                  "end": 597
                                },
                                "start": 586,
                                "end": 598
                              },
                              {
                                "type": "LabeledStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "EIGHT",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 623,
                                  "end": 628
                                },
                                "body": {
                                  "type": "SwitchStatement",
                                  "discriminant": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''",
                                    "start": 662,
                                    "end": 664
                                  },
                                  "cases": [
                                    {
                                      "type": "SwitchCase",
                                      "test": {
                                        "type": "Literal",
                                        "value": "a",
                                        "raw": "'a'",
                                        "start": 701,
                                        "end": 704
                                      },
                                      "consequent": [
                                        {
                                          "type": "VariableDeclaration",
                                          "kind": "var",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "id": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fn",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 742,
                                                "end": 744
                                              },
                                              "init": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "generator": false,
                                                "async": false,
                                                "declare": false,
                                                "typeParameters": null,
                                                "params": [],
                                                "returnType": null,
                                                "body": {
                                                  "type": "BlockStatement",
                                                  "body": [],
                                                  "start": 759,
                                                  "end": 762
                                                },
                                                "expression": false,
                                                "start": 747,
                                                "end": 762
                                              },
                                              "definite": false,
                                              "start": 742,
                                              "end": 762
                                            }
                                          ],
                                          "declare": false,
                                          "start": 738,
                                          "end": 762
                                        },
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "EIGHT",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 801,
                                            "end": 806
                                          },
                                          "start": 795,
                                          "end": 807
                                        }
                                      ],
                                      "start": 696,
                                      "end": 807
                                    }
                                  ],
                                  "start": 654,
                                  "end": 833
                                },
                                "start": 623,
                                "end": 833
                              }
                            ],
                            "start": 552,
                            "end": 833
                          }
                        ],
                        "start": 518,
                        "end": 851
                      }
                    ],
                    "start": 492,
                    "end": 851
                  }
                ],
                "start": 466,
                "end": 861
              }
            ],
            "start": 448,
            "end": 861
          }
        ],
        "start": 430,
        "end": 863
      },
      "start": 423,
      "end": 863
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 863
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "String",
    "value": "''",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "''",
    "start": 59,
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
    "value": "case",
    "start": 69,
    "end": 73
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 101,
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
    "value": "THREE",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "''",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 131,
    "end": 135
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "''",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 189,
    "end": 193
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "String",
    "value": "''",
    "start": 229,
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
    "type": "Keyword",
    "value": "case",
    "start": 247,
    "end": 251
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "''",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 316,
    "end": 320
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 321,
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
    "value": "SIX",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "''",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 373,
    "end": 377
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "SIX",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "''",
    "start": 438,
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
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 448,
    "end": 452
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "''",
    "start": 474,
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
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 492,
    "end": 496
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "''",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 552,
    "end": 556
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 586,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "String",
    "value": "''",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 696,
    "end": 700
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 738,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 747,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 795,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 801,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  }
]
```

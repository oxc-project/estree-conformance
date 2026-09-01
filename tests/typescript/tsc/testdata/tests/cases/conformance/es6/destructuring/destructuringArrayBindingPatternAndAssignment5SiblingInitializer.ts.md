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
        "start": 39,
        "end": 41
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
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 59
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 63
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 68
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 68
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 69
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 73,
                      "end": 74
                    }
                  ],
                  "start": 72,
                  "end": 75
                },
                "definite": false,
                "start": 56,
                "end": 75
              }
            ],
            "declare": false,
            "start": 50,
            "end": 76
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 90
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 94
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 97,
                          "end": 98
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 103
                        },
                        "start": 97,
                        "end": 103
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 103
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 104
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 108,
                      "end": 109
                    }
                  ],
                  "start": 107,
                  "end": 110
                },
                "definite": false,
                "start": 87,
                "end": 110
              }
            ],
            "declare": false,
            "start": 81,
            "end": 111
          }
        ],
        "start": 44,
        "end": 113
      },
      "expression": false,
      "start": 30,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
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
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 174
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 178
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 183
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 183
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 184
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 188,
                      "end": 192
                    }
                  ],
                  "start": 187,
                  "end": 193
                },
                "definite": false,
                "start": 171,
                "end": 193
              }
            ],
            "declare": false,
            "start": 165,
            "end": 194
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 208
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 212
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 217
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "!",
                          "raw": "'!'",
                          "start": 220,
                          "end": 223
                        },
                        "start": 215,
                        "end": 223
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 223
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 224
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 228,
                      "end": 232
                    }
                  ],
                  "start": 227,
                  "end": 233
                },
                "definite": false,
                "start": 205,
                "end": 233
              }
            ],
            "declare": false,
            "start": 199,
            "end": 234
          }
        ],
        "start": 159,
        "end": 236
      },
      "expression": false,
      "start": 145,
      "end": 236
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 288
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
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 306
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 308,
                        "end": 310
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 315
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 315
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 316
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 320,
                      "end": 324
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 326,
                      "end": 327
                    }
                  ],
                  "start": 319,
                  "end": 328
                },
                "definite": false,
                "start": 303,
                "end": 328
              }
            ],
            "declare": false,
            "start": 297,
            "end": 329
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 343
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 347
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 352
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "!",
                          "raw": "'!'",
                          "start": 355,
                          "end": 358
                        },
                        "start": 350,
                        "end": 358
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 358
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 359
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 363,
                      "end": 367
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 369,
                      "end": 370
                    }
                  ],
                  "start": 362,
                  "end": 371
                },
                "definite": false,
                "start": 340,
                "end": 371
              }
            ],
            "declare": false,
            "start": 334,
            "end": 372
          }
        ],
        "start": 291,
        "end": 374
      },
      "expression": false,
      "start": 277,
      "end": 374
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
            "name": "yadda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 503,
                        "end": 509
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 511,
                        "end": 517
                      }
                    ],
                    "start": 502,
                    "end": 518
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 521,
                    "end": 530
                  }
                ],
                "start": 502,
                "end": 530
              },
              "start": 500,
              "end": 530
            },
            "start": 495,
            "end": 530
          },
          "init": null,
          "definite": false,
          "start": 495,
          "end": 530
        }
      ],
      "declare": true,
      "start": 481,
      "end": 530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 542
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
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 559,
                      "end": 560
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 562,
                        "end": 563
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 566,
                        "end": 567
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 567
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 569
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "yadda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 577
                  },
                  "operator": "??",
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 581,
                    "end": 583
                  },
                  "start": 572,
                  "end": 583
                },
                "definite": false,
                "start": 557,
                "end": 583
              }
            ],
            "declare": false,
            "start": 551,
            "end": 584
          }
        ],
        "start": 545,
        "end": 586
      },
      "expression": false,
      "start": 531,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 586
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 481,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 489,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 495,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 511,
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
    "value": "|",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 521,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 531,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  }
]
```

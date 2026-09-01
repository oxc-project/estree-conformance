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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 16
      },
      "expression": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        },
        "start": 97,
        "end": 103
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 104
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 134,
                "end": 135
              },
              "typeArguments": null,
              "start": 134,
              "end": 135
            },
            "start": 132,
            "end": 135
          },
          "start": 127,
          "end": 135
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 138,
          "end": 142
        },
        "start": 136,
        "end": 142
      },
      "body": null,
      "expression": false,
      "start": 105,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 157
      },
      "generator": true,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 180,
                  "end": 185
                },
                "definite": false,
                "start": 172,
                "end": 185
              }
            ],
            "declare": false,
            "start": 166,
            "end": 186
          }
        ],
        "start": 160,
        "end": 211
      },
      "expression": false,
      "start": 145,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 225
      },
      "generator": true,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
                  },
                  "start": 240,
                  "end": 253
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 256,
                  "end": 261
                },
                "definite": false,
                "start": 240,
                "end": 261
              }
            ],
            "declare": false,
            "start": 234,
            "end": 262
          }
        ],
        "start": 228,
        "end": 302
      },
      "expression": false,
      "start": 213,
      "end": 302
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 316
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 325,
              "end": 330
            },
            "directive": null,
            "start": 325,
            "end": 331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 360,
                  "end": 365
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 371
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 367,
                  "end": 373
                }
              ],
              "start": 360,
              "end": 373
            },
            "directive": null,
            "start": 360,
            "end": 374
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 407
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 403,
                  "end": 409
                },
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 411,
                  "end": 416
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 422
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 418,
                  "end": 424
                }
              ],
              "start": 403,
              "end": 424
            },
            "directive": null,
            "start": 403,
            "end": 425
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 455,
              "end": 460
            },
            "directive": null,
            "start": 454,
            "end": 462
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": null,
                      "start": 492,
                      "end": 497
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 503
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 499,
                      "end": 505
                    }
                  ],
                  "start": 492,
                  "end": 505
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 512
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 508,
                  "end": 514
                }
              ],
              "start": 491,
              "end": 514
            },
            "directive": null,
            "start": 491,
            "end": 515
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 548,
              "end": 553
            },
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 555,
              "end": 560
            },
            "update": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 562,
              "end": 567
            },
            "body": {
              "type": "EmptyStatement",
              "start": 568,
              "end": 569
            },
            "start": 544,
            "end": 569
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": null,
                "start": 606,
                "end": 611
              },
              "prefix": true,
              "start": 600,
              "end": 612
            },
            "directive": null,
            "start": 600,
            "end": 613
          }
        ],
        "start": 319,
        "end": 641
      },
      "expression": false,
      "start": 304,
      "end": 641
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 655
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 665
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 666,
                  "end": 671
                }
              ],
              "optional": false,
              "start": 664,
              "end": 672
            },
            "directive": null,
            "start": 664,
            "end": 673
          }
        ],
        "start": 658,
        "end": 698
      },
      "expression": false,
      "start": 643,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null,
        "start": 710,
        "end": 712
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 723,
                    "end": 729
                  }
                ],
                "start": 722,
                "end": 730
              },
              "arguments": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 731,
                  "end": 736
                }
              ],
              "optional": false,
              "start": 721,
              "end": 737
            },
            "directive": null,
            "start": 721,
            "end": 738
          }
        ],
        "start": 715,
        "end": 779
      },
      "expression": false,
      "start": 700,
      "end": 779
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 779
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
    "type": "Punctuator",
    "value": "*",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 10,
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
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
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
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 234,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 304,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 360,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
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
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 562,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 666,
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
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 700,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 731,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  }
]
```

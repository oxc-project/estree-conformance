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
            "name": "a",
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
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 82,
                  "end": 85
                },
                "start": 77,
                "end": 85
              },
              "start": 42,
              "end": 91
            },
            "directive": null,
            "start": 42,
            "end": 92
          }
        ],
        "start": 36,
        "end": 94
      },
      "expression": false,
      "start": 21,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 107
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
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 156,
                    "end": 159
                  },
                  "start": 151,
                  "end": 159
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 168,
                  "end": 169
                },
                "start": 122,
                "end": 169
              },
              "start": 116,
              "end": 169
            },
            "directive": null,
            "start": 116,
            "end": 170
          }
        ],
        "start": 110,
        "end": 172
      },
      "expression": false,
      "start": 95,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 185
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
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  },
                  "start": 229,
                  "end": 237
                },
                "consequent": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 246,
                  "end": 247
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 250,
                  "end": 251
                },
                "start": 200,
                "end": 251
              },
              "start": 194,
              "end": 251
            },
            "directive": null,
            "start": 194,
            "end": 252
          }
        ],
        "start": 188,
        "end": 254
      },
      "expression": false,
      "start": 173,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 267
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
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 316,
                    "end": 319
                  },
                  "start": 311,
                  "end": 319
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "optional": false,
                "computed": false,
                "start": 282,
                "end": 327
              },
              "start": 276,
              "end": 327
            },
            "directive": null,
            "start": 276,
            "end": 328
          }
        ],
        "start": 270,
        "end": 330
      },
      "expression": false,
      "start": 255,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 343
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
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 388
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 392,
                    "end": 395
                  },
                  "start": 387,
                  "end": 395
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 403
                },
                "optional": false,
                "computed": true,
                "start": 358,
                "end": 404
              },
              "start": 352,
              "end": 404
            },
            "directive": null,
            "start": 352,
            "end": 405
          }
        ],
        "start": 346,
        "end": 407
      },
      "expression": false,
      "start": 331,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
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
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 469,
                    "end": 472
                  },
                  "start": 464,
                  "end": 472
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 435,
                "end": 480
              },
              "start": 429,
              "end": 480
            },
            "directive": null,
            "start": 429,
            "end": 481
          }
        ],
        "start": 423,
        "end": 483
      },
      "expression": false,
      "start": 408,
      "end": 483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
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
              "argument": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 545,
                    "end": 548
                  },
                  "start": 540,
                  "end": 548
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 554,
                      "end": 556
                    }
                  ],
                  "expressions": [],
                  "start": 554,
                  "end": 556
                },
                "start": 511,
                "end": 556
              },
              "start": 505,
              "end": 556
            },
            "directive": null,
            "start": 505,
            "end": 557
          }
        ],
        "start": 499,
        "end": 559
      },
      "expression": false,
      "start": 484,
      "end": 559
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
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
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 616,
                    "end": 617
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 621,
                    "end": 624
                  },
                  "start": 616,
                  "end": 624
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 634,
                  "end": 637
                },
                "start": 587,
                "end": 637
              },
              "start": 581,
              "end": 637
            },
            "directive": null,
            "start": 581,
            "end": 638
          }
        ],
        "start": 575,
        "end": 640
      },
      "expression": false,
      "start": 560,
      "end": 640
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 653
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
              "argument": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 702,
                    "end": 705
                  },
                  "start": 697,
                  "end": 705
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 722,
                  "end": 725
                },
                "start": 668,
                "end": 725
              },
              "start": 662,
              "end": 725
            },
            "directive": null,
            "start": 662,
            "end": 726
          }
        ],
        "start": 656,
        "end": 728
      },
      "expression": false,
      "start": 641,
      "end": 728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 742
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
              "argument": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 791,
                    "end": 794
                  },
                  "start": 786,
                  "end": 794
                },
                "start": 757,
                "end": 801
              },
              "start": 751,
              "end": 801
            },
            "directive": null,
            "start": 751,
            "end": 802
          }
        ],
        "start": 745,
        "end": 804
      },
      "expression": false,
      "start": 729,
      "end": 804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 804
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
    "value": "a",
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
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
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
    "value": "yield",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 153,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 166,
    "end": 167
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 255,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 331,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 352,
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
    "value": "a",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 466,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
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
    "value": "function",
    "start": 484,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Template",
    "value": "``",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 618,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 631,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 662,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 699,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 712,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 729,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
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
    "value": "yield",
    "start": 751,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 788,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  }
]
```

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
        "start": 30,
        "end": 32
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
            "type": "ReturnStatement",
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
            "start": 41,
            "end": 92
          }
        ],
        "start": 35,
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
        "start": 104,
        "end": 106
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
            "type": "ReturnStatement",
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
            "start": 115,
            "end": 170
          }
        ],
        "start": 109,
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
        "start": 182,
        "end": 184
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
            "type": "ReturnStatement",
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
            "start": 193,
            "end": 252
          }
        ],
        "start": 187,
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
        "start": 264,
        "end": 266
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
            "type": "ReturnStatement",
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
            "start": 275,
            "end": 328
          }
        ],
        "start": 269,
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
        "start": 340,
        "end": 342
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
            "type": "ReturnStatement",
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
            "start": 351,
            "end": 405
          }
        ],
        "start": 345,
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
        "start": 417,
        "end": 419
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
            "type": "ReturnStatement",
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
            "start": 428,
            "end": 481
          }
        ],
        "start": 422,
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
        "start": 493,
        "end": 495
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
            "type": "ReturnStatement",
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
            "start": 504,
            "end": 557
          }
        ],
        "start": 498,
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
        "start": 569,
        "end": 571
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
            "type": "ReturnStatement",
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
            "start": 580,
            "end": 638
          }
        ],
        "start": 574,
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
        "start": 650,
        "end": 652
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
            "type": "ReturnStatement",
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
            "start": 661,
            "end": 726
          }
        ],
        "start": 655,
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
        "start": 738,
        "end": 741
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
            "type": "ReturnStatement",
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
            "start": 750,
            "end": 802
          }
        ],
        "start": 744,
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
    "type": "Identifier",
    "value": "t1",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 41,
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
    "type": "Identifier",
    "value": "t2",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
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
    "value": "return",
    "start": 115,
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
    "type": "Identifier",
    "value": "t3",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
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
    "type": "Identifier",
    "value": "t4",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 275,
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
    "type": "Identifier",
    "value": "t5",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 351,
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
    "type": "Identifier",
    "value": "t6",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 428,
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
    "type": "Identifier",
    "value": "t7",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 504,
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
    "type": "Identifier",
    "value": "t8",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 580,
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
    "type": "Identifier",
    "value": "t9",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 661,
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
    "type": "Identifier",
    "value": "t10",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 750,
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

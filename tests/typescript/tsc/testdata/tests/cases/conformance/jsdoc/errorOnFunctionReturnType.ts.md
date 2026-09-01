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
        "name": "testPromise1",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 138
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nope",
                  "raw": "\"Nope\"",
                  "start": 159,
                  "end": 165
                }
              ],
              "optional": false,
              "start": 147,
              "end": 166
            },
            "directive": null,
            "start": 147,
            "end": 167
          }
        ],
        "start": 141,
        "end": 169
      },
      "expression": false,
      "start": 117,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 238
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 254,
              "end": 259
            },
            "start": 247,
            "end": 260
          }
        ],
        "start": 241,
        "end": 262
      },
      "expression": false,
      "start": 211,
      "end": 262
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
            "name": "testPromise3",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 280
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
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 351
                      },
                      "optional": false,
                      "computed": false,
                      "start": 340,
                      "end": 351
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 352,
                        "end": 358
                      }
                    ],
                    "optional": false,
                    "start": 340,
                    "end": 359
                  },
                  "directive": null,
                  "start": 340,
                  "end": 359
                }
              ],
              "start": 334,
              "end": 361
            },
            "expression": false,
            "start": 323,
            "end": 361
          },
          "definite": false,
          "start": 268,
          "end": 361
        }
      ],
      "declare": false,
      "start": 264,
      "end": 361
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
            "name": "testPromise4",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 419
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
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 450
                      },
                      "optional": false,
                      "computed": false,
                      "start": 439,
                      "end": 450
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 451,
                        "end": 457
                      }
                    ],
                    "optional": false,
                    "start": 439,
                    "end": 458
                  },
                  "directive": null,
                  "start": 439,
                  "end": 458
                }
              ],
              "start": 433,
              "end": 460
            },
            "expression": false,
            "start": 422,
            "end": 460
          },
          "definite": false,
          "start": 407,
          "end": 460
        }
      ],
      "declare": false,
      "start": 403,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever1",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 587,
        "end": 591
      },
      "expression": false,
      "start": 565,
      "end": 591
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 656
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 672,
              "end": 677
            },
            "start": 665,
            "end": 678
          }
        ],
        "start": 659,
        "end": 680
      },
      "expression": false,
      "start": 631,
      "end": 680
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
            "name": "testNever3",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 696
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
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 765
                      },
                      "optional": false,
                      "computed": false,
                      "start": 754,
                      "end": 765
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 766,
                        "end": 772
                      }
                    ],
                    "optional": false,
                    "start": 754,
                    "end": 773
                  },
                  "directive": null,
                  "start": 754,
                  "end": 773
                }
              ],
              "start": 748,
              "end": 775
            },
            "expression": false,
            "start": 737,
            "end": 775
          },
          "definite": false,
          "start": 686,
          "end": 775
        }
      ],
      "declare": false,
      "start": 682,
      "end": 775
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
            "name": "testNever4",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 829
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
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 856
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 849,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 861,
                        "end": 867
                      }
                    ],
                    "optional": false,
                    "start": 849,
                    "end": 868
                  },
                  "directive": null,
                  "start": 849,
                  "end": 868
                }
              ],
              "start": 843,
              "end": 870
            },
            "expression": false,
            "start": 832,
            "end": 870
          },
          "definite": false,
          "start": 819,
          "end": 870
        }
      ],
      "declare": false,
      "start": 815,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 870
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "testPromise1",
    "start": 126,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "String",
    "value": "\"Nope\"",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 211,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 217,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "testPromise2",
    "start": 226,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"asd\"",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "testPromise3",
    "start": 268,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "testPromise4",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 439,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "testNever1",
    "start": 574,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 631,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 637,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "testNever2",
    "start": 646,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671
  },
  {
    "type": "String",
    "value": "\"asd\"",
    "start": 672,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "testNever3",
    "start": 686,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 737,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "testNever4",
    "start": 819,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 832,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 849,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 861,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  }
]
```

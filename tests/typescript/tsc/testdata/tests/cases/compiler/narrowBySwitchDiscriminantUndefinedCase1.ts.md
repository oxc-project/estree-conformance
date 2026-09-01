__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 88,
                  "end": 95
                },
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 69,
        "end": 98
      },
      "declare": false,
      "start": 57,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "start": 117,
            "end": 120
          },
          "start": 114,
          "end": 120
        }
      ],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 146
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 146
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 134,
                      "end": 146
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 148
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 154
                },
                "definite": false,
                "start": 132,
                "end": 154
              }
            ],
            "declare": false,
            "start": 126,
            "end": 155
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 179
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 201
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 225
                    },
                    "start": 209,
                    "end": 226
                  }
                ],
                "start": 187,
                "end": 226
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 236,
                  "end": 243
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 258,
                      "end": 265
                    },
                    "start": 251,
                    "end": 266
                  }
                ],
                "start": 231,
                "end": 266
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 303
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 316
                        }
                      ],
                      "optional": false,
                      "start": 286,
                      "end": 317
                    },
                    "directive": null,
                    "start": 286,
                    "end": 318
                  }
                ],
                "start": 271,
                "end": 318
              }
            ],
            "start": 159,
            "end": 322
          }
        ],
        "start": 122,
        "end": 324
      },
      "expression": false,
      "start": 100,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 340
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 365
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 369,
                          "end": 376
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 380,
                            "end": 385
                          },
                          "typeArguments": null,
                          "start": 380,
                          "end": 385
                        },
                        "start": 369,
                        "end": 385
                      }
                    ],
                    "start": 368,
                    "end": 386
                  },
                  "property": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 391
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 387,
                      "end": 398
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 387,
                    "end": 400
                  },
                  "optional": false,
                  "computed": true,
                  "start": 368,
                  "end": 401
                },
                "definite": false,
                "start": 353,
                "end": 401
              }
            ],
            "declare": false,
            "start": 347,
            "end": 402
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 426
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 448
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 472
                    },
                    "start": 456,
                    "end": 473
                  }
                ],
                "start": 434,
                "end": 473
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 483,
                  "end": 490
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 505,
                      "end": 512
                    },
                    "start": 498,
                    "end": 513
                  }
                ],
                "start": 478,
                "end": 513
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 550
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 563
                        }
                      ],
                      "optional": false,
                      "start": 533,
                      "end": 564
                    },
                    "directive": null,
                    "start": 533,
                    "end": 565
                  }
                ],
                "start": 518,
                "end": 565
              }
            ],
            "start": 406,
            "end": 569
          }
        ],
        "start": 343,
        "end": 571
      },
      "expression": false,
      "start": 326,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertUnreachable",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 603,
              "end": 608
            },
            "start": 601,
            "end": 608
          },
          "start": 600,
          "end": 608
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 611,
          "end": 616
        },
        "start": 609,
        "end": 616
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unreachable path taken",
                  "raw": "\"Unreachable path taken\"",
                  "start": 637,
                  "end": 661
                }
              ],
              "start": 627,
              "end": 662
            },
            "start": 621,
            "end": 663
          }
        ],
        "start": 617,
        "end": 665
      },
      "expression": false,
      "start": 573,
      "end": 665
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 665
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 73,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 134,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 167,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 231,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 251,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "assertUnreachable",
    "start": 286,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 304,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 326,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 353,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 377,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 414,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 434,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 439,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 456,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 463,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 478,
    "end": 482
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 483,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 498,
    "end": 504
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 505,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "assertUnreachable",
    "start": 533,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "optionalProp",
    "start": 551,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 573,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "assertUnreachable",
    "start": 582,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 621,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "String",
    "value": "\"Unreachable path taken\"",
    "start": 637,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  }
]
```

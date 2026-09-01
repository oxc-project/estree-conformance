__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 14,
              "end": 15
            },
            "start": 14,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 18,
              "end": 19
            },
            "start": 18,
            "end": 19
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 22,
              "end": 23
            },
            "start": 22,
            "end": 23
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 26,
              "end": 27
            },
            "start": 26,
            "end": 27
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 30,
              "end": 31
            },
            "start": 30,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 34,
              "end": 35
            },
            "start": 34,
            "end": 35
          }
        ],
        "start": 14,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FuncType",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                "typeArguments": null,
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "start": 54,
            "end": 65
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 70,
            "end": 76
          },
          "start": 67,
          "end": 76
        },
        "start": 53,
        "end": 76
      },
      "declare": false,
      "start": 37,
      "end": 76
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 119
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insideClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 145
                },
                "typeArguments": null,
                "start": 137,
                "end": 145
              },
              "start": 135,
              "end": 145
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 160
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 208
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 223,
                          "end": 224
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 241,
                              "end": 244
                            },
                            "start": 234,
                            "end": 245
                          }
                        ],
                        "start": 218,
                        "end": 245
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 257,
                          "end": 258
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 275,
                              "end": 278
                            },
                            "start": 268,
                            "end": 279
                          }
                        ],
                        "start": 252,
                        "end": 279
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 291,
                          "end": 292
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 309,
                              "end": 312
                            },
                            "start": 302,
                            "end": 312
                          }
                        ],
                        "start": 286,
                        "end": 312
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 324,
                          "end": 325
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "4",
                              "raw": "\"4\"",
                              "start": 342,
                              "end": 345
                            },
                            "start": 335,
                            "end": 345
                          }
                        ],
                        "start": 319,
                        "end": 345
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 357,
                          "end": 358
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "5",
                              "raw": "\"5\"",
                              "start": 375,
                              "end": 378
                            },
                            "start": 368,
                            "end": 378
                          }
                        ],
                        "start": 352,
                        "end": 378
                      }
                    ],
                    "start": 197,
                    "end": 407
                  }
                ],
                "start": 162,
                "end": 411
              },
              "expression": false,
              "start": 148,
              "end": 411
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 124,
            "end": 411
          }
        ],
        "start": 120,
        "end": 436
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 436
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
            "name": "outsideClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 466
                },
                "typeArguments": null,
                "start": 458,
                "end": 466
              },
              "start": 456,
              "end": 466
            },
            "start": 444,
            "end": 466
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 481
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 553
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 568,
                        "end": 569
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "1",
                            "raw": "\"1\"",
                            "start": 586,
                            "end": 589
                          },
                          "start": 579,
                          "end": 590
                        }
                      ],
                      "start": 563,
                      "end": 590
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 602,
                        "end": 603
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "2",
                            "raw": "\"2\"",
                            "start": 620,
                            "end": 623
                          },
                          "start": 613,
                          "end": 624
                        }
                      ],
                      "start": 597,
                      "end": 624
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 636,
                        "end": 637
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "3",
                            "raw": "\"3\"",
                            "start": 654,
                            "end": 657
                          },
                          "start": 647,
                          "end": 657
                        }
                      ],
                      "start": 631,
                      "end": 657
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 669,
                        "end": 670
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "4",
                            "raw": "\"4\"",
                            "start": 687,
                            "end": 690
                          },
                          "start": 680,
                          "end": 690
                        }
                      ],
                      "start": 664,
                      "end": 690
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 702,
                        "end": 703
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "5",
                            "raw": "\"5\"",
                            "start": 720,
                            "end": 723
                          },
                          "start": 713,
                          "end": 723
                        }
                      ],
                      "start": 697,
                      "end": 723
                    }
                  ],
                  "start": 542,
                  "end": 752
                }
              ],
              "start": 483,
              "end": 754
            },
            "expression": false,
            "start": 469,
            "end": 754
          },
          "definite": false,
          "start": 444,
          "end": 754
        }
      ],
      "declare": false,
      "start": 438,
      "end": 754
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 754
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 42,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "insideClass",
    "start": 124,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 218,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 234,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 252,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 268,
    "end": 274
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 286,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 302,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 309,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 319,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 335,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 342,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 352,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 368,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "outsideClass",
    "start": 444,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 563,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 579,
    "end": 585
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 597,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 613,
    "end": 619
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 631,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 647,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 654,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 664,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 680,
    "end": 686
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 687,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 697,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 713,
    "end": 719
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 720,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToLiterals",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 29
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 33,
                  "end": 44
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 66
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 81,
                          "end": 86
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 142
                                },
                                "start": 132,
                                "end": 143
                              }
                            ],
                            "start": 88,
                            "end": 151
                          }
                        ],
                        "start": 76,
                        "end": 151
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 182,
                              "end": 196
                            },
                            "start": 175,
                            "end": 197
                          }
                        ],
                        "start": 158,
                        "end": 197
                      }
                    ],
                    "start": 55,
                    "end": 203
                  }
                ],
                "start": 49,
                "end": 207
              },
              "id": null,
              "generator": false,
              "start": 32,
              "end": 207
            },
            "definite": false,
            "start": 13,
            "end": 207
          }
        ],
        "declare": false,
        "start": 7,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 208
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToString",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 241
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "start": 245,
                  "end": 256
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOtherStr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 258,
                  "end": 278
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 300
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 315,
                          "end": 320
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 380,
                                  "end": 383
                                },
                                "start": 373,
                                "end": 384
                              }
                            ],
                            "start": 322,
                            "end": 392
                          }
                        ],
                        "start": 310,
                        "end": 392
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someOtherStr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 416
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 458
                                },
                                "start": 448,
                                "end": 459
                              }
                            ],
                            "start": 418,
                            "end": 467
                          }
                        ],
                        "start": 399,
                        "end": 467
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 498,
                              "end": 512
                            },
                            "start": 491,
                            "end": 513
                          }
                        ],
                        "start": 474,
                        "end": 513
                      }
                    ],
                    "start": 289,
                    "end": 519
                  }
                ],
                "start": 283,
                "end": 523
              },
              "id": null,
              "generator": false,
              "start": 244,
              "end": 523
            },
            "definite": false,
            "start": 227,
            "end": 523
          }
        ],
        "declare": false,
        "start": 221,
        "end": 524
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 214,
      "end": 524
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToStringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 565
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 574,
                          "end": 580
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 583,
                          "end": 589
                        }
                      ],
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "start": 569,
                  "end": 589
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 603,
                      "end": 609
                    },
                    "start": 601,
                    "end": 609
                  },
                  "start": 591,
                  "end": 609
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 631
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 646,
                          "end": 651
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 711,
                                  "end": 714
                                },
                                "start": 704,
                                "end": 715
                              }
                            ],
                            "start": 653,
                            "end": 723
                          }
                        ],
                        "start": 641,
                        "end": 723
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 745
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 808,
                                  "end": 811
                                },
                                "start": 801,
                                "end": 812
                              }
                            ],
                            "start": 747,
                            "end": 820
                          }
                        ],
                        "start": 730,
                        "end": 820
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 851,
                              "end": 865
                            },
                            "start": 844,
                            "end": 866
                          }
                        ],
                        "start": 827,
                        "end": 866
                      }
                    ],
                    "start": 620,
                    "end": 872
                  }
                ],
                "start": 614,
                "end": 876
              },
              "id": null,
              "generator": false,
              "start": 568,
              "end": 876
            },
            "definite": false,
            "start": 543,
            "end": 876
          }
        ],
        "declare": false,
        "start": 537,
        "end": 877
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 530,
      "end": 877
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 877
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "narrowToLiterals",
    "start": 13,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 76,
    "end": 80
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 175,
    "end": 181
  },
  {
    "type": "String",
    "value": "'defaultValue'",
    "start": 182,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 214,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "narrowToString",
    "start": 227,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "someOtherStr",
    "start": 258,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 310,
    "end": 314
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 373,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 399,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "someOtherStr",
    "start": 404,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 448,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 474,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 491,
    "end": 497
  },
  {
    "type": "String",
    "value": "'defaultValue'",
    "start": 498,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 530,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 537,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "narrowToStringOrNumber",
    "start": 543,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 591,
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
    "value": "number",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 641,
    "end": 645
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 704,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 730,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 735,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 801,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 827,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 844,
    "end": 850
  },
  {
    "type": "String",
    "value": "'defaultValue'",
    "start": 851,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  }
]
```

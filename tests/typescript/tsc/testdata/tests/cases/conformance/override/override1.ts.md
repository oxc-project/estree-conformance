__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 22,
                      "end": 28
                    },
                    "start": 20,
                    "end": 28
                  },
                  "start": 19,
                  "end": 28
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 30,
                "end": 32
              },
              "expression": false,
              "start": 18,
              "end": 32
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 32
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooo",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "start": 43,
                  "end": 52
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 54,
                "end": 56
              },
              "expression": false,
              "start": 42,
              "end": 56
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 56
          }
        ],
        "start": 8,
        "end": 58
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 77
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "start": 98,
                  "end": 107
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 109,
                "end": 111
              },
              "expression": false,
              "start": 97,
              "end": 111
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 111
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooo",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 121
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 126,
                      "end": 132
                    },
                    "start": 124,
                    "end": 132
                  },
                  "start": 123,
                  "end": 132
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 134,
                "end": 136
              },
              "expression": false,
              "start": 122,
              "end": 136
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 117,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 155,
                  "end": 164
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 166,
                "end": 168
              },
              "expression": false,
              "start": 154,
              "end": 168
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 168
          }
        ],
        "start": 78,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 179
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 198
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    },
                    "start": 200,
                    "end": 208
                  },
                  "start": 199,
                  "end": 208
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 210,
                "end": 212
              },
              "expression": false,
              "start": 198,
              "end": 212
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 212
          }
        ],
        "start": 180,
        "end": 214
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
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
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 281
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
                            },
                            "start": 284,
                            "end": 292
                          },
                          "start": 283,
                          "end": 292
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 294,
                        "end": 296
                      },
                      "expression": false,
                      "start": 282,
                      "end": 296
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null,
                    "start": 269,
                    "end": 296
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fooo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 314
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 319,
                              "end": 325
                            },
                            "start": 317,
                            "end": 325
                          },
                          "start": 316,
                          "end": 325
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 327,
                        "end": 329
                      },
                      "expression": false,
                      "start": 315,
                      "end": 329
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 310,
                    "end": 329
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 355
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 359,
                              "end": 365
                            },
                            "start": 357,
                            "end": 365
                          },
                          "start": 356,
                          "end": 365
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 367,
                        "end": 369
                      },
                      "expression": false,
                      "start": 355,
                      "end": 369
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null,
                    "start": 343,
                    "end": 369
                  }
                ],
                "start": 259,
                "end": 375
              },
              "abstract": false,
              "declare": false,
              "start": 243,
              "end": 375
            },
            "start": 236,
            "end": 375
          }
        ],
        "start": 230,
        "end": 377
      },
      "expression": false,
      "start": 216,
      "end": 377
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 386
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 411
              },
              "value": {
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
                  "start": 415,
                  "end": 418
                },
                "expression": false,
                "start": 412,
                "end": 418
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 408,
              "end": 418
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 426
              },
              "value": {
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
                  "start": 430,
                  "end": 433
                },
                "expression": false,
                "start": 427,
                "end": 433
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 423,
              "end": 433
            }
          ],
          "start": 402,
          "end": 435
        },
        "abstract": false,
        "declare": false,
        "start": 396,
        "end": 435
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 455
            },
            "value": {
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
                "start": 459,
                "end": 462
              },
              "expression": false,
              "start": 456,
              "end": 462
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 443,
            "end": 462
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 470
            },
            "value": {
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
                "start": 474,
                "end": 477
              },
              "expression": false,
              "start": 471,
              "end": 477
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 467,
            "end": 477
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "value": {
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
                "start": 489,
                "end": 491
              },
              "expression": false,
              "start": 486,
              "end": 491
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 483,
            "end": 491
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bazz",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 510
            },
            "value": {
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
                "start": 514,
                "end": 516
              },
              "expression": false,
              "start": 511,
              "end": 516
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 497,
            "end": 516
          }
        ],
        "start": 437,
        "end": 518
      },
      "abstract": false,
      "declare": false,
      "start": 379,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 531
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
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 576
                    },
                    "value": {
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
                        "start": 580,
                        "end": 582
                      },
                      "expression": false,
                      "start": 577,
                      "end": 582
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null,
                    "start": 564,
                    "end": 582
                  }
                ],
                "start": 554,
                "end": 588
              },
              "abstract": false,
              "declare": false,
              "start": 548,
              "end": 588
            },
            "start": 541,
            "end": 588
          }
        ],
        "start": 535,
        "end": 590
      },
      "expression": false,
      "start": 520,
      "end": 590
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 590
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "fooo",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 68,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
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
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "fooo",
    "start": 117,
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
    "value": "v",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 186,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
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
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 216,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 236,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 243,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 269,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 278,
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
    "value": "v",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "fooo",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 343,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
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
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 497,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "bazz",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 520,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 541,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 564,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  }
]
```

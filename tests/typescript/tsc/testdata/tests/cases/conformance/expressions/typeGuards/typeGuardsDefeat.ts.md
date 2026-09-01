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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 141
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 145,
                  "end": 151
                },
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                }
              ],
              "start": 145,
              "end": 160
            },
            "start": 143,
            "end": 160
          },
          "start": 142,
          "end": 160
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 192
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 195,
                      "end": 197
                    },
                    "start": 191,
                    "end": 197
                  },
                  "directive": null,
                  "start": 191,
                  "end": 198
                }
              ],
              "start": 181,
              "end": 204
            },
            "expression": false,
            "start": 168,
            "end": 204
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "prefix": true,
                "start": 213,
                "end": 221
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 226,
                "end": 234
              },
              "start": 213,
              "end": 234
            },
            "consequent": {
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
                      "start": 246,
                      "end": 247
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 246,
                    "end": 249
                  },
                  "directive": null,
                  "start": 246,
                  "end": 250
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 274
                    },
                    "optional": false,
                    "computed": false,
                    "start": 266,
                    "end": 274
                  },
                  "start": 259,
                  "end": 275
                }
              ],
              "start": 236,
              "end": 291
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "start": 318,
                    "end": 321
                  },
                  "start": 311,
                  "end": 322
                }
              ],
              "start": 301,
              "end": 338
            },
            "start": 209,
            "end": 338
          }
        ],
        "start": 162,
        "end": 340
      },
      "expression": false,
      "start": 129,
      "end": 340
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 358,
                  "end": 364
                },
                {
                  "type": "TSStringKeyword",
                  "start": 367,
                  "end": 373
                }
              ],
              "start": 358,
              "end": 373
            },
            "start": 356,
            "end": 373
          },
          "start": 355,
          "end": 373
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "prefix": true,
                "start": 385,
                "end": 393
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 398,
                "end": 406
              },
              "start": 385,
              "end": 406
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 426
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 433
                    },
                    "optional": false,
                    "computed": false,
                    "start": 425,
                    "end": 433
                  },
                  "start": 418,
                  "end": 434
                }
              ],
              "start": 408,
              "end": 450
            },
            "alternate": {
              "type": "BlockStatement",
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 475
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 511,
                                  "end": 512
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 515,
                                  "end": 516
                                },
                                "start": 511,
                                "end": 516
                              },
                              "start": 504,
                              "end": 517
                            }
                          ],
                          "start": 490,
                          "end": 527
                        },
                        "expression": false,
                        "start": 478,
                        "end": 527
                      },
                      "definite": false,
                      "start": 474,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 470,
                  "end": 528
                }
              ],
              "start": 460,
              "end": 534
            },
            "start": 381,
            "end": 534
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 540
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 543,
                "end": 550
              },
              "start": 539,
              "end": 550
            },
            "directive": null,
            "start": 539,
            "end": 551
          },
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
                "start": 556,
                "end": 557
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 556,
              "end": 559
            },
            "directive": null,
            "start": 556,
            "end": 560
          }
        ],
        "start": 375,
        "end": 562
      },
      "expression": false,
      "start": 341,
      "end": 562
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 576
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 580,
                  "end": 586
                },
                {
                  "type": "TSStringKeyword",
                  "start": 589,
                  "end": 595
                }
              ],
              "start": 580,
              "end": 595
            },
            "start": 578,
            "end": 595
          },
          "start": 577,
          "end": 595
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 615
                },
                "prefix": true,
                "start": 607,
                "end": 615
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 620,
                "end": 628
              },
              "start": 607,
              "end": 628
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 655
                    },
                    "optional": false,
                    "computed": false,
                    "start": 647,
                    "end": 655
                  },
                  "start": 640,
                  "end": 656
                }
              ],
              "start": 630,
              "end": 672
            },
            "alternate": {
              "type": "BlockStatement",
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 697
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 707
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 711
                          },
                          "start": 706,
                          "end": 711
                        },
                        "id": null,
                        "generator": false,
                        "start": 700,
                        "end": 711
                      },
                      "definite": false,
                      "start": 696,
                      "end": 711
                    }
                  ],
                  "declare": false,
                  "start": 692,
                  "end": 712
                }
              ],
              "start": 682,
              "end": 718
            },
            "start": 603,
            "end": 718
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 727,
                "end": 734
              },
              "start": 723,
              "end": 734
            },
            "directive": null,
            "start": 723,
            "end": 735
          },
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
                "start": 740,
                "end": 741
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 740,
              "end": 743
            },
            "directive": null,
            "start": 740,
            "end": 744
          }
        ],
        "start": 597,
        "end": 746
      },
      "expression": false,
      "start": 563,
      "end": 746
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 129,
  "end": 746
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
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
    "value": "function",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
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
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 222,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 226,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 311,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 341,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 385,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 394,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 398,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 418,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 504,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 543,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 563,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 607,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 616,
    "end": 619
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 620,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 640,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 703,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 740,
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
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 27,
              "end": 32
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 32
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug2",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 163,
                  "end": 170
                },
                "start": 156,
                "end": 170
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 180,
                      "end": 183
                    },
                    "start": 180,
                    "end": 185
                  },
                  "start": 179,
                  "end": 185
                },
                "value": null,
                "start": 172,
                "end": 185
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 186,
              "end": 193
            },
            "body": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 210
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 219
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "replace",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 220,
                            "end": 227
                          },
                          "optional": false,
                          "computed": false,
                          "start": 212,
                          "end": 227
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "pattern": "\\{(\\d+)\\}",
                              "flags": "g"
                            },
                            "start": 228,
                            "end": 240
                          },
                          {
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
                                "name": "match",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 251,
                                "end": 256
                              },
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 261,
                                  "end": 265
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null,
                                "start": 258,
                                "end": 265
                              }
                            ],
                            "returnType": null,
                            "body": {
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
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 279,
                                        "end": 284
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 286,
                                          "end": 290
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 291,
                                          "end": 292
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 286,
                                        "end": 293
                                      },
                                      "definite": false,
                                      "start": 279,
                                      "end": 293
                                    }
                                  ],
                                  "declare": false,
                                  "start": 275,
                                  "end": 294
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 315,
                                            "end": 319
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 320,
                                            "end": 325
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 315,
                                          "end": 326
                                        },
                                        "prefix": true,
                                        "start": 308,
                                        "end": 326
                                      },
                                      "operator": "!==",
                                      "right": {
                                        "type": "Literal",
                                        "value": "undefined",
                                        "raw": "'undefined'",
                                        "start": 331,
                                        "end": 342
                                      },
                                      "start": 308,
                                      "end": 342
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 353,
                                        "end": 357
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 358,
                                        "end": 363
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 353,
                                      "end": 364
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 375,
                                      "end": 380
                                    },
                                    "start": 308,
                                    "end": 380
                                  },
                                  "start": 301,
                                  "end": 381
                                }
                              ],
                              "start": 267,
                              "end": 387
                            },
                            "expression": false,
                            "start": 242,
                            "end": 387
                          }
                        ],
                        "optional": false,
                        "start": 212,
                        "end": 388
                      },
                      "definite": false,
                      "start": 204,
                      "end": 388
                    }
                  ],
                  "declare": false,
                  "start": 200,
                  "end": 389
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 407
                  },
                  "start": 394,
                  "end": 408
                }
              ],
              "start": 194,
              "end": 412
            },
            "expression": false,
            "start": 142,
            "end": 412
          }
        ],
        "start": 15,
        "end": 414
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bug3",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 429
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSStringKeyword",
                      "start": 435,
                      "end": 441
                    },
                    "start": 434,
                    "end": 441
                  },
                  "start": 433,
                  "end": 441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 444,
                  "end": 450
                },
                "start": 442,
                "end": 450
              },
              "start": 432,
              "end": 450
            },
            "start": 431,
            "end": 450
          },
          "start": 430,
          "end": 450
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 462
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 463,
                  "end": 466
                }
              ],
              "optional": false,
              "start": 461,
              "end": 467
            },
            "start": 454,
            "end": 467
          }
        ],
        "start": 452,
        "end": 469
      },
      "expression": false,
      "start": 416,
      "end": 469
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fprime",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 486
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
              "type": "TSStringKeyword",
              "start": 489,
              "end": 495
            },
            "start": 488,
            "end": 495
          },
          "start": 487,
          "end": 495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 497,
          "end": 503
        },
        "start": 496,
        "end": 503
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "start": 506,
            "end": 515
          }
        ],
        "start": 504,
        "end": 517
      },
      "expression": false,
      "start": 471,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 523
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fprime",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 530
          }
        ],
        "optional": false,
        "start": 519,
        "end": 531
      },
      "directive": null,
      "start": 519,
      "end": 532
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 538
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 550,
                    "end": 556
                  },
                  "start": 549,
                  "end": 556
                },
                "start": 548,
                "end": 556
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 558,
                "end": 564
              },
              "start": 557,
              "end": 564
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "start": 567,
                  "end": 576
                }
              ],
              "start": 565,
              "end": 578
            },
            "expression": false,
            "start": 539,
            "end": 578
          }
        ],
        "optional": false,
        "start": 534,
        "end": 579
      },
      "directive": null,
      "start": 534,
      "end": 580
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 580
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Bugs",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "bug2",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "RegularExpression",
    "value": "/\\{(\\d+)\\}/g",
    "regex": {
      "flags": "g",
      "pattern": "\\{(\\d+)\\}"
    },
    "start": 228,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 242,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 308,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 327,
    "end": 330
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 331,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 394,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 416,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "bug3",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "fprime",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 506,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "bug3",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "fprime",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "bug3",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 567,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 579,
    "end": 580
  }
]
```

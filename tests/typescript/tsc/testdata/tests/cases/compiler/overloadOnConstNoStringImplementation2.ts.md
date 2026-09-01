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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  },
                  "start": 22,
                  "end": 30
                },
                "start": 21,
                "end": 30
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 46,
                              "end": 50
                            },
                            "start": 46,
                            "end": 50
                          },
                          "start": 44,
                          "end": 50
                        },
                        "start": 43,
                        "end": 50
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 52,
                      "end": 61
                    },
                    "start": 42,
                    "end": 61
                  },
                  "start": 40,
                  "end": 61
                },
                "start": 32,
                "end": 61
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
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
        "start": 73,
        "end": 74
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "typeArguments": null,
          "start": 86,
          "end": 87
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 100,
                      "end": 106
                    },
                    "start": 98,
                    "end": 106
                  },
                  "start": 97,
                  "end": 106
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "hi",
                                "raw": "'hi'",
                                "start": 122,
                                "end": 126
                              },
                              "start": 122,
                              "end": 126
                            },
                            "start": 120,
                            "end": 126
                          },
                          "start": 119,
                          "end": 126
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 131,
                          "end": 137
                        },
                        "start": 128,
                        "end": 137
                      },
                      "start": 118,
                      "end": 137
                    },
                    "start": 116,
                    "end": 137
                  },
                  "start": 108,
                  "end": 137
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 96,
              "end": 139
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 94,
            "end": 139
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 146
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            },
                            "start": 170,
                            "end": 175
                          },
                          "start": 169,
                          "end": 175
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 180,
                          "end": 186
                        },
                        "start": 177,
                        "end": 186
                      },
                      "start": 168,
                      "end": 186
                    },
                    "start": 166,
                    "end": 186
                  },
                  "start": 158,
                  "end": 186
                }
              ],
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
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 206
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "'hi'",
                          "start": 207,
                          "end": 211
                        }
                      ],
                      "optional": false,
                      "start": 198,
                      "end": 212
                    },
                    "directive": null,
                    "start": 198,
                    "end": 213
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 230
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "bye",
                          "raw": "'bye'",
                          "start": 231,
                          "end": 236
                        }
                      ],
                      "optional": false,
                      "start": 222,
                      "end": 237
                    },
                    "directive": null,
                    "start": 222,
                    "end": 238
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
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 253
                        },
                        "init": {
                          "type": "Literal",
                          "value": "hm",
                          "raw": "\"hm\"",
                          "start": 256,
                          "end": 260
                        },
                        "definite": false,
                        "start": 251,
                        "end": 260
                      }
                    ],
                    "declare": false,
                    "start": 247,
                    "end": 261
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 278
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 281
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 282
                    },
                    "directive": null,
                    "start": 270,
                    "end": 283
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 300
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 301,
                          "end": 302
                        }
                      ],
                      "optional": false,
                      "start": 292,
                      "end": 303
                    },
                    "directive": null,
                    "start": 292,
                    "end": 304
                  }
                ],
                "start": 188,
                "end": 310
              },
              "expression": false,
              "start": 146,
              "end": 310
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 144,
            "end": 310
          }
        ],
        "start": 88,
        "end": 312
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 312
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "typeArguments": null,
                "start": 329,
                "end": 330
              },
              "start": 327,
              "end": 330
            },
            "start": 326,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 330
        }
      ],
      "declare": true,
      "start": 314,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 336
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 336
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 337,
            "end": 338
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 344,
                      "end": 348
                    },
                    "start": 344,
                    "end": 348
                  },
                  "start": 342,
                  "end": 348
                },
                "start": 341,
                "end": 348
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 362,
                    "end": 363
                  },
                  "start": 355,
                  "end": 364
                }
              ],
              "start": 353,
              "end": 366
            },
            "id": null,
            "generator": false,
            "start": 340,
            "end": 366
          }
        ],
        "optional": false,
        "start": 332,
        "end": 368
      },
      "directive": null,
      "start": 332,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 371
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "optional": false,
          "computed": false,
          "start": 370,
          "end": 374
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 375,
            "end": 376
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bye",
                      "raw": "'bye'",
                      "start": 382,
                      "end": 387
                    },
                    "start": 382,
                    "end": 387
                  },
                  "start": 380,
                  "end": 387
                },
                "start": 379,
                "end": 387
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 401,
                    "end": 402
                  },
                  "start": 394,
                  "end": 403
                }
              ],
              "start": 392,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 378,
            "end": 405
          }
        ],
        "optional": false,
        "start": 370,
        "end": 407
      },
      "directive": null,
      "start": 370,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 414
          },
          "optional": false,
          "computed": false,
          "start": 410,
          "end": 414
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 415,
            "end": 416
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 422,
                    "end": 428
                  },
                  "start": 420,
                  "end": 428
                },
                "start": 419,
                "end": 428
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 442,
                    "end": 443
                  },
                  "start": 435,
                  "end": 444
                }
              ],
              "start": 433,
              "end": 446
            },
            "id": null,
            "generator": false,
            "start": 418,
            "end": 446
          }
        ],
        "optional": false,
        "start": 410,
        "end": 448
      },
      "directive": null,
      "start": 410,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 454
          },
          "optional": false,
          "computed": false,
          "start": 450,
          "end": 454
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 455,
            "end": 456
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 462,
                    "end": 468
                  },
                  "start": 460,
                  "end": 468
                },
                "start": 459,
                "end": 468
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 482,
                    "end": 483
                  },
                  "start": 475,
                  "end": 484
                }
              ],
              "start": 473,
              "end": 486
            },
            "id": null,
            "generator": false,
            "start": 458,
            "end": 486
          }
        ],
        "optional": false,
        "start": 450,
        "end": 488
      },
      "directive": null,
      "start": 450,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 489
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
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
    "value": "x",
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
    "type": "String",
    "value": "'hi'",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 75,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Identifier",
    "value": "x1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 180,
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
    "type": "Identifier",
    "value": "callback",
    "start": 198,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 222,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "String",
    "value": "'bye'",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "hm",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"hm\"",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "hm",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 314,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 355,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "'bye'",
    "start": 382,
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
    "value": "=>",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 394,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 422,
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
    "value": "=>",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 435,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 475,
    "end": 481
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  }
]
```

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
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
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
                "start": 38,
                "end": 40
              },
              "expression": false,
              "start": 35,
              "end": 40
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 18,
            "end": 40
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 63
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
                          "name": "Test1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 81
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 84
                        },
                        "optional": false,
                        "computed": false,
                        "start": 76,
                        "end": 84
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 76,
                      "end": 86
                    },
                    "directive": null,
                    "start": 76,
                    "end": 87
                  }
                ],
                "start": 66,
                "end": 93
              },
              "expression": false,
              "start": 63,
              "end": 93
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 45,
            "end": 93
          }
        ],
        "start": 12,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 108
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 132
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 135,
              "end": 136
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 115,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 177
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      },
                      "optional": false,
                      "computed": false,
                      "start": 172,
                      "end": 180
                    },
                    "directive": null,
                    "start": 172,
                    "end": 181
                  }
                ],
                "start": 162,
                "end": 187
              },
              "expression": false,
              "start": 159,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 141,
            "end": 187
          }
        ],
        "start": 109,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 97,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 202
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 226
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 229,
              "end": 230
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 209,
            "end": 231
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 253
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
                "start": 256,
                "end": 258
              },
              "expression": false,
              "start": 253,
              "end": 258
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 236,
            "end": 258
          }
        ],
        "start": 203,
        "end": 260
      },
      "abstract": false,
      "declare": false,
      "start": 191,
      "end": 260
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 273
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 297
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 301,
                      "end": 307
                    },
                    "start": 299,
                    "end": 307
                  },
                  "start": 298,
                  "end": 307
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 310,
                  "end": 316
                },
                "start": 308,
                "end": 316
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 336
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 341,
                          "end": 342
                        },
                        "start": 335,
                        "end": 342
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 346,
                        "end": 347
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 351,
                          "end": 352
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Test4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 355,
                              "end": 360
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 361,
                              "end": 363
                            },
                            "optional": false,
                            "computed": false,
                            "start": 355,
                            "end": 363
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 364,
                                "end": 365
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 368,
                                "end": 369
                              },
                              "start": 364,
                              "end": 369
                            }
                          ],
                          "optional": false,
                          "start": 355,
                          "end": 370
                        },
                        "start": 351,
                        "end": 370
                      },
                      "start": 334,
                      "end": 371
                    },
                    "start": 327,
                    "end": 372
                  }
                ],
                "start": 317,
                "end": 378
              },
              "expression": false,
              "start": 297,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 280,
            "end": 378
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 401
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    },
                    "start": 403,
                    "end": 411
                  },
                  "start": 402,
                  "end": 411
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 414,
                  "end": 420
                },
                "start": 412,
                "end": 420
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 440
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 445,
                          "end": 446
                        },
                        "start": 439,
                        "end": 446
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 450,
                        "end": 451
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 456
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Test4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 464
                            },
                            "property": {
                              "type": "Literal",
                              "value": "m2",
                              "raw": "\"m2\"",
                              "start": 465,
                              "end": 469
                            },
                            "optional": false,
                            "computed": true,
                            "start": 459,
                            "end": 470
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 472
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 475,
                                "end": 476
                              },
                              "start": 471,
                              "end": 476
                            }
                          ],
                          "optional": false,
                          "start": 459,
                          "end": 477
                        },
                        "start": 455,
                        "end": 477
                      },
                      "start": 438,
                      "end": 478
                    },
                    "start": 431,
                    "end": 479
                  }
                ],
                "start": 421,
                "end": 485
              },
              "expression": false,
              "start": 401,
              "end": 485
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 384,
            "end": 485
          }
        ],
        "start": 274,
        "end": 487
      },
      "abstract": false,
      "declare": false,
      "start": 262,
      "end": 487
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 500
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 524
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
                "start": 527,
                "end": 529
              },
              "expression": false,
              "start": 524,
              "end": 529
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 507,
            "end": 529
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
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
                          "name": "Test5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 570
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 571,
                          "end": 575
                        },
                        "optional": false,
                        "computed": true,
                        "start": 565,
                        "end": 576
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 565,
                      "end": 578
                    },
                    "directive": null,
                    "start": 565,
                    "end": 579
                  }
                ],
                "start": 555,
                "end": 585
              },
              "expression": false,
              "start": 552,
              "end": 585
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 534,
            "end": 585
          }
        ],
        "start": 501,
        "end": 587
      },
      "abstract": false,
      "declare": false,
      "start": 489,
      "end": 587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 624
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 627,
              "end": 628
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 607,
            "end": 629
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 652
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 670
                      },
                      "property": {
                        "type": "Literal",
                        "value": "p1",
                        "raw": "\"p1\"",
                        "start": 671,
                        "end": 675
                      },
                      "optional": false,
                      "computed": true,
                      "start": 665,
                      "end": 676
                    },
                    "directive": null,
                    "start": 665,
                    "end": 677
                  }
                ],
                "start": 655,
                "end": 683
              },
              "expression": false,
              "start": 652,
              "end": 683
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 634,
            "end": 683
          }
        ],
        "start": 601,
        "end": 685
      },
      "abstract": false,
      "declare": false,
      "start": 589,
      "end": 685
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 685
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
    "value": "Test1",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 18,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 45,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 103,
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
    "value": "private",
    "start": 115,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 141,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
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
    "type": "Identifier",
    "value": "Test2",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 209,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 217,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 236,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 244,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 280,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 288,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 337,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 344,
    "end": 345
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 366,
    "end": 367
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 384,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 392,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 441,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 464,
    "end": 465
  },
  {
    "type": "String",
    "value": "\"m2\"",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 489,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 495,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 507,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 534,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 541,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
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
    "type": "Identifier",
    "value": "Test5",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 570,
    "end": 571
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 589,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Test6",
    "start": 595,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 607,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 615,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 634,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 641,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 648,
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
    "type": "Identifier",
    "value": "Test6",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 670,
    "end": 671
  },
  {
    "type": "String",
    "value": "\"p1\"",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  }
]
```

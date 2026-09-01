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
        "name": "A",
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 21,
              "end": 25
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
                      "start": 29,
                      "end": 35
                    },
                    "start": 27,
                    "end": 35
                  },
                  "start": 26,
                  "end": 35
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 37,
                "end": 39
              },
              "expression": false,
              "start": 25,
              "end": 39
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 57,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
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
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 62,
                  "end": 71
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 73,
                "end": 75
              },
              "expression": false,
              "start": 61,
              "end": 75
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 94,
              "end": 98
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
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
                      "start": 102,
                      "end": 108
                    },
                    "start": 100,
                    "end": 108
                  },
                  "start": 99,
                  "end": 108
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
                      "value": 3,
                      "raw": "3",
                      "start": 127,
                      "end": 128
                    },
                    "start": 120,
                    "end": 129
                  }
                ],
                "start": 110,
                "end": 135
              },
              "expression": false,
              "start": 98,
              "end": 135
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 135
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "_quux",
              "start": 147,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 178,
              "end": 183
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 188,
                  "end": 194
                },
                "start": 186,
                "end": 194
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "_quux",
                        "start": 217,
                        "end": 223
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 223
                    },
                    "start": 205,
                    "end": 224
                  }
                ],
                "start": 195,
                "end": 230
              },
              "expression": false,
              "start": 184,
              "end": 230
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 230
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 246,
              "end": 251
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    },
                    "start": 256,
                    "end": 264
                  },
                  "start": 253,
                  "end": 264
                }
              ],
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 276,
                          "end": 280
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "_quux",
                          "start": 281,
                          "end": 287
                        },
                        "optional": false,
                        "computed": false,
                        "start": 276,
                        "end": 287
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 293
                      },
                      "start": 276,
                      "end": 293
                    },
                    "directive": null,
                    "start": 276,
                    "end": 294
                  }
                ],
                "start": 266,
                "end": 300
              },
              "expression": false,
              "start": 252,
              "end": 300
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 235,
            "end": 300
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 316
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 331
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 332,
                          "end": 336
                        },
                        "optional": false,
                        "computed": false,
                        "start": 330,
                        "end": 336
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 337,
                          "end": 339
                        }
                      ],
                      "optional": false,
                      "start": 330,
                      "end": 340
                    },
                    "directive": null,
                    "start": 330,
                    "end": 341
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 351
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 352,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 350,
                        "end": 356
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 357,
                          "end": 359
                        }
                      ],
                      "optional": false,
                      "start": 350,
                      "end": 360
                    },
                    "directive": null,
                    "start": 350,
                    "end": 361
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 371
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 372,
                          "end": 376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 370,
                        "end": 376
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 377,
                          "end": 379
                        }
                      ],
                      "optional": false,
                      "start": 370,
                      "end": 380
                    },
                    "directive": null,
                    "start": 370,
                    "end": 381
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 392,
                          "end": 397
                        },
                        "optional": false,
                        "computed": false,
                        "start": 390,
                        "end": 397
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 400,
                            "end": 401
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "quux",
                            "start": 402,
                            "end": 407
                          },
                          "optional": false,
                          "computed": false,
                          "start": 400,
                          "end": 407
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 410,
                          "end": 411
                        },
                        "start": 400,
                        "end": 411
                      },
                      "start": 390,
                      "end": 411
                    },
                    "directive": null,
                    "start": 390,
                    "end": 412
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 422
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 423,
                          "end": 428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 428
                      },
                      "start": 421,
                      "end": 430
                    },
                    "directive": null,
                    "start": 421,
                    "end": 431
                  }
                ],
                "start": 320,
                "end": 434
              },
              "expression": false,
              "start": 317,
              "end": 434
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 305,
            "end": 434
          }
        ],
        "start": 8,
        "end": 436
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 436
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 445
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 455
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 469,
              "end": 473
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
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    },
                    "start": 475,
                    "end": 483
                  },
                  "start": 474,
                  "end": 483
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 485,
                "end": 487
              },
              "expression": false,
              "start": 473,
              "end": 487
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 462,
            "end": 487
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 503
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
                        "type": "Super",
                        "start": 517,
                        "end": 522
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 517,
                      "end": 524
                    },
                    "directive": null,
                    "start": 517,
                    "end": 525
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
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 536,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 534,
                        "end": 540
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 541,
                          "end": 546
                        }
                      ],
                      "optional": false,
                      "start": 534,
                      "end": 547
                    },
                    "directive": null,
                    "start": 534,
                    "end": 548
                  }
                ],
                "start": 507,
                "end": 554
              },
              "expression": false,
              "start": 504,
              "end": 554
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 492,
            "end": 554
          }
        ],
        "start": 456,
        "end": 556
      },
      "abstract": false,
      "declare": false,
      "start": 438,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 556
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
    "value": "A",
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
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 51,
    "end": 56
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 80,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 93,
    "end": 94
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 120,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 140,
    "end": 146
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 167,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 174,
    "end": 177
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 178,
    "end": 183
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
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 205,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 242,
    "end": 245
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 305,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 332,
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
    "value": "30",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 408,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 428,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 462,
    "end": 468
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 492,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 517,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  }
]
```

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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 27,
                      "end": 31
                    }
                  ],
                  "start": 18,
                  "end": 31
                },
                "start": 16,
                "end": 31
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 46,
                            "end": 50
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 51,
                            "end": 57
                          },
                          "optional": false,
                          "computed": false,
                          "start": 46,
                          "end": 57
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 46,
                        "end": 59
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 62,
                        "end": 65
                      },
                      "start": 46,
                      "end": 65
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 88,
                            "end": 90
                          },
                          "start": 81,
                          "end": 91
                        }
                      ],
                      "start": 67,
                      "end": 101
                    },
                    "alternate": null,
                    "start": 42,
                    "end": 101
                  }
                ],
                "start": 32,
                "end": 150
              },
              "expression": false,
              "start": 14,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 150
          }
        ],
        "start": 8,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 152
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
        "start": 159,
        "end": 160
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 185,
                      "end": 189
                    }
                  ],
                  "start": 176,
                  "end": 189
                },
                "start": 174,
                "end": 189
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 208
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 215
                          },
                          "optional": false,
                          "computed": false,
                          "start": 204,
                          "end": 215
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 204,
                        "end": 217
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 220,
                        "end": 223
                      },
                      "start": 204,
                      "end": 223
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 246,
                            "end": 248
                          },
                          "start": 239,
                          "end": 249
                        }
                      ],
                      "start": 225,
                      "end": 259
                    },
                    "alternate": null,
                    "start": 200,
                    "end": 259
                  }
                ],
                "start": 190,
                "end": 327
              },
              "expression": false,
              "start": 172,
              "end": 327
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 327
          }
        ],
        "start": 161,
        "end": 329
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 329
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
        "start": 336,
        "end": 337
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 370
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 371,
                            "end": 377
                          },
                          "optional": false,
                          "computed": false,
                          "start": 366,
                          "end": 377
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 366,
                        "end": 379
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 382,
                        "end": 385
                      },
                      "start": 366,
                      "end": 385
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 408,
                            "end": 409
                          },
                          "start": 401,
                          "end": 410
                        }
                      ],
                      "start": 387,
                      "end": 420
                    },
                    "alternate": null,
                    "start": 362,
                    "end": 420
                  }
                ],
                "start": 352,
                "end": 488
              },
              "expression": false,
              "start": 349,
              "end": 488
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 488
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 507,
                      "end": 513
                    },
                    "start": 505,
                    "end": 513
                  },
                  "start": 500,
                  "end": 513
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 515,
                "end": 522
              },
              "expression": false,
              "start": 499,
              "end": 522
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 494,
            "end": 522
          }
        ],
        "start": 338,
        "end": 524
      },
      "abstract": false,
      "declare": false,
      "start": 330,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
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
    "type": "Identifier",
    "value": "a",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Null",
    "value": "null",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 62,
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
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 81,
    "end": 87
  },
  {
    "type": "String",
    "value": "''",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 183,
    "end": 184
  },
  {
    "type": "Null",
    "value": "null",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 239,
    "end": 245
  },
  {
    "type": "String",
    "value": "''",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 401,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  }
]
```

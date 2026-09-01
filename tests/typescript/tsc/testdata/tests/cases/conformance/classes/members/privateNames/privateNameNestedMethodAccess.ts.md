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
        "name": "C",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 21,
              "end": 23
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 24
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 29,
              "end": 33
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
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 43
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 38,
                        "end": 45
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 46,
                        "end": 50
                      },
                      "optional": false,
                      "computed": false,
                      "start": 38,
                      "end": 50
                    },
                    "directive": null,
                    "start": 38,
                    "end": 51
                  }
                ],
                "start": 36,
                "end": 53
              },
              "expression": false,
              "start": 33,
              "end": 53
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 62,
              "end": 66
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 78,
                      "end": 80
                    },
                    "start": 71,
                    "end": 81
                  }
                ],
                "start": 69,
                "end": 83
              },
              "expression": false,
              "start": 66,
              "end": 83
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 83
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
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
                              "name": "bar",
                              "start": 132,
                              "end": 136
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
                                "start": 139,
                                "end": 141
                              },
                              "expression": false,
                              "start": 136,
                              "end": 141
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 132,
                            "end": 141
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
                              "start": 154,
                              "end": 165
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
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 190,
                                          "end": 191
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 186,
                                        "end": 193
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 194,
                                        "end": 198
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 186,
                                      "end": 198
                                    },
                                    "directive": null,
                                    "start": 186,
                                    "end": 199
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 220,
                                          "end": 221
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 216,
                                        "end": 223
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 224,
                                        "end": 228
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 216,
                                      "end": 228
                                    },
                                    "directive": null,
                                    "start": 216,
                                    "end": 229
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 259,
                                          "end": 260
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 255,
                                        "end": 262
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "baz",
                                        "start": 263,
                                        "end": 267
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 255,
                                      "end": 267
                                    },
                                    "directive": null,
                                    "start": 255,
                                    "end": 268
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "D",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 289,
                                          "end": 290
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 285,
                                        "end": 292
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 293,
                                        "end": 297
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 285,
                                      "end": 297
                                    },
                                    "directive": null,
                                    "start": 285,
                                    "end": 298
                                  }
                                ],
                                "start": 168,
                                "end": 312
                              },
                              "expression": false,
                              "start": 165,
                              "end": 312
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 154,
                            "end": 312
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 326,
                              "end": 327
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 331,
                                      "end": 334
                                    },
                                    "start": 329,
                                    "end": 334
                                  },
                                  "start": 328,
                                  "end": 334
                                }
                              ],
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 354,
                                        "end": 355
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 356,
                                        "end": 360
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 354,
                                      "end": 360
                                    },
                                    "directive": null,
                                    "start": 354,
                                    "end": 361
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 378,
                                        "end": 379
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 380,
                                        "end": 384
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 378,
                                      "end": 384
                                    },
                                    "directive": null,
                                    "start": 378,
                                    "end": 385
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 402,
                                        "end": 403
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "unknown",
                                        "start": 404,
                                        "end": 412
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 402,
                                      "end": 412
                                    },
                                    "directive": null,
                                    "start": 402,
                                    "end": 413
                                  }
                                ],
                                "start": 336,
                                "end": 436
                              },
                              "expression": false,
                              "start": 327,
                              "end": 436
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 326,
                            "end": 436
                          }
                        ],
                        "start": 118,
                        "end": 446
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 110,
                      "end": 446
                    },
                    "start": 103,
                    "end": 446
                  }
                ],
                "start": 93,
                "end": 452
              },
              "expression": false,
              "start": 90,
              "end": 452
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 452
          }
        ],
        "start": 8,
        "end": 454
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
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
    "value": "C",
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
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
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
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 58,
    "end": 61
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 71,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
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
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 154,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 356,
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
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "PrivateIdentifier",
    "value": "unknown",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  }
]
```

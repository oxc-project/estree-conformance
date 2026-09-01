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
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          }
        ],
        "start": 8,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 28
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
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
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
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 82
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 91,
                    "end": 96
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 98
                  },
                  "optional": false,
                  "computed": false,
                  "start": 91,
                  "end": 98
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 101,
                  "end": 102
                },
                "start": 91,
                "end": 102
              },
              "id": null,
              "generator": false,
              "start": 85,
              "end": 102
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 54,
            "end": 103
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 135
            },
            "typeAnnotation": null,
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 159,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 166
                        },
                        "optional": false,
                        "computed": false,
                        "start": 159,
                        "end": 166
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 169,
                        "end": 170
                      },
                      "start": 159,
                      "end": 170
                    },
                    "start": 152,
                    "end": 170
                  }
                ],
                "start": 150,
                "end": 172
              },
              "expression": false,
              "start": 138,
              "end": 172
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 173
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 202
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 217,
                          "end": 222
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 224
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 224
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 227,
                        "end": 228
                      },
                      "start": 217,
                      "end": 228
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 213,
                    "end": 228
                  }
                ],
                "start": 211,
                "end": 230
              },
              "abstract": false,
              "declare": false,
              "start": 205,
              "end": 230
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 231
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 271
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 303
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
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 328,
                                  "end": 333
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 334,
                                  "end": 335
                                },
                                "optional": false,
                                "computed": false,
                                "start": 328,
                                "end": 335
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 338,
                                "end": 339
                              },
                              "start": 328,
                              "end": 339
                            },
                            "start": 321,
                            "end": 339
                          }
                        ],
                        "start": 307,
                        "end": 349
                      },
                      "expression": false,
                      "start": 291,
                      "end": 349
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
                        "start": 364,
                        "end": 365
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 381
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 384,
                                  "end": 389
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 390,
                                  "end": 391
                                },
                                "optional": false,
                                "computed": false,
                                "start": 384,
                                "end": 391
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 394,
                                "end": 395
                              },
                              "start": 384,
                              "end": 395
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 380,
                            "end": 395
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 408,
                              "end": 414
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
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Super",
                                          "start": 443,
                                          "end": 448
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 449,
                                          "end": 450
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 443,
                                        "end": 450
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6",
                                        "start": 452,
                                        "end": 453
                                      },
                                      "start": 443,
                                      "end": 453
                                    },
                                    "start": 436,
                                    "end": 453
                                  }
                                ],
                                "start": 418,
                                "end": 467
                              },
                              "expression": false,
                              "start": 415,
                              "end": 467
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 408,
                            "end": 467
                          }
                        ],
                        "start": 366,
                        "end": 477
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 358,
                      "end": 477
                    }
                  ],
                  "start": 281,
                  "end": 483
                },
                "id": null,
                "generator": false,
                "start": 275,
                "end": 483
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 274,
              "end": 486
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 236,
            "end": 487
          }
        ],
        "start": 48,
        "end": 489
      },
      "abstract": false,
      "declare": false,
      "start": 30,
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
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 38,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "arrowFunctionBoundary",
    "start": 61,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "functionExprBoundary",
    "start": 115,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 152,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 167,
    "end": 168
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "classExprBoundary",
    "start": 185,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "static",
    "start": 236,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "functionAndClassDeclBoundary",
    "start": 243,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 291,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 321,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 328,
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
    "value": "f",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 392,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 436,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
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
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  }
]
```

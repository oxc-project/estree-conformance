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
            "end": 27
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 60
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
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 75
                  },
                  "optional": false,
                  "computed": false,
                  "start": 69,
                  "end": 75
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 78,
                  "end": 79
                },
                "start": 69,
                "end": 79
              },
              "id": null,
              "generator": false,
              "start": 63,
              "end": 79
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 32,
            "end": 80
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
              "start": 92,
              "end": 112
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
                          "type": "ThisExpression",
                          "start": 136,
                          "end": 140
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 136,
                        "end": 142
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 145,
                        "end": 146
                      },
                      "start": 136,
                      "end": 146
                    },
                    "start": 129,
                    "end": 146
                  }
                ],
                "start": 127,
                "end": 148
              },
              "expression": false,
              "start": 115,
              "end": 148
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 85,
            "end": 149
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
              "start": 161,
              "end": 178
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
                      "start": 189,
                      "end": 190
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 193,
                          "end": 197
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "optional": false,
                        "computed": false,
                        "start": 193,
                        "end": 199
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 202,
                        "end": 203
                      },
                      "start": 193,
                      "end": 203
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 189,
                    "end": 203
                  }
                ],
                "start": 187,
                "end": 205
              },
              "abstract": false,
              "declare": false,
              "start": 181,
              "end": 205
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 154,
            "end": 206
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
              "start": 218,
              "end": 246
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
                        "start": 275,
                        "end": 278
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
                                  "type": "ThisExpression",
                                  "start": 303,
                                  "end": 307
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 308,
                                  "end": 309
                                },
                                "optional": false,
                                "computed": false,
                                "start": 303,
                                "end": 309
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 312,
                                "end": 313
                              },
                              "start": 303,
                              "end": 313
                            },
                            "start": 296,
                            "end": 313
                          }
                        ],
                        "start": 282,
                        "end": 323
                      },
                      "expression": false,
                      "start": 266,
                      "end": 323
                    },
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 340
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
                              "start": 355,
                              "end": 356
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 359,
                                  "end": 363
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 364,
                                  "end": 365
                                },
                                "optional": false,
                                "computed": false,
                                "start": 359,
                                "end": 365
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 368,
                                "end": 369
                              },
                              "start": 359,
                              "end": 369
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 355,
                            "end": 369
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
                              "start": 382,
                              "end": 388
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
                                          "type": "ThisExpression",
                                          "start": 417,
                                          "end": 421
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 422,
                                          "end": 423
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 417,
                                        "end": 423
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6",
                                        "start": 426,
                                        "end": 427
                                      },
                                      "start": 417,
                                      "end": 427
                                    },
                                    "start": 410,
                                    "end": 427
                                  }
                                ],
                                "start": 392,
                                "end": 441
                              },
                              "expression": false,
                              "start": 389,
                              "end": 441
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 382,
                            "end": 441
                          }
                        ],
                        "start": 341,
                        "end": 451
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 332,
                      "end": 451
                    }
                  ],
                  "start": 256,
                  "end": 457
                },
                "id": null,
                "generator": false,
                "start": 250,
                "end": 457
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 249,
              "end": 460
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 211,
            "end": 461
          }
        ],
        "start": 8,
        "end": 463
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 463
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 463
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
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 32,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "arrowFunctionBoundary",
    "start": 39,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
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
    "value": "=>",
    "start": 66,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "functionExprBoundary",
    "start": 92,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 154,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "classExprBoundary",
    "start": 161,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 211,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "functionAndClassDeclBoundary",
    "start": 218,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 296,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 366,
    "end": 367
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
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
    "start": 410,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  }
]
```

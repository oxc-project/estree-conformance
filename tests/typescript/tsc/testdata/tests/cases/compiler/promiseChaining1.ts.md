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
        "name": "Chain2",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 91
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    },
                    "start": 91,
                    "end": 99
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 85,
                  "end": 99
                }
              ],
              "start": 83,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 101
          }
        ],
        "start": 72,
        "end": 102
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 120
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 136
                        },
                        "typeArguments": null,
                        "start": 135,
                        "end": 136
                      },
                      "start": 133,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "readonly": false,
                  "static": false,
                  "start": 121,
                  "end": 136
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 138,
                "end": 141
              },
              "expression": false,
              "start": 120,
              "end": 141
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 109,
            "end": 141
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 169
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 151,
                    "end": 169
                  }
                ],
                "start": 150,
                "end": 170
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 179,
                                "end": 180
                              },
                              "typeArguments": null,
                              "start": 179,
                              "end": 180
                            },
                            "start": 177,
                            "end": 180
                          },
                          "start": 176,
                          "end": 180
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 185,
                          "end": 186
                        },
                        "start": 182,
                        "end": 186
                      },
                      "start": 175,
                      "end": 186
                    },
                    "start": 173,
                    "end": 186
                  },
                  "start": 171,
                  "end": 186
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 195
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 197
                        },
                        "typeArguments": null,
                        "start": 196,
                        "end": 197
                      }
                    ],
                    "start": 195,
                    "end": 198
                  },
                  "start": 189,
                  "end": 198
                },
                "start": 187,
                "end": 198
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
                          "start": 213,
                          "end": 219
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 224
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 225,
                                "end": 229
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 230,
                                "end": 235
                              },
                              "optional": false,
                              "computed": false,
                              "start": 225,
                              "end": 235
                            }
                          ],
                          "optional": false,
                          "start": 222,
                          "end": 236
                        },
                        "definite": false,
                        "start": 213,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 209,
                    "end": 237
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 317
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 320,
                                      "end": 324
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 325,
                                      "end": 329
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 320,
                                    "end": 329
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 330,
                                          "end": 331
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 335,
                                        "end": 341
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 330,
                                      "end": 341
                                    }
                                  ],
                                  "optional": false,
                                  "start": 320,
                                  "end": 342
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 348,
                                  "end": 352
                                },
                                "optional": false,
                                "computed": false,
                                "start": 320,
                                "end": 352
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 353,
                                      "end": 354
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 358,
                                    "end": 363
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 353,
                                  "end": 363
                                }
                              ],
                              "optional": false,
                              "start": 320,
                              "end": 364
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 381
                            },
                            "optional": false,
                            "computed": false,
                            "start": 320,
                            "end": 381
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 382,
                                  "end": 383
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 387,
                                  "end": 388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 389,
                                  "end": 395
                                },
                                "optional": false,
                                "computed": false,
                                "start": 387,
                                "end": 395
                              },
                              "id": null,
                              "generator": false,
                              "start": 382,
                              "end": 395
                            }
                          ],
                          "optional": false,
                          "start": 320,
                          "end": 396
                        },
                        "definite": false,
                        "start": 316,
                        "end": 396
                      }
                    ],
                    "declare": false,
                    "start": 312,
                    "end": 407
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 487
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 494
                        }
                      ],
                      "start": 477,
                      "end": 495
                    },
                    "start": 470,
                    "end": 496
                  }
                ],
                "start": 199,
                "end": 502
              },
              "expression": false,
              "start": 150,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 502
          }
        ],
        "start": 103,
        "end": 504
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 504
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 109,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 185,
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
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 355,
    "end": 357
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 470,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  }
]
```

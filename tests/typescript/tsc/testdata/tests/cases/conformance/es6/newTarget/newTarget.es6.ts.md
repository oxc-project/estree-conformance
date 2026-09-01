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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 44,
                          "end": 45
                        },
                        "init": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 48,
                            "end": 51
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 58
                          },
                          "start": 48,
                          "end": 58
                        },
                        "definite": false,
                        "start": 44,
                        "end": 58
                      }
                    ],
                    "declare": false,
                    "start": 38,
                    "end": 59
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 74,
                          "end": 75
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 87
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 94
                            },
                            "start": 84,
                            "end": 94
                          },
                          "id": null,
                          "generator": false,
                          "start": 78,
                          "end": 94
                        },
                        "definite": false,
                        "start": 74,
                        "end": 94
                      }
                    ],
                    "declare": false,
                    "start": 68,
                    "end": 95
                  }
                ],
                "start": 28,
                "end": 101
              },
              "expression": false,
              "start": 25,
              "end": 101
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 101
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 141
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 148
                      },
                      "start": 138,
                      "end": 148
                    },
                    "start": 131,
                    "end": 149
                  }
                ],
                "start": 129,
                "end": 151
              },
              "expression": false,
              "start": 117,
              "end": 151
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 106,
            "end": 151
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 184
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 191
                      },
                      "start": 181,
                      "end": 191
                    },
                    "start": 174,
                    "end": 192
                  }
                ],
                "start": 172,
                "end": 194
              },
              "expression": false,
              "start": 160,
              "end": 194
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 156,
            "end": 194
          }
        ],
        "start": 8,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 196
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
        "start": 204,
        "end": 205
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 215
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
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 233
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
                        "start": 246,
                        "end": 251
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 246,
                      "end": 253
                    },
                    "directive": null,
                    "start": 246,
                    "end": 254
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "init": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 273,
                            "end": 276
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 277,
                            "end": 283
                          },
                          "start": 273,
                          "end": 283
                        },
                        "definite": false,
                        "start": 269,
                        "end": 283
                      }
                    ],
                    "declare": false,
                    "start": 263,
                    "end": 284
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 300
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 312
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 313,
                              "end": 319
                            },
                            "start": 309,
                            "end": 319
                          },
                          "id": null,
                          "generator": false,
                          "start": 303,
                          "end": 319
                        },
                        "definite": false,
                        "start": 299,
                        "end": 319
                      }
                    ],
                    "declare": false,
                    "start": 293,
                    "end": 320
                  }
                ],
                "start": 236,
                "end": 326
              },
              "expression": false,
              "start": 233,
              "end": 326
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 326
          }
        ],
        "start": 216,
        "end": 328
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 328
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 341
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 357
                },
                "init": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 363
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 370
                  },
                  "start": 360,
                  "end": 370
                },
                "definite": false,
                "start": 356,
                "end": 370
              }
            ],
            "declare": false,
            "start": 350,
            "end": 371
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 383
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MetaProperty",
                    "meta": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "new",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 395
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "target",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 402
                    },
                    "start": 392,
                    "end": 402
                  },
                  "id": null,
                  "generator": false,
                  "start": 386,
                  "end": 402
                },
                "definite": false,
                "start": 382,
                "end": 402
              }
            ],
            "declare": false,
            "start": 376,
            "end": 403
          }
        ],
        "start": 344,
        "end": 405
      },
      "expression": false,
      "start": 330,
      "end": 405
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 415
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
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 442,
                        "end": 443
                      },
                      "init": {
                        "type": "MetaProperty",
                        "meta": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "new",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 449
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 456
                        },
                        "start": 446,
                        "end": 456
                      },
                      "definite": false,
                      "start": 442,
                      "end": 456
                    }
                  ],
                  "declare": false,
                  "start": 436,
                  "end": 457
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 468,
                        "end": 469
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 481
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 488
                          },
                          "start": 478,
                          "end": 488
                        },
                        "id": null,
                        "generator": false,
                        "start": 472,
                        "end": 488
                      },
                      "definite": false,
                      "start": 468,
                      "end": 488
                    }
                  ],
                  "declare": false,
                  "start": 462,
                  "end": 489
                }
              ],
              "start": 430,
              "end": 491
            },
            "expression": false,
            "start": 418,
            "end": 491
          },
          "definite": false,
          "start": 413,
          "end": 491
        }
      ],
      "declare": false,
      "start": 407,
      "end": 491
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 510
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
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 533,
                            "end": 536
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 543
                          },
                          "start": 533,
                          "end": 543
                        },
                        "start": 526,
                        "end": 544
                      }
                    ],
                    "start": 524,
                    "end": 546
                  },
                  "expression": false,
                  "start": 512,
                  "end": 546
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 509,
                "end": 546
              }
            ],
            "start": 503,
            "end": 548
          },
          "definite": false,
          "start": 499,
          "end": 548
        }
      ],
      "declare": false,
      "start": 493,
      "end": 549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
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
    "value": "constructor",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 174,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 206,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 222,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
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
    "type": "Keyword",
    "value": "super",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 306,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 330,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 360,
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
    "value": "target",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 389,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 396,
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
    "type": "Keyword",
    "value": "const",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
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
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 475,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 493,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 512,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 526,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  }
]
```

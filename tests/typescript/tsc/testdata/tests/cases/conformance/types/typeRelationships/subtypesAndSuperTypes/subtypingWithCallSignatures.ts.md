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
        "name": "CallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 51
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
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
                            "type": "TSNumberKeyword",
                            "start": 60,
                            "end": 66
                          },
                          "start": 58,
                          "end": 66
                        },
                        "start": 57,
                        "end": 66
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 71,
                        "end": 75
                      },
                      "start": 68,
                      "end": 75
                    },
                    "start": 56,
                    "end": 75
                  },
                  "start": 54,
                  "end": 75
                },
                "start": 52,
                "end": 75
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 87
                },
                "typeArguments": null,
                "start": 78,
                "end": 87
              },
              "start": 76,
              "end": 87
            },
            "body": null,
            "expression": false,
            "start": 30,
            "end": 88
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 114
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 119,
                    "end": 122
                  },
                  "start": 117,
                  "end": 122
                },
                "start": 115,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 125,
                "end": 128
              },
              "start": 123,
              "end": 128
            },
            "body": null,
            "expression": false,
            "start": 93,
            "end": 129
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 146
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 151,
                              "end": 157
                            },
                            "start": 149,
                            "end": 157
                          },
                          "start": 148,
                          "end": 157
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 162,
                        "end": 163
                      },
                      "id": null,
                      "generator": false,
                      "start": 147,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 142,
                  "end": 164
                },
                "definite": false,
                "start": 138,
                "end": 164
              }
            ],
            "declare": false,
            "start": 134,
            "end": 165
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 208
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 215
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 217,
                              "end": 218
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 217,
                            "end": 218
                          }
                        ],
                        "start": 216,
                        "end": 219
                      },
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
                                "start": 223,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 223,
                              "end": 224
                            },
                            "start": 221,
                            "end": 224
                          },
                          "start": 220,
                          "end": 224
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 229,
                        "end": 231
                      },
                      "id": null,
                      "generator": false,
                      "start": 216,
                      "end": 231
                    }
                  ],
                  "optional": false,
                  "start": 211,
                  "end": 232
                },
                "definite": false,
                "start": 206,
                "end": 232
              }
            ],
            "declare": false,
            "start": 202,
            "end": 233
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
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
                            "type": "TSNumberKeyword",
                            "start": 301,
                            "end": 307
                          },
                          "start": 299,
                          "end": 307
                        },
                        "start": 298,
                        "end": 307
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 312,
                            "end": 318
                          },
                          "start": 310,
                          "end": 318
                        },
                        "start": 309,
                        "end": 318
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 323,
                        "end": 327
                      },
                      "start": 320,
                      "end": 327
                    },
                    "start": 297,
                    "end": 327
                  },
                  "start": 295,
                  "end": 327
                },
                "start": 293,
                "end": 327
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 339
                },
                "typeArguments": null,
                "start": 330,
                "end": 339
              },
              "start": 328,
              "end": 339
            },
            "body": null,
            "expression": false,
            "start": 271,
            "end": 340
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 371,
                    "end": 374
                  },
                  "start": 369,
                  "end": 374
                },
                "start": 367,
                "end": 374
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 377,
                "end": 380
              },
              "start": 375,
              "end": 380
            },
            "body": null,
            "expression": false,
            "start": 345,
            "end": 381
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 392
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 399
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 404,
                              "end": 410
                            },
                            "start": 402,
                            "end": 410
                          },
                          "start": 401,
                          "end": 410
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 415,
                              "end": 421
                            },
                            "start": 413,
                            "end": 421
                          },
                          "start": 412,
                          "end": 421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 426,
                        "end": 427
                      },
                      "id": null,
                      "generator": false,
                      "start": 400,
                      "end": 427
                    }
                  ],
                  "optional": false,
                  "start": 395,
                  "end": 428
                },
                "definite": false,
                "start": 390,
                "end": 428
              }
            ],
            "declare": false,
            "start": 386,
            "end": 429
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 472
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 479
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 481,
                              "end": 482
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 481,
                            "end": 482
                          }
                        ],
                        "start": 480,
                        "end": 483
                      },
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
                                "start": 487,
                                "end": 488
                              },
                              "typeArguments": null,
                              "start": 487,
                              "end": 488
                            },
                            "start": 485,
                            "end": 488
                          },
                          "start": 484,
                          "end": 488
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 493,
                        "end": 495
                      },
                      "id": null,
                      "generator": false,
                      "start": 480,
                      "end": 495
                    }
                  ],
                  "optional": false,
                  "start": 475,
                  "end": 496
                },
                "definite": false,
                "start": 470,
                "end": 496
              }
            ],
            "declare": false,
            "start": 466,
            "end": 497
          }
        ],
        "start": 24,
        "end": 531
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 531
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 531
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
    "value": "CallSignature",
    "start": 10,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 93,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 211,
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
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 226,
    "end": 228
  },
  {
    "type": "String",
    "value": "''",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 312,
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
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 345,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 423,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 490,
    "end": 492
  },
  {
    "type": "String",
    "value": "''",
    "start": 493,
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
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 23,
                      "end": 29
                    },
                    "start": 21,
                    "end": 29
                  },
                  "start": 20,
                  "end": 29
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 34,
                  "end": 38
                },
                "start": 31,
                "end": 38
              },
              "start": 19,
              "end": 38
            },
            "start": 17,
            "end": 38
          },
          "start": 15,
          "end": 38
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
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "id": null,
                "generator": false,
                "start": 53,
                "end": 59
              },
              "start": 46,
              "end": 60
            },
            "directive": null,
            "start": 46,
            "end": 60
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 67,
                  "end": 69
                }
              ],
              "optional": false,
              "start": 65,
              "end": 70
            },
            "directive": null,
            "start": 65,
            "end": 70
          }
        ],
        "start": 40,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 97,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  "start": 94,
                  "end": 103
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 108,
                  "end": 112
                },
                "start": 105,
                "end": 112
              },
              "start": 93,
              "end": 112
            },
            "start": 91,
            "end": 112
          },
          "start": 89,
          "end": 112
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
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "id": null,
                "generator": false,
                "start": 127,
                "end": 133
              },
              "start": 120,
              "end": 134
            },
            "directive": null,
            "start": 120,
            "end": 134
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 141,
                  "end": 143
                }
              ],
              "optional": false,
              "start": 139,
              "end": 144
            },
            "directive": null,
            "start": 139,
            "end": 144
          }
        ],
        "start": 114,
        "end": 146
      },
      "expression": false,
      "start": 74,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 171,
                      "end": 177
                    },
                    "start": 169,
                    "end": 177
                  },
                  "start": 168,
                  "end": 177
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 182,
                  "end": 186
                },
                "start": 179,
                "end": 186
              },
              "start": 167,
              "end": 186
            },
            "start": 165,
            "end": 186
          },
          "start": 163,
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
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 202
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "id": null,
                "generator": false,
                "start": 201,
                "end": 207
              },
              "start": 194,
              "end": 208
            },
            "directive": null,
            "start": 194,
            "end": 208
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 214
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 215,
                  "end": 217
                }
              ],
              "optional": false,
              "start": 213,
              "end": 218
            },
            "directive": null,
            "start": 213,
            "end": 218
          }
        ],
        "start": 188,
        "end": 220
      },
      "expression": false,
      "start": 148,
      "end": 220
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 245,
                      "end": 251
                    },
                    "start": 243,
                    "end": 251
                  },
                  "start": 242,
                  "end": 251
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 256,
                  "end": 260
                },
                "start": 253,
                "end": 260
              },
              "start": 241,
              "end": 260
            },
            "start": 239,
            "end": 260
          },
          "start": 237,
          "end": 260
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
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 277,
                        "end": 285
                      },
                      "optional": false,
                      "computed": false,
                      "start": 275,
                      "end": 285
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 275,
                    "end": 287
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 291
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 296
                    },
                    "id": null,
                    "generator": false,
                    "start": 290,
                    "end": 296
                  }
                ],
                "start": 275,
                "end": 297
              },
              "start": 268,
              "end": 298
            },
            "directive": null,
            "start": 268,
            "end": 298
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 304
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 305,
                  "end": 307
                }
              ],
              "optional": false,
              "start": 303,
              "end": 308
            },
            "directive": null,
            "start": 303,
            "end": 308
          }
        ],
        "start": 262,
        "end": 310
      },
      "expression": false,
      "start": 222,
      "end": 310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 325
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 335,
                      "end": 341
                    },
                    "start": 333,
                    "end": 341
                  },
                  "start": 332,
                  "end": 341
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 346,
                  "end": 350
                },
                "start": 343,
                "end": 350
              },
              "start": 331,
              "end": 350
            },
            "start": 329,
            "end": 350
          },
          "start": 327,
          "end": 350
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
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 366
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 375
                      },
                      "optional": false,
                      "computed": false,
                      "start": 365,
                      "end": 375
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 365,
                    "end": 377
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 386
                    },
                    "id": null,
                    "generator": false,
                    "start": 380,
                    "end": 386
                  }
                ],
                "start": 365,
                "end": 387
              },
              "start": 358,
              "end": 388
            },
            "directive": null,
            "start": 358,
            "end": 388
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 395,
                  "end": 397
                }
              ],
              "optional": false,
              "start": 393,
              "end": 398
            },
            "directive": null,
            "start": 393,
            "end": 398
          }
        ],
        "start": 352,
        "end": 400
      },
      "expression": false,
      "start": 312,
      "end": 400
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 415
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 425,
                      "end": 431
                    },
                    "start": 423,
                    "end": 431
                  },
                  "start": 422,
                  "end": 431
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 436,
                  "end": 440
                },
                "start": 433,
                "end": 440
              },
              "start": 421,
              "end": 440
            },
            "start": 419,
            "end": 440
          },
          "start": 417,
          "end": 440
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
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 449
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 456
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 465
                      },
                      "optional": false,
                      "computed": false,
                      "start": 455,
                      "end": 465
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 455,
                    "end": 467
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 471
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 476
                    },
                    "id": null,
                    "generator": false,
                    "start": 470,
                    "end": 476
                  }
                ],
                "start": 455,
                "end": 477
              },
              "start": 448,
              "end": 478
            },
            "directive": null,
            "start": 448,
            "end": 478
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 484
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 485,
                  "end": 487
                }
              ],
              "optional": false,
              "start": 483,
              "end": 488
            },
            "directive": null,
            "start": 483,
            "end": 488
          }
        ],
        "start": 442,
        "end": 490
      },
      "expression": false,
      "start": 402,
      "end": 490
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 490
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 55,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 105,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 182,
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
    "value": "f",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
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
    "type": "Keyword",
    "value": "void",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 275,
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
    "value": "toString",
    "start": 277,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 305,
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
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 312,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "=>",
    "start": 343,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
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
    "type": "Identifier",
    "value": "f",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 382,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "f",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 433,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 450,
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
    "value": "f",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 472,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "f",
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
    "type": "Numeric",
    "value": "42",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  }
]
```

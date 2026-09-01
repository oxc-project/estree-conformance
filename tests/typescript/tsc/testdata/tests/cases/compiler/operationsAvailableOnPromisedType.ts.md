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
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 17
      },
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
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 23,
          "end": 32
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 48
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 49,
                    "end": 55
                  }
                ],
                "start": 48,
                "end": 56
              },
              "start": 41,
              "end": 56
            },
            "start": 39,
            "end": 56
          },
          "start": 38,
          "end": 56
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 72
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    },
                    "start": 73,
                    "end": 81
                  }
                ],
                "start": 72,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "start": 63,
            "end": 82
          },
          "start": 62,
          "end": 82
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 98
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 105
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          },
                          "start": 105,
                          "end": 113
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 101,
                        "end": 113
                      }
                    ],
                    "start": 99,
                    "end": 115
                  }
                ],
                "start": 98,
                "end": 116
              },
              "start": 91,
              "end": 116
            },
            "start": 89,
            "end": 116
          },
          "start": 88,
          "end": 116
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 132
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 139,
                        "end": 143
                      },
                      "start": 136,
                      "end": 143
                    },
                    "start": 133,
                    "end": 143
                  }
                ],
                "start": 132,
                "end": 144
              },
              "start": 125,
              "end": 144
            },
            "start": 123,
            "end": 144
          },
          "start": 122,
          "end": 144
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 160
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 167,
                            "end": 171
                          },
                          "start": 164,
                          "end": 171
                        },
                        "start": 161,
                        "end": 171
                      }
                    ],
                    "start": 160,
                    "end": 172
                  },
                  "start": 153,
                  "end": 172
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
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
                  "start": 176,
                  "end": 186
                }
              ],
              "start": 153,
              "end": 187
            },
            "start": 151,
            "end": 187
          },
          "start": 150,
          "end": 187
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 203
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 213,
                            "end": 216
                          },
                          "start": 211,
                          "end": 216
                        },
                        "start": 206,
                        "end": 216
                      }
                    ],
                    "start": 204,
                    "end": 218
                  }
                ],
                "start": 203,
                "end": 219
              },
              "start": 196,
              "end": 219
            },
            "start": 194,
            "end": 219
          },
          "start": 193,
          "end": 219
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "start": 246,
              "end": 251
            },
            "directive": null,
            "start": 246,
            "end": 252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 262
              },
              "start": 257,
              "end": 262
            },
            "directive": null,
            "start": 257,
            "end": 263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "start": 268,
              "end": 273
            },
            "directive": null,
            "start": 268,
            "end": 274
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
              },
              "operator": ">",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "start": 279,
              "end": 284
            },
            "directive": null,
            "start": 279,
            "end": 285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "start": 290,
              "end": 293
            },
            "directive": null,
            "start": 290,
            "end": 294
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 299,
              "end": 302
            },
            "directive": null,
            "start": 299,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "start": 308,
              "end": 315
            },
            "directive": null,
            "start": 308,
            "end": 316
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "start": 322,
                  "end": 326
                }
              ],
              "start": 321,
              "end": 327
            },
            "directive": null,
            "start": 321,
            "end": 328
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "init": null,
                  "definite": false,
                  "start": 344,
                  "end": 345
                }
              ],
              "declare": false,
              "start": 338,
              "end": 345
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 364
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 366
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 369
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 375
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 378
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 384
                      }
                    ],
                    "optional": false,
                    "start": 362,
                    "end": 385
                  },
                  "directive": null,
                  "start": 362,
                  "end": 386
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "optional": false,
                    "computed": false,
                    "start": 395,
                    "end": 401
                  },
                  "directive": null,
                  "start": 395,
                  "end": 402
                }
              ],
              "start": 352,
              "end": 408
            },
            "start": 333,
            "end": 408
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "init": null,
                  "definite": false,
                  "start": 430,
                  "end": 431
                }
              ],
              "declare": false,
              "start": 424,
              "end": 431
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 438,
              "end": 440
            },
            "start": 413,
            "end": 440
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 446
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 445,
              "end": 448
            },
            "directive": null,
            "start": 445,
            "end": 449
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
                "start": 454,
                "end": 455
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 454,
              "end": 457
            },
            "directive": null,
            "start": 454,
            "end": 458
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "typeArguments": null,
              "arguments": [],
              "start": 463,
              "end": 470
            },
            "directive": null,
            "start": 463,
            "end": 471
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 476,
              "end": 479
            },
            "directive": null,
            "start": 476,
            "end": 480
          }
        ],
        "start": 222,
        "end": 482
      },
      "expression": false,
      "start": 0,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "Promise",
    "start": 65,
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
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "Promise",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 136,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 164,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Punctuator",
    "value": "(",
    "start": 176,
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
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 291,
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
    "value": "--",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 346,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "fn",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 432,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  }
]
```

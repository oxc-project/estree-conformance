__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 24
        },
        "generator": false,
        "async": true,
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
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./test",
                        "raw": "'./test'",
                        "start": 58,
                        "end": 66
                      },
                      "options": null,
                      "phase": null,
                      "start": 51,
                      "end": 67
                    },
                    "start": 45,
                    "end": 67
                  },
                  "definite": false,
                  "start": 39,
                  "end": 67
                }
              ],
              "declare": false,
              "start": 33,
              "end": 67
            }
          ],
          "start": 27,
          "end": 76
        },
        "expression": false,
        "start": 7,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl1",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
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
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
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
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 137
                          },
                          "init": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "ImportExpression",
                              "source": {
                                "type": "Literal",
                                "value": "./test",
                                "raw": "'./test'",
                                "start": 153,
                                "end": 161
                              },
                              "options": null,
                              "phase": null,
                              "start": 146,
                              "end": 162
                            },
                            "start": 140,
                            "end": 162
                          },
                          "definite": false,
                          "start": 134,
                          "end": 162
                        }
                      ],
                      "declare": false,
                      "start": 128,
                      "end": 162
                    }
                  ],
                  "start": 118,
                  "end": 175
                },
                "expression": false,
                "start": 115,
                "end": 175
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 101,
              "end": 175
            }
          ],
          "start": 95,
          "end": 177
        },
        "abstract": false,
        "declare": false,
        "start": 85,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 78,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
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
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 235,
                                "end": 238
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ImportExpression",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./test",
                                    "raw": "'./test'",
                                    "start": 254,
                                    "end": 262
                                  },
                                  "options": null,
                                  "phase": null,
                                  "start": 247,
                                  "end": 263
                                },
                                "start": 241,
                                "end": 263
                              },
                              "definite": false,
                              "start": 235,
                              "end": 263
                            }
                          ],
                          "declare": false,
                          "start": 229,
                          "end": 263
                        }
                      ],
                      "start": 219,
                      "end": 278
                    },
                    "id": null,
                    "generator": false,
                    "start": 207,
                    "end": 278
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 204,
                  "end": 278
                }
              ],
              "start": 198,
              "end": 280
            },
            "definite": false,
            "start": 192,
            "end": 280
          }
        ],
        "declare": false,
        "start": 186,
        "end": 280
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 280
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl2",
          "optional": false,
          "typeAnnotation": null,
          "start": 295,
          "end": 298
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": true,
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
                                  "name": "req",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 361,
                                  "end": 364
                                },
                                "init": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./test",
                                      "raw": "'./test'",
                                      "start": 380,
                                      "end": 388
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 373,
                                    "end": 389
                                  },
                                  "start": 367,
                                  "end": 389
                                },
                                "definite": false,
                                "start": 361,
                                "end": 389
                              }
                            ],
                            "declare": false,
                            "start": 355,
                            "end": 389
                          }
                        ],
                        "start": 341,
                        "end": 407
                      },
                      "id": null,
                      "generator": false,
                      "start": 329,
                      "end": 407
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 326,
                    "end": 407
                  }
                ],
                "start": 316,
                "end": 413
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 305,
              "end": 413
            }
          ],
          "start": 299,
          "end": 415
        },
        "abstract": false,
        "declare": false,
        "start": 289,
        "end": 415
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 282,
      "end": 415
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 431
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
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
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 458,
                          "end": 461
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./test",
                              "raw": "'./test'",
                              "start": 477,
                              "end": 485
                            },
                            "options": null,
                            "phase": null,
                            "start": 470,
                            "end": 486
                          },
                          "start": 464,
                          "end": 486
                        },
                        "definite": false,
                        "start": 458,
                        "end": 486
                      }
                    ],
                    "declare": false,
                    "start": 452,
                    "end": 486
                  }
                ],
                "start": 446,
                "end": 496
              },
              "id": null,
              "generator": false,
              "start": 434,
              "end": 496
            },
            "definite": false,
            "start": 430,
            "end": 496
          }
        ],
        "declare": false,
        "start": 424,
        "end": 496
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 417,
      "end": 496
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 7,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 45,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
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
    "type": "String",
    "value": "'./test'",
    "start": 58,
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
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 78,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "cl1",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 101,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 140,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "String",
    "value": "'./test'",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 241,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "'./test'",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 282,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 289,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "cl2",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=>",
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
    "type": "Keyword",
    "value": "const",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 367,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "'./test'",
    "start": 380,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 417,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 452,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 464,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "String",
    "value": "'./test'",
    "start": 477,
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
    "value": "}",
    "start": 495,
    "end": 496
  }
]
```

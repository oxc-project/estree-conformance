__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 31,
                        "end": 34
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 36,
                        "end": 37
                      }
                    ],
                    "start": 30,
                    "end": 38
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 41,
                        "end": 44
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 46,
                        "end": 47
                      }
                    ],
                    "start": 40,
                    "end": 48
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 51,
                        "end": 54
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "start": 50,
                    "end": 58
                  }
                ],
                "start": 29,
                "end": 59
              }
            ],
            "optional": false,
            "start": 10,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 70
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 73,
              "end": 91
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "URLSearchParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 111
                },
                "typeArguments": null,
                "arguments": [],
                "start": 92,
                "end": 113
              }
            ],
            "optional": false,
            "start": 73,
            "end": 114
          },
          "definite": false,
          "start": 68,
          "end": 114
        }
      ],
      "declare": false,
      "start": 62,
      "end": 115
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 145
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 153
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 162
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "key",
                                "raw": "\"key\"",
                                "start": 163,
                                "end": 168
                              }
                            ],
                            "optional": false,
                            "start": 156,
                            "end": 169
                          },
                          {
                            "type": "Literal",
                            "value": "value",
                            "raw": "\"value\"",
                            "start": 171,
                            "end": 178
                          }
                        ],
                        "start": 155,
                        "end": 179
                      }
                    ],
                    "start": 154,
                    "end": 180
                  }
                ],
                "start": 146,
                "end": 181
              }
            ],
            "optional": false,
            "start": 127,
            "end": 182
          },
          "definite": false,
          "start": 122,
          "end": 182
        }
      ],
      "declare": false,
      "start": 116,
      "end": 183
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
            "name": "frozenArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 211
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 218
              },
              "optional": false,
              "computed": false,
              "start": 205,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 221,
                        "end": 224
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 226,
                        "end": 227
                      }
                    ],
                    "start": 220,
                    "end": 228
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 231,
                        "end": 234
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 236,
                        "end": 237
                      }
                    ],
                    "start": 230,
                    "end": 238
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 241,
                        "end": 244
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 246,
                        "end": 247
                      }
                    ],
                    "start": 240,
                    "end": 248
                  }
                ],
                "start": 219,
                "end": 249
              }
            ],
            "optional": false,
            "start": 205,
            "end": 250
          },
          "definite": false,
          "start": 191,
          "end": 250
        }
      ],
      "declare": false,
      "start": 185,
      "end": 251
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 269
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 281
              },
              "optional": false,
              "computed": false,
              "start": 263,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "frozenArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 293
              }
            ],
            "optional": false,
            "start": 263,
            "end": 294
          },
          "definite": false,
          "start": 258,
          "end": 294
        }
      ],
      "declare": false,
      "start": 252,
      "end": 295
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
            "name": "frozenArray2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 327,
                        "end": 333
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      }
                    ],
                    "start": 326,
                    "end": 342
                  },
                  "start": 326,
                  "end": 344
                },
                "start": 317,
                "end": 344
              },
              "start": 315,
              "end": 344
            },
            "start": 303,
            "end": 344
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 353
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 347,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 363,
                        "end": 366
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 368,
                        "end": 369
                      }
                    ],
                    "start": 362,
                    "end": 370
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 373,
                        "end": 376
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 378,
                        "end": 379
                      }
                    ],
                    "start": 372,
                    "end": 380
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 383,
                        "end": 386
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 388,
                        "end": 389
                      }
                    ],
                    "start": 382,
                    "end": 390
                  }
                ],
                "start": 361,
                "end": 391
              }
            ],
            "optional": false,
            "start": 347,
            "end": 392
          },
          "definite": false,
          "start": 303,
          "end": 392
        }
      ],
      "declare": false,
      "start": 297,
      "end": 393
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 411
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 423
              },
              "optional": false,
              "computed": false,
              "start": 405,
              "end": 423
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "frozenArray2",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 436
              }
            ],
            "optional": false,
            "start": 405,
            "end": 437
          },
          "definite": false,
          "start": 400,
          "end": 437
        }
      ],
      "declare": false,
      "start": 394,
      "end": 438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 438
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 80,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "URLSearchParams",
    "start": 96,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
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
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 134,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 185,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "frozenArray",
    "start": 191,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 270,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "frozenArray",
    "start": 282,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "frozenArray2",
    "start": 303,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 317,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 382,
    "end": 383
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 386,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 394,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 412,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "frozenArray2",
    "start": 424,
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
    "value": ";",
    "start": 437,
    "end": 438
  }
]
```

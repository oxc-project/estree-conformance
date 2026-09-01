__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 40
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 46
          }
        ],
        "start": 35,
        "end": 47
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeArguments": null,
                "start": 56,
                "end": 60
              },
              "start": 54,
              "end": 60
            },
            "start": 51,
            "end": 60
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 71
                },
                "typeArguments": null,
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 62,
            "end": 71
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 76,
            "end": 79
          },
          "start": 73,
          "end": 79
        },
        "start": 50,
        "end": 79
      },
      "declare": false,
      "start": 22,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 105
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 110
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 116
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCallback",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 127
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 144
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 149
                    },
                    "typeArguments": null,
                    "start": 145,
                    "end": 149
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 155
                  }
                ],
                "start": 144,
                "end": 156
              },
              "start": 136,
              "end": 156
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 156
          }
        ],
        "start": 105,
        "end": 157
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
              },
              "typeArguments": null,
              "start": 168,
              "end": 172
            },
            "start": 166,
            "end": 172
          },
          "start": 163,
          "end": 172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 197
              },
              "typeArguments": null,
              "start": 188,
              "end": 197
            },
            "start": 186,
            "end": 197
          },
          "start": 178,
          "end": 197
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 212
              },
              "typeArguments": null,
              "start": 208,
              "end": 212
            },
            "start": 206,
            "end": 212
          },
          "start": 203,
          "end": 212
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 226
          },
          "typeArguments": null,
          "start": 217,
          "end": 226
        },
        "start": 215,
        "end": 226
      },
      "body": null,
      "expression": false,
      "start": 81,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 236,
            "end": 238
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 244
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 249
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 262
                  },
                  "value": {
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
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 287,
                                    "end": 293
                                  },
                                  "start": 285,
                                  "end": 293
                                },
                                "start": 284,
                                "end": 293
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 299
                              },
                              "definite": false,
                              "start": 284,
                              "end": 299
                            }
                          ],
                          "declare": false,
                          "start": 280,
                          "end": 300
                        }
                      ],
                      "start": 270,
                      "end": 306
                    },
                    "id": null,
                    "generator": false,
                    "start": 264,
                    "end": 306
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 261,
                  "end": 306
                }
              ],
              "start": 255,
              "end": 308
            },
            "id": null,
            "generator": false,
            "start": 240,
            "end": 309
          },
          {
            "type": "Literal",
            "value": "42",
            "raw": "'42'",
            "start": 311,
            "end": 315
          }
        ],
        "optional": false,
        "start": 228,
        "end": 316
      },
      "directive": null,
      "start": 228,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 326
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 327,
            "end": 329
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 335
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 340
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 353
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
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 373,
                                    "end": 379
                                  },
                                  "start": 371,
                                  "end": 379
                                },
                                "start": 370,
                                "end": 379
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 382,
                                "end": 385
                              },
                              "definite": false,
                              "start": 370,
                              "end": 385
                            }
                          ],
                          "declare": false,
                          "start": 366,
                          "end": 386
                        }
                      ],
                      "start": 356,
                      "end": 392
                    },
                    "expression": false,
                    "start": 353,
                    "end": 392
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 352,
                  "end": 392
                }
              ],
              "start": 346,
              "end": 394
            },
            "id": null,
            "generator": false,
            "start": 331,
            "end": 395
          },
          {
            "type": "Literal",
            "value": "42",
            "raw": "'42'",
            "start": 397,
            "end": 401
          }
        ],
        "optional": false,
        "start": 319,
        "end": 402
      },
      "directive": null,
      "start": 319,
      "end": 403
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 403
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "TFoo",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "TBar",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "TFoo",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "TBar",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 81,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "TFoo",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "TBar",
    "start": 112,
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
    "value": "TCallback",
    "start": 118,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 128,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "TFoo",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "TBar",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "TFoo",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "TCallback",
    "start": 188,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "TBar",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "TCallback",
    "start": 217,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 236,
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
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Identifier",
    "value": "bar",
    "start": 246,
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
    "value": "=>",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "String",
    "value": "'42'",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "foo",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "'42'",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  }
]
```

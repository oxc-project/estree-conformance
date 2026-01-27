__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 21
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 29
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 31,
            "end": 38
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 47
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 49,
                  "end": 51
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 51
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 61
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 63,
                  "end": 67
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 53,
                "end": 67
              }
            ],
            "start": 40,
            "end": 69
          }
        ],
        "optional": false,
        "start": 0,
        "end": 70
      },
      "directive": null,
      "start": 0,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 78
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 93
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 93
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 101
          },
          {
            "type": "Literal",
            "value": "readonlyProp",
            "raw": "\"readonlyProp\"",
            "start": 103,
            "end": 117
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 126
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 128,
                  "end": 135
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 121,
                "end": 135
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 145
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 147,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 137,
                "end": 152
              }
            ],
            "start": 119,
            "end": 154
          }
        ],
        "optional": false,
        "start": 72,
        "end": 155
      },
      "directive": null,
      "start": 72,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 163
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 178
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 178
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 186
          },
          {
            "type": "Literal",
            "value": "rwAccessors",
            "raw": "\"rwAccessors\"",
            "start": 188,
            "end": 201
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 208
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
                          "type": "Literal",
                          "value": 98122,
                          "raw": "98122",
                          "start": 220,
                          "end": 225
                        },
                        "start": 213,
                        "end": 225
                      }
                    ],
                    "start": 211,
                    "end": 227
                  },
                  "expression": false,
                  "start": 208,
                  "end": 227
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 205,
                "end": 227
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 232
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 236,
                    "end": 250
                  },
                  "expression": false,
                  "start": 232,
                  "end": 250
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 229,
                "end": 250
              }
            ],
            "start": 203,
            "end": 252
          }
        ],
        "optional": false,
        "start": 157,
        "end": 253
      },
      "directive": null,
      "start": 157,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 261
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 276
          },
          "optional": false,
          "computed": false,
          "start": 255,
          "end": 276
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 284
          },
          {
            "type": "Literal",
            "value": "readonlyAccessor",
            "raw": "\"readonlyAccessor\"",
            "start": 286,
            "end": 304
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 311
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
                          "type": "Literal",
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 323,
                          "end": 328
                        },
                        "start": 316,
                        "end": 328
                      }
                    ],
                    "start": 314,
                    "end": 330
                  },
                  "expression": false,
                  "start": 311,
                  "end": 330
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 308,
                "end": 330
              }
            ],
            "start": 306,
            "end": 332
          }
        ],
        "optional": false,
        "start": 255,
        "end": 333
      },
      "directive": null,
      "start": 255,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 341
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 356
          },
          "optional": false,
          "computed": false,
          "start": 335,
          "end": 356
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 364
          },
          {
            "type": "Literal",
            "value": "setonlyAccessor",
            "raw": "\"setonlyAccessor\"",
            "start": 366,
            "end": 383
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 425
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 429
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
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 441,
                              "end": 445
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 446,
                              "end": 457
                            },
                            "optional": false,
                            "computed": false,
                            "start": 441,
                            "end": 457
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 460,
                              "end": 466
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 470
                              }
                            ],
                            "optional": false,
                            "start": 460,
                            "end": 471
                          },
                          "start": 441,
                          "end": 471
                        },
                        "directive": null,
                        "start": 441,
                        "end": 471
                      }
                    ],
                    "start": 431,
                    "end": 478
                  },
                  "expression": false,
                  "start": 425,
                  "end": 478
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 422,
                "end": 478
              }
            ],
            "start": 385,
            "end": 480
          }
        ],
        "optional": false,
        "start": 335,
        "end": 481
      },
      "directive": null,
      "start": 335,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 483
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Object",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 7,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 31,
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
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
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
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 79,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "\"readonlyProp\"",
    "start": 103,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"Smith\"",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 164,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"rwAccessors\"",
    "start": 188,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 213,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "98122",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "_",
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
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "Object",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 262,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "String",
    "value": "\"readonlyAccessor\"",
    "start": 286,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 316,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "21.75",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 342,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"setonlyAccessor\"",
    "start": 366,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 446,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 21
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 28
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 36
            },
            "optional": false,
            "computed": false,
            "start": 22,
            "end": 36
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 38,
            "end": 45
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "\"yes\"",
                  "start": 56,
                  "end": 61
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 61
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 71
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 73,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 63,
                "end": 77
              }
            ],
            "start": 47,
            "end": 79
          }
        ],
        "optional": false,
        "start": 0,
        "end": 80
      },
      "directive": null,
      "start": 0,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 103
          },
          "optional": false,
          "computed": false,
          "start": 82,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 110
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "optional": false,
            "computed": false,
            "start": 104,
            "end": 118
          },
          {
            "type": "Literal",
            "value": "readonlyProp",
            "raw": "\"readonlyProp\"",
            "start": 120,
            "end": 134
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 145,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 138,
                "end": 152
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 162
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 164,
                  "end": 169
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 169
              }
            ],
            "start": 136,
            "end": 171
          }
        ],
        "optional": false,
        "start": 82,
        "end": 172
      },
      "directive": null,
      "start": 82,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 180
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 195
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 195
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 202
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 210
            },
            "optional": false,
            "computed": false,
            "start": 196,
            "end": 210
          },
          {
            "type": "Literal",
            "value": "rwAccessors",
            "raw": "\"rwAccessors\"",
            "start": 212,
            "end": 225
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 232
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
                          "type": "Literal",
                          "value": 98122,
                          "raw": "98122",
                          "start": 244,
                          "end": 249
                        },
                        "start": 237,
                        "end": 249
                      }
                    ],
                    "start": 235,
                    "end": 251
                  },
                  "expression": false,
                  "start": 232,
                  "end": 251
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 229,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 256
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 258
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 260,
                    "end": 274
                  },
                  "expression": false,
                  "start": 256,
                  "end": 274
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 274
              }
            ],
            "start": 227,
            "end": 276
          }
        ],
        "optional": false,
        "start": 174,
        "end": 277
      },
      "directive": null,
      "start": 174,
      "end": 278
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 300
          },
          "optional": false,
          "computed": false,
          "start": 279,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 307
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 315
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 315
          },
          {
            "type": "Literal",
            "value": "readonlyAccessor",
            "raw": "\"readonlyAccessor\"",
            "start": 317,
            "end": 335
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 342
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
                          "type": "Literal",
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 354,
                          "end": 359
                        },
                        "start": 347,
                        "end": 359
                      }
                    ],
                    "start": 345,
                    "end": 361
                  },
                  "expression": false,
                  "start": 342,
                  "end": 361
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 339,
                "end": 361
              }
            ],
            "start": 337,
            "end": 363
          }
        ],
        "optional": false,
        "start": 279,
        "end": 364
      },
      "directive": null,
      "start": 279,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 372
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 387
          },
          "optional": false,
          "computed": false,
          "start": 366,
          "end": 387
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 394
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 402
            },
            "optional": false,
            "computed": false,
            "start": 388,
            "end": 402
          },
          {
            "type": "Literal",
            "value": "setonlyAccessor",
            "raw": "\"setonlyAccessor\"",
            "start": 404,
            "end": 421
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 463
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 467
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
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 479,
                              "end": 483
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 479,
                            "end": 495
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 498,
                              "end": 504
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 505,
                                "end": 508
                              }
                            ],
                            "optional": false,
                            "start": 498,
                            "end": 509
                          },
                          "start": 479,
                          "end": 509
                        },
                        "directive": null,
                        "start": 479,
                        "end": 509
                      }
                    ],
                    "start": 469,
                    "end": 516
                  },
                  "expression": false,
                  "start": 463,
                  "end": 516
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 516
              }
            ],
            "start": 423,
            "end": 518
          }
        ],
        "optional": false,
        "start": 366,
        "end": 519
      },
      "directive": null,
      "start": 366,
      "end": 520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Object",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 7,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 89,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"readonlyProp\"",
    "start": 120,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"Smith\"",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Object",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 181,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"rwAccessors\"",
    "start": 212,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 237,
    "end": 243
  },
  {
    "type": "Numeric",
    "value": "98122",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 286,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 301,
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
    "value": "exports",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"readonlyAccessor\"",
    "start": 317,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 347,
    "end": 353
  },
  {
    "type": "Numeric",
    "value": "21.75",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
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
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 373,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "String",
    "value": "\"setonlyAccessor\"",
    "start": 404,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 484,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  }
]
```
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 43
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./mod1",
                  "raw": "\"./mod1\"",
                  "start": 44,
                  "end": 52
                }
              ],
              "optional": false,
              "start": 36,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 59
            },
            "optional": false,
            "computed": false,
            "start": 36,
            "end": 59
          },
          "definite": false,
          "start": 32,
          "end": 59
        }
      ],
      "declare": false,
      "start": 26,
      "end": 60
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 105
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./mod2",
                  "raw": "\"./mod2\"",
                  "start": 106,
                  "end": 114
                }
              ],
              "optional": false,
              "start": 98,
              "end": 115
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 121
            },
            "optional": false,
            "computed": false,
            "start": 98,
            "end": 121
          },
          "definite": false,
          "start": 94,
          "end": 121
        }
      ],
      "declare": false,
      "start": 88,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"./mod1\"",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"./mod2\"",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 7,
        "end": 11
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 23
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod1",
          "raw": "\"./mod1\"",
          "start": 34,
          "end": 42
        },
        "start": 26,
        "end": 43
      },
      "importKind": "value",
      "start": 14,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 48
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 54
        },
        "optional": false,
        "computed": false,
        "start": 46,
        "end": 54
      },
      "directive": null,
      "start": 46,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 58
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 71
        },
        "optional": false,
        "computed": false,
        "start": 56,
        "end": 71
      },
      "directive": null,
      "start": 56,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 75
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 87
        },
        "optional": false,
        "computed": false,
        "start": 73,
        "end": 87
      },
      "directive": null,
      "start": 73,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 91
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 108
        },
        "optional": false,
        "computed": false,
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 112
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 128
        },
        "optional": false,
        "computed": false,
        "start": 110,
        "end": 128
      },
      "directive": null,
      "start": 110,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 162
          },
          "optional": false,
          "computed": false,
          "start": 154,
          "end": 162
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 165,
          "end": 167
        },
        "start": 154,
        "end": 167
      },
      "directive": null,
      "start": 154,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 169,
          "end": 183
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 186,
          "end": 188
        },
        "start": 169,
        "end": 188
      },
      "directive": null,
      "start": 169,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 208
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 208
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 211,
          "end": 216
        },
        "start": 190,
        "end": 216
      },
      "directive": null,
      "start": 190,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 247
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 260
          },
          "optional": false,
          "computed": false,
          "start": 245,
          "end": 260
        },
        "right": {
          "type": "Literal",
          "value": "name",
          "raw": "\"name\"",
          "start": 263,
          "end": 269
        },
        "start": 245,
        "end": 269
      },
      "directive": null,
      "start": 245,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 273
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 290
          },
          "optional": false,
          "computed": false,
          "start": 271,
          "end": 290
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 293,
          "end": 295
        },
        "start": 271,
        "end": 295
      },
      "directive": null,
      "start": 271,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 299
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 305
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 305
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 308,
          "end": 312
        },
        "start": 297,
        "end": 312
      },
      "directive": null,
      "start": 297,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 328
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 331,
          "end": 335
        },
        "start": 314,
        "end": 335
      },
      "directive": null,
      "start": 314,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 337,
          "end": 355
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 358,
          "end": 359
        },
        "start": 337,
        "end": 359
      },
      "directive": null,
      "start": 337,
      "end": 360
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 371
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod2",
          "raw": "\"./mod2\"",
          "start": 382,
          "end": 390
        },
        "start": 374,
        "end": 391
      },
      "importKind": "value",
      "start": 362,
      "end": 392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 396
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 402
        },
        "optional": false,
        "computed": false,
        "start": 394,
        "end": 402
      },
      "directive": null,
      "start": 394,
      "end": 403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 406
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 419
        },
        "optional": false,
        "computed": false,
        "start": 404,
        "end": 419
      },
      "directive": null,
      "start": 404,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 435
        },
        "optional": false,
        "computed": false,
        "start": 421,
        "end": 435
      },
      "directive": null,
      "start": 421,
      "end": 436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 439
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 456
        },
        "optional": false,
        "computed": false,
        "start": 437,
        "end": 456
      },
      "directive": null,
      "start": 437,
      "end": 457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 460
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 476
        },
        "optional": false,
        "computed": false,
        "start": 458,
        "end": 476
      },
      "directive": null,
      "start": 458,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 510
          },
          "optional": false,
          "computed": false,
          "start": 502,
          "end": 510
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 513,
          "end": 517
        },
        "start": 502,
        "end": 517
      },
      "directive": null,
      "start": 502,
      "end": 518
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 521
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 533
          },
          "optional": false,
          "computed": false,
          "start": 519,
          "end": 533
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 536,
          "end": 538
        },
        "start": 519,
        "end": 538
      },
      "directive": null,
      "start": 519,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 558
          },
          "optional": false,
          "computed": false,
          "start": 540,
          "end": 558
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 561,
          "end": 566
        },
        "start": 540,
        "end": 566
      },
      "directive": null,
      "start": 540,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 597
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 610
          },
          "optional": false,
          "computed": false,
          "start": 595,
          "end": 610
        },
        "right": {
          "type": "Literal",
          "value": "name",
          "raw": "\"name\"",
          "start": 613,
          "end": 619
        },
        "start": 595,
        "end": 619
      },
      "directive": null,
      "start": 595,
      "end": 620
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 623
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 640
          },
          "optional": false,
          "computed": false,
          "start": 621,
          "end": 640
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 643,
          "end": 645
        },
        "start": 621,
        "end": 645
      },
      "directive": null,
      "start": 621,
      "end": 646
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 649
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 655
          },
          "optional": false,
          "computed": false,
          "start": 647,
          "end": 655
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 658,
          "end": 659
        },
        "start": 647,
        "end": 659
      },
      "directive": null,
      "start": 647,
      "end": 660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 663
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 675
          },
          "optional": false,
          "computed": false,
          "start": 661,
          "end": 675
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 678,
          "end": 682
        },
        "start": 661,
        "end": 682
      },
      "directive": null,
      "start": 661,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 686
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 702
          },
          "optional": false,
          "computed": false,
          "start": 684,
          "end": 702
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 705,
          "end": 706
        },
        "start": 684,
        "end": 706
      },
      "directive": null,
      "start": 684,
      "end": 707
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 707
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"./mod1\"",
    "start": 34,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 59,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 76,
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
    "value": "m1",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 92,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 113,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 172,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 193,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 248,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 274,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 317,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 340,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 362,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 374,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "String",
    "value": "\"./mod2\"",
    "start": 382,
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
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 394,
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
    "value": "thing",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 424,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 440,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 461,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 522,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 543,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 598,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 624,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 664,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 687,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  }
]
```

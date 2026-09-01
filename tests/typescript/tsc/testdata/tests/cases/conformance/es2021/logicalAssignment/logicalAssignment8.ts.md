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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 21,
                          "end": 26
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 29,
                              "end": 35
                            },
                            "start": 29,
                            "end": 37
                          },
                          "start": 27,
                          "end": 37
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 21,
                        "end": 37
                      }
                    ],
                    "start": 19,
                    "end": 39
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 42,
                    "end": 51
                  }
                ],
                "start": 19,
                "end": 51
              },
              "start": 17,
              "end": 51
            },
            "start": 14,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 51
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
                  },
                  "start": 76,
                  "end": 84
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 87,
                  "end": 96
                }
              ],
              "start": 76,
              "end": 96
            },
            "start": 74,
            "end": 96
          },
          "start": 67,
          "end": 96
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 112
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 127
                        },
                        "optional": true,
                        "computed": false,
                        "start": 117,
                        "end": 127
                      },
                      "start": 117,
                      "end": 127
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 131,
                      "end": 133
                    },
                    "start": 117,
                    "end": 133
                  },
                  "start": 105,
                  "end": 133
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 104,
                "end": 139
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 140,
                  "end": 143
                }
              ],
              "optional": false,
              "start": 104,
              "end": 144
            },
            "directive": null,
            "start": 104,
            "end": 145
          }
        ],
        "start": 98,
        "end": 147
      },
      "expression": false,
      "start": 53,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "start": 172,
                  "end": 180
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 183,
                  "end": 192
                }
              ],
              "start": 172,
              "end": 192
            },
            "start": 170,
            "end": 192
          },
          "start": 163,
          "end": 192
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 208
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 216
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 223
                        },
                        "optional": true,
                        "computed": false,
                        "start": 213,
                        "end": 223
                      },
                      "start": 213,
                      "end": 223
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 227,
                      "end": 229
                    },
                    "start": 213,
                    "end": 229
                  },
                  "start": 201,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 235
                },
                "optional": false,
                "computed": false,
                "start": 200,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 236,
                  "end": 239
                }
              ],
              "optional": false,
              "start": 200,
              "end": 240
            },
            "directive": null,
            "start": 200,
            "end": 241
          }
        ],
        "start": 194,
        "end": 243
      },
      "expression": false,
      "start": 149,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 258
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 268,
                    "end": 274
                  },
                  "start": 268,
                  "end": 276
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                }
              ],
              "start": 268,
              "end": 288
            },
            "start": 266,
            "end": 288
          },
          "start": 259,
          "end": 288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 304
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 312
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 319
                        },
                        "optional": true,
                        "computed": false,
                        "start": 309,
                        "end": 319
                      },
                      "start": 309,
                      "end": 319
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 323,
                      "end": 325
                    },
                    "start": 309,
                    "end": 325
                  },
                  "start": 297,
                  "end": 325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 331
                },
                "optional": false,
                "computed": false,
                "start": 296,
                "end": 331
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 332,
                  "end": 335
                }
              ],
              "optional": false,
              "start": 296,
              "end": 336
            },
            "directive": null,
            "start": 296,
            "end": 337
          }
        ],
        "start": 290,
        "end": 339
      },
      "expression": false,
      "start": 245,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 339
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 14,
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
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 42,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 87,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 120,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 140,
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
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "|",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 183,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 231,
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
    "value": "100",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 279,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 312,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  }
]
```

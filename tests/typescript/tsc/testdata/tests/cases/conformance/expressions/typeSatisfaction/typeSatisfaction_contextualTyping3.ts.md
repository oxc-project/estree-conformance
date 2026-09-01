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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 94
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 105
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 113
                        },
                        "right": {
                          "type": "Literal",
                          "value": "default",
                          "raw": "\"default\"",
                          "start": 116,
                          "end": 125
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 125
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 135
                    },
                    "id": null,
                    "generator": false,
                    "start": 107,
                    "end": 135
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 102,
                  "end": 135
                }
              ],
              "start": 97,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 160,
                          "end": 166
                        },
                        "start": 158,
                        "end": 166
                      },
                      "start": 155,
                      "end": 166
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 179
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 181,
                              "end": 184
                            },
                            "start": 179,
                            "end": 184
                          },
                          "value": null,
                          "start": 170,
                          "end": 184
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 189,
                          "end": 192
                        },
                        "start": 186,
                        "end": 192
                      },
                      "start": 169,
                      "end": 192
                    },
                    "start": 167,
                    "end": 192
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 154,
                  "end": 193
                }
              ],
              "start": 149,
              "end": 195
            },
            "start": 97,
            "end": 195
          },
          "definite": false,
          "start": 91,
          "end": 195
        }
      ],
      "declare": false,
      "start": 85,
      "end": 196
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 219
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 227
                        },
                        "right": {
                          "type": "Literal",
                          "value": "default",
                          "raw": "\"default\"",
                          "start": 230,
                          "end": 239
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 239
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 249
                    },
                    "id": null,
                    "generator": false,
                    "start": 221,
                    "end": 249
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 216,
                  "end": 249
                }
              ],
              "start": 211,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 274,
                          "end": 280
                        },
                        "start": 272,
                        "end": 280
                      },
                      "start": 269,
                      "end": 280
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 291
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 291
                    },
                    "start": 281,
                    "end": 291
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 268,
                  "end": 292
                }
              ],
              "start": 263,
              "end": 294
            },
            "start": 211,
            "end": 294
          },
          "definite": false,
          "start": 204,
          "end": 294
        }
      ],
      "declare": false,
      "start": 198,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringOrNumberFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 320
      },
      "typeParameters": null,
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                ],
                "start": 327,
                "end": 342
              },
              "start": 325,
              "end": 342
            },
            "start": 324,
            "end": 342
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 347,
            "end": 350
          },
          "start": 344,
          "end": 350
        },
        "start": 323,
        "end": 350
      },
      "declare": false,
      "start": 297,
      "end": 351
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 361
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "right": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 370,
                    "end": 374
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 374
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 379,
                "end": 383
              },
              "id": null,
              "generator": false,
              "start": 365,
              "end": 383
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringOrNumberFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 413
              },
              "typeArguments": null,
              "start": 395,
              "end": 413
            },
            "start": 364,
            "end": 413
          },
          "definite": false,
          "start": 359,
          "end": 413
        }
      ],
      "declare": false,
      "start": 353,
      "end": 414
    },
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
          "start": 415,
          "end": 417
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 415,
        "end": 419
      },
      "directive": null,
      "start": 415,
      "end": 420
    },
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
          "start": 421,
          "end": 423
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 32,
            "raw": "32",
            "start": 424,
            "end": 426
          }
        ],
        "optional": false,
        "start": 421,
        "end": 427
      },
      "directive": null,
      "start": 421,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 85,
  "end": 429
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 116,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 127,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 139,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
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
    "value": "...",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 186,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "foo",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 230,
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
    "value": "=>",
    "start": 241,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "satisfies",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 297,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "StringOrNumberFunc",
    "start": 302,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 336,
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
    "value": "=>",
    "start": 344,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 370,
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
    "value": "=>",
    "start": 376,
    "end": 378
  },
  {
    "type": "Null",
    "value": "null",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 385,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "StringOrNumberFunc",
    "start": 395,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
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
    "value": "fn",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  }
]
```

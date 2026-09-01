__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 20,
                    "end": 27
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 37,
                    "end": 48
                  }
                ],
                "start": 19,
                "end": 49
              },
              "start": 17,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 75
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 68,
                "end": 75
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 76
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 84
          },
          "definite": false,
          "start": 58,
          "end": 84
        }
      ],
      "declare": false,
      "start": 52,
      "end": 85
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
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "typeArguments": null,
                "start": 109,
                "end": 121
              },
              "start": 107,
              "end": 121
            },
            "start": 99,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 121
        }
      ],
      "declare": true,
      "start": 87,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "receiver",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 125,
              "end": 136
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 137
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 145
        },
        "start": 124,
        "end": 145
      },
      "directive": null,
      "start": 124,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oops1",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 183
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 188,
                    "end": 189
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 191,
                    "end": 192
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 194,
                    "end": 195
                  }
                ],
                "start": 187,
                "end": 196
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 203
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
                    "name": "accu",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 209
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "el",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 213
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "accu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 222
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 218,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 232
                    }
                  ],
                  "optional": false,
                  "start": 218,
                  "end": 233
                },
                "id": null,
                "generator": false,
                "start": 204,
                "end": 233
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 235,
                "end": 237
              }
            ],
            "optional": false,
            "start": 187,
            "end": 238
          },
          "definite": false,
          "start": 177,
          "end": 238
        }
      ],
      "declare": false,
      "start": 171,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oops2",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 253
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 258,
                    "end": 259
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 261,
                    "end": 262
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 264,
                    "end": 265
                  }
                ],
                "start": 257,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 273
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
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 280,
                          "end": 286
                        },
                        "start": 280,
                        "end": 288
                      },
                      "start": 278,
                      "end": 288
                    },
                    "start": 275,
                    "end": 288
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 299
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 306
                    },
                    "optional": false,
                    "computed": false,
                    "start": 296,
                    "end": 306
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 308
                    }
                  ],
                  "optional": false,
                  "start": 296,
                  "end": 309
                },
                "id": null,
                "generator": false,
                "start": 274,
                "end": 309
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 311,
                "end": 313
              }
            ],
            "optional": false,
            "start": 257,
            "end": 314
          },
          "definite": false,
          "start": 247,
          "end": 314
        }
      ],
      "declare": false,
      "start": 241,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 12,
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
    "value": "[",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 59,
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
    "value": "b",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 87,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 109,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
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
    "value": "tuple",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "oops1",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "accu",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "accu",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "oops2",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 296,
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
    "value": "concat",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  }
]
```

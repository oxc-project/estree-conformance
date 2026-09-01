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
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "init": {
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
                    "start": 72,
                    "end": 78
                  },
                  "start": 70,
                  "end": 78
                },
                "start": 69,
                "end": 78
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
                    "start": 83,
                    "end": 89
                  },
                  "start": 81,
                  "end": 89
                },
                "start": 80,
                "end": 89
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 94,
                    "end": 100
                  },
                  "start": 92,
                  "end": 100
                },
                "start": 91,
                "end": 100
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 103,
                  "end": 111
                },
                "start": 102,
                "end": 111
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 120,
                      "end": 123
                    },
                    "start": 118,
                    "end": 123
                  },
                  "start": 117,
                  "end": 123
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 146
                    },
                    "start": 128,
                    "end": 146
                  },
                  "start": 125,
                  "end": 146
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 149,
                  "end": 152
                },
                "start": 147,
                "end": 152
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 156,
                "end": 159
              },
              "id": null,
              "generator": false,
              "start": 116,
              "end": 159
            },
            "id": null,
            "generator": false,
            "start": 68,
            "end": 159
          },
          "definite": false,
          "start": 62,
          "end": 159
        }
      ],
      "declare": false,
      "start": 56,
      "end": 160
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 170
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 189
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 190,
                            "end": 191
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 193,
                            "end": 194
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 196,
                            "end": 197
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 199,
                            "end": 200
                          }
                        ],
                        "optional": false,
                        "start": 186,
                        "end": 201
                      },
                      "start": 185,
                      "end": 201
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 209,
                      "end": 218
                    },
                    "start": 207,
                    "end": 218
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 185,
                  "end": 218
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 227
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 228,
                            "end": 229
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 231,
                            "end": 232
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 234,
                            "end": 235
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 237,
                            "end": 238
                          }
                        ],
                        "optional": false,
                        "start": 224,
                        "end": 239
                      },
                      "start": 223,
                      "end": 239
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 252
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 254,
                      "end": 263
                    },
                    "start": 252,
                    "end": 263
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 223,
                  "end": 263
                },
                {
                  "type": "AccessorProperty",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 272
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 273,
                            "end": 274
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 276,
                            "end": 277
                          },
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 279,
                            "end": 280
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 282,
                            "end": 283
                          }
                        ],
                        "optional": false,
                        "start": 269,
                        "end": 284
                      },
                      "start": 268,
                      "end": 284
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 302
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 304,
                      "end": 313
                    },
                    "start": 302,
                    "end": 313
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false,
                  "start": 268,
                  "end": 313
                },
                {
                  "type": "AccessorProperty",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 322
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 323,
                            "end": 324
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 326,
                            "end": 327
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 329,
                            "end": 330
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 332,
                            "end": 333
                          }
                        ],
                        "optional": false,
                        "start": 319,
                        "end": 334
                      },
                      "start": 318,
                      "end": 334
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 361,
                      "end": 370
                    },
                    "start": 359,
                    "end": 370
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false,
                  "start": 318,
                  "end": 370
                }
              ],
              "start": 179,
              "end": 675
            },
            "abstract": false,
            "declare": false,
            "start": 173,
            "end": 675
          },
          "definite": false,
          "start": 167,
          "end": 675
        }
      ],
      "declare": false,
      "start": 161,
      "end": 675
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 675
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "DecoratorContext",
    "start": 130,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 209,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 240,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 254,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 285,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 294,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 304,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 335,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 342,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 361,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  }
]
```

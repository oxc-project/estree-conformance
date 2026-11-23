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
            "name": "id",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 203
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 202,
                  "end": 203
                }
              ],
              "start": 201,
              "end": 205
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 210
                  },
                  "start": 207,
                  "end": 210
                },
                "start": 206,
                "end": 210
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "typeArguments": null,
                "start": 213,
                "end": 214
              },
              "start": 211,
              "end": 214
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 219
          },
          "definite": false,
          "start": 196,
          "end": 219
        }
      ],
      "declare": false,
      "start": 190,
      "end": 220
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
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 234,
                  "end": 240
                },
                "start": 234,
                "end": 242
              },
              "start": 232,
              "end": 242
            },
            "start": 228,
            "end": 242
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 245,
            "end": 247
          },
          "definite": false,
          "start": 228,
          "end": 247
        }
      ],
      "declare": false,
      "start": 222,
      "end": 248
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 262
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
                "start": 265,
                "end": 271
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 283
              },
              "optional": false,
              "computed": false,
              "start": 265,
              "end": 283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 288
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 292
                  },
                  "optional": false,
                  "computed": false,
                  "start": 284,
                  "end": 292
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
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 294
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 305
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 313
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 316,
                                    "end": 320
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
                                      "body": [],
                                      "start": 323,
                                      "end": 326
                                    },
                                    "expression": false,
                                    "start": 320,
                                    "end": 326
                                  },
                                  "method": true,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 316,
                                  "end": 326
                                }
                              ],
                              "start": 314,
                              "end": 328
                            }
                          ],
                          "optional": false,
                          "start": 311,
                          "end": 329
                        }
                      ],
                      "start": 298,
                      "end": 332
                    },
                    "id": null,
                    "generator": false,
                    "start": 293,
                    "end": 332
                  }
                ],
                "optional": false,
                "start": 284,
                "end": 333
              }
            ],
            "optional": false,
            "start": 265,
            "end": 334
          },
          "definite": false,
          "start": 256,
          "end": 334
        }
      ],
      "declare": false,
      "start": 250,
      "end": 335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 335
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
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
    "value": "T",
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
    "value": "T",
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
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 250,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 272,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
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
    "value": "]",
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
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  }
]
```

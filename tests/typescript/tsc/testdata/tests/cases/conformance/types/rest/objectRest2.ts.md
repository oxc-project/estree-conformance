__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectionFromArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objects",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "start": 56,
          "end": 71
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            },
            "start": 77,
            "end": 82
          },
          "start": 73,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 85,
          "end": 87
        },
        "start": 83,
        "end": 87
      },
      "body": null,
      "expression": false,
      "start": 19,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rootConnection",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "start": 117,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 151
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 167
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 173
                      }
                    ],
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
                                "type": "ObjectPattern",
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 196,
                                      "end": 203
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 196,
                                      "end": 203
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 196,
                                    "end": 203
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 205
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "objects",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 216,
                                        "end": 223
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12",
                                        "start": 225,
                                        "end": 227
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 216,
                                      "end": 227
                                    }
                                  ],
                                  "start": 214,
                                  "end": 229
                                },
                                "start": 208,
                                "end": 229
                              },
                              "definite": false,
                              "start": 194,
                              "end": 229
                            }
                          ],
                          "declare": false,
                          "start": 188,
                          "end": 230
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectionFromArray",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 257,
                                    "end": 276
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 277,
                                      "end": 284
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 286,
                                      "end": 290
                                    }
                                  ],
                                  "optional": false,
                                  "start": 257,
                                  "end": 291
                                },
                                "start": 254,
                                "end": 291
                              }
                            ],
                            "start": 244,
                            "end": 299
                          },
                          "start": 237,
                          "end": 300
                        }
                      ],
                      "start": 178,
                      "end": 306
                    },
                    "id": null,
                    "generator": false,
                    "start": 153,
                    "end": 306
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 144,
                  "end": 306
                }
              ],
              "start": 138,
              "end": 310
            },
            "start": 131,
            "end": 311
          }
        ],
        "start": 127,
        "end": 313
      },
      "expression": false,
      "start": 89,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rootConnection",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "test",
            "raw": "'test'",
            "start": 329,
            "end": 335
          }
        ],
        "optional": false,
        "start": 314,
        "end": 336
      },
      "directive": null,
      "start": 314,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 337
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 19,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "connectionFromArray",
    "start": 36,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 56,
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
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
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
    "value": "rootConnection",
    "start": 98,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
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
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 144,
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
    "value": "async",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 208,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "connectionFromArray",
    "start": 257,
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
    "value": "objects",
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
    "type": "Identifier",
    "value": "args",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
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
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "rootConnection",
    "start": 314,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 329,
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
  }
]
```

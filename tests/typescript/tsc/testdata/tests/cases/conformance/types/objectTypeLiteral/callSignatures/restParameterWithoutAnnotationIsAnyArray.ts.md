__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 117
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 118,
          "end": 122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 124,
        "end": 127
      },
      "expression": false,
      "start": 105,
      "end": 127
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 149,
                "end": 153
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 155,
              "end": 158
            },
            "expression": false,
            "start": 136,
            "end": 158
          },
          "definite": false,
          "start": 132,
          "end": 158
        }
      ],
      "declare": false,
      "start": 128,
      "end": 158
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 165
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 169,
                "end": 173
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 175,
                "end": 179
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 184,
              "end": 187
            },
            "id": null,
            "generator": false,
            "start": 168,
            "end": 187
          },
          "definite": false,
          "start": 163,
          "end": 187
        }
      ],
      "declare": false,
      "start": 159,
      "end": 187
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 196
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 206
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 207,
                  "end": 211
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 213,
                "end": 216
              },
              "expression": false,
              "start": 206,
              "end": 216
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 203,
            "end": 216
          }
        ],
        "start": 197,
        "end": 218
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 218
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 231
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 243
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 239,
                "end": 243
              }
            ],
            "returnType": null,
            "start": 238,
            "end": 245
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 253
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 254,
                "end": 258
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 260,
                "end": 264
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 250,
            "end": 266
          }
        ],
        "start": 232,
        "end": 268
      },
      "declare": false,
      "start": 220,
      "end": 268
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 287,
                          "end": 288
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 284,
                        "end": 288
                      }
                    ],
                    "returnType": null,
                    "start": 283,
                    "end": 290
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 298
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 299,
                        "end": 303
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 295,
                    "end": 305
                  }
                ],
                "start": 277,
                "end": 307
              },
              "start": 275,
              "end": 307
            },
            "start": 274,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 307
        }
      ],
      "declare": false,
      "start": 270,
      "end": 307
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 314
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 326
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 327,
                      "end": 331
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 333,
                    "end": 336
                  },
                  "expression": false,
                  "start": 326,
                  "end": 336
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 323,
                "end": 336
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 357
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 362
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 358,
                      "end": 362
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 368
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 364,
                      "end": 368
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 370,
                    "end": 373
                  },
                  "expression": false,
                  "start": 345,
                  "end": 373
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 342,
                "end": 373
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 387
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 383,
                      "end": 387
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 392,
                    "end": 395
                  },
                  "id": null,
                  "generator": false,
                  "start": 382,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 379,
                "end": 395
              }
            ],
            "start": 317,
            "end": 397
          },
          "definite": false,
          "start": 313,
          "end": 397
        }
      ],
      "declare": false,
      "start": 309,
      "end": 397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 105,
  "end": 397
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 105,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 220,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
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
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 345,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  }
]
```

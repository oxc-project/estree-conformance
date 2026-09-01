__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "importKind": "value",
          "start": 60,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 80,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotHappy",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                        "name": "fixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 131
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 134,
                          "end": 141
                        },
                        "start": 132,
                        "end": 141
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 126,
                      "end": 141
                    }
                  ],
                  "start": 124,
                  "end": 143
                },
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
                        "start": 148,
                        "end": 153
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 156,
                          "end": 162
                        },
                        "start": 154,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 148,
                      "end": 162
                    }
                  ],
                  "start": 146,
                  "end": 164
                }
              ],
              "start": 124,
              "end": 164
            },
            "start": 121,
            "end": 165
          },
          "start": 116,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 180
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            ],
            "start": 180,
            "end": 185
          },
          "start": 168,
          "end": 185
        },
        "start": 166,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Happy",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 209
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "fixed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    },
                    "start": 225,
                    "end": 234
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 235
                },
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
                    "start": 236,
                    "end": 241
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 244,
                      "end": 250
                    },
                    "start": 242,
                    "end": 250
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 236,
                  "end": 250
                }
              ],
              "start": 217,
              "end": 252
            },
            "start": 215,
            "end": 252
          },
          "start": 210,
          "end": 252
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 267
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 268,
                "end": 271
              }
            ],
            "start": 267,
            "end": 272
          },
          "start": 255,
          "end": 272
        },
        "start": 253,
        "end": 272
      },
      "body": null,
      "expression": false,
      "start": 187,
      "end": 273
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
            "name": "RootNotHappy",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 293
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NotHappy",
                  "start": 304,
                  "end": 312
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "start": 313,
                      "end": 324
                    },
                    "value": {
                      "type": "Literal",
                      "value": "my-test-id",
                      "raw": "\"my-test-id\"",
                      "start": 325,
                      "end": 337
                    },
                    "start": 313,
                    "end": 337
                  }
                ],
                "selfClosing": true,
                "start": 303,
                "end": 340
              },
              "children": [],
              "closingElement": null,
              "start": 303,
              "end": 340
            },
            "id": null,
            "generator": false,
            "start": 296,
            "end": 341
          },
          "definite": false,
          "start": 281,
          "end": 341
        }
      ],
      "declare": false,
      "start": 275,
      "end": 342
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
            "name": "RootHappy",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 358
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Happy",
                  "start": 369,
                  "end": 374
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "start": 375,
                      "end": 386
                    },
                    "value": {
                      "type": "Literal",
                      "value": "my-test-id",
                      "raw": "\"my-test-id\"",
                      "start": 387,
                      "end": 399
                    },
                    "start": 375,
                    "end": 399
                  }
                ],
                "selfClosing": true,
                "start": 368,
                "end": 402
              },
              "children": [],
              "closingElement": null,
              "start": 368,
              "end": 402
            },
            "id": null,
            "generator": false,
            "start": 361,
            "end": 403
          },
          "definite": false,
          "start": 349,
          "end": 403
        }
      ],
      "declare": false,
      "start": 343,
      "end": 404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 404
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 60,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 80,
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
    "value": "declare",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 98,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "NotHappy",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
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
    "value": "ReactElement",
    "start": 168,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 195,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 244,
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
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 255,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "RootNotHappy",
    "start": 281,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXIdentifier",
    "value": "NotHappy",
    "start": 304,
    "end": 312
  },
  {
    "type": "JSXIdentifier",
    "value": "data-testid",
    "start": 313,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "JSXText",
    "value": "\"my-test-id\"",
    "start": 325,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
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
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "RootHappy",
    "start": 349,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "JSXIdentifier",
    "value": "Happy",
    "start": 369,
    "end": 374
  },
  {
    "type": "JSXIdentifier",
    "value": "data-testid",
    "start": 375,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "JSXText",
    "value": "\"my-test-id\"",
    "start": 387,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  }
]
```

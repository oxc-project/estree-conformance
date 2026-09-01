__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 49
            },
            "declare": false,
            "start": 28,
            "end": 49
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 81
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 95
                  },
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
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 115
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 118,
                              "end": 124
                            },
                            "start": 116,
                            "end": 124
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 111,
                          "end": 125
                        }
                      ],
                      "start": 97,
                      "end": 135
                    },
                    "start": 95,
                    "end": 135
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 135
                }
              ],
              "start": 82,
              "end": 141
            },
            "declare": false,
            "start": 54,
            "end": 141
          }
        ],
        "start": 22,
        "end": 143
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 162,
            "end": 165
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 161,
          "end": 166
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
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
                    "name": "div",
                    "start": 174,
                    "end": 177
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 178,
                        "end": 182
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 183,
                        "end": 188
                      },
                      "start": 178,
                      "end": 188
                    }
                  ],
                  "selfClosing": true,
                  "start": 173,
                  "end": 191
                },
                "children": [],
                "closingElement": null,
                "start": 173,
                "end": 191
              },
              "id": null,
              "generator": false,
              "start": 167,
              "end": 191
            },
            "start": 166,
            "end": 192
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 194,
            "end": 197
          },
          "start": 192,
          "end": 198
        },
        "start": 161,
        "end": 198
      },
      "directive": null,
      "start": 161,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 217,
            "end": 220
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 216,
          "end": 221
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
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
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 228,
                    "end": 231
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 232,
                        "end": 236
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 237,
                        "end": 242
                      },
                      "start": 232,
                      "end": 242
                    }
                  ],
                  "selfClosing": true,
                  "start": 227,
                  "end": 245
                },
                "children": [],
                "closingElement": null,
                "start": 227,
                "end": 245
              },
              "id": null,
              "generator": false,
              "start": 222,
              "end": 245
            },
            "start": 221,
            "end": 246
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 248,
            "end": 251
          },
          "start": 246,
          "end": 252
        },
        "start": 216,
        "end": 252
      },
      "directive": null,
      "start": 216,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 266,
            "end": 269
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 265,
          "end": 270
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
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
                    "name": "div",
                    "start": 279,
                    "end": 282
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 283,
                        "end": 287
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 288,
                        "end": 293
                      },
                      "start": 283,
                      "end": 293
                    }
                  ],
                  "selfClosing": true,
                  "start": 278,
                  "end": 296
                },
                "children": [],
                "closingElement": null,
                "start": 278,
                "end": 296
              },
              "id": null,
              "generator": false,
              "start": 271,
              "end": 297
            },
            "start": 270,
            "end": 298
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 300,
            "end": 303
          },
          "start": 298,
          "end": 304
        },
        "start": 265,
        "end": 304
      },
      "directive": null,
      "start": 265,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 322,
            "end": 325
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 321,
          "end": 326
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
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
                    "name": "div",
                    "start": 334,
                    "end": 337
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 338,
                        "end": 342
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 343,
                        "end": 348
                      },
                      "start": 338,
                      "end": 348
                    }
                  ],
                  "selfClosing": false,
                  "start": 333,
                  "end": 349
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 351,
                    "end": 354
                  },
                  "start": 349,
                  "end": 355
                },
                "start": 333,
                "end": 355
              },
              "id": null,
              "generator": false,
              "start": 327,
              "end": 355
            },
            "start": 326,
            "end": 356
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 358,
            "end": 361
          },
          "start": 356,
          "end": 362
        },
        "start": 321,
        "end": 362
      },
      "directive": null,
      "start": 321,
      "end": 363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 363
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 54,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "text",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
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
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 174,
    "end": 177
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "JSXText",
    "value": "\"wat\"",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 193,
    "end": 194
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 228,
    "end": 231
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "JSXText",
    "value": "\"wat\"",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 247,
    "end": 248
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 279,
    "end": 282
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXText",
    "value": "\"wat\"",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 299,
    "end": 300
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 334,
    "end": 337
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "JSXText",
    "value": "\"wat\"",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 350,
    "end": 351
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 357,
    "end": 358
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  }
]
```

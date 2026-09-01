__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClientSource",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "client",
                  "raw": "\"client\"",
                  "start": 33,
                  "end": 41
                },
                "start": 33,
                "end": 41
              },
              "start": 31,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 42
          }
        ],
        "start": 23,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ServiceSource",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 69
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "service",
                  "raw": "\"service\"",
                  "start": 80,
                  "end": 89
                },
                "start": 80,
                "end": 89
              },
              "start": 78,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 90
          }
        ],
        "start": 70,
        "end": 92
      },
      "declare": false,
      "start": 46,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDisplaySource",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClientSource",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 139
                  },
                  "typeArguments": null,
                  "start": 127,
                  "end": 139
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ServiceSource",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 142,
                  "end": 155
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 158,
                  "end": 167
                }
              ],
              "start": 127,
              "end": 167
            },
            "start": 125,
            "end": 167
          },
          "start": 119,
          "end": 167
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 170,
          "end": 177
        },
        "start": 168,
        "end": 177
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 196
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 202
                },
                "optional": true,
                "computed": false,
                "start": 190,
                "end": 202
              },
              "start": 190,
              "end": 202
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "client",
                  "raw": "\"client\"",
                  "start": 215,
                  "end": 223
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 238,
                      "end": 242
                    },
                    "start": 231,
                    "end": 243
                  }
                ],
                "start": 210,
                "end": 243
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "service",
                  "raw": "\"service\"",
                  "start": 253,
                  "end": 262
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 277,
                      "end": 282
                    },
                    "start": 270,
                    "end": 283
                  }
                ],
                "start": 248,
                "end": 283
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 302
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 317,
                      "end": 322
                    },
                    "start": 310,
                    "end": 323
                  }
                ],
                "start": 288,
                "end": 323
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "neverReached",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 355
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 362
                        }
                      ],
                      "optional": false,
                      "start": 343,
                      "end": 363
                    },
                    "directive": null,
                    "start": 343,
                    "end": 364
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 378,
                      "end": 383
                    },
                    "start": 371,
                    "end": 384
                  }
                ],
                "start": 328,
                "end": 384
              }
            ],
            "start": 182,
            "end": 388
          }
        ],
        "start": 178,
        "end": 390
      },
      "expression": false,
      "start": 94,
      "end": 390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "neverReached",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 413
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 418,
              "end": 423
            },
            "start": 416,
            "end": 423
          },
          "start": 414,
          "end": 423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 426,
          "end": 430
        },
        "start": 424,
        "end": 430
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 431,
        "end": 433
      },
      "expression": false,
      "start": 392,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ClientSource",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"client\"",
    "start": 33,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 46,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "ServiceSource",
    "start": 56,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"service\"",
    "start": 80,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 94,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "isDisplaySource",
    "start": 103,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "ClientSource",
    "start": 127,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "ServiceSource",
    "start": 142,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 158,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 170,
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
    "value": "switch",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 210,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"client\"",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 231,
    "end": 237
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 248,
    "end": 252
  },
  {
    "type": "String",
    "value": "\"service\"",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 270,
    "end": 276
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 288,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "neverReached",
    "start": 343,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 356,
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
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 371,
    "end": 377
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 392,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "neverReached",
    "start": 401,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "_v",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  }
]
```

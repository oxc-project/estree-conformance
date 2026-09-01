__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 31,
                      "end": 35
                    },
                    "start": 31,
                    "end": 35
                  },
                  "start": 29,
                  "end": 35
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 35
              }
            ],
            "start": 21,
            "end": 37
          }
        ],
        "start": 12,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 73
              },
              "typeArguments": null,
              "start": 69,
              "end": 73
            },
            "start": 67,
            "end": 73
          },
          "start": 63,
          "end": 73
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 76,
          "end": 82
        },
        "start": 74,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 104
                },
                "prefix": true,
                "start": 93,
                "end": 104
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 109,
                "end": 117
              },
              "start": 93,
              "end": 117
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\"",
                        "start": 145,
                        "end": 176
                      }
                    ],
                    "start": 135,
                    "end": 177
                  },
                  "start": 129,
                  "end": 178
                }
              ],
              "start": 119,
              "end": 184
            },
            "alternate": null,
            "start": 89,
            "end": 184
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 200
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 196,
              "end": 207
            },
            "start": 189,
            "end": 208
          }
        ],
        "start": 83,
        "end": 210
      },
      "expression": false,
      "start": 40,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 236,
              "end": 237
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__tag__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 255
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 257,
                      "end": 264
                    },
                    "start": 255,
                    "end": 264
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 248,
                  "end": 264
                }
              ],
              "start": 246,
              "end": 265
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 265
          }
        ],
        "start": 235,
        "end": 266
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 273,
                  "end": 279
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 283
                  },
                  "typeArguments": null,
                  "start": 282,
                  "end": 283
                }
              ],
              "start": 273,
              "end": 283
            },
            "start": 271,
            "end": 283
          },
          "start": 267,
          "end": 283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 286,
          "end": 292
        },
        "start": 284,
        "end": 292
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "prefix": true,
                "start": 303,
                "end": 314
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 319,
                "end": 327
              },
              "start": 303,
              "end": 327
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\"",
                        "start": 355,
                        "end": 386
                      }
                    ],
                    "start": 345,
                    "end": 387
                  },
                  "start": 339,
                  "end": 388
                }
              ],
              "start": 329,
              "end": 394
            },
            "alternate": null,
            "start": 299,
            "end": 394
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 410
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 417
              },
              "optional": false,
              "computed": false,
              "start": 406,
              "end": 417
            },
            "start": 399,
            "end": 418
          }
        ],
        "start": 293,
        "end": 420
      },
      "expression": false,
      "start": 212,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Hash",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "__hash",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "getHashLength",
    "start": 49,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Hash",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
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
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 105,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 129,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"This doesn't look like a hash\"",
    "start": 145,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "getHashLength2",
    "start": 221,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 238,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "__tag__",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "if",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 303,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 315,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 319,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 339,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "\"This doesn't look like a hash\"",
    "start": 355,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 399,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "hash",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  }
]
```

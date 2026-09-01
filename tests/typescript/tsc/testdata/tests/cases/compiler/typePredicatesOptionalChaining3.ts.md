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
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "breed",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Breed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 34
                },
                "typeArguments": null,
                "start": 29,
                "end": 34
              },
              "start": 27,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 35
          }
        ],
        "start": 17,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Breed",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 72
          }
        ],
        "start": 54,
        "end": 74
      },
      "declare": false,
      "start": 38,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNil",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 106,
              "end": 113
            },
            "start": 104,
            "end": 113
          },
          "start": 99,
          "end": 113
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 125,
                  "end": 134
                },
                {
                  "type": "TSNullKeyword",
                  "start": 137,
                  "end": 141
                }
              ],
              "start": 125,
              "end": 141
            },
            "start": 125,
            "end": 141
          },
          "start": 116,
          "end": 141
        },
        "start": 114,
        "end": 141
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBreedSizeWithoutFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 195
              },
              "typeArguments": null,
              "start": 189,
              "end": 195
            },
            "start": 187,
            "end": 195
          },
          "start": 181,
          "end": 195
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 198,
              "end": 204
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 207,
              "end": 216
            }
          ],
          "start": 198,
          "end": 216
        },
        "start": 196,
        "end": 216
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 231
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "breed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 238
                    },
                    "optional": true,
                    "computed": false,
                    "start": 225,
                    "end": 238
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "size",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 244
                  },
                  "optional": true,
                  "computed": false,
                  "start": 225,
                  "end": 244
                },
                "start": 225,
                "end": 244
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 248,
                "end": 252
              },
              "start": 225,
              "end": 252
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 273
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "breed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 267,
                      "end": 279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 267,
                    "end": 284
                  },
                  "start": 260,
                  "end": 285
                }
              ],
              "start": 254,
              "end": 289
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 317
                  },
                  "start": 301,
                  "end": 318
                }
              ],
              "start": 295,
              "end": 322
            },
            "start": 221,
            "end": 322
          }
        ],
        "start": 217,
        "end": 324
      },
      "expression": false,
      "start": 144,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBreedSizeWithFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 374
              },
              "typeArguments": null,
              "start": 368,
              "end": 374
            },
            "start": 366,
            "end": 374
          },
          "start": 360,
          "end": 374
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 377,
              "end": 383
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 386,
              "end": 395
            }
          ],
          "start": 377,
          "end": 395
        },
        "start": 375,
        "end": 395
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNil",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 410
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 417
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "breed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 424
                        },
                        "optional": true,
                        "computed": false,
                        "start": 411,
                        "end": 424
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 430
                      },
                      "optional": true,
                      "computed": false,
                      "start": 411,
                      "end": 430
                    },
                    "start": 411,
                    "end": 430
                  }
                ],
                "optional": false,
                "start": 405,
                "end": 431
              },
              "prefix": true,
              "start": 404,
              "end": 431
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 452
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "breed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 446,
                      "end": 458
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 463
                    },
                    "optional": false,
                    "computed": false,
                    "start": 446,
                    "end": 463
                  },
                  "start": 439,
                  "end": 464
                }
              ],
              "start": 433,
              "end": 468
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 496
                  },
                  "start": 480,
                  "end": 497
                }
              ],
              "start": 474,
              "end": 501
            },
            "start": 400,
            "end": 501
          }
        ],
        "start": 396,
        "end": 503
      },
      "expression": false,
      "start": 326,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 503
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
    "value": "Animal",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "breed",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Breed",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Breed",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 62,
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
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
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
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "isNil",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 125,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 135,
    "end": 136
  },
  {
    "type": "Null",
    "value": "null",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "getBreedSizeWithoutFunction",
    "start": 153,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "breed",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 245,
    "end": 247
  },
  {
    "type": "Null",
    "value": "null",
    "start": 248,
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
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "breed",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 301,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 308,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 326,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "getBreedSizeWithFunction",
    "start": 335,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 368,
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
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 386,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "isNil",
    "start": 405,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 417,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "breed",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 424,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 439,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "breed",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 480,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 487,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  }
]
```

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
        "name": "FooAndBaz",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 61
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 71,
                    "end": 78
                  },
                  "start": 69,
                  "end": 78
                },
                "accessibility": null,
                "static": false,
                "start": 66,
                "end": 78
              }
            ],
            "start": 64,
            "end": 80
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 88
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 90,
                    "end": 97
                  },
                  "start": 88,
                  "end": 97
                },
                "accessibility": null,
                "static": false,
                "start": 85,
                "end": 97
              }
            ],
            "start": 83,
            "end": 99
          }
        ],
        "start": 64,
        "end": 99
      },
      "declare": false,
      "start": 47,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Disjoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 137
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 137,
                  "end": 145
                },
                "accessibility": null,
                "static": false,
                "start": 123,
                "end": 146
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 159
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 162,
                    "end": 167
                  },
                  "start": 160,
                  "end": 167
                },
                "accessibility": null,
                "static": false,
                "start": 147,
                "end": 168
              }
            ],
            "start": 121,
            "end": 170
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 190
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 193,
                    "end": 198
                  },
                  "start": 191,
                  "end": 198
                },
                "accessibility": null,
                "static": false,
                "start": 176,
                "end": 199
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 212
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooAndBaz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 214,
                    "end": 223
                  },
                  "start": 212,
                  "end": 223
                },
                "accessibility": null,
                "static": false,
                "start": 200,
                "end": 224
              }
            ],
            "start": 174,
            "end": 226
          }
        ],
        "start": 119,
        "end": 226
      },
      "declare": false,
      "start": 102,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Disjoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 260
              },
              "typeArguments": null,
              "start": 252,
              "end": 260
            },
            "start": 250,
            "end": 260
          },
          "start": 244,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 263,
          "end": 269
        },
        "start": 261,
        "end": 269
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 280,
              "end": 290
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 318
                    },
                    "optional": false,
                    "computed": false,
                    "start": 308,
                    "end": 318
                  },
                  "start": 302,
                  "end": 319
                }
              ],
              "start": 292,
              "end": 325
            },
            "alternate": null,
            "start": 276,
            "end": 325
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 367
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "optional": false,
              "computed": false,
              "start": 361,
              "end": 373
            },
            "start": 354,
            "end": 374
          }
        ],
        "start": 270,
        "end": 376
      },
      "expression": false,
      "start": 229,
      "end": 376
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TrivialIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 402
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 408
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 410,
                      "end": 411
                    },
                    "start": 410,
                    "end": 411
                  },
                  "start": 408,
                  "end": 411
                },
                "accessibility": null,
                "static": false,
                "start": 407,
                "end": 411
              }
            ],
            "start": 405,
            "end": 413
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 421,
                      "end": 422
                    },
                    "start": 421,
                    "end": 422
                  },
                  "start": 419,
                  "end": 422
                },
                "accessibility": null,
                "static": false,
                "start": 418,
                "end": 422
              }
            ],
            "start": 416,
            "end": 424
          }
        ],
        "start": 405,
        "end": 424
      },
      "declare": false,
      "start": 378,
      "end": 425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "want0",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 441
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 445,
                "end": 446
              },
              "start": 445,
              "end": 446
            },
            "start": 443,
            "end": 446
          },
          "start": 442,
          "end": 446
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 448,
        "end": 450
      },
      "expression": false,
      "start": 427,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 466
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 470,
                    "end": 471
                  },
                  "start": 470,
                  "end": 471
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TrivialIntersection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 493
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 493
                }
              ],
              "start": 470,
              "end": 493
            },
            "start": 468,
            "end": 493
          },
          "start": 467,
          "end": 493
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 511,
                "end": 512
              },
              "start": 505,
              "end": 512
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "want0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 529
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 531
                      }
                    ],
                    "optional": false,
                    "start": 524,
                    "end": 532
                  },
                  "directive": null,
                  "start": 524,
                  "end": 533
                }
              ],
              "start": 514,
              "end": 568
            },
            "alternate": null,
            "start": 501,
            "end": 568
          }
        ],
        "start": 495,
        "end": 570
      },
      "expression": false,
      "start": 452,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "FooAndBaz",
    "start": 52,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Disjoint",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 123,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 200,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "FooAndBaz",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 229,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Disjoint",
    "start": 252,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 287,
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
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 378,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "TrivialIntersection",
    "start": 383,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 427,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "want0",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 452,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "TrivialIntersection",
    "start": 474,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 507,
    "end": 510
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "want0",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  }
]
```

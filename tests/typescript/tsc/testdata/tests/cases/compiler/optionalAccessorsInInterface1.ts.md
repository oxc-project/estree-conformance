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
        "name": "MyPropertyDescriptor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 30
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 37,
            "end": 50
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  },
                  "start": 62,
                  "end": 67
                },
                "start": 61,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 68,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 55,
            "end": 75
          }
        ],
        "start": 31,
        "end": 77
      },
      "declare": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineMyProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            },
            "start": 114,
            "end": 119
          },
          "start": 113,
          "end": 119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
            },
            "start": 122,
            "end": 130
          },
          "start": 121,
          "end": 130
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 164
              },
              "typeArguments": null,
              "start": 144,
              "end": 164
            },
            "start": 142,
            "end": 164
          },
          "start": 132,
          "end": 164
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 167,
          "end": 170
        },
        "start": 165,
        "end": 170
      },
      "body": null,
      "expression": false,
      "start": 79,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineMyProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 189,
            "end": 191
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 193,
            "end": 199
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
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
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 229,
                          "end": 230
                        },
                        "start": 222,
                        "end": 231
                      }
                    ],
                    "start": 220,
                    "end": 233
                  },
                  "expression": false,
                  "start": 208,
                  "end": 233
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 233
              }
            ],
            "start": 201,
            "end": 235
          }
        ],
        "optional": false,
        "start": 172,
        "end": 236
      },
      "directive": null,
      "start": 172,
      "end": 237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPropertyDescriptor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 270
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
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 289,
                    "end": 292
                  },
                  "start": 286,
                  "end": 292
                },
                "start": 283,
                "end": 292
              },
              "start": 281,
              "end": 292
            },
            "accessibility": null,
            "static": false,
            "start": 277,
            "end": 293
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 308,
                        "end": 311
                      },
                      "start": 306,
                      "end": 311
                    },
                    "start": 305,
                    "end": 311
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 316,
                    "end": 320
                  },
                  "start": 313,
                  "end": 320
                },
                "start": 304,
                "end": 320
              },
              "start": 302,
              "end": 320
            },
            "accessibility": null,
            "static": false,
            "start": 298,
            "end": 321
          }
        ],
        "start": 271,
        "end": 323
      },
      "declare": false,
      "start": 239,
      "end": 323
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineMyProperty2",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 363,
              "end": 366
            },
            "start": 361,
            "end": 366
          },
          "start": 360,
          "end": 366
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 371,
              "end": 377
            },
            "start": 369,
            "end": 377
          },
          "start": 368,
          "end": 377
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropertyDescriptor2",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 412
              },
              "typeArguments": null,
              "start": 391,
              "end": 412
            },
            "start": 389,
            "end": 412
          },
          "start": 379,
          "end": 412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        },
        "start": 413,
        "end": 418
      },
      "body": null,
      "expression": false,
      "start": 325,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineMyProperty2",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 438,
            "end": 440
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 442,
            "end": 448
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 455
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
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 478,
                          "end": 479
                        },
                        "start": 471,
                        "end": 480
                      }
                    ],
                    "start": 469,
                    "end": 482
                  },
                  "expression": false,
                  "start": 457,
                  "end": 482
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 452,
                "end": 482
              }
            ],
            "start": 450,
            "end": 484
          }
        ],
        "optional": false,
        "start": 420,
        "end": 485
      },
      "directive": null,
      "start": 420,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 486
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
    "value": "MyPropertyDescriptor",
    "start": 10,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 87,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "defineMyProperty",
    "start": 96,
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
    "value": "o",
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
    "value": "any",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "attributes",
    "start": 132,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "MyPropertyDescriptor",
    "start": 144,
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
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "defineMyProperty",
    "start": 172,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "String",
    "value": "\"name\"",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 222,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 239,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "MyPropertyDescriptor2",
    "start": 249,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 286,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "defineMyProperty2",
    "start": 342,
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
    "value": "o",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "attributes",
    "start": 379,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "MyPropertyDescriptor2",
    "start": 391,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "defineMyProperty2",
    "start": 420,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 471,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  }
]
```

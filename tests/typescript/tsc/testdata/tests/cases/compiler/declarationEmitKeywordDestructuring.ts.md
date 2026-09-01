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
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "function",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstract",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 67,
                "end": 74
              },
              "start": 65,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 75
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 87,
                "end": 94
              },
              "start": 85,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 95
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 107,
                "end": 114
              },
              "start": 105,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 115
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 133
          }
        ],
        "start": 9,
        "end": 135
      },
      "declare": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 156
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 152,
              "end": 163
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 165,
              "end": 172
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "typeArguments": null,
              "start": 176,
              "end": 177
            },
            "start": 174,
            "end": 177
          },
          "start": 150,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "start": 185,
            "end": 197
          }
        ],
        "start": 179,
        "end": 199
      },
      "expression": false,
      "start": 138,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "function",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 223
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_function",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 234
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 215,
              "end": 234
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 236,
              "end": 243
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            "start": 245,
            "end": 248
          },
          "start": 213,
          "end": 248
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 267
            },
            "start": 256,
            "end": 268
          }
        ],
        "start": 250,
        "end": 270
      },
      "expression": false,
      "start": 201,
      "end": 270
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abstract",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 294
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_abstract",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 305
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 286,
              "end": 305
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 314
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 307,
              "end": 314
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "typeArguments": null,
              "start": 318,
              "end": 319
            },
            "start": 316,
            "end": 319
          },
          "start": 284,
          "end": 319
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 338
            },
            "start": 327,
            "end": 339
          }
        ],
        "start": 321,
        "end": 341
      },
      "expression": false,
      "start": 272,
      "end": 341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "async",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_async",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 370
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 357,
              "end": 370
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 379
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 372,
              "end": 379
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
              },
              "typeArguments": null,
              "start": 383,
              "end": 384
            },
            "start": 381,
            "end": 384
          },
          "start": 355,
          "end": 384
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 403
            },
            "start": 392,
            "end": 404
          }
        ],
        "start": 386,
        "end": 406
      },
      "expression": false,
      "start": 343,
      "end": 406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 419
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 427
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_await",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 435
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 422,
              "end": 435
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 444
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 437,
              "end": 444
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 449
              },
              "typeArguments": null,
              "start": 448,
              "end": 449
            },
            "start": 446,
            "end": 449
          },
          "start": 420,
          "end": 449
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 468
            },
            "start": 457,
            "end": 469
          }
        ],
        "start": 451,
        "end": 471
      },
      "expression": false,
      "start": 408,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 471
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
    "value": "P",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "enum",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "function",
    "start": 34,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 57,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "enum",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "_enum",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "function",
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
    "type": "Identifier",
    "value": "_function",
    "start": 225,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 256,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 272,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 286,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "_abstract",
    "start": 296,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 327,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 343,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "_async",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 457,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  }
]
```

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
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 12,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 18,
              "end": 21
            },
            "start": 18,
            "end": 21
          }
        ],
        "start": 12,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 49
              },
              "typeArguments": null,
              "start": 45,
              "end": 49
            },
            "start": 43,
            "end": 49
          },
          "start": 39,
          "end": 49
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 55,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "start": 53,
            "end": 58
          },
          "start": 51,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 69,
                "end": 72
              },
              "start": 69,
              "end": 72
            },
            "start": 69,
            "end": 72
          },
          "start": 61,
          "end": 72
        },
        "start": 59,
        "end": 72
      },
      "body": null,
      "expression": false,
      "start": 23,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 100
              },
              "typeArguments": null,
              "start": 96,
              "end": 100
            },
            "start": 94,
            "end": 100
          },
          "start": 90,
          "end": 100
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 106,
                "end": 109
              },
              "start": 106,
              "end": 109
            },
            "start": 104,
            "end": 109
          },
          "start": 102,
          "end": 109
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 116
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 120,
                "end": 123
              },
              "start": 120,
              "end": 123
            },
            "start": 120,
            "end": 123
          },
          "start": 112,
          "end": 123
        },
        "start": 110,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 140
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 151
              },
              "typeArguments": null,
              "start": 147,
              "end": 151
            },
            "start": 145,
            "end": 151
          },
          "start": 141,
          "end": 151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 161
              },
              "typeArguments": null,
              "start": 157,
              "end": 161
            },
            "start": 155,
            "end": 161
          },
          "start": 153,
          "end": 161
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 164,
          "end": 171
        },
        "start": 162,
        "end": 171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 189
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 196
              },
              "start": 185,
              "end": 196
            },
            "start": 178,
            "end": 197
          }
        ],
        "start": 172,
        "end": 199
      },
      "expression": false,
      "start": 125,
      "end": 199
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 212
                },
                "typeArguments": null,
                "start": 208,
                "end": 212
              },
              "start": 206,
              "end": 212
            },
            "start": 205,
            "end": 212
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 224
          },
          "definite": false,
          "start": 205,
          "end": 224
        }
      ],
      "declare": false,
      "start": 201,
      "end": 225
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "kindIs",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 241,
            "end": 244
          }
        ],
        "optional": false,
        "start": 231,
        "end": 245
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "definite": false,
                "start": 257,
                "end": 262
              }
            ],
            "declare": false,
            "start": 253,
            "end": 263
          }
        ],
        "start": 247,
        "end": 265
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "definite": false,
                "start": 281,
                "end": 286
              }
            ],
            "declare": false,
            "start": 277,
            "end": 287
          }
        ],
        "start": 271,
        "end": 289
      },
      "start": 227,
      "end": 289
    },
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
            "name": "kindIs",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 306,
              "end": 309
            }
          ],
          "optional": false,
          "start": 296,
          "end": 310
        },
        "prefix": true,
        "start": 295,
        "end": 310
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 323
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "definite": false,
                "start": 322,
                "end": 327
              }
            ],
            "declare": false,
            "start": 318,
            "end": 328
          }
        ],
        "start": 312,
        "end": 330
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 347
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 351
                },
                "definite": false,
                "start": 346,
                "end": 351
              }
            ],
            "declare": false,
            "start": 342,
            "end": 352
          }
        ],
        "start": 336,
        "end": 354
      },
      "start": 291,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 354
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
    "value": "Kind",
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
    "type": "String",
    "value": "\"A\"",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 18,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "kindIs",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 61,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 66,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "kindIs",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 117,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "kindIs",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 194,
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
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 215,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "kindIs",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "kindIs",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  }
]
```

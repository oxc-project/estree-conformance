__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 37
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "initializer": null,
            "computed": false,
            "start": 40,
            "end": 41
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "initializer": null,
            "computed": false,
            "start": 43,
            "end": 44
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 38,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 49
    },
    {
      "type": "EmptyStatement",
      "start": 49,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 62,
        "end": 65
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 65
    },
    {
      "type": "EmptyStatement",
      "start": 65,
      "end": 66
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 105
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "prefix": true,
            "start": 108,
            "end": 113
          },
          "definite": false,
          "start": 89,
          "end": 113
        }
      ],
      "declare": false,
      "start": 85,
      "end": 114
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 161
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 170,
                "end": 173
              },
              "optional": false,
              "computed": true,
              "start": 165,
              "end": 174
            },
            "prefix": true,
            "start": 164,
            "end": 174
          },
          "definite": false,
          "start": 145,
          "end": 174
        }
      ],
      "declare": false,
      "start": 141,
      "end": 175
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 196
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 205
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "optional": false,
                "computed": false,
                "start": 201,
                "end": 207
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 214
                },
                "property": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 215,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 210,
                "end": 219
              },
              "start": 201,
              "end": 219
            },
            "prefix": true,
            "start": 199,
            "end": 220
          },
          "definite": false,
          "start": 180,
          "end": 220
        }
      ],
      "declare": false,
      "start": 176,
      "end": 221
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 267
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              },
              "prefix": true,
              "start": 271,
              "end": 276
            },
            "prefix": true,
            "start": 270,
            "end": 276
          },
          "definite": false,
          "start": 251,
          "end": 276
        }
      ],
      "declare": false,
      "start": 247,
      "end": 277
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 298
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 309
                    },
                    "property": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 310,
                      "end": 313
                    },
                    "optional": false,
                    "computed": true,
                    "start": 305,
                    "end": 314
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 321
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 323
                    },
                    "optional": false,
                    "computed": false,
                    "start": 317,
                    "end": 323
                  },
                  "start": 305,
                  "end": 323
                },
                "prefix": true,
                "start": 303,
                "end": 324
              },
              "prefix": true,
              "start": 302,
              "end": 324
            },
            "prefix": true,
            "start": 301,
            "end": 324
          },
          "definite": false,
          "start": 282,
          "end": 324
        }
      ],
      "declare": false,
      "start": 278,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 361
        },
        "prefix": true,
        "start": 356,
        "end": 361
      },
      "directive": null,
      "start": 356,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 369
        },
        "prefix": true,
        "start": 363,
        "end": 369
      },
      "directive": null,
      "start": 363,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 378
          },
          "optional": false,
          "computed": false,
          "start": 372,
          "end": 378
        },
        "prefix": true,
        "start": 371,
        "end": 378
      },
      "directive": null,
      "start": 371,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 385
            },
            "prefix": true,
            "start": 380,
            "end": 385
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 392
          }
        ],
        "start": 380,
        "end": 392
      },
      "directive": null,
      "start": 380,
      "end": 393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 393
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 89,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 145,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 180,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 251,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 282,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  }
]
```

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
        "start": 39,
        "end": 43
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 44,
        "end": 47
      },
      "const": false,
      "declare": false,
      "start": 34,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
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
              "start": 62,
              "end": 63
            },
            "initializer": null,
            "computed": false,
            "start": 62,
            "end": 63
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 68,
              "end": 70
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "const": false,
      "declare": false,
      "start": 49,
      "end": 72
    },
    {
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
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
            "start": 96,
            "end": 112
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "prefix": true,
            "start": 115,
            "end": 126
          },
          "definite": false,
          "start": 96,
          "end": 126
        }
      ],
      "declare": false,
      "start": 92,
      "end": 127
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
            "start": 132,
            "end": 148
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 163
            },
            "prefix": true,
            "start": 151,
            "end": 163
          },
          "definite": false,
          "start": 132,
          "end": 163
        }
      ],
      "declare": false,
      "start": 128,
      "end": 164
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
            "start": 195,
            "end": 211
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 226
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 227,
                "end": 230
              },
              "optional": false,
              "computed": true,
              "start": 221,
              "end": 231
            },
            "prefix": true,
            "start": 214,
            "end": 231
          },
          "definite": false,
          "start": 195,
          "end": 231
        }
      ],
      "declare": false,
      "start": 191,
      "end": 232
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
            "start": 237,
            "end": 253
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                  "start": 264,
                  "end": 268
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 269,
                  "end": 270
                },
                "optional": false,
                "computed": true,
                "start": 264,
                "end": 271
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 279
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 280,
                  "end": 283
                },
                "optional": false,
                "computed": true,
                "start": 274,
                "end": 284
              },
              "start": 264,
              "end": 284
            },
            "prefix": true,
            "start": 256,
            "end": 285
          },
          "definite": false,
          "start": 237,
          "end": 285
        }
      ],
      "declare": false,
      "start": 233,
      "end": 286
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
            "start": 322,
            "end": 338
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 359
              },
              "prefix": true,
              "start": 348,
              "end": 359
            },
            "prefix": true,
            "start": 341,
            "end": 359
          },
          "definite": false,
          "start": 322,
          "end": 359
        }
      ],
      "declare": false,
      "start": 318,
      "end": 360
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 381
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
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
                      "start": 406,
                      "end": 410
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 411,
                      "end": 412
                    },
                    "optional": false,
                    "computed": true,
                    "start": 406,
                    "end": 413
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 421
                    },
                    "property": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 422,
                      "end": 425
                    },
                    "optional": false,
                    "computed": true,
                    "start": 416,
                    "end": 426
                  },
                  "start": 406,
                  "end": 426
                },
                "prefix": true,
                "start": 398,
                "end": 427
              },
              "prefix": true,
              "start": 391,
              "end": 427
            },
            "prefix": true,
            "start": 384,
            "end": 427
          },
          "definite": false,
          "start": 365,
          "end": 427
        }
      ],
      "declare": false,
      "start": 361,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 470
        },
        "prefix": true,
        "start": 459,
        "end": 470
      },
      "directive": null,
      "start": 459,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 484
        },
        "prefix": true,
        "start": 472,
        "end": 484
      },
      "directive": null,
      "start": 472,
      "end": 485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 498
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "optional": false,
          "computed": false,
          "start": 493,
          "end": 500
        },
        "prefix": true,
        "start": 486,
        "end": 500
      },
      "directive": null,
      "start": 486,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 513
            },
            "prefix": true,
            "start": 502,
            "end": 513
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 520
          }
        ],
        "start": 502,
        "end": 520
      },
      "directive": null,
      "start": 502,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 521
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 34,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 49,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
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
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 96,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 132,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 151,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 195,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 214,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 237,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 322,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 341,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 348,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 365,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 384,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 391,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 410,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 459,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 486,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 502,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  }
]
```

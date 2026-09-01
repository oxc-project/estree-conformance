__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "start": 86,
          "end": 90
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 114,
          "end": 117
        },
        "abstract": false,
        "declare": false,
        "start": 108,
        "end": 117
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 141,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 151
                  },
                  "optional": false,
                  "computed": false,
                  "start": 141,
                  "end": 151
                },
                "directive": null,
                "start": 141,
                "end": 152
              }
            ],
            "start": 124,
            "end": 158
          }
        ],
        "start": 118,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 86,
      "end": 160
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 232
          },
          "start": 228,
          "end": 232
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "expression": {
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
            "body": [],
            "start": 262,
            "end": 264
          },
          "expression": false,
          "start": 251,
          "end": 264
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 268,
          "end": 271
        },
        "start": 251,
        "end": 271
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 296,
                    "end": 301
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 306
                  },
                  "optional": false,
                  "computed": false,
                  "start": 296,
                  "end": 306
                },
                "directive": null,
                "start": 296,
                "end": 307
              }
            ],
            "start": 279,
            "end": 313
          }
        ],
        "start": 273,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 228,
      "end": 315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 382
          },
          "start": 378,
          "end": 382
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 408,
            "end": 410
          },
          "id": null,
          "generator": false,
          "start": 402,
          "end": 410
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        },
        "start": 401,
        "end": 418
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 443,
                    "end": 448
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 443,
                  "end": 453
                },
                "directive": null,
                "start": 443,
                "end": 454
              }
            ],
            "start": 426,
            "end": 460
          }
        ],
        "start": 420,
        "end": 462
      },
      "abstract": false,
      "declare": false,
      "start": 378,
      "end": 462
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 462
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
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 87,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 97,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 229,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 239,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
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
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 265,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 379,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 383,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 389,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 412,
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
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 426,
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
    "value": "super",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  }
]
```

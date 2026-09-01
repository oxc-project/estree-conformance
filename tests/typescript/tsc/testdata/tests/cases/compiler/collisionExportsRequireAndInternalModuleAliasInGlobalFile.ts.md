__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mOfGloalFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 44,
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 36,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 51
          }
        ],
        "start": 23,
        "end": 53
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 83
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
        },
        "start": 71,
        "end": 85
      },
      "importKind": "value",
      "start": 54,
      "end": 86
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 101
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "start": 104,
        "end": 118
      },
      "importKind": "value",
      "start": 87,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [],
        "start": 120,
        "end": 133
      },
      "directive": null,
      "start": 120,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [],
        "start": 135,
        "end": 148
      },
      "directive": null,
      "start": 135,
      "end": 149
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 163
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 184
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 199
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "importKind": "value",
            "start": 170,
            "end": 202
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 236
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "start": 224,
              "end": 238
            },
            "importKind": "value",
            "start": 207,
            "end": 239
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 255
              },
              "typeArguments": null,
              "arguments": [],
              "start": 244,
              "end": 257
            },
            "directive": null,
            "start": 244,
            "end": 258
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 274
              },
              "typeArguments": null,
              "arguments": [],
              "start": 263,
              "end": 276
            },
            "directive": null,
            "start": 263,
            "end": 277
          }
        ],
        "start": 164,
        "end": 279
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 151,
      "end": 279
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 293
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 321
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 336
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "start": 324,
                "end": 338
              },
              "importKind": "value",
              "start": 307,
              "end": 339
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 300,
            "end": 339
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 365
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 380
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 382
                },
                "start": 368,
                "end": 382
              },
              "importKind": "value",
              "start": 351,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 344,
            "end": 383
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 399
              },
              "typeArguments": null,
              "arguments": [],
              "start": 388,
              "end": 401
            },
            "directive": null,
            "start": 388,
            "end": 402
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 418
              },
              "typeArguments": null,
              "arguments": [],
              "start": 407,
              "end": 420
            },
            "directive": null,
            "start": 407,
            "end": 421
          }
        ],
        "start": 294,
        "end": 423
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 281,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
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
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 42,
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
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 104,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
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
    "value": "require",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 187,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 207,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 224,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 281,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 300,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 307,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 324,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 358,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "mOfGloalFile",
    "start": 368,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 411,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  }
]
```

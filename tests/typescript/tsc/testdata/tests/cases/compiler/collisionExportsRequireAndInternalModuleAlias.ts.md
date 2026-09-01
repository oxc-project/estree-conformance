__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
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
                  "start": 38,
                  "end": 39
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 40,
                  "end": 47
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 47
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 47
            }
          ],
          "start": 19,
          "end": 49
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "start": 67,
        "end": 70
      },
      "importKind": "value",
      "start": 50,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 89,
        "end": 92
      },
      "importKind": "value",
      "start": 72,
      "end": 93
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
          "start": 98,
          "end": 105
        },
        "typeArguments": null,
        "arguments": [],
        "start": 94,
        "end": 107
      },
      "directive": null,
      "start": 94,
      "end": 108
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
          "start": 113,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [],
        "start": 109,
        "end": 122
      },
      "directive": null,
      "start": 109,
      "end": 123
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 137
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
              "start": 151,
              "end": 158
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "start": 161,
              "end": 164
            },
            "importKind": "value",
            "start": 144,
            "end": 165
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
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
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 188
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "start": 187,
              "end": 190
            },
            "importKind": "value",
            "start": 170,
            "end": 191
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
                "start": 200,
                "end": 207
              },
              "typeArguments": null,
              "arguments": [],
              "start": 196,
              "end": 209
            },
            "directive": null,
            "start": 196,
            "end": 210
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
                "start": 219,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [],
              "start": 215,
              "end": 228
            },
            "directive": null,
            "start": 215,
            "end": 229
          }
        ],
        "start": 138,
        "end": 231
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 125,
      "end": 231
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 245
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
                "start": 266,
                "end": 273
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "start": 276,
                "end": 279
              },
              "importKind": "value",
              "start": 259,
              "end": 280
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 252,
            "end": 280
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
                "start": 299,
                "end": 306
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "start": 309,
                "end": 312
              },
              "importKind": "value",
              "start": 292,
              "end": 313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 313
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
                "start": 322,
                "end": 329
              },
              "typeArguments": null,
              "arguments": [],
              "start": 318,
              "end": 331
            },
            "directive": null,
            "start": 318,
            "end": 332
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
                "start": 341,
                "end": 348
              },
              "typeArguments": null,
              "arguments": [],
              "start": 337,
              "end": 350
            },
            "directive": null,
            "start": 337,
            "end": 351
          }
        ],
        "start": 246,
        "end": 353
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 233,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "import",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 144,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "require",
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
    "value": "m",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 233,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 252,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 285,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 292,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  }
]
```

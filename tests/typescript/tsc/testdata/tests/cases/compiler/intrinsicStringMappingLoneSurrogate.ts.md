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
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 160
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 172
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "\ud800",
                "raw": "\"\\uD800\"",
                "start": 173,
                "end": 181
              },
              "start": 173,
              "end": 181
            }
          ],
          "start": 172,
          "end": 182
        },
        "start": 163,
        "end": 182
      },
      "declare": false,
      "start": 154,
      "end": 183
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 190
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 202
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A\ud800B",
                "raw": "\"A\\uD800B\"",
                "start": 203,
                "end": 213
              },
              "start": 203,
              "end": 213
            }
          ],
          "start": 202,
          "end": 214
        },
        "start": 193,
        "end": 214
      },
      "declare": false,
      "start": 184,
      "end": 215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 222
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 235
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "\udc00x",
                "raw": "\"\\uDC00x\"",
                "start": 236,
                "end": 245
              },
              "start": 236,
              "end": 245
            }
          ],
          "start": 235,
          "end": 246
        },
        "start": 225,
        "end": 246
      },
      "declare": false,
      "start": 216,
      "end": 247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Un",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 255
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 270
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "\ud834X",
                "raw": "\"\\uD834X\"",
                "start": 271,
                "end": 280
              },
              "start": 271,
              "end": 280
            }
          ],
          "start": 270,
          "end": 281
        },
        "start": 258,
        "end": 281
      },
      "declare": false,
      "start": 248,
      "end": 282
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "\ud800",
                  "raw": "\"\\uD800\"",
                  "start": 293,
                  "end": 301
                },
                "start": 293,
                "end": 301
              },
              "start": 291,
              "end": 301
            },
            "start": 290,
            "end": 301
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 304,
                "end": 307
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 311,
                "end": 318
              },
              "start": 304,
              "end": 318
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 304,
            "end": 323
          },
          "definite": false,
          "start": 290,
          "end": 323
        }
      ],
      "declare": false,
      "start": 284,
      "end": 324
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a\ud800b",
                  "raw": "\"a\\uD800b\"",
                  "start": 334,
                  "end": 344
                },
                "start": 334,
                "end": 344
              },
              "start": 332,
              "end": 344
            },
            "start": 331,
            "end": 344
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 347,
                "end": 350
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 354,
                "end": 361
              },
              "start": 347,
              "end": 361
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "typeArguments": null,
              "start": 365,
              "end": 366
            },
            "start": 347,
            "end": 366
          },
          "definite": false,
          "start": 331,
          "end": 366
        }
      ],
      "declare": false,
      "start": 325,
      "end": 367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 154,
  "end": 367
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 154,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 163,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "\"\\uD800\"",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 184,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"A\\uD800B\"",
    "start": 203,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 216,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 225,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "String",
    "value": "\"\\uDC00x\"",
    "start": 236,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 248,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Un",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 258,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"\\uD834X\"",
    "start": 271,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"\\uD800\"",
    "start": 293,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 308,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 311,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"a\\uD800b\"",
    "start": 334,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 354,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 362,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "literal",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "😀",
              "raw": "\"😀\"",
              "start": 161,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 174
              },
              "typeArguments": null,
              "start": 169,
              "end": 174
            },
            "start": 161,
            "end": 174
          },
          "definite": false,
          "start": 151,
          "end": 174
        }
      ],
      "declare": false,
      "start": 145,
      "end": 175
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
            "name": "braceEscaped",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 194
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "😀",
              "raw": "\"\\u{D83D}\\u{DE00}\"",
              "start": 197,
              "end": 215
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 224
              },
              "typeArguments": null,
              "start": 219,
              "end": 224
            },
            "start": 197,
            "end": 224
          },
          "definite": false,
          "start": 182,
          "end": 224
        }
      ],
      "declare": false,
      "start": 176,
      "end": 225
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
            "name": "adjacentEscaped",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 247
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "😀",
              "raw": "\"\\uD83D\\uDE00\"",
              "start": 250,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 273
              },
              "typeArguments": null,
              "start": 268,
              "end": 273
            },
            "start": 250,
            "end": 273
          },
          "definite": false,
          "start": 232,
          "end": 273
        }
      ],
      "declare": false,
      "start": 226,
      "end": 274
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "😀",
                  "raw": "\"😀\"",
                  "start": 285,
                  "end": 289
                },
                "start": 285,
                "end": 289
              },
              "start": 283,
              "end": 289
            },
            "start": 282,
            "end": 289
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "braceEscaped",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 304
          },
          "definite": false,
          "start": 282,
          "end": 304
        }
      ],
      "declare": false,
      "start": 276,
      "end": 305
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 329
                },
                "typeArguments": null,
                "start": 315,
                "end": 329
              },
              "start": 313,
              "end": 329
            },
            "start": 312,
            "end": 329
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "braceEscaped",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 344
          },
          "definite": false,
          "start": 312,
          "end": 344
        }
      ],
      "declare": false,
      "start": 306,
      "end": 345
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "adjacentEscaped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 377
                },
                "typeArguments": null,
                "start": 355,
                "end": 377
              },
              "start": 353,
              "end": 377
            },
            "start": 352,
            "end": 377
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "braceEscaped",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 392
          },
          "definite": false,
          "start": 352,
          "end": 392
        }
      ],
      "declare": false,
      "start": 346,
      "end": 393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 145,
  "end": 393
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "literal",
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
    "type": "String",
    "value": "\"😀\"",
    "start": 161,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 166,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 169,
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
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "braceEscaped",
    "start": 182,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"\\u{D83D}\\u{DE00}\"",
    "start": 197,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 219,
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
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "adjacentEscaped",
    "start": 232,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"\\uD83D\\uDE00\"",
    "start": 250,
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
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "\"😀\"",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "braceEscaped",
    "start": 292,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 315,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "braceEscaped",
    "start": 332,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 355,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "adjacentEscaped",
    "start": 362,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "braceEscaped",
    "start": 380,
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

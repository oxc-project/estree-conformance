__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 19
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "regular",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 33
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 36,
                "end": 37
              },
              "computed": false,
              "start": 26,
              "end": 37
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Literal",
                "value": "hyphen-member",
                "raw": "\"hyphen-member\"",
                "start": 43,
                "end": 58
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              },
              "computed": false,
              "start": 43,
              "end": 62
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Literal",
                "value": "123startsWithNumber",
                "raw": "\"123startsWithNumber\"",
                "start": 68,
                "end": 89
              },
              "initializer": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 92,
                "end": 93
              },
              "computed": false,
              "start": 68,
              "end": 93
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Literal",
                "value": "has space",
                "raw": "\"has space\"",
                "start": 99,
                "end": 110
              },
              "initializer": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 113,
                "end": 114
              },
              "computed": false,
              "start": 99,
              "end": 114
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ϳ",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 200
              },
              "initializer": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 203,
                "end": 204
              },
              "computed": false,
              "start": 199,
              "end": 204
            }
          ],
          "start": 20,
          "end": 207
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 207
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 207
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "property": {
                "type": "Literal",
                "value": "hyphen-member",
                "raw": "\"hyphen-member\"",
                "start": 228,
                "end": 243
              },
              "optional": false,
              "computed": true,
              "start": 226,
              "end": 244
            },
            "definite": false,
            "start": 222,
            "end": 244
          }
        ],
        "declare": false,
        "start": 216,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 209,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "property": {
                "type": "Literal",
                "value": "123startsWithNumber",
                "raw": "\"123startsWithNumber\"",
                "start": 265,
                "end": 286
              },
              "optional": false,
              "computed": true,
              "start": 263,
              "end": 287
            },
            "definite": false,
            "start": 259,
            "end": 287
          }
        ],
        "declare": false,
        "start": 253,
        "end": 288
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 246,
      "end": 288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 302,
              "end": 303
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "property": {
                "type": "Literal",
                "value": "has space",
                "raw": "\"has space\"",
                "start": 308,
                "end": 319
              },
              "optional": false,
              "computed": true,
              "start": 306,
              "end": 320
            },
            "definite": false,
            "start": 302,
            "end": 320
          }
        ],
        "declare": false,
        "start": 296,
        "end": 321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 321
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "regular",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 348
              },
              "optional": false,
              "computed": false,
              "start": 339,
              "end": 348
            },
            "definite": false,
            "start": 335,
            "end": 348
          }
        ],
        "declare": false,
        "start": 329,
        "end": 349
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 322,
      "end": 349
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 364
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ϳ",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 367,
              "end": 370
            },
            "definite": false,
            "start": 363,
            "end": 370
          }
        ],
        "declare": false,
        "start": 357,
        "end": 371
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 350,
      "end": 371
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 371
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "regular",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"hyphen-member\"",
    "start": 43,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"123startsWithNumber\"",
    "start": 68,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"has space\"",
    "start": 99,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Ϳ",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"hyphen-member\"",
    "start": 228,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 246,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 253,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "\"123startsWithNumber\"",
    "start": 265,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"has space\"",
    "start": 308,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "regular",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 350,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Ϳ",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  }
]
```

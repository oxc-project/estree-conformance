__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "annotated",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./Card.astro",
                    "raw": "\"./Card.astro\"",
                    "start": 31,
                    "end": 45
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CardProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 24,
                  "end": 56
                },
                "start": 22,
                "end": 56
              },
              "start": 13,
              "end": 56
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 66
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 68,
                    "end": 70
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 61,
                  "end": 70
                }
              ],
              "start": 59,
              "end": 72
            },
            "definite": false,
            "start": 13,
            "end": 72
          }
        ],
        "declare": false,
        "start": 7,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "type": "Identifier",
    "value": "annotated",
    "start": 13,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 31,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "CardProps",
    "start": 47,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "annotated",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "annotated",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./typed",
        "raw": "\"./typed\"",
        "start": 26,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Card",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 50
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Card",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 50
          },
          "exportKind": "value",
          "start": 46,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Card.astro",
        "raw": "\"./Card.astro\"",
        "start": 58,
        "end": 72
      },
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "CardProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 97
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CardProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 97
          },
          "exportKind": "value",
          "start": 88,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Card.astro",
        "raw": "\"./Card.astro\"",
        "start": 105,
        "end": 119
      },
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Widget",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 136
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Widget",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 136
          },
          "exportKind": "value",
          "start": 130,
          "end": 136
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Widget.y.z",
        "raw": "\"./Widget.y.z\"",
        "start": 144,
        "end": 158
      },
      "exportKind": "value",
      "attributes": [],
      "start": 121,
      "end": 159
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
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 171
          },
          "init": {
            "type": "Literal",
            "value": "./Card.astro",
            "raw": "\"./Card.astro\"",
            "start": 174,
            "end": 188
          },
          "definite": false,
          "start": 167,
          "end": 188
        }
      ],
      "declare": false,
      "start": 161,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ImportExpression",
          "source": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 206
          },
          "options": null,
          "phase": null,
          "start": 195,
          "end": 207
        },
        "prefix": true,
        "start": 190,
        "end": 207
      },
      "directive": null,
      "start": 190,
      "end": 208
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 236
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./Card.astro",
                  "raw": "\"./Card.astro\"",
                  "start": 255,
                  "end": 269
                },
                "options": null,
                "phase": null,
                "start": 248,
                "end": 270
              },
              "start": 241,
              "end": 271
            }
          ],
          "start": 239,
          "end": 273
        },
        "expression": false,
        "start": 217,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 273
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
              "name": "inferred",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 295
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./Widget.y.z",
                "raw": "\"./Widget.y.z\"",
                "start": 305,
                "end": 319
              },
              "options": null,
              "phase": null,
              "start": 298,
              "end": 320
            },
            "definite": false,
            "start": 287,
            "end": 320
          }
        ],
        "declare": false,
        "start": 281,
        "end": 321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 341
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 350
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./Card.astro",
                        "raw": "\"./Card.astro\"",
                        "start": 365,
                        "end": 379
                      },
                      "options": null,
                      "phase": null,
                      "start": 358,
                      "end": 380
                    },
                    "id": null,
                    "generator": false,
                    "start": 352,
                    "end": 380
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 346,
                  "end": 380
                }
              ],
              "start": 344,
              "end": 382
            },
            "definite": false,
            "start": 335,
            "end": 382
          }
        ],
        "declare": false,
        "start": 329,
        "end": 383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 322,
      "end": 383
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
              "name": "copied",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 403
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "annotated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 416
                }
              ],
              "start": 406,
              "end": 417
            },
            "definite": false,
            "start": 397,
            "end": 417
          }
        ],
        "declare": false,
        "start": 391,
        "end": 418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 384,
      "end": 418
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 418
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "annotated",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"./typed\"",
    "start": 26,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Card",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 53,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 58,
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
    "value": "export",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "CardProps",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 100,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 105,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Widget",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 139,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"./Widget.y.z\"",
    "start": 144,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 174,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 190,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 217,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 241,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 255,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 274,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "inferred",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"./Widget.y.z\"",
    "start": 305,
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
    "value": "nested",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 355,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"./Card.astro\"",
    "start": 365,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "export",
    "start": 384,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "copied",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "annotated",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  }
]
```

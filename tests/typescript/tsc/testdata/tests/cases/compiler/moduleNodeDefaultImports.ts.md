__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "exportKind": "value",
      "start": 30,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
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
    "value": "void",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 37,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 14,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 43
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 36,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 56,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 27,
      "end": 68
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 76,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "importKind": "value",
          "start": 81,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 101,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 69,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "start": 121,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b.mjs",
        "raw": "\"./b.mjs\"",
        "start": 136,
        "end": 145
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 146
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 163
          },
          "exportKind": "value",
          "start": 156,
          "end": 163
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 171,
        "end": 182
      },
      "exportKind": "value",
      "attributes": [],
      "start": 147,
      "end": 183
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 200
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 207
          },
          "exportKind": "value",
          "start": 193,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 215,
        "end": 226
      },
      "exportKind": "value",
      "attributes": [],
      "start": 184,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 236
        },
        "start": 229,
        "end": 236
      },
      "directive": null,
      "start": 229,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 245
        },
        "start": 238,
        "end": 245
      },
      "directive": null,
      "start": 238,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 248
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "start": 247,
        "end": 254
      },
      "directive": null,
      "start": 247,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 266
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 274
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 274
        },
        "start": 256,
        "end": 274
      },
      "directive": null,
      "start": 256,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 288
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 288
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 293,
          "end": 301
        },
        "start": 276,
        "end": 301
      },
      "directive": null,
      "start": 276,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 323,
        "end": 326
      },
      "directive": null,
      "start": 323,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 328,
        "end": 331
      },
      "directive": null,
      "start": 328,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 334
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 333,
        "end": 336
      },
      "directive": null,
      "start": 333,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 338,
          "end": 339
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 338,
        "end": 341
      },
      "directive": null,
      "start": 338,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 343,
          "end": 355
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 343,
        "end": 357
      },
      "directive": null,
      "start": 343,
      "end": 358
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "optional": false,
          "computed": false,
          "start": 359,
          "end": 367
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 359,
        "end": 369
      },
      "directive": null,
      "start": 359,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 400
          },
          "optional": false,
          "computed": false,
          "start": 391,
          "end": 400
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 391,
        "end": 402
      },
      "directive": null,
      "start": 391,
      "end": 403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 413
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 404,
        "end": 415
      },
      "directive": null,
      "start": 404,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 418
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 426
          },
          "optional": false,
          "computed": false,
          "start": 417,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 417,
        "end": 428
      },
      "directive": null,
      "start": 417,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 430,
          "end": 439
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 430,
        "end": 441
      },
      "directive": null,
      "start": 430,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 455
            },
            "optional": false,
            "computed": false,
            "start": 443,
            "end": 455
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 463
          },
          "optional": false,
          "computed": false,
          "start": 443,
          "end": 463
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 443,
        "end": 465
      },
      "directive": null,
      "start": 443,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 475
            },
            "optional": false,
            "computed": false,
            "start": 467,
            "end": 475
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 483
          },
          "optional": false,
          "computed": false,
          "start": 467,
          "end": 483
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 467,
        "end": 485
      },
      "directive": null,
      "start": 467,
      "end": 486
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 486
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
    "type": "Identifier",
    "value": "a",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./mod.cjs\"",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"./mod.cjs\"",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 96,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"./mod.cjs\"",
    "start": 101,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 126,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 131,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"./b.mjs\"",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 166,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"./mod.cjs\"",
    "start": 171,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 193,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 210,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"./mod.cjs\"",
    "start": 215,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 328,
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
    "type": "Identifier",
    "value": "c",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 406,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 432,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 448,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  }
]
```

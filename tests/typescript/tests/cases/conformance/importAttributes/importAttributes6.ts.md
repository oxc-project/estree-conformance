__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 24,
        "end": 35
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 48
          },
          "value": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 50,
            "end": 51
          },
          "start": 43,
          "end": 51
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing2",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 73
          },
          "start": 62,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 79,
        "end": 90
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 103
          },
          "value": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": true,
                "start": 105,
                "end": 108
              }
            ],
            "expressions": [],
            "start": 105,
            "end": 108
          },
          "start": 98,
          "end": 108
        }
      ],
      "importKind": "value",
      "start": 55,
      "end": 111
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing3",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 130
          },
          "start": 119,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 136,
        "end": 147
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 160
          },
          "value": {
            "type": "Literal",
            "value": null,
            "raw": "/a/g",
            "regex": {
              "pattern": "a",
              "flags": "g"
            },
            "start": 162,
            "end": 166
          },
          "start": 155,
          "end": 166
        }
      ],
      "importKind": "value",
      "start": 112,
      "end": 169
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing4",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "start": 177,
          "end": 188
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 194,
        "end": 205
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 218
          },
          "value": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 221,
                "end": 224
              }
            ],
            "start": 220,
            "end": 225
          },
          "start": 213,
          "end": 225
        }
      ],
      "importKind": "value",
      "start": 170,
      "end": 228
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing5",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 247
          },
          "start": 236,
          "end": 247
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 253,
        "end": 264
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 277
          },
          "value": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 284,
                  "end": 285
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 281,
                "end": 285
              }
            ],
            "start": 279,
            "end": 287
          },
          "start": 272,
          "end": 287
        }
      ],
      "importKind": "value",
      "start": 229,
      "end": 290
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing6",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 309
          },
          "start": 298,
          "end": 309
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 315,
        "end": 326
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 338
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 340,
            "end": 346
          },
          "start": 334,
          "end": 346
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 353
          },
          "value": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": 0,
                "raw": "0.",
                "start": 355,
                "end": 357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 366
              },
              "optional": false,
              "computed": false,
              "start": 355,
              "end": 366
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 355,
            "end": 368
          },
          "start": 348,
          "end": 368
        }
      ],
      "importKind": "value",
      "start": 291,
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
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "thing1",
    "start": 12,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 24,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "thing2",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 74,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 79,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Template",
    "value": "`a`",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 121,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "thing3",
    "start": 124,
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
    "value": "\"./mod.mjs\"",
    "start": 136,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "RegularExpression",
    "value": "/a/g",
    "regex": {
      "flags": "g",
      "pattern": "a"
    },
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "thing4",
    "start": 182,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 189,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 194,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "thing5",
    "start": 241,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 248,
    "end": 252
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 253,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "thing6",
    "start": 303,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 310,
    "end": 314
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 315,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "0.",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 358,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
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

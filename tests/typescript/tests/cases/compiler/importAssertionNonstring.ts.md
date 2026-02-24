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
            "start": 42,
            "end": 47
          },
          "value": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 49,
            "end": 50
          },
          "start": 42,
          "end": 50
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 52
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
            "start": 66,
            "end": 72
          },
          "start": 61,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 78,
        "end": 89
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
            "start": 96,
            "end": 101
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
                "start": 103,
                "end": 106
              }
            ],
            "expressions": [],
            "start": 103,
            "end": 106
          },
          "start": 96,
          "end": 106
        }
      ],
      "importKind": "value",
      "start": 54,
      "end": 108
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
            "start": 122,
            "end": 128
          },
          "start": 117,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 134,
        "end": 145
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
            "start": 152,
            "end": 157
          },
          "value": {
            "type": "Literal",
            "value": null,
            "raw": "/a/g",
            "regex": {
              "pattern": "a",
              "flags": "g"
            },
            "start": 159,
            "end": 163
          },
          "start": 152,
          "end": 163
        }
      ],
      "importKind": "value",
      "start": 110,
      "end": 165
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
            "start": 179,
            "end": 185
          },
          "start": 174,
          "end": 185
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 191,
        "end": 202
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
            "start": 209,
            "end": 214
          },
          "value": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 217,
                "end": 220
              }
            ],
            "start": 216,
            "end": 221
          },
          "start": 209,
          "end": 221
        }
      ],
      "importKind": "value",
      "start": 167,
      "end": 223
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
            "start": 237,
            "end": 243
          },
          "start": 232,
          "end": 243
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 249,
        "end": 260
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
            "start": 267,
            "end": 272
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
                  "start": 276,
                  "end": 277
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 279,
                  "end": 280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 276,
                "end": 280
              }
            ],
            "start": 274,
            "end": 282
          },
          "start": 267,
          "end": 282
        }
      ],
      "importKind": "value",
      "start": 225,
      "end": 284
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
            "start": 298,
            "end": 304
          },
          "start": 293,
          "end": 304
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 310,
        "end": 321
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
            "start": 328,
            "end": 332
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 334,
            "end": 340
          },
          "start": 328,
          "end": 340
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 347
          },
          "value": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": 0,
                "raw": "0.",
                "start": 349,
                "end": 351
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 349,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 349,
            "end": 362
          },
          "start": 342,
          "end": 362
        }
      ],
      "importKind": "value",
      "start": 286,
      "end": 363
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 363
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
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "thing2",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 73,
    "end": 77
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 78,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Template",
    "value": "`a`",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "import",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "thing3",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 134,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "RegularExpression",
    "value": "/a/g",
    "regex": {
      "flags": "g",
      "pattern": "a"
    },
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 176,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "thing4",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 186,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 191,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 234,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "thing5",
    "start": 237,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 244,
    "end": 248
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 249,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "thing6",
    "start": 298,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 305,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 310,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 328,
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
    "value": "\"json\"",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "0.",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 352,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  }
]
```

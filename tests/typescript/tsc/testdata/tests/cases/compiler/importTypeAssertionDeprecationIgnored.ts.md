__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 29,
                  "end": 35
                },
                "start": 27,
                "end": 35
              },
              "accessibility": null,
              "static": false,
              "start": 26,
              "end": 35
            }
          ],
          "start": 24,
          "end": 37
        },
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  }
]
```
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "./types",
          "raw": "\"./types\"",
          "start": 114,
          "end": 123
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 137,
                      "end": 154
                    },
                    "value": {
                      "type": "Literal",
                      "value": "import",
                      "raw": "\"import\"",
                      "start": 156,
                      "end": 164
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 137,
                    "end": 164
                  }
                ],
                "start": 135,
                "end": 166
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 127,
              "end": 166
            }
          ],
          "start": 125,
          "end": 168
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 176
        },
        "typeArguments": null,
        "start": 107,
        "end": 176
      },
      "declare": false,
      "start": 98,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "./types",
          "raw": "\"./types\"",
          "start": 194,
          "end": 203
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 213
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 217,
                      "end": 234
                    },
                    "value": {
                      "type": "Literal",
                      "value": "require",
                      "raw": "\"require\"",
                      "start": 236,
                      "end": 245
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 217,
                    "end": 245
                  }
                ],
                "start": 215,
                "end": 247
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 207,
              "end": 247
            }
          ],
          "start": 205,
          "end": 249
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 257
        },
        "typeArguments": null,
        "start": 187,
        "end": 257
      },
      "declare": false,
      "start": 178,
      "end": 258
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
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./types",
              "raw": "\"./types\"",
              "start": 277,
              "end": 286
            },
            "options": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 296
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "resolution-mode",
                          "raw": "\"resolution-mode\"",
                          "start": 300,
                          "end": 317
                        },
                        "value": {
                          "type": "Literal",
                          "value": "import",
                          "raw": "\"import\"",
                          "start": 319,
                          "end": 327
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 300,
                        "end": 327
                      }
                    ],
                    "start": 298,
                    "end": 329
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 290,
                  "end": 329
                }
              ],
              "start": 288,
              "end": 331
            },
            "phase": null,
            "start": 270,
            "end": 332
          },
          "definite": false,
          "start": 266,
          "end": 332
        }
      ],
      "declare": false,
      "start": 260,
      "end": 333
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
            "typeAnnotation": null,
            "start": 340,
            "end": 341
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./types",
              "raw": "\"./types\"",
              "start": 351,
              "end": 360
            },
            "options": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 370
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "resolution-mode",
                          "raw": "\"resolution-mode\"",
                          "start": 374,
                          "end": 391
                        },
                        "value": {
                          "type": "Literal",
                          "value": "require",
                          "raw": "\"require\"",
                          "start": 393,
                          "end": 402
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 374,
                        "end": 402
                      }
                    ],
                    "start": 372,
                    "end": 404
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 364,
                  "end": 404
                }
              ],
              "start": 362,
              "end": 406
            },
            "phase": null,
            "start": 344,
            "end": 407
          },
          "definite": false,
          "start": 340,
          "end": 407
        }
      ],
      "declare": false,
      "start": 334,
      "end": 408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 98,
  "end": 408
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"./types\"",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 137,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
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
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"./types\"",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 217,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 236,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 251,
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
    "value": "const",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "String",
    "value": "\"./types\"",
    "start": 277,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 300,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 319,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"./types\"",
    "start": 351,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 374,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 393,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  }
]
```

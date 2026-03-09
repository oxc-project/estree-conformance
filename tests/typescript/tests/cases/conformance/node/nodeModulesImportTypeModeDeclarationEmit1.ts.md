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
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "value": "ImportInterface",
    "start": 17,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  }
]
```
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
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
    "value": "RequireInterface",
    "start": 17,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "pkg",
                "raw": "\"pkg\"",
                "start": 42,
                "end": 47
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
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 55
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
                            "start": 58,
                            "end": 75
                          },
                          "value": {
                            "type": "Literal",
                            "value": "require",
                            "raw": "\"require\"",
                            "start": 77,
                            "end": 86
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 58,
                          "end": 86
                        }
                      ],
                      "start": 57,
                      "end": 87
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 51,
                    "end": 87
                  }
                ],
                "start": 49,
                "end": 89
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "RequireInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 107
              },
              "typeArguments": null,
              "start": 35,
              "end": 107
            },
            {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "pkg",
                "raw": "\"pkg\"",
                "start": 121,
                "end": 126
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
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 134
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
                      "start": 136,
                      "end": 165
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 130,
                    "end": 165
                  }
                ],
                "start": 128,
                "end": 167
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 184
              },
              "typeArguments": null,
              "start": 114,
              "end": 184
            }
          ],
          "start": 33,
          "end": 184
        },
        "declare": false,
        "start": 7,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 185
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
              "start": 200,
              "end": 201
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 205,
                  "end": 209
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 213,
                  "end": 216
                },
                "start": 205,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 227,
                  "end": 232
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
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 240
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
                              "start": 243,
                              "end": 260
                            },
                            "value": {
                              "type": "Literal",
                              "value": "require",
                              "raw": "\"require\"",
                              "start": 262,
                              "end": 271
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 243,
                            "end": 271
                          }
                        ],
                        "start": 242,
                        "end": 272
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 236,
                      "end": 272
                    }
                  ],
                  "start": 234,
                  "end": 274
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 292
                },
                "typeArguments": null,
                "start": 220,
                "end": 292
              },
              "start": 205,
              "end": 292
            },
            "definite": false,
            "start": 200,
            "end": 293
          }
        ],
        "declare": false,
        "start": 194,
        "end": 294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 294
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
              "start": 308,
              "end": 309
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 313,
                  "end": 317
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 321,
                  "end": 324
                },
                "start": 313,
                "end": 324
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 335,
                  "end": 340
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
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 348
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
                              "start": 351,
                              "end": 368
                            },
                            "value": {
                              "type": "Literal",
                              "value": "import",
                              "raw": "\"import\"",
                              "start": 370,
                              "end": 378
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 351,
                            "end": 378
                          }
                        ],
                        "start": 350,
                        "end": 379
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 344,
                      "end": 379
                    }
                  ],
                  "start": 342,
                  "end": 381
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 398
                },
                "typeArguments": null,
                "start": 328,
                "end": 398
              },
              "start": 313,
              "end": 398
            },
            "definite": false,
            "start": 308,
            "end": 399
          }
        ],
        "declare": false,
        "start": 302,
        "end": 400
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 295,
      "end": 400
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 400
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 12,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 77,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "RequireInterface",
    "start": 91,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
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
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 169,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 187,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Null",
    "value": "null",
    "start": 205,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 217,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 243,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 262,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 276,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 295,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Null",
    "value": "null",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 325,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 351,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 370,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 383,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  }
]
```

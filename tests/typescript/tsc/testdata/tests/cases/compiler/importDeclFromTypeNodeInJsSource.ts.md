__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 36
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "events",
        "raw": "\"events\"",
        "start": 15,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 52
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventEmitter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 81
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 96,
                          "end": 107
                        },
                        "value": {
                          "type": "TSEmptyBodyFunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": null,
                          "expression": false,
                          "start": 107,
                          "end": 110
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 96,
                        "end": 110
                      }
                    ],
                    "start": 82,
                    "end": 120
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 63,
                  "end": 120
                }
              ],
              "start": 53,
              "end": 126
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 30,
            "end": 126
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 152
            },
            "start": 131,
            "end": 153
          }
        ],
        "start": 24,
        "end": 155
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 155
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "nestNamespaceModule",
        "raw": "\"nestNamespaceModule\"",
        "start": 171,
        "end": 192
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 211
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 214
              },
              "start": 209,
              "end": 214
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 233,
                    "end": 236
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 225,
                  "end": 236
                }
              ],
              "start": 215,
              "end": 242
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 199,
            "end": 242
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 260
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 263
                },
                "start": 258,
                "end": 263
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n3",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 284
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 285,
                    "end": 288
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 277,
                  "end": 288
                }
              ],
              "start": 267,
              "end": 294
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 248,
            "end": 294
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 313
              },
              "optional": false,
              "computed": false,
              "start": 308,
              "end": 313
            },
            "start": 299,
            "end": 314
          }
        ],
        "start": 193,
        "end": 316
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 156,
      "end": 316
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "renameModule",
        "raw": "\"renameModule\"",
        "start": 332,
        "end": 346
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "start": 363,
              "end": 366
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 385,
                    "end": 388
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 377,
                  "end": 388
                }
              ],
              "start": 367,
              "end": 394
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 353,
            "end": 394
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 407
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 413
              },
              "start": 410,
              "end": 413
            },
            "importKind": "value",
            "start": 399,
            "end": 414
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "start": 419,
            "end": 430
          }
        ],
        "start": 347,
        "end": 432
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 317,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"events\"",
    "start": 15,
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
    "value": "namespace",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 40,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 69,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 96,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 140,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 156,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 164,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"nestNamespaceModule\"",
    "start": 171,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 199,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 248,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 277,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 308,
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
    "value": "a2",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 317,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 325,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"renameModule\"",
    "start": 332,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 353,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 399,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
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
            "name": "EventEmitter",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventEmitter",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "importKind": "value",
          "start": 9,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "events",
        "raw": "'events'",
        "start": 29,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 50
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 50
          },
          "importKind": "value",
          "start": 48,
          "end": 50
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "importKind": "value",
          "start": 52,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "nestNamespaceModule",
        "raw": "'nestNamespaceModule'",
        "start": 61,
        "end": 82
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 83
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "importKind": "value",
          "start": 93,
          "end": 94
        }
      ],
      "source": {
        "type": "Literal",
        "value": "renameModule",
        "raw": "'renameModule'",
        "start": 102,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 84,
      "end": 117
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 135
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "EventEmitter",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 156
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 157,
          "end": 160
        },
        "abstract": false,
        "declare": false,
        "start": 126,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 119,
      "end": 160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 179
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 190
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 188,
          "end": 192
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 193,
          "end": 196
        },
        "abstract": false,
        "declare": false,
        "start": 169,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 162,
      "end": 196
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 215
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 226,
          "end": 229
        },
        "abstract": false,
        "declare": false,
        "start": 205,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 229
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 248
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 258
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 259,
          "end": 263
        },
        "abstract": false,
        "declare": false,
        "start": 238,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 231,
      "end": 263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 263
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
    "value": "EventEmitter",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'events'",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 56,
    "end": 60
  },
  {
    "type": "String",
    "value": "'nestNamespaceModule'",
    "start": 61,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 97,
    "end": 101
  },
  {
    "type": "String",
    "value": "'renameModule'",
    "start": 102,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 119,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 132,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 136,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 144,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 175,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 180,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 211,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 231,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 244,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  }
]
```

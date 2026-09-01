__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 35,
              "end": 38
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 23,
            "end": 38
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 90
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 91,
                        "end": 94
                      },
                      "declare": false,
                      "start": 79,
                      "end": 94
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 72,
                    "end": 94
                  }
                ],
                "start": 62,
                "end": 100
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 50,
              "end": 100
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 100
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 120,
              "end": 123
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 106,
            "end": 123
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 144,
              "end": 153
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 154,
              "end": 162
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 129,
            "end": 162
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "start": 168,
            "end": 179
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "init": null,
                "definite": false,
                "start": 189,
                "end": 190
              }
            ],
            "declare": false,
            "start": 185,
            "end": 191
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 211,
              "end": 214
            },
            "expression": false,
            "start": 196,
            "end": 214
          },
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 233,
              "end": 242
            },
            "attributes": [],
            "exportKind": "value",
            "start": 219,
            "end": 243
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "exportKind": "value",
                "start": 257,
                "end": 260
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 248,
            "end": 263
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 280
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "exportKind": "value",
                "start": 277,
                "end": 285
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 293,
              "end": 302
            },
            "exportKind": "value",
            "attributes": [],
            "start": 268,
            "end": 303
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "exportKind": "value",
            "start": 308,
            "end": 325
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 353,
                "end": 356
              },
              "abstract": false,
              "declare": false,
              "start": 345,
              "end": 356
            },
            "exportKind": "value",
            "start": 330,
            "end": 356
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bee",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 380
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 383,
                "end": 386
              },
              "expression": false,
              "start": 368,
              "end": 386
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 361,
            "end": 386
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "importKind": "value",
            "start": 391,
            "end": 404
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 418
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 429,
                "end": 434
              },
              "start": 421,
              "end": 435
            },
            "importKind": "value",
            "start": 409,
            "end": 436
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 456
                },
                "start": 448,
                "end": 456
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 462,
              "end": 471
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 441,
            "end": 472
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportDefaultSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 487
                },
                "start": 484,
                "end": 487
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 493,
              "end": 502
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 477,
            "end": 503
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 520
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 520
                },
                "importKind": "value",
                "start": 517,
                "end": 520
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 528,
              "end": 537
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 508,
            "end": 538
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [],
            "source": {
              "type": "Literal",
              "value": "ambient",
              "raw": "\"ambient\"",
              "start": 550,
              "end": 559
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 543,
            "end": 560
          }
        ],
        "start": 17,
        "end": 562
      },
      "expression": false,
      "start": 0,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 23,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 137,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 196,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 228,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 233,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "from",
    "start": 288,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 308,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 315,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 337,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 361,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "bee",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 391,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 409,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 457,
    "end": 461
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 462,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 488,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 493,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 523,
    "end": 527
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 528,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 543,
    "end": 549
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 550,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  }
]
```

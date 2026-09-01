__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "~popsicle/dist/request",
        "raw": "'~popsicle/dist/request'",
        "start": 15,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Request",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 67,
                "end": 69
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 69
          }
        ],
        "start": 40,
        "end": 71
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "~popsicle/dist/common",
        "raw": "'~popsicle/dist/common'",
        "start": 88,
        "end": 111
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 134
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 134
                },
                "importKind": "value",
                "start": 127,
                "end": 134
              }
            ],
            "source": {
              "type": "Literal",
              "value": "~popsicle/dist/request",
              "raw": "'~popsicle/dist/request'",
              "start": 142,
              "end": 166
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 118,
            "end": 167
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
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 188
                },
                "exportKind": "value",
                "start": 181,
                "end": 188
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 172,
            "end": 191
          }
        ],
        "start": 112,
        "end": 193
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 73,
      "end": 193
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "popsicle",
        "raw": "'popsicle'",
        "start": 210,
        "end": 220
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 239
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "~popsicle/dist/common",
                "raw": "'~popsicle/dist/common'",
                "start": 250,
                "end": 273
              },
              "start": 242,
              "end": 274
            },
            "importKind": "value",
            "start": 227,
            "end": 275
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 294
            },
            "start": 280,
            "end": 295
          }
        ],
        "start": 221,
        "end": 297
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 195,
      "end": 297
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "popsicle-proxy-agent",
        "raw": "'popsicle-proxy-agent'",
        "start": 314,
        "end": 336
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 359
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 359
                },
                "importKind": "value",
                "start": 352,
                "end": 359
              }
            ],
            "source": {
              "type": "Literal",
              "value": "popsicle",
              "raw": "'popsicle'",
              "start": 367,
              "end": 377
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 343,
            "end": 378
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 397
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "request",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 418
                        },
                        "typeArguments": null,
                        "start": 411,
                        "end": 418
                      },
                      "start": 409,
                      "end": 418
                    },
                    "start": 402,
                    "end": 418
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 423,
                    "end": 426
                  },
                  "start": 420,
                  "end": 426
                },
                "start": 401,
                "end": 426
              },
              "start": 399,
              "end": 426
            },
            "body": null,
            "expression": false,
            "start": 383,
            "end": 427
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 446
            },
            "start": 432,
            "end": 447
          }
        ],
        "start": 337,
        "end": 449
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 299,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 449
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
    "value": "'~popsicle/dist/request'",
    "start": 15,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 81,
    "end": 87
  },
  {
    "type": "String",
    "value": "'~popsicle/dist/common'",
    "start": 88,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 118,
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
    "value": "Request",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 137,
    "end": 141
  },
  {
    "type": "String",
    "value": "'~popsicle/dist/request'",
    "start": 142,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 203,
    "end": 209
  },
  {
    "type": "String",
    "value": "'popsicle'",
    "start": 210,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'~popsicle/dist/common'",
    "start": 250,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 289,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 307,
    "end": 313
  },
  {
    "type": "String",
    "value": "'popsicle-proxy-agent'",
    "start": 314,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 362,
    "end": 366
  },
  {
    "type": "String",
    "value": "'popsicle'",
    "start": 367,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
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
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 402,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 411,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 420,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 441,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  }
]
```

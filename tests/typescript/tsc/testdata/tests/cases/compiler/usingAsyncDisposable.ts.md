__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncDisposable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncDisposable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 46
                },
                "typeArguments": null,
                "start": 31,
                "end": 46
              },
              "start": 29,
              "end": 46
            },
            "start": 14,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 46
        }
      ],
      "declare": true,
      "start": 0,
      "end": 47
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
            "name": "optionalAsyncDisposable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncDisposable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 102
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 105,
                    "end": 109
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 112,
                    "end": 121
                  }
                ],
                "start": 87,
                "end": 121
              },
              "start": 85,
              "end": 121
            },
            "start": 62,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 121
        }
      ],
      "declare": true,
      "start": 48,
      "end": 122
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
            "name": "disposable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Disposable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 159
                },
                "typeArguments": null,
                "start": 149,
                "end": 159
              },
              "start": 147,
              "end": 159
            },
            "start": 137,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 159
        }
      ],
      "declare": true,
      "start": 123,
      "end": 160
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
            "name": "both",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncDisposable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 196
                    },
                    "typeArguments": null,
                    "start": 181,
                    "end": 196
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Disposable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 209
                  }
                ],
                "start": 181,
                "end": 209
              },
              "start": 179,
              "end": 209
            },
            "start": 175,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 209
        }
      ],
      "declare": true,
      "start": 161,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncResource",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 231
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncDisposable",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 249
          },
          "definite": false,
          "start": 218,
          "end": 249
        }
      ],
      "declare": false,
      "start": 212,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalAsyncResource",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 278
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalAsyncDisposable",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 304
          },
          "definite": false,
          "start": 257,
          "end": 304
        }
      ],
      "declare": false,
      "start": 251,
      "end": 305
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "syncResource",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 324
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "disposable",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 337
          },
          "definite": false,
          "start": 312,
          "end": 337
        }
      ],
      "declare": false,
      "start": 306,
      "end": 338
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eitherResource",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 359
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 366
          },
          "definite": false,
          "start": 345,
          "end": 366
        }
      ],
      "declare": false,
      "start": 339,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "awaitedAsyncResource",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 401
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncDisposable",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 419
          },
          "definite": false,
          "start": 381,
          "end": 419
        }
      ],
      "declare": false,
      "start": 369,
      "end": 420
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 422,
      "end": 432
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 432
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "asyncDisposable",
    "start": 14,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "AsyncDisposable",
    "start": 31,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "optionalAsyncDisposable",
    "start": 62,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "AsyncDisposable",
    "start": 87,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 103,
    "end": 104
  },
  {
    "type": "Null",
    "value": "null",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 123,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "disposable",
    "start": 137,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Disposable",
    "start": 149,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 161,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "AsyncDisposable",
    "start": 181,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Disposable",
    "start": 199,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "asyncResource",
    "start": 218,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "asyncDisposable",
    "start": 234,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "optionalAsyncResource",
    "start": 257,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "optionalAsyncDisposable",
    "start": 281,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "syncResource",
    "start": 312,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "disposable",
    "start": 327,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "eitherResource",
    "start": 345,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "awaitedAsyncResource",
    "start": 381,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "asyncDisposable",
    "start": 404,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 37,
                      "end": 38
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 41,
                      "end": 43
                    },
                    "definite": false,
                    "start": 37,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 33,
                "end": 44
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 44
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 57,
                    "end": 59
                  },
                  "definite": false,
                  "start": 53,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 49,
              "end": 60
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "innerExportedModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 101
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 123,
                              "end": 124
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 127,
                              "end": 129
                            },
                            "definite": false,
                            "start": 123,
                            "end": 129
                          }
                        ],
                        "declare": false,
                        "start": 119,
                        "end": 130
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 112,
                      "end": 130
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
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 144
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 147,
                            "end": 149
                          },
                          "definite": false,
                          "start": 143,
                          "end": 149
                        }
                      ],
                      "declare": false,
                      "start": 139,
                      "end": 150
                    }
                  ],
                  "start": 102,
                  "end": 156
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 72,
                "end": 156
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 65,
              "end": 156
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "innerNonExportedModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 200
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 222,
                              "end": 223
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 226,
                              "end": 228
                            },
                            "definite": false,
                            "start": 222,
                            "end": 228
                          }
                        ],
                        "declare": false,
                        "start": 218,
                        "end": 229
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 211,
                      "end": 229
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 243
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 246,
                            "end": 248
                          },
                          "definite": false,
                          "start": 242,
                          "end": 248
                        }
                      ],
                      "declare": false,
                      "start": 238,
                      "end": 249
                    }
                  ],
                  "start": 201,
                  "end": 255
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 168,
                "end": 255
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 161,
              "end": 255
            }
          ],
          "start": 20,
          "end": 257
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 257
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 270
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 289
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 292,
                    "end": 294
                  },
                  "definite": false,
                  "start": 288,
                  "end": 294
                }
              ],
              "declare": false,
              "start": 284,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 277,
            "end": 295
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 308,
                  "end": 310
                },
                "definite": false,
                "start": 304,
                "end": 310
              }
            ],
            "declare": false,
            "start": 300,
            "end": 311
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "innerExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 352
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 374,
                            "end": 375
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 378,
                            "end": 380
                          },
                          "definite": false,
                          "start": 374,
                          "end": 380
                        }
                      ],
                      "declare": false,
                      "start": 370,
                      "end": 381
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 363,
                    "end": 381
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 398,
                          "end": 400
                        },
                        "definite": false,
                        "start": 394,
                        "end": 400
                      }
                    ],
                    "declare": false,
                    "start": 390,
                    "end": 401
                  }
                ],
                "start": 353,
                "end": 407
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 323,
              "end": 407
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 316,
            "end": 407
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "innerNonExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 451
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 473,
                            "end": 474
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 477,
                            "end": 479
                          },
                          "definite": false,
                          "start": 473,
                          "end": 479
                        }
                      ],
                      "declare": false,
                      "start": 469,
                      "end": 480
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 462,
                    "end": 480
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 494
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 497,
                          "end": 499
                        },
                        "definite": false,
                        "start": 493,
                        "end": 499
                      }
                    ],
                    "declare": false,
                    "start": 489,
                    "end": 500
                  }
                ],
                "start": 452,
                "end": 506
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 419,
              "end": 506
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 412,
            "end": 506
          }
        ],
        "start": 271,
        "end": 508
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 508
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 508
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
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 72,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "innerExportedModule",
    "start": 82,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 168,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "innerNonExportedModule",
    "start": 178,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 211,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 258,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 277,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 316,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 323,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "innerExportedModule",
    "start": 333,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 363,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 412,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 419,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "innerNonExportedModule",
    "start": 429,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 462,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  }
]
```

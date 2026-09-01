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
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 91,
              "end": 93
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 93
          }
        ],
        "start": 80,
        "end": 94
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "typeArguments": null,
          "start": 98,
          "end": 99
        },
        "start": 96,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 100
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 125
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 134
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "a_b_c",
                                  "raw": "\"a_b_c\"",
                                  "start": 143,
                                  "end": 150
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 153,
                                    "end": 159
                                  },
                                  "start": 151,
                                  "end": 159
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 142,
                                "end": 160
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "sss",
                                  "raw": "\"sss\"",
                                  "start": 166,
                                  "end": 171
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 174,
                                    "end": 180
                                  },
                                  "start": 172,
                                  "end": 180
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 165,
                                "end": 181
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s_d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 186,
                                  "end": 189
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 191,
                                    "end": 197
                                  },
                                  "start": 189,
                                  "end": 197
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 186,
                                "end": 198
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "queryData",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 203,
                                  "end": 212
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 215,
                                    "end": 221
                                  },
                                  "start": 213,
                                  "end": 221
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 203,
                                "end": 222
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "foo bar",
                                  "raw": "\"foo bar\"",
                                  "start": 228,
                                  "end": 237
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 240,
                                    "end": 246
                                  },
                                  "start": 238,
                                  "end": 246
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 227,
                                "end": 247
                              }
                            ],
                            "start": 136,
                            "end": 251
                          },
                          "start": 134,
                          "end": 251
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 130,
                        "end": 252
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "a_b_c",
                          "raw": "\"a_b_c\"",
                          "start": 256,
                          "end": 263
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 255,
                        "end": 273
                      }
                    ],
                    "start": 126,
                    "end": 275
                  }
                ],
                "start": 125,
                "end": 276
              },
              "arguments": [],
              "optional": false,
              "start": 119,
              "end": 278
            },
            "definite": false,
            "start": 115,
            "end": 278
          }
        ],
        "declare": false,
        "start": 109,
        "end": 279
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 279
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IData",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "a_b_c",
                "raw": "\"a_b_c\"",
                "start": 309,
                "end": 316
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                },
                "start": 317,
                "end": 325
              },
              "accessibility": null,
              "static": false,
              "start": 308,
              "end": 326
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "value": "d_e_f",
                        "raw": "\"d_e_f\"",
                        "start": 344,
                        "end": 351
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 354,
                          "end": 360
                        },
                        "start": 352,
                        "end": 360
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 343,
                      "end": 361
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 371
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 373,
                          "end": 379
                        },
                        "start": 371,
                        "end": 379
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 366,
                      "end": 380
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "value": "qwe rty",
                        "raw": "\"qwe rty\"",
                        "start": 386,
                        "end": 395
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        },
                        "start": 396,
                        "end": 404
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 385,
                      "end": 405
                    }
                  ],
                  "start": 337,
                  "end": 409
                },
                "start": 335,
                "end": 409
              },
              "accessibility": null,
              "static": false,
              "start": 329,
              "end": 410
            }
          ],
          "start": 304,
          "end": 412
        },
        "declare": false,
        "start": 288,
        "end": 412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 281,
      "end": 412
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 412
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
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
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "data",
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
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"a_b_c\"",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"sss\"",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "s_d",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "queryData",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"foo bar\"",
    "start": 228,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 255,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"a_b_c\"",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 281,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 288,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"a_b_c\"",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "\"d_e_f\"",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "\"qwe rty\"",
    "start": 386,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  }
]
```

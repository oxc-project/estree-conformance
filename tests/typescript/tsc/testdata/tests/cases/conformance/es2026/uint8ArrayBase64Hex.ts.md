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
            "name": "bytes",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uint8Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 24
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromBase64",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 35
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "AQID",
                "raw": "\"AQID\"",
                "start": 36,
                "end": 42
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alphabet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 54
                    },
                    "value": {
                      "type": "Literal",
                      "value": "base64",
                      "raw": "\"base64\"",
                      "start": 56,
                      "end": 64
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 46,
                    "end": 64
                  }
                ],
                "start": 44,
                "end": 66
              }
            ],
            "optional": false,
            "start": 14,
            "end": 67
          },
          "definite": false,
          "start": 6,
          "end": 67
        }
      ],
      "declare": false,
      "start": 0,
      "end": 68
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
            "name": "base64",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "start": 75,
            "end": 89
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bytes",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toBase64",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 92,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alphabet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 117
                    },
                    "value": {
                      "type": "Literal",
                      "value": "base64url",
                      "raw": "\"base64url\"",
                      "start": 119,
                      "end": 130
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 109,
                    "end": 130
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "omitPadding",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 143
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 145,
                      "end": 149
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 132,
                    "end": 149
                  }
                ],
                "start": 107,
                "end": 151
              }
            ],
            "optional": false,
            "start": 92,
            "end": 152
          },
          "definite": false,
          "start": 75,
          "end": 152
        }
      ],
      "declare": false,
      "start": 69,
      "end": 153
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
            "name": "base64Result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "read",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 180
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      },
                      "start": 180,
                      "end": 188
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 176,
                    "end": 189
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "written",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 197
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 199,
                        "end": 205
                      },
                      "start": 197,
                      "end": 205
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 190,
                    "end": 205
                  }
                ],
                "start": 174,
                "end": 207
              },
              "start": 172,
              "end": 207
            },
            "start": 160,
            "end": 207
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bytes",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setFromBase64",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 229
              },
              "optional": false,
              "computed": false,
              "start": 210,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "BAUG",
                "raw": "\"BAUG\"",
                "start": 230,
                "end": 236
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lastChunkHandling",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 261
                    },
                    "value": {
                      "type": "Literal",
                      "value": "strict",
                      "raw": "\"strict\"",
                      "start": 263,
                      "end": 271
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 244,
                    "end": 271
                  }
                ],
                "start": 238,
                "end": 274
              }
            ],
            "optional": false,
            "start": 210,
            "end": 275
          },
          "definite": false,
          "start": 160,
          "end": 275
        }
      ],
      "declare": false,
      "start": 154,
      "end": 276
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
            "name": "hexBytes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uint8Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 304
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrayBuffer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 316
                      },
                      "typeArguments": null,
                      "start": 305,
                      "end": 316
                    }
                  ],
                  "start": 304,
                  "end": 317
                },
                "start": 294,
                "end": 317
              },
              "start": 292,
              "end": 317
            },
            "start": 284,
            "end": 317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uint8Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 330
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromHex",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 338
              },
              "optional": false,
              "computed": false,
              "start": 320,
              "end": 338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "010203",
                "raw": "\"010203\"",
                "start": 339,
                "end": 347
              }
            ],
            "optional": false,
            "start": 320,
            "end": 348
          },
          "definite": false,
          "start": 284,
          "end": 348
        }
      ],
      "declare": false,
      "start": 278,
      "end": 349
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
            "name": "hex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 361,
                "end": 367
              },
              "start": 359,
              "end": 367
            },
            "start": 356,
            "end": 367
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hexBytes",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 378
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toHex",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 384
              },
              "optional": false,
              "computed": false,
              "start": 370,
              "end": 384
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 370,
            "end": 386
          },
          "definite": false,
          "start": 356,
          "end": 386
        }
      ],
      "declare": false,
      "start": 350,
      "end": 387
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
            "name": "hexResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "read",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 407,
                      "end": 411
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 413,
                        "end": 419
                      },
                      "start": 411,
                      "end": 419
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 407,
                    "end": 420
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "written",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 428
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 430,
                        "end": 436
                      },
                      "start": 428,
                      "end": 436
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 421,
                    "end": 436
                  }
                ],
                "start": 405,
                "end": 438
              },
              "start": 403,
              "end": 438
            },
            "start": 394,
            "end": 438
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hexBytes",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setFromHex",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 460
              },
              "optional": false,
              "computed": false,
              "start": 441,
              "end": 460
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "040506",
                "raw": "\"040506\"",
                "start": 461,
                "end": 469
              }
            ],
            "optional": false,
            "start": 441,
            "end": 470
          },
          "definite": false,
          "start": 394,
          "end": 470
        }
      ],
      "declare": false,
      "start": 388,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 471
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 14,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "fromBase64",
    "start": 25,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"AQID\"",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "alphabet",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"base64\"",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "base64",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "toBase64",
    "start": 98,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "alphabet",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "String",
    "value": "\"base64url\"",
    "start": 119,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "omitPadding",
    "start": 132,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "base64Result",
    "start": 160,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "written",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "setFromBase64",
    "start": 216,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"BAUG\"",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "lastChunkHandling",
    "start": 244,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"strict\"",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "hexBytes",
    "start": 284,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 294,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 305,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 320,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "fromHex",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "String",
    "value": "\"010203\"",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "hex",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "hexBytes",
    "start": 370,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "toHex",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "hexResult",
    "start": 394,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "written",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
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
    "value": "hexBytes",
    "start": 441,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "setFromHex",
    "start": 450,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "String",
    "value": "\"040506\"",
    "start": 461,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  }
]
```

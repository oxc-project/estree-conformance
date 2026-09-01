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
        "name": "logLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 145,
              "end": 146
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 155,
              "end": 161
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 161
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 179
          }
        ],
        "start": 144,
        "end": 180
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "typeArguments": null,
                  "start": 194,
                  "end": 195
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "typeArguments": null,
                  "start": 198,
                  "end": 199
                },
                "optional": false,
                "readonly": null,
                "start": 186,
                "end": 201
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "typeArguments": null,
                "start": 202,
                "end": 203
              },
              "start": 186,
              "end": 204
            },
            "start": 184,
            "end": 204
          },
          "start": 181,
          "end": 204
        }
      ],
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
            "start": 207,
            "end": 208
          },
          "typeArguments": null,
          "start": 207,
          "end": 208
        },
        "start": 205,
        "end": 208
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 226
                },
                "optional": false,
                "computed": false,
                "start": 215,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 237
                  },
                  "optional": false,
                  "computed": false,
                  "start": 227,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 215,
              "end": 238
            },
            "directive": null,
            "start": 215,
            "end": 239
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "start": 244,
            "end": 255
          }
        ],
        "start": 209,
        "end": 257
      },
      "expression": false,
      "start": 126,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 268,
            "end": 270
          }
        ],
        "optional": false,
        "start": 258,
        "end": 271
      },
      "directive": null,
      "start": 258,
      "end": 272
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "init": null,
          "definite": false,
          "start": 287,
          "end": 288
        }
      ],
      "declare": false,
      "start": 283,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logLength",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 304,
              "end": 306
            }
          ],
          "optional": false,
          "start": 294,
          "end": 307
        },
        "start": 290,
        "end": 307
      },
      "directive": null,
      "start": 290,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "logFirstLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 370
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 371,
              "end": 372
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              },
              "start": 381,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 371,
            "end": 389
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 401,
              "end": 407
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 391,
            "end": 407
          }
        ],
        "start": 370,
        "end": 408
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "typeArguments": null,
                  "start": 422,
                  "end": 423
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 427
                  },
                  "typeArguments": null,
                  "start": 426,
                  "end": 427
                },
                "optional": false,
                "readonly": null,
                "start": 414,
                "end": 429
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "typeArguments": null,
                "start": 430,
                "end": 431
              },
              "start": 414,
              "end": 432
            },
            "start": 412,
            "end": 432
          },
          "start": 409,
          "end": 432
        }
      ],
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
            "start": 435,
            "end": 436
          },
          "typeArguments": null,
          "start": 435,
          "end": 436
        },
        "start": 433,
        "end": 436
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 454
                },
                "optional": false,
                "computed": false,
                "start": 443,
                "end": 454
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 458
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 459,
                      "end": 460
                    },
                    "optional": false,
                    "computed": true,
                    "start": 455,
                    "end": 461
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 468
                  },
                  "optional": false,
                  "computed": false,
                  "start": 455,
                  "end": 468
                }
              ],
              "optional": false,
              "start": 443,
              "end": 469
            },
            "directive": null,
            "start": 443,
            "end": 470
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "start": 475,
            "end": 486
          }
        ],
        "start": 437,
        "end": 488
      },
      "expression": false,
      "start": 347,
      "end": 488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logFirstLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 505,
                "end": 507
              }
            ],
            "start": 504,
            "end": 508
          }
        ],
        "optional": false,
        "start": 489,
        "end": 509
      },
      "directive": null,
      "start": 489,
      "end": 510
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 527
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 530,
            "end": 532
          },
          "definite": false,
          "start": 525,
          "end": 532
        }
      ],
      "declare": false,
      "start": 521,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 541
          },
          "optional": false,
          "computed": false,
          "start": 534,
          "end": 541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "logLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 551
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 552,
                "end": 554
              }
            ],
            "optional": false,
            "start": 542,
            "end": 555
          }
        ],
        "optional": false,
        "start": 534,
        "end": 556
      },
      "directive": null,
      "start": 534,
      "end": 557
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "zz",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 597
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logFirstLength",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 614
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 616,
                  "end": 618
                }
              ],
              "start": 615,
              "end": 619
            }
          ],
          "optional": false,
          "start": 600,
          "end": 620
        },
        "start": 595,
        "end": 620
      },
      "directive": null,
      "start": 595,
      "end": 621
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 126,
  "end": 660
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 126,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "logLength",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 147,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 244,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "logLength",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "logLength",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "logFirstLength",
    "start": 356,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 373,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 475,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "logFirstLength",
    "start": 489,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "logLength",
    "start": 542,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "logFirstLength",
    "start": 600,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  }
]
```

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
        "name": "equal",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "start": 21,
              "end": 22
            },
            "start": 19,
            "end": 22
          },
          "start": 18,
          "end": 22
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "typeArguments": null,
              "start": 27,
              "end": 28
            },
            "start": 25,
            "end": 28
          },
          "start": 24,
          "end": 28
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 30,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 43,
              "end": 47
            },
            "start": 43,
            "end": 48
          },
          "definite": false,
          "start": 39,
          "end": 48
        }
      ],
      "declare": false,
      "start": 35,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 97
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 113
          }
        ],
        "start": 100,
        "end": 115
      },
      "declare": false,
      "start": 91,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
              },
              "start": 143,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 151
          }
        ],
        "start": 125,
        "end": 153
      },
      "declare": false,
      "start": 116,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "typeArguments": null,
              "start": 166,
              "end": 167
            },
            "start": 161,
            "end": 167
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 174,
                  "end": 183
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "typeArguments": null,
                  "start": 186,
                  "end": 187
                }
              ],
              "start": 174,
              "end": 187
            },
            "start": 169,
            "end": 187
          }
        ],
        "optional": false,
        "start": 155,
        "end": 188
      },
      "directive": null,
      "start": 155,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 200,
                  "end": 209
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 213
                }
              ],
              "start": 200,
              "end": 213
            },
            "start": 195,
            "end": 213
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
              },
              "typeArguments": null,
              "start": 220,
              "end": 221
            },
            "start": 215,
            "end": 221
          }
        ],
        "optional": false,
        "start": 189,
        "end": 222
      },
      "directive": null,
      "start": 189,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 229
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 230,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 242,
                  "end": 243
                }
              ],
              "start": 230,
              "end": 243
            }
          ],
          "start": 229,
          "end": 244
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "typeArguments": null,
              "start": 250,
              "end": 251
            },
            "start": 245,
            "end": 251
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 258,
                  "end": 267
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 271
                  },
                  "typeArguments": null,
                  "start": 270,
                  "end": 271
                }
              ],
              "start": 258,
              "end": 271
            },
            "start": 253,
            "end": 271
          }
        ],
        "optional": false,
        "start": 224,
        "end": 272
      },
      "directive": null,
      "start": 224,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 278
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "typeArguments": null,
                  "start": 291,
                  "end": 292
                }
              ],
              "start": 279,
              "end": 292
            }
          ],
          "start": 278,
          "end": 293
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 299,
                  "end": 308
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "typeArguments": null,
                  "start": 311,
                  "end": 312
                }
              ],
              "start": 299,
              "end": 312
            },
            "start": 294,
            "end": 312
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
              },
              "typeArguments": null,
              "start": 319,
              "end": 320
            },
            "start": 314,
            "end": 320
          }
        ],
        "optional": false,
        "start": 273,
        "end": 321
      },
      "directive": null,
      "start": 273,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              "typeArguments": null,
              "start": 334,
              "end": 335
            },
            "start": 329,
            "end": 335
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 342,
              "end": 351
            },
            "start": 337,
            "end": 351
          }
        ],
        "optional": false,
        "start": 323,
        "end": 352
      },
      "directive": null,
      "start": 323,
      "end": 352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 364,
              "end": 373
            },
            "start": 359,
            "end": 373
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 381
              },
              "typeArguments": null,
              "start": 380,
              "end": 381
            },
            "start": 375,
            "end": 381
          }
        ],
        "optional": false,
        "start": 353,
        "end": 382
      },
      "directive": null,
      "start": 353,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 389
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "typeArguments": null,
              "start": 395,
              "end": 396
            },
            "start": 390,
            "end": 396
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 404
              },
              "typeArguments": null,
              "start": 403,
              "end": 404
            },
            "start": 398,
            "end": 404
          }
        ],
        "optional": false,
        "start": 384,
        "end": 405
      },
      "directive": null,
      "start": 384,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "typeArguments": null,
              "start": 417,
              "end": 418
            },
            "start": 412,
            "end": 418
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "typeArguments": null,
              "start": 425,
              "end": 426
            },
            "start": 420,
            "end": 426
          }
        ],
        "optional": false,
        "start": 406,
        "end": 427
      },
      "directive": null,
      "start": 406,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 434
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 435,
            "end": 441
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 449
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 452,
                  "end": 461
                }
              ],
              "start": 448,
              "end": 461
            },
            "start": 443,
            "end": 461
          }
        ],
        "optional": false,
        "start": 429,
        "end": 462
      },
      "directive": null,
      "start": 429,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 475
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 478,
                  "end": 487
                }
              ],
              "start": 474,
              "end": 487
            },
            "start": 469,
            "end": 487
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              },
              "typeArguments": null,
              "start": 494,
              "end": 495
            },
            "start": 489,
            "end": 495
          }
        ],
        "optional": false,
        "start": 463,
        "end": 496
      },
      "directive": null,
      "start": 463,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 509,
                    "end": 512
                  },
                  "start": 509,
                  "end": 512
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 515,
                  "end": 524
                }
              ],
              "start": 509,
              "end": 524
            },
            "start": 504,
            "end": 524
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 531,
                "end": 534
              },
              "start": 531,
              "end": 534
            },
            "start": 526,
            "end": 534
          }
        ],
        "optional": false,
        "start": 498,
        "end": 535
      },
      "directive": null,
      "start": 498,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 548,
                "end": 551
              },
              "start": 548,
              "end": 551
            },
            "start": 543,
            "end": 551
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 558,
                    "end": 561
                  },
                  "start": 558,
                  "end": 561
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 564,
                  "end": 573
                }
              ],
              "start": 558,
              "end": 573
            },
            "start": 553,
            "end": 573
          }
        ],
        "optional": false,
        "start": 537,
        "end": 574
      },
      "directive": null,
      "start": 537,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 577,
          "end": 582
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 588,
                    "end": 591
                  },
                  "start": 588,
                  "end": 591
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 594,
                  "end": 603
                }
              ],
              "start": 588,
              "end": 603
            },
            "start": 583,
            "end": 603
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 606
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 610,
                    "end": 613
                  },
                  "start": 610,
                  "end": 613
                },
                {
                  "type": "TSNullKeyword",
                  "start": 616,
                  "end": 620
                }
              ],
              "start": 610,
              "end": 620
            },
            "start": 605,
            "end": 620
          }
        ],
        "optional": false,
        "start": 577,
        "end": 621
      },
      "directive": null,
      "start": 577,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 628
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 630
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 634,
                    "end": 637
                  },
                  "start": 634,
                  "end": 637
                },
                {
                  "type": "TSNullKeyword",
                  "start": 640,
                  "end": 644
                }
              ],
              "start": 634,
              "end": 644
            },
            "start": 629,
            "end": 644
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 651,
                    "end": 654
                  },
                  "start": 651,
                  "end": 654
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 657,
                  "end": 666
                }
              ],
              "start": 651,
              "end": 666
            },
            "start": 646,
            "end": 666
          }
        ],
        "optional": false,
        "start": 623,
        "end": 667
      },
      "directive": null,
      "start": 623,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 677
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 681,
              "end": 687
            },
            "start": 676,
            "end": 687
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 690
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 694,
                      "end": 700
                    },
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 708
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "'foo'",
                                "start": 710,
                                "end": 715
                              },
                              "start": 710,
                              "end": 715
                            },
                            "start": 708,
                            "end": 715
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 705,
                          "end": 715
                        }
                      ],
                      "start": 703,
                      "end": 717
                    }
                  ],
                  "start": 694,
                  "end": 717
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 720,
                  "end": 729
                }
              ],
              "start": 694,
              "end": 729
            },
            "start": 689,
            "end": 729
          }
        ],
        "optional": false,
        "start": 670,
        "end": 730
      },
      "directive": null,
      "start": 670,
      "end": 731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 737
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 743,
                      "end": 749
                    },
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 754,
                            "end": 757
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "'foo'",
                                "start": 759,
                                "end": 764
                              },
                              "start": 759,
                              "end": 764
                            },
                            "start": 757,
                            "end": 764
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 754,
                          "end": 764
                        }
                      ],
                      "start": 752,
                      "end": 766
                    }
                  ],
                  "start": 743,
                  "end": 766
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 769,
                  "end": 778
                }
              ],
              "start": 743,
              "end": 778
            },
            "start": 738,
            "end": 778
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 781
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 785,
              "end": 791
            },
            "start": 780,
            "end": 791
          }
        ],
        "optional": false,
        "start": 732,
        "end": 792
      },
      "directive": null,
      "start": 732,
      "end": 793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 793
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
    "value": "equal",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Null",
    "value": "null",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 91,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "foo",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 200,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 230,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 255,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 279,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 296,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 299,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 316,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 339,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 342,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 353,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 364,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 377,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "equal",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 414,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 422,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 437,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 445,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 452,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 463,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 478,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 491,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 506,
    "end": 508
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 515,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 528,
    "end": 530
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 545,
    "end": 547
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 555,
    "end": 557
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 564,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 585,
    "end": 587
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 594,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 607,
    "end": 609
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 614,
    "end": 615
  },
  {
    "type": "Null",
    "value": "null",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 631,
    "end": 633
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 638,
    "end": 639
  },
  {
    "type": "Null",
    "value": "null",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 648,
    "end": 650
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 657,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 670,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 678,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 710,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 720,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 740,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 743,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 769,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 782,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  }
]
```

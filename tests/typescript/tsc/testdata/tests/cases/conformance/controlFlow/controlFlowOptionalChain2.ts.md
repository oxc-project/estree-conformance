__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 19,
                  "end": 22
                },
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "accessibility": null,
            "static": false,
            "start": 13,
            "end": 23
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 39
          }
        ],
        "start": 9,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 62,
                  "end": 65
                },
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 66
          }
        ],
        "start": 52,
        "end": 68
      },
      "declare": false,
      "start": 43,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "typeArguments": null,
                  "start": 92,
                  "end": 93
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 97
                  },
                  "typeArguments": null,
                  "start": 96,
                  "end": 97
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 100,
                  "end": 109
                }
              ],
              "start": 92,
              "end": 109
            },
            "start": 90,
            "end": 109
          },
          "start": 87,
          "end": 109
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 128
                  },
                  "optional": true,
                  "computed": false,
                  "start": 119,
                  "end": 128
                },
                "start": 119,
                "end": 128
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 133,
                "end": 136
              },
              "start": 119,
              "end": 136
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 147
                  },
                  "directive": null,
                  "start": 144,
                  "end": 148
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 160,
                  "end": 167
                }
              ],
              "start": 138,
              "end": 171
            },
            "alternate": null,
            "start": 115,
            "end": 171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 178
            },
            "directive": null,
            "start": 175,
            "end": 179
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 191
                },
                "optional": true,
                "computed": false,
                "start": 182,
                "end": 191
              },
              "start": 182,
              "end": 191
            },
            "directive": null,
            "start": 182,
            "end": 192
          }
        ],
        "start": 111,
        "end": 194
      },
      "expression": false,
      "start": 70,
      "end": 194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcThree",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 214
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "typeArguments": null,
                  "start": 220,
                  "end": 221
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 225
                  },
                  "typeArguments": null,
                  "start": 224,
                  "end": 225
                },
                {
                  "type": "TSNullKeyword",
                  "start": 228,
                  "end": 232
                }
              ],
              "start": 220,
              "end": 232
            },
            "start": 218,
            "end": 232
          },
          "start": 215,
          "end": 232
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 245
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 251
                  },
                  "optional": true,
                  "computed": false,
                  "start": 242,
                  "end": 251
                },
                "start": 242,
                "end": 251
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 256,
                "end": 259
              },
              "start": 242,
              "end": 259
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 270
                  },
                  "directive": null,
                  "start": 267,
                  "end": 271
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 283,
                  "end": 290
                }
              ],
              "start": 261,
              "end": 294
            },
            "alternate": null,
            "start": 238,
            "end": 294
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 301
            },
            "directive": null,
            "start": 298,
            "end": 302
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 308
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "optional": true,
                "computed": false,
                "start": 305,
                "end": 314
              },
              "start": 305,
              "end": 314
            },
            "directive": null,
            "start": 305,
            "end": 315
          }
        ],
        "start": 234,
        "end": 317
      },
      "expression": false,
      "start": 196,
      "end": 317
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 325
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 336,
                "end": 345
              },
              "start": 334,
              "end": 345
            },
            "accessibility": null,
            "static": false,
            "start": 330,
            "end": 346
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "u",
                  "raw": "'u'",
                  "start": 350,
                  "end": 353
                },
                "start": 350,
                "end": 353
              },
              "start": 348,
              "end": 353
            },
            "accessibility": null,
            "static": false,
            "start": 347,
            "end": 353
          }
        ],
        "start": 328,
        "end": 355
      },
      "declare": false,
      "start": 319,
      "end": 355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 362
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 373,
                "end": 377
              },
              "start": 371,
              "end": 377
            },
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 378
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 380
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "'n'",
                  "start": 382,
                  "end": 385
                },
                "start": 382,
                "end": 385
              },
              "start": 380,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 379,
            "end": 385
          }
        ],
        "start": 365,
        "end": 387
      },
      "declare": false,
      "start": 356,
      "end": 387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "X",
                  "raw": "'X'",
                  "start": 405,
                  "end": 408
                },
                "start": 405,
                "end": 408
              },
              "start": 403,
              "end": 408
            },
            "accessibility": null,
            "static": false,
            "start": 399,
            "end": 409
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 413,
                  "end": 416
                },
                "start": 413,
                "end": 416
              },
              "start": 411,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 410,
            "end": 416
          }
        ],
        "start": 397,
        "end": 418
      },
      "declare": false,
      "start": 388,
      "end": 418
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 431
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 436
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "typeArguments": null,
                  "start": 439,
                  "end": 440
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 443,
                  "end": 452
                }
              ],
              "start": 435,
              "end": 452
            },
            "start": 433,
            "end": 452
          },
          "start": 432,
          "end": 452
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 471
                  },
                  "optional": true,
                  "computed": false,
                  "start": 464,
                  "end": 471
                },
                "start": 464,
                "end": 471
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 485
              },
              "start": 464,
              "end": 485
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "directive": null,
                  "start": 497,
                  "end": 499
                }
              ],
              "start": 487,
              "end": 522
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 543
                  },
                  "directive": null,
                  "start": 542,
                  "end": 544
                }
              ],
              "start": 532,
              "end": 555
            },
            "start": 460,
            "end": 555
          }
        ],
        "start": 454,
        "end": 557
      },
      "expression": false,
      "start": 420,
      "end": 557
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 570
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "typeArguments": null,
                  "start": 574,
                  "end": 575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 579
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 579
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 582,
                  "end": 591
                }
              ],
              "start": 574,
              "end": 591
            },
            "start": 572,
            "end": 591
          },
          "start": 571,
          "end": 591
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 604
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 606,
                    "end": 610
                  },
                  "optional": true,
                  "computed": false,
                  "start": 603,
                  "end": 610
                },
                "start": 603,
                "end": 610
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 624
              },
              "start": 603,
              "end": 624
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 636,
                    "end": 637
                  },
                  "directive": null,
                  "start": 636,
                  "end": 638
                }
              ],
              "start": 626,
              "end": 657
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 678
                  },
                  "directive": null,
                  "start": 677,
                  "end": 679
                }
              ],
              "start": 667,
              "end": 694
            },
            "start": 599,
            "end": 694
          }
        ],
        "start": 593,
        "end": 696
      },
      "expression": false,
      "start": 559,
      "end": 696
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 709
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 714
                  },
                  "typeArguments": null,
                  "start": 713,
                  "end": 714
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 717,
                    "end": 718
                  },
                  "typeArguments": null,
                  "start": 717,
                  "end": 718
                },
                {
                  "type": "TSNullKeyword",
                  "start": 721,
                  "end": 725
                }
              ],
              "start": 713,
              "end": 725
            },
            "start": 711,
            "end": 725
          },
          "start": 710,
          "end": 725
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 737,
                    "end": 738
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 744
                  },
                  "optional": true,
                  "computed": false,
                  "start": 737,
                  "end": 744
                },
                "start": 737,
                "end": 744
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 758
              },
              "start": 737,
              "end": 758
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 771
                  },
                  "directive": null,
                  "start": 770,
                  "end": 772
                }
              ],
              "start": 760,
              "end": 790
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 811
                  },
                  "directive": null,
                  "start": 810,
                  "end": 812
                }
              ],
              "start": 800,
              "end": 823
            },
            "start": 733,
            "end": 823
          }
        ],
        "start": 727,
        "end": 825
      },
      "expression": false,
      "start": 698,
      "end": 825
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "typeArguments": null,
                  "start": 842,
                  "end": 843
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 847
                  },
                  "typeArguments": null,
                  "start": 846,
                  "end": 847
                },
                {
                  "type": "TSNullKeyword",
                  "start": 850,
                  "end": 854
                }
              ],
              "start": 842,
              "end": 854
            },
            "start": 840,
            "end": 854
          },
          "start": 839,
          "end": 854
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 869,
                    "end": 873
                  },
                  "optional": true,
                  "computed": false,
                  "start": 866,
                  "end": 873
                },
                "start": 866,
                "end": 873
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 887
              },
              "start": 866,
              "end": 887
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 900
                  },
                  "directive": null,
                  "start": 899,
                  "end": 901
                }
              ],
              "start": 889,
              "end": 915
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 936
                  },
                  "directive": null,
                  "start": 935,
                  "end": 937
                }
              ],
              "start": 925,
              "end": 952
            },
            "start": 862,
            "end": 952
          }
        ],
        "start": 856,
        "end": 954
      },
      "expression": false,
      "start": 827,
      "end": 954
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 965,
        "end": 967
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 971,
                    "end": 972
                  },
                  "typeArguments": null,
                  "start": 971,
                  "end": 972
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 975,
                    "end": 976
                  },
                  "typeArguments": null,
                  "start": 975,
                  "end": 976
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 979,
                  "end": 988
                }
              ],
              "start": 971,
              "end": 988
            },
            "start": 969,
            "end": 988
          },
          "start": 968,
          "end": 988
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1001
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1007
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1000,
                  "end": 1007
                },
                "start": 1000,
                "end": 1007
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1012,
                "end": 1016
              },
              "start": 1000,
              "end": 1016
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1028,
                    "end": 1029
                  },
                  "directive": null,
                  "start": 1028,
                  "end": 1030
                }
              ],
              "start": 1018,
              "end": 1045
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1065,
                    "end": 1066
                  },
                  "directive": null,
                  "start": 1065,
                  "end": 1067
                }
              ],
              "start": 1055,
              "end": 1094
            },
            "start": 996,
            "end": 1094
          }
        ],
        "start": 990,
        "end": 1096
      },
      "expression": false,
      "start": 956,
      "end": 1096
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1107,
        "end": 1109
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "typeArguments": null,
                  "start": 1113,
                  "end": 1114
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1117,
                    "end": 1118
                  },
                  "typeArguments": null,
                  "start": 1117,
                  "end": 1118
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1121,
                  "end": 1130
                }
              ],
              "start": 1113,
              "end": 1130
            },
            "start": 1111,
            "end": 1130
          },
          "start": 1110,
          "end": 1130
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1142,
                    "end": 1143
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1149
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1142,
                  "end": 1149
                },
                "start": 1142,
                "end": 1149
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1154,
                "end": 1158
              },
              "start": 1142,
              "end": 1158
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1171
                  },
                  "directive": null,
                  "start": 1170,
                  "end": 1172
                }
              ],
              "start": 1160,
              "end": 1183
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "directive": null,
                  "start": 1203,
                  "end": 1205
                }
              ],
              "start": 1193,
              "end": 1228
            },
            "start": 1138,
            "end": 1228
          }
        ],
        "start": 1132,
        "end": 1230
      },
      "expression": false,
      "start": 1098,
      "end": 1230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1248
                  },
                  "typeArguments": null,
                  "start": 1247,
                  "end": 1248
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1251,
                    "end": 1252
                  },
                  "typeArguments": null,
                  "start": 1251,
                  "end": 1252
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1255,
                  "end": 1259
                }
              ],
              "start": 1247,
              "end": 1259
            },
            "start": 1245,
            "end": 1259
          },
          "start": 1244,
          "end": 1259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1271,
                    "end": 1272
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1274,
                    "end": 1278
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1271,
                  "end": 1278
                },
                "start": 1271,
                "end": 1278
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1283,
                "end": 1287
              },
              "start": 1271,
              "end": 1287
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1300
                  },
                  "directive": null,
                  "start": 1299,
                  "end": 1301
                }
              ],
              "start": 1289,
              "end": 1316
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1336,
                    "end": 1337
                  },
                  "directive": null,
                  "start": 1336,
                  "end": 1338
                }
              ],
              "start": 1326,
              "end": 1360
            },
            "start": 1267,
            "end": 1360
          }
        ],
        "start": 1261,
        "end": 1362
      },
      "expression": false,
      "start": 1232,
      "end": 1362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1373,
        "end": 1375
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1379,
                    "end": 1380
                  },
                  "typeArguments": null,
                  "start": 1379,
                  "end": 1380
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1384
                  },
                  "typeArguments": null,
                  "start": 1383,
                  "end": 1384
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1387,
                  "end": 1391
                }
              ],
              "start": 1379,
              "end": 1391
            },
            "start": 1377,
            "end": 1391
          },
          "start": 1376,
          "end": 1391
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1403,
                    "end": 1404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1406,
                    "end": 1410
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1403,
                  "end": 1410
                },
                "start": 1403,
                "end": 1410
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1415,
                "end": 1419
              },
              "start": 1403,
              "end": 1419
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1432
                  },
                  "directive": null,
                  "start": 1431,
                  "end": 1433
                }
              ],
              "start": 1421,
              "end": 1444
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1464,
                    "end": 1465
                  },
                  "directive": null,
                  "start": 1464,
                  "end": 1466
                }
              ],
              "start": 1454,
              "end": 1484
            },
            "start": 1399,
            "end": 1484
          }
        ],
        "start": 1393,
        "end": 1486
      },
      "expression": false,
      "start": 1364,
      "end": 1486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1486
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "funcTwo",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
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
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 100,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 129,
    "end": 132
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 196,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "funcThree",
    "start": 205,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227
  },
  {
    "type": "Null",
    "value": "null",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "if",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 252,
    "end": 255
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 308,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 319,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 336,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "'u'",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 356,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Null",
    "value": "null",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "'n'",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 388,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "String",
    "value": "'X'",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "X",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 443,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 476,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 559,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 582,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 604,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 615,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 698,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 719,
    "end": 720
  },
  {
    "type": "Null",
    "value": "null",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 738,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 740,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 749,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 827,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 848,
    "end": 849
  },
  {
    "type": "Null",
    "value": "null",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 867,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 878,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 956,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 965,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 979,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 996,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1098,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1121,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1232,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1283,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1364,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1387,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1415,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1449,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486
  }
]
```

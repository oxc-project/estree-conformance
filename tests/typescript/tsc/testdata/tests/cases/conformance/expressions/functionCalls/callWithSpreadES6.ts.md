__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 22,
                "end": 31
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  },
                  "start": 34,
                  "end": 42
                },
                "start": 33,
                "end": 42
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    "start": 50,
                    "end": 58
                  },
                  "start": 48,
                  "end": 58
                },
                "value": null,
                "start": 44,
                "end": 58
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 60
          }
        ],
        "start": 12,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
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
              "type": "TSNumberKeyword",
              "start": 80,
              "end": 86
            },
            "start": 78,
            "end": 86
          },
          "start": 77,
          "end": 86
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 91,
              "end": 97
            },
            "start": 89,
            "end": 97
          },
          "start": 88,
          "end": 97
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
              },
              "start": 105,
              "end": 113
            },
            "start": 103,
            "end": 113
          },
          "value": null,
          "start": 99,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 118
      },
      "expression": false,
      "start": 64,
      "end": 118
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                },
                "start": 127,
                "end": 135
              },
              "start": 125,
              "end": 135
            },
            "start": 124,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 135
        }
      ],
      "declare": false,
      "start": 120,
      "end": 136
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 144,
                  "end": 150
                },
                "start": 144,
                "end": 152
              },
              "start": 142,
              "end": 152
            },
            "start": 141,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 152
        }
      ],
      "declare": false,
      "start": 137,
      "end": 153
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "typeArguments": null,
                "start": 163,
                "end": 164
              },
              "start": 161,
              "end": 164
            },
            "start": 158,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 164
        }
      ],
      "declare": false,
      "start": 154,
      "end": 165
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
            "name": "xa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 177
              },
              "start": 172,
              "end": 177
            },
            "start": 170,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 177
        }
      ],
      "declare": false,
      "start": 166,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 184,
            "end": 185
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 187,
            "end": 188
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 190,
            "end": 195
          }
        ],
        "optional": false,
        "start": 180,
        "end": 196
      },
      "directive": null,
      "start": 180,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 202,
            "end": 203
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 205,
            "end": 206
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "start": 208,
            "end": 212
          }
        ],
        "optional": false,
        "start": 198,
        "end": 213
      },
      "directive": null,
      "start": 198,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 219,
            "end": 220
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 222,
            "end": 223
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "start": 225,
            "end": 229
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 231,
            "end": 236
          }
        ],
        "optional": false,
        "start": 215,
        "end": 237
      },
      "directive": null,
      "start": 215,
      "end": 238
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 243
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 247
          },
          "optional": false,
          "computed": false,
          "start": 240,
          "end": 247
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 248,
            "end": 249
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 251,
            "end": 252
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 254,
            "end": 259
          }
        ],
        "optional": false,
        "start": 240,
        "end": 260
      },
      "directive": null,
      "start": 240,
      "end": 261
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 270,
            "end": 271
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 273,
            "end": 274
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "start": 276,
            "end": 280
          }
        ],
        "optional": false,
        "start": 262,
        "end": 281
      },
      "directive": null,
      "start": 262,
      "end": 282
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 290
          },
          "optional": false,
          "computed": false,
          "start": 283,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 291,
            "end": 292
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 294,
            "end": 295
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
            },
            "start": 297,
            "end": 301
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 303,
            "end": 308
          }
        ],
        "optional": false,
        "start": 283,
        "end": 309
      },
      "directive": null,
      "start": 283,
      "end": 310
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 320
          },
          "optional": false,
          "computed": false,
          "start": 313,
          "end": 320
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 322,
            "end": 323
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 325,
            "end": 326
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 328,
            "end": 333
          }
        ],
        "optional": false,
        "start": 312,
        "end": 334
      },
      "directive": null,
      "start": 312,
      "end": 335
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 344
          },
          "optional": false,
          "computed": false,
          "start": 337,
          "end": 344
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 346,
            "end": 347
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 349,
            "end": 350
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "start": 352,
            "end": 356
          }
        ],
        "optional": false,
        "start": 336,
        "end": 357
      },
      "directive": null,
      "start": 336,
      "end": 358
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 367
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 369,
            "end": 370
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 372,
            "end": 373
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
            },
            "start": 375,
            "end": 379
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 381,
            "end": 386
          }
        ],
        "optional": false,
        "start": 359,
        "end": 387
      },
      "directive": null,
      "start": 359,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 392
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 393,
              "end": 394
            },
            "optional": false,
            "computed": true,
            "start": 390,
            "end": 395
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 399
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 400,
            "end": 401
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 403,
            "end": 404
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 406,
            "end": 411
          }
        ],
        "optional": false,
        "start": 390,
        "end": 412
      },
      "directive": null,
      "start": 390,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 417,
              "end": 418
            },
            "optional": false,
            "computed": true,
            "start": 414,
            "end": 419
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 414,
          "end": 423
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 424,
            "end": 425
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 427,
            "end": 428
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "start": 430,
            "end": 434
          }
        ],
        "optional": false,
        "start": 414,
        "end": 435
      },
      "directive": null,
      "start": 414,
      "end": 436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 439
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 440,
              "end": 441
            },
            "optional": false,
            "computed": true,
            "start": 437,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 446
          },
          "optional": false,
          "computed": false,
          "start": 437,
          "end": 446
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 447,
            "end": 448
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 450,
            "end": 451
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 457
            },
            "start": 453,
            "end": 457
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 459,
            "end": 464
          }
        ],
        "optional": false,
        "start": 437,
        "end": 465
      },
      "directive": null,
      "start": 437,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 478
            },
            "typeArguments": null,
            "start": 470,
            "end": 478
          },
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "xa",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 481
              },
              "property": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 482,
                "end": 483
              },
              "optional": false,
              "computed": true,
              "start": 479,
              "end": 484
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 488
            },
            "optional": false,
            "computed": false,
            "start": 479,
            "end": 488
          },
          "start": 469,
          "end": 488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 494,
                  "end": 495
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 497,
                  "end": 498
                },
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 500,
                  "end": 505
                }
              ],
              "start": 493,
              "end": 506
            },
            "start": 490,
            "end": 506
          }
        ],
        "optional": false,
        "start": 468,
        "end": 507
      },
      "directive": null,
      "start": 468,
      "end": 508
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
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
              "start": 524,
              "end": 535
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 539,
                      "end": 545
                    },
                    "start": 537,
                    "end": 545
                  },
                  "start": 536,
                  "end": 545
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 550,
                      "end": 556
                    },
                    "start": 548,
                    "end": 556
                  },
                  "start": 547,
                  "end": 556
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 564,
                        "end": 570
                      },
                      "start": 564,
                      "end": 572
                    },
                    "start": 562,
                    "end": 572
                  },
                  "value": null,
                  "start": 558,
                  "end": 572
                }
              ],
              "returnType": null,
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
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 592
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 592
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 594
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 596,
                          "end": 597
                        }
                      ],
                      "optional": false,
                      "start": 584,
                      "end": 598
                    },
                    "directive": null,
                    "start": 584,
                    "end": 599
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 608,
                          "end": 612
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 613,
                          "end": 616
                        },
                        "optional": false,
                        "computed": false,
                        "start": 608,
                        "end": 616
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 618
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 620,
                          "end": 621
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 626,
                            "end": 627
                          },
                          "start": 623,
                          "end": 627
                        }
                      ],
                      "optional": false,
                      "start": 608,
                      "end": 628
                    },
                    "directive": null,
                    "start": 608,
                    "end": 629
                  }
                ],
                "start": 574,
                "end": 635
              },
              "expression": false,
              "start": 535,
              "end": 635
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 524,
            "end": 635
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 643
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 647,
                      "end": 653
                    },
                    "start": 645,
                    "end": 653
                  },
                  "start": 644,
                  "end": 653
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 658,
                      "end": 664
                    },
                    "start": 656,
                    "end": 664
                  },
                  "start": 655,
                  "end": 664
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 669,
                    "end": 670
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 672,
                        "end": 678
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 670,
                    "end": 680
                  },
                  "value": null,
                  "start": 666,
                  "end": 680
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 682,
                "end": 689
              },
              "expression": false,
              "start": 643,
              "end": 689
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 640,
            "end": 689
          }
        ],
        "start": 518,
        "end": 691
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 691
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 700
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 710
      },
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
              "start": 717,
              "end": 728
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 741,
                        "end": 746
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 747,
                          "end": 748
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 750,
                          "end": 751
                        }
                      ],
                      "optional": false,
                      "start": 741,
                      "end": 752
                    },
                    "directive": null,
                    "start": 741,
                    "end": 753
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 762,
                        "end": 767
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 768,
                          "end": 769
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 771,
                          "end": 772
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 777,
                            "end": 778
                          },
                          "start": 774,
                          "end": 778
                        }
                      ],
                      "optional": false,
                      "start": 762,
                      "end": 779
                    },
                    "directive": null,
                    "start": 762,
                    "end": 780
                  }
                ],
                "start": 731,
                "end": 786
              },
              "expression": false,
              "start": 728,
              "end": 786
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 717,
            "end": 786
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 794
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 807,
                          "end": 812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 813,
                          "end": 816
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 816
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 817,
                          "end": 818
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 820,
                          "end": 821
                        }
                      ],
                      "optional": false,
                      "start": 807,
                      "end": 822
                    },
                    "directive": null,
                    "start": 807,
                    "end": 823
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 832,
                          "end": 837
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 838,
                          "end": 841
                        },
                        "optional": false,
                        "computed": false,
                        "start": 832,
                        "end": 841
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 842,
                          "end": 843
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 845,
                          "end": 846
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 851,
                            "end": 852
                          },
                          "start": 848,
                          "end": 852
                        }
                      ],
                      "optional": false,
                      "start": 832,
                      "end": 853
                    },
                    "directive": null,
                    "start": 832,
                    "end": 854
                  }
                ],
                "start": 797,
                "end": 860
              },
              "expression": false,
              "start": 794,
              "end": 860
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 791,
            "end": 860
          }
        ],
        "start": 711,
        "end": 862
      },
      "abstract": false,
      "declare": false,
      "start": 693,
      "end": 862
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 862
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "...",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "xa",
    "start": 170,
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
    "value": "X",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 254,
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
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "xa",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "xa",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
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
    "type": "Identifier",
    "value": "xa",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 439,
    "end": 440
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 470,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "xa",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 510,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 524,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 693,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 701,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 717,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
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
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 762,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 774,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 807,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 818,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 832,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 848,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  }
]
```

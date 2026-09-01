__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 20,
            "end": 21
          },
          "definite": false,
          "start": 16,
          "end": 21
        }
      ],
      "declare": false,
      "start": 10,
      "end": 21
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
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 30,
            "end": 31
          },
          "definite": false,
          "start": 26,
          "end": 31
        }
      ],
      "declare": false,
      "start": 22,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 42
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "optional": false,
        "computed": false,
        "start": 32,
        "end": 44
      },
      "directive": null,
      "start": 32,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 61
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
        },
        "optional": false,
        "computed": false,
        "start": 51,
        "end": 63
      },
      "directive": null,
      "start": 51,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 107
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "optional": false,
        "computed": false,
        "start": 97,
        "end": 109
      },
      "directive": null,
      "start": 97,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 153
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 154,
          "end": 157
        },
        "optional": false,
        "computed": true,
        "start": 143,
        "end": 158
      },
      "directive": null,
      "start": 143,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 175
        },
        "property": {
          "type": "Literal",
          "value": "y",
          "raw": "'y'",
          "start": 176,
          "end": 179
        },
        "optional": false,
        "computed": true,
        "start": 165,
        "end": 180
      },
      "directive": null,
      "start": 165,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 224
        },
        "property": {
          "type": "Literal",
          "value": "z",
          "raw": "'z'",
          "start": 225,
          "end": 228
        },
        "optional": false,
        "computed": true,
        "start": 214,
        "end": 229
      },
      "directive": null,
      "start": 214,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 273
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Float64Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 286
        },
        "optional": false,
        "computed": false,
        "start": 263,
        "end": 286
      },
      "directive": null,
      "start": 263,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 303
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Infinity",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 312
        },
        "optional": false,
        "computed": false,
        "start": 293,
        "end": 312
      },
      "directive": null,
      "start": 293,
      "end": 312
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 357
                  },
                  "typeArguments": null,
                  "start": 340,
                  "end": 357
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 359,
                    "end": 362
                  },
                  "start": 359,
                  "end": 362
                },
                "start": 339,
                "end": 363
              },
              "start": 337,
              "end": 363
            },
            "start": 332,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 363
        }
      ],
      "declare": true,
      "start": 320,
      "end": 363
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 407
                  },
                  "typeArguments": null,
                  "start": 390,
                  "end": 407
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "'y'",
                    "start": 409,
                    "end": 412
                  },
                  "start": 409,
                  "end": 412
                },
                "start": 389,
                "end": 413
              },
              "start": 387,
              "end": 413
            },
            "start": 382,
            "end": 413
          },
          "init": null,
          "definite": false,
          "start": 382,
          "end": 413
        }
      ],
      "declare": true,
      "start": 370,
      "end": 413
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
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 460
                  },
                  "typeArguments": null,
                  "start": 443,
                  "end": 460
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "z",
                    "raw": "'z'",
                    "start": 462,
                    "end": 465
                  },
                  "start": 462,
                  "end": 465
                },
                "start": 442,
                "end": 466
              },
              "start": 440,
              "end": 466
            },
            "start": 435,
            "end": 466
          },
          "init": null,
          "definite": false,
          "start": 435,
          "end": 466
        }
      ],
      "declare": true,
      "start": 423,
      "end": 466
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
            "name": "themAll",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 520
                  },
                  "typeArguments": null,
                  "start": 503,
                  "end": 520
                },
                "start": 497,
                "end": 520
              },
              "start": 495,
              "end": 520
            },
            "start": 488,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 488,
          "end": 520
        }
      ],
      "declare": true,
      "start": 476,
      "end": 520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 520
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 32,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 51,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 97,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 143,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 165,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 214,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 263,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 274,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 293,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Infinity",
    "start": 304,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 320,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 340,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 347,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 370,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 397,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 423,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 443,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 450,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 476,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "themAll",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 497,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 503,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 510,
    "end": 520
  }
]
```

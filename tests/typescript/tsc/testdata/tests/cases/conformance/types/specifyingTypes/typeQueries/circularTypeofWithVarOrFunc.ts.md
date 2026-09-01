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
        "name": "typeAlias1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 42
        },
        "typeArguments": null,
        "start": 18,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 43
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
            "name": "varOfAliasedType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeAlias1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 77
                },
                "typeArguments": null,
                "start": 67,
                "end": 77
              },
              "start": 65,
              "end": 77
            },
            "start": 48,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 77
        }
      ],
      "declare": false,
      "start": 44,
      "end": 78
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
            "name": "varOfAliasedType2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeAlias2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 113
                },
                "typeArguments": null,
                "start": 103,
                "end": 113
              },
              "start": 101,
              "end": 113
            },
            "start": 84,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 113
        }
      ],
      "declare": false,
      "start": 80,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typeAlias2",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType2",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 157
        },
        "typeArguments": null,
        "start": 133,
        "end": 157
      },
      "declare": false,
      "start": 115,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeAlias3",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 187
          },
          "typeArguments": null,
          "start": 177,
          "end": 187
        },
        "start": 175,
        "end": 187
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 197,
              "end": 201
            },
            "start": 190,
            "end": 202
          }
        ],
        "start": 188,
        "end": 204
      },
      "expression": false,
      "start": 160,
      "end": 204
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
            "name": "varOfAliasedType3",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 233
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 229,
            "end": 235
          },
          "definite": false,
          "start": 209,
          "end": 235
        }
      ],
      "declare": false,
      "start": 205,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typeAlias3",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType3",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 279
        },
        "typeArguments": null,
        "start": 255,
        "end": 279
      },
      "declare": false,
      "start": 237,
      "end": 280
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 319
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 327,
                "end": 333
              },
              "start": 325,
              "end": 333
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 340,
                "end": 346
              },
              "start": 338,
              "end": 346
            },
            "accessibility": null,
            "static": false,
            "start": 337,
            "end": 347
          }
        ],
        "start": 320,
        "end": 349
      },
      "declare": false,
      "start": 304,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 357
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "mul",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 381
              },
              "typeArguments": null,
              "start": 371,
              "end": 381
            }
          ],
          "start": 370,
          "end": 382
        },
        "start": 360,
        "end": 382
      },
      "declare": false,
      "start": 351,
      "end": 383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mul",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 396
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Input",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "typeArguments": null,
              "start": 404,
              "end": 409
            },
            "start": 402,
            "end": 409
          },
          "start": 397,
          "end": 409
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 413
          },
          "typeArguments": null,
          "start": 412,
          "end": 413
        },
        "start": 410,
        "end": 413
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 430
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 425,
                "end": 432
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 440
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
                },
                "optional": false,
                "computed": false,
                "start": 435,
                "end": 442
              },
              "start": 425,
              "end": 442
            },
            "start": 418,
            "end": 443
          }
        ],
        "start": 414,
        "end": 445
      },
      "expression": false,
      "start": 384,
      "end": 445
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 489
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "start": 490,
              "end": 498
            }
          ],
          "start": 489,
          "end": 499
        },
        "start": 479,
        "end": 499
      },
      "declare": false,
      "start": 469,
      "end": 500
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 511
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R2",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 517
          },
          "typeArguments": null,
          "start": 515,
          "end": 517
        },
        "start": 513,
        "end": 517
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 527,
              "end": 528
            },
            "start": 520,
            "end": 529
          }
        ],
        "start": 518,
        "end": 531
      },
      "expression": false,
      "start": 501,
      "end": 531
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 531
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
    "value": "typeAlias1",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType1",
    "start": 25,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType1",
    "start": 48,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "typeAlias1",
    "start": 67,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType2",
    "start": 84,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "typeAlias2",
    "start": 103,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "typeAlias2",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 133,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType2",
    "start": 140,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "typeAlias3",
    "start": 177,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Null",
    "value": "null",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType3",
    "start": 209,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 237,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "typeAlias3",
    "start": 242,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 255,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "varOfAliasedType3",
    "start": 262,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 304,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 360,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 371,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "mul",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "mul",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "type": "Keyword",
    "value": "return",
    "start": 418,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 425,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 469,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 479,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 490,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 501,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 520,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  }
]
```

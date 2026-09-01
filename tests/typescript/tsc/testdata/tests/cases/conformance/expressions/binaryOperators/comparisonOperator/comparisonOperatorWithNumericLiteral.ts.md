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
        "name": "BrandedNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
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
                  "name": "__numberBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 42
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 44,
                    "end": 47
                  },
                  "start": 42,
                  "end": 47
                },
                "accessibility": null,
                "static": false,
                "start": 29,
                "end": 47
              }
            ],
            "start": 27,
            "end": 49
          }
        ],
        "start": 18,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 50
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BrandedNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 69
                },
                "typeArguments": null,
                "start": 59,
                "end": 69
              },
              "start": 57,
              "end": 69
            },
            "start": 55,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 90,
          "end": 91
        },
        "start": 86,
        "end": 91
      },
      "directive": null,
      "start": 86,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 94
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 105,
            "end": 106
          },
          "start": 97,
          "end": 106
        },
        "start": 93,
        "end": 106
      },
      "directive": null,
      "start": 93,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 123
            },
            "typeArguments": null,
            "start": 113,
            "end": 123
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 124,
            "end": 125
          },
          "start": 112,
          "end": 125
        },
        "start": 108,
        "end": 125
      },
      "directive": null,
      "start": 108,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 146,
          "end": 147
        },
        "start": 142,
        "end": 147
      },
      "directive": null,
      "start": 142,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 154,
            "end": 160
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "start": 153,
          "end": 162
        },
        "start": 149,
        "end": 162
      },
      "directive": null,
      "start": 149,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 179
            },
            "typeArguments": null,
            "start": 169,
            "end": 179
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 180,
            "end": 181
          },
          "start": 168,
          "end": 181
        },
        "start": 164,
        "end": 181
      },
      "directive": null,
      "start": 164,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "operator": ">=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 204,
          "end": 205
        },
        "start": 199,
        "end": 205
      },
      "directive": null,
      "start": 199,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 213,
            "end": 219
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 220,
            "end": 221
          },
          "start": 212,
          "end": 221
        },
        "start": 207,
        "end": 221
      },
      "directive": null,
      "start": 207,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 224
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 239
            },
            "typeArguments": null,
            "start": 229,
            "end": 239
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 240,
            "end": 241
          },
          "start": 228,
          "end": 241
        },
        "start": 223,
        "end": 241
      },
      "directive": null,
      "start": 223,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "operator": "<=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 264,
          "end": 265
        },
        "start": 259,
        "end": 265
      },
      "directive": null,
      "start": 259,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 268
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 273,
            "end": 279
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 280,
            "end": 281
          },
          "start": 272,
          "end": 281
        },
        "start": 267,
        "end": 281
      },
      "directive": null,
      "start": 267,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 284
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 299
            },
            "typeArguments": null,
            "start": 289,
            "end": 299
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 300,
            "end": 301
          },
          "start": 288,
          "end": 301
        },
        "start": 283,
        "end": 301
      },
      "directive": null,
      "start": 283,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 324,
          "end": 325
        },
        "start": 319,
        "end": 325
      },
      "directive": null,
      "start": 319,
      "end": 326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 333,
            "end": 339
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 340,
            "end": 341
          },
          "start": 332,
          "end": 341
        },
        "start": 327,
        "end": 341
      },
      "directive": null,
      "start": 327,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 344
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 359
            },
            "typeArguments": null,
            "start": 349,
            "end": 359
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 360,
            "end": 361
          },
          "start": 348,
          "end": 361
        },
        "start": 343,
        "end": 361
      },
      "directive": null,
      "start": 343,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 380
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 384,
          "end": 385
        },
        "start": 379,
        "end": 385
      },
      "directive": null,
      "start": 379,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 388
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 393,
            "end": 399
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 400,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 387,
        "end": 401
      },
      "directive": null,
      "start": 387,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 404
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 419
            },
            "typeArguments": null,
            "start": 409,
            "end": 419
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 420,
            "end": 421
          },
          "start": 408,
          "end": 421
        },
        "start": 403,
        "end": 421
      },
      "directive": null,
      "start": 403,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 441
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 446,
          "end": 447
        },
        "start": 440,
        "end": 447
      },
      "directive": null,
      "start": 440,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 450
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 456,
            "end": 462
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 463,
            "end": 464
          },
          "start": 455,
          "end": 464
        },
        "start": 449,
        "end": 464
      },
      "directive": null,
      "start": 449,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 467
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 483
            },
            "typeArguments": null,
            "start": 473,
            "end": 483
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 484,
            "end": 485
          },
          "start": 472,
          "end": 485
        },
        "start": 466,
        "end": 485
      },
      "directive": null,
      "start": 466,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 505
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 510,
          "end": 511
        },
        "start": 504,
        "end": 511
      },
      "directive": null,
      "start": 504,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 520,
            "end": 526
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 527,
            "end": 528
          },
          "start": 519,
          "end": 528
        },
        "start": 513,
        "end": 528
      },
      "directive": null,
      "start": 513,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 531
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 547
            },
            "typeArguments": null,
            "start": 537,
            "end": 547
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 548,
            "end": 549
          },
          "start": 536,
          "end": 549
        },
        "start": 530,
        "end": 549
      },
      "directive": null,
      "start": 530,
      "end": 550
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
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
    "value": "BrandedNum",
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
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "__numberBrand",
    "start": 29,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 59,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 113,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 169,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 201,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 229,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 261,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 300,
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
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 321,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 324,
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
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 349,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 381,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 409,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 442,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 473,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 506,
    "end": 509
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
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
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "BrandedNum",
    "start": 537,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  }
]
```

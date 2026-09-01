__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 9,
              "end": 14
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 23
              },
              "typeArguments": null,
              "start": 18,
              "end": 23
            },
            "start": 9,
            "end": 23
          },
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 31
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": true,
                  "start": 34,
                  "end": 39
                }
              ],
              "expressions": [],
              "start": 34,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 48
              },
              "typeArguments": null,
              "start": 43,
              "end": 48
            },
            "start": 34,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 25,
      "end": 49
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 56
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 59,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 70
              },
              "typeArguments": null,
              "start": 65,
              "end": 70
            },
            "start": 59,
            "end": 70
          },
          "definite": false,
          "start": 54,
          "end": 70
        }
      ],
      "declare": false,
      "start": 50,
      "end": 71
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 82,
                "end": 84
              },
              "prefix": true,
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
              },
              "typeArguments": null,
              "start": 88,
              "end": 93
            },
            "start": 81,
            "end": 93
          },
          "definite": false,
          "start": 76,
          "end": 93
        }
      ],
      "declare": false,
      "start": 72,
      "end": 94
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 105,
                "end": 107
              },
              "prefix": true,
              "start": 104,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 116
              },
              "typeArguments": null,
              "start": 111,
              "end": 116
            },
            "start": 104,
            "end": 116
          },
          "definite": false,
          "start": 99,
          "end": 116
        }
      ],
      "declare": false,
      "start": 95,
      "end": 117
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 139
              },
              "typeArguments": null,
              "start": 134,
              "end": 139
            },
            "start": 127,
            "end": 139
          },
          "definite": false,
          "start": 122,
          "end": 139
        }
      ],
      "declare": false,
      "start": 118,
      "end": 140
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
            "name": "v7",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "10n",
                "bigint": "10",
                "start": 151,
                "end": 154
              },
              "prefix": true,
              "start": 150,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
              },
              "typeArguments": null,
              "start": 158,
              "end": 163
            },
            "start": 150,
            "end": 163
          },
          "definite": false,
          "start": 145,
          "end": 163
        }
      ],
      "declare": false,
      "start": 141,
      "end": 164
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
            "name": "v8",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 171
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 174,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 187
              },
              "typeArguments": null,
              "start": 182,
              "end": 187
            },
            "start": 174,
            "end": 187
          },
          "definite": false,
          "start": 169,
          "end": 187
        }
      ],
      "declare": false,
      "start": 165,
      "end": 188
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
            "name": "v9",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 195
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 198,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 212
              },
              "typeArguments": null,
              "start": 207,
              "end": 212
            },
            "start": 198,
            "end": 212
          },
          "definite": false,
          "start": 193,
          "end": 212
        }
      ],
      "declare": false,
      "start": 189,
      "end": 213
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 224,
              "end": 229
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 238
              },
              "typeArguments": null,
              "start": 233,
              "end": 238
            },
            "start": 224,
            "end": 238
          },
          "definite": false,
          "start": 219,
          "end": 238
        }
      ],
      "declare": false,
      "start": 215,
      "end": 239
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 246
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": true,
                  "start": 249,
                  "end": 254
                }
              ],
              "expressions": [],
              "start": 249,
              "end": 254
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 263
              },
              "typeArguments": null,
              "start": 258,
              "end": 263
            },
            "start": 249,
            "end": 263
          },
          "definite": false,
          "start": 244,
          "end": 263
        }
      ],
      "declare": false,
      "start": 240,
      "end": 264
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 274,
              "end": 276
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 285
              },
              "typeArguments": null,
              "start": 280,
              "end": 285
            },
            "start": 274,
            "end": 285
          },
          "definite": false,
          "start": 269,
          "end": 285
        }
      ],
      "declare": false,
      "start": 265,
      "end": 286
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 297,
                "end": 299
              },
              "prefix": true,
              "start": 296,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 308
              },
              "typeArguments": null,
              "start": 303,
              "end": 308
            },
            "start": 296,
            "end": 308
          },
          "definite": false,
          "start": 291,
          "end": 308
        }
      ],
      "declare": false,
      "start": 287,
      "end": 309
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 316
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 320,
                "end": 322
              },
              "prefix": true,
              "start": 319,
              "end": 322
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 331
              },
              "typeArguments": null,
              "start": 326,
              "end": 331
            },
            "start": 319,
            "end": 331
          },
          "definite": false,
          "start": 314,
          "end": 331
        }
      ],
      "declare": false,
      "start": 310,
      "end": 332
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 339
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 342,
              "end": 345
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 354
              },
              "typeArguments": null,
              "start": 349,
              "end": 354
            },
            "start": 342,
            "end": 354
          },
          "definite": false,
          "start": 337,
          "end": 354
        }
      ],
      "declare": false,
      "start": 333,
      "end": 355
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 362
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "10n",
                "bigint": "10",
                "start": 366,
                "end": 369
              },
              "prefix": true,
              "start": 365,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 378
              },
              "typeArguments": null,
              "start": 373,
              "end": 378
            },
            "start": 365,
            "end": 378
          },
          "definite": false,
          "start": 360,
          "end": 378
        }
      ],
      "declare": false,
      "start": 356,
      "end": 379
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
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 402
              },
              "typeArguments": null,
              "start": 397,
              "end": 402
            },
            "start": 389,
            "end": 402
          },
          "definite": false,
          "start": 384,
          "end": 402
        }
      ],
      "declare": false,
      "start": 380,
      "end": 403
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
            "name": "c9",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 410
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 413,
              "end": 418
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 427
              },
              "typeArguments": null,
              "start": 422,
              "end": 427
            },
            "start": 413,
            "end": 427
          },
          "definite": false,
          "start": 408,
          "end": 427
        }
      ],
      "declare": false,
      "start": 404,
      "end": 428
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
            "name": "vv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 437
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 442
          },
          "definite": false,
          "start": 434,
          "end": 442
        }
      ],
      "declare": false,
      "start": 430,
      "end": 443
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
            "name": "vc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 451
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "definite": false,
          "start": 448,
          "end": 456
        }
      ],
      "declare": false,
      "start": 444,
      "end": 457
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 465
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 468,
              "end": 470
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 479
              },
              "typeArguments": null,
              "start": 474,
              "end": 479
            },
            "start": 468,
            "end": 479
          },
          "definite": false,
          "start": 463,
          "end": 479
        }
      ],
      "declare": false,
      "start": 459,
      "end": 480
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 487
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 491,
                  "end": 492
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 494,
                  "end": 495
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 497,
                  "end": 498
                }
              ],
              "start": 490,
              "end": 499
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 508
              },
              "typeArguments": null,
              "start": 503,
              "end": 508
            },
            "start": 490,
            "end": 508
          },
          "definite": false,
          "start": 485,
          "end": 508
        }
      ],
      "declare": false,
      "start": 481,
      "end": 509
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 520,
                  "end": 522
                },
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 524,
                  "end": 531
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 533,
                  "end": 537
                }
              ],
              "start": 519,
              "end": 538
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 547
              },
              "typeArguments": null,
              "start": 542,
              "end": 547
            },
            "start": 519,
            "end": 547
          },
          "definite": false,
          "start": 514,
          "end": 547
        }
      ],
      "declare": false,
      "start": 510,
      "end": 548
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 563,
                        "end": 564
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 566,
                        "end": 567
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 569,
                        "end": 570
                      }
                    ],
                    "start": 562,
                    "end": 571
                  },
                  "start": 559,
                  "end": 571
                }
              ],
              "start": 558,
              "end": 572
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 581
              },
              "typeArguments": null,
              "start": 576,
              "end": 581
            },
            "start": 558,
            "end": 581
          },
          "definite": false,
          "start": 553,
          "end": 581
        }
      ],
      "declare": false,
      "start": 549,
      "end": 582
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 589
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 593,
                "end": 594
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 596,
                "end": 597
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 599,
                "end": 600
              }
            ],
            "start": 592,
            "end": 601
          },
          "definite": false,
          "start": 587,
          "end": 601
        }
      ],
      "declare": false,
      "start": 583,
      "end": 602
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 609
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 616,
                    "end": 618
                  },
                  "start": 613,
                  "end": 618
                }
              ],
              "start": 612,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 628
              },
              "typeArguments": null,
              "start": 623,
              "end": 628
            },
            "start": 612,
            "end": 628
          },
          "definite": false,
          "start": 607,
          "end": 628
        }
      ],
      "declare": false,
      "start": 603,
      "end": 629
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 636
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "start": 640,
                "end": 645
              }
            ],
            "start": 639,
            "end": 646
          },
          "definite": false,
          "start": 634,
          "end": 646
        }
      ],
      "declare": false,
      "start": 630,
      "end": 647
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 654
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 658,
                  "end": 663
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 670
                  },
                  "start": 665,
                  "end": 670
                }
              ],
              "start": 657,
              "end": 671
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 680
              },
              "typeArguments": null,
              "start": 675,
              "end": 680
            },
            "start": 657,
            "end": 680
          },
          "definite": false,
          "start": 652,
          "end": 680
        }
      ],
      "declare": false,
      "start": 648,
      "end": 681
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 688
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 697
                },
                "start": 692,
                "end": 697
              }
            ],
            "start": 691,
            "end": 698
          },
          "definite": false,
          "start": 686,
          "end": 698
        }
      ],
      "declare": false,
      "start": 682,
      "end": 699
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 722,
                            "end": 728
                          },
                          "start": 720,
                          "end": 728
                        },
                        "start": 719,
                        "end": 728
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 731,
                        "end": 737
                      },
                      "start": 729,
                      "end": 737
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 718,
                    "end": 737
                  }
                ],
                "start": 716,
                "end": 739
              },
              "start": 714,
              "end": 739
            },
            "start": 713,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 713,
          "end": 739
        }
      ],
      "declare": true,
      "start": 701,
      "end": 740
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 748
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 754
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 756,
                    "end": 758
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 753,
                  "end": 758
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 761
                  },
                  "value": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 763,
                    "end": 765
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 760,
                  "end": 765
                }
              ],
              "start": 751,
              "end": 767
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 776
              },
              "typeArguments": null,
              "start": 771,
              "end": 776
            },
            "start": 751,
            "end": 776
          },
          "definite": false,
          "start": 746,
          "end": 776
        }
      ],
      "declare": false,
      "start": 742,
      "end": 777
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 789,
                    "end": 790
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 792,
                    "end": 793
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 789,
                  "end": 793
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 795,
                    "end": 798
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 800,
                    "end": 801
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "'c'",
                    "start": 804,
                    "end": 807
                  },
                  "value": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 810,
                    "end": 811
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 803,
                  "end": 811
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 814
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
                      "body": [],
                      "start": 817,
                      "end": 819
                    },
                    "expression": false,
                    "start": 814,
                    "end": 819
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 813,
                  "end": 819
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "e",
                      "raw": "'e'",
                      "start": 822,
                      "end": 825
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 828,
                      "end": 830
                    },
                    "start": 822,
                    "end": 830
                  },
                  "value": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 833,
                    "end": 834
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 821,
                  "end": 834
                }
              ],
              "start": 787,
              "end": 836
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 845
              },
              "typeArguments": null,
              "start": 840,
              "end": 845
            },
            "start": 787,
            "end": 845
          },
          "definite": false,
          "start": 782,
          "end": 845
        }
      ],
      "declare": false,
      "start": 778,
      "end": 846
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 853
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 863
                  },
                  "start": 858,
                  "end": 863
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 868,
                    "end": 870
                  },
                  "start": 865,
                  "end": 870
                }
              ],
              "start": 856,
              "end": 872
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 881
              },
              "typeArguments": null,
              "start": 876,
              "end": 881
            },
            "start": 856,
            "end": 881
          },
          "definite": false,
          "start": 851,
          "end": 881
        }
      ],
      "declare": false,
      "start": 847,
      "end": 882
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 889
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 895
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 897,
                  "end": 898
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 894,
                "end": 898
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 903,
                  "end": 904
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 900,
                "end": 904
              }
            ],
            "start": 892,
            "end": 906
          },
          "definite": false,
          "start": 887,
          "end": 906
        }
      ],
      "declare": false,
      "start": 883,
      "end": 907
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 914
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 924
                  },
                  "start": 919,
                  "end": 924
                }
              ],
              "start": 917,
              "end": 926
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 935
              },
              "typeArguments": null,
              "start": 930,
              "end": 935
            },
            "start": 917,
            "end": 935
          },
          "definite": false,
          "start": 912,
          "end": 935
        }
      ],
      "declare": false,
      "start": 908,
      "end": 936
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 953
                },
                "start": 948,
                "end": 953
              }
            ],
            "start": 946,
            "end": 955
          },
          "definite": false,
          "start": 941,
          "end": 955
        }
      ],
      "declare": false,
      "start": 937,
      "end": 956
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
            "name": "o7",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 963
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 971,
                    "end": 972
                  },
                  "start": 968,
                  "end": 972
                }
              ],
              "start": 966,
              "end": 974
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 983
              },
              "typeArguments": null,
              "start": 978,
              "end": 983
            },
            "start": 966,
            "end": 983
          },
          "definite": false,
          "start": 961,
          "end": 983
        }
      ],
      "declare": false,
      "start": 957,
      "end": 984
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
            "name": "o8",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 991
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1001
                },
                "start": 996,
                "end": 1001
              }
            ],
            "start": 994,
            "end": 1003
          },
          "definite": false,
          "start": 989,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 985,
      "end": 1004
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
            "name": "o9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1011
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1017
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1019,
                    "end": 1021
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1016,
                  "end": 1021
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1026
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1031,
                                "end": 1035
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1036,
                                "end": 1037
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1031,
                              "end": 1037
                            },
                            "right": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 1040,
                              "end": 1042
                            },
                            "start": 1031,
                            "end": 1042
                          },
                          "directive": null,
                          "start": 1031,
                          "end": 1042
                        }
                      ],
                      "start": 1029,
                      "end": 1044
                    },
                    "expression": false,
                    "start": 1026,
                    "end": 1044
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1023,
                  "end": 1044
                }
              ],
              "start": 1014,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1055
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1055
            },
            "start": 1014,
            "end": 1055
          },
          "definite": false,
          "start": 1009,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1005,
      "end": 1056
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1072,
            "end": 1074
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1078,
              "end": 1080
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1085,
                "end": 1090
              },
              "typeArguments": null,
              "start": 1085,
              "end": 1090
            },
            "start": 1077,
            "end": 1090
          },
          "definite": false,
          "start": 1072,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1091
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1096,
            "end": 1098
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1104,
                "end": 1106
              },
              "prefix": true,
              "start": 1103,
              "end": 1106
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1117
              },
              "typeArguments": null,
              "start": 1112,
              "end": 1117
            },
            "start": 1101,
            "end": 1117
          },
          "definite": false,
          "start": 1096,
          "end": 1117
        }
      ],
      "declare": false,
      "start": 1092,
      "end": 1118
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1125
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1131,
                  "end": 1133
                }
              ],
              "start": 1129,
              "end": 1135
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1145
              },
              "typeArguments": null,
              "start": 1140,
              "end": 1145
            },
            "start": 1128,
            "end": 1145
          },
          "definite": false,
          "start": 1123,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1119,
      "end": 1146
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1153
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 1160,
                              "end": 1162
                            }
                          ],
                          "start": 1159,
                          "end": 1163
                        }
                      ],
                      "start": 1158,
                      "end": 1164
                    }
                  ],
                  "start": 1157,
                  "end": 1165
                }
              ],
              "start": 1156,
              "end": 1166
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1175
              },
              "typeArguments": null,
              "start": 1170,
              "end": 1175
            },
            "start": 1156,
            "end": 1175
          },
          "definite": false,
          "start": 1151,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1147,
      "end": 1176
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1182,
            "end": 1184
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1189,
                    "end": 1190
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1192,
                    "end": 1194
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1189,
                  "end": 1194
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1200,
                        "end": 1202
                      },
                      {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1204,
                        "end": 1206
                      }
                    ],
                    "start": 1199,
                    "end": 1207
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1196,
                  "end": 1207
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1209,
                    "end": 1210
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1214,
                          "end": 1215
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1219,
                                "end": 1220
                              },
                              "value": {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1222,
                                "end": 1224
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1219,
                              "end": 1224
                            }
                          ],
                          "start": 1217,
                          "end": 1226
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1214,
                        "end": 1226
                      }
                    ],
                    "start": 1212,
                    "end": 1228
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1209,
                  "end": 1228
                }
              ],
              "start": 1187,
              "end": 1230
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1239
              },
              "typeArguments": null,
              "start": 1234,
              "end": 1239
            },
            "start": 1187,
            "end": 1239
          },
          "definite": false,
          "start": 1182,
          "end": 1239
        }
      ],
      "declare": false,
      "start": 1178,
      "end": 1240
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
            "name": "q1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1248
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1257
              },
              "typeArguments": null,
              "start": 1252,
              "end": 1257
            },
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1259,
              "end": 1261
            },
            "start": 1251,
            "end": 1261
          },
          "definite": false,
          "start": 1246,
          "end": 1261
        }
      ],
      "declare": false,
      "start": 1242,
      "end": 1262
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1269
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1278
              },
              "typeArguments": null,
              "start": 1273,
              "end": 1278
            },
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 1280,
              "end": 1285
            },
            "start": 1272,
            "end": 1285
          },
          "definite": false,
          "start": 1267,
          "end": 1285
        }
      ],
      "declare": false,
      "start": 1263,
      "end": 1286
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
            "name": "q3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1291,
            "end": 1293
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1297,
              "end": 1302
            },
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1304,
              "end": 1308
            },
            "start": 1296,
            "end": 1308
          },
          "definite": false,
          "start": 1291,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1287,
      "end": 1309
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
            "name": "q4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1316
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1325
              },
              "typeArguments": null,
              "start": 1320,
              "end": 1325
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1328,
                  "end": 1329
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1331,
                  "end": 1332
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1334,
                  "end": 1335
                }
              ],
              "start": 1327,
              "end": 1336
            },
            "start": 1319,
            "end": 1336
          },
          "definite": false,
          "start": 1314,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1310,
      "end": 1337
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
            "name": "q5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1342,
            "end": 1344
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1353
              },
              "typeArguments": null,
              "start": 1348,
              "end": 1353
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1358
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1360,
                    "end": 1362
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1357,
                  "end": 1362
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1364,
                    "end": 1365
                  },
                  "value": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 1367,
                    "end": 1369
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1364,
                  "end": 1369
                }
              ],
              "start": 1355,
              "end": 1371
            },
            "start": 1347,
            "end": 1371
          },
          "definite": false,
          "start": 1342,
          "end": 1371
        }
      ],
      "declare": false,
      "start": 1338,
      "end": 1372
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1391,
        "end": 1393
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
              "start": 1394,
              "end": 1395
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1394,
            "end": 1395
          }
        ],
        "start": 1393,
        "end": 1396
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1401
              },
              "typeArguments": null,
              "start": 1400,
              "end": 1401
            },
            "start": 1398,
            "end": 1401
          },
          "start": 1397,
          "end": 1401
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
            "start": 1404,
            "end": 1405
          },
          "typeArguments": null,
          "start": 1404,
          "end": 1405
        },
        "start": 1402,
        "end": 1405
      },
      "body": null,
      "expression": false,
      "start": 1374,
      "end": 1406
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1414
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1419
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1423,
                "end": 1428
              },
              "typeArguments": null,
              "start": 1423,
              "end": 1428
            },
            "start": 1417,
            "end": 1428
          },
          "definite": false,
          "start": 1412,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1429
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1446
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1450,
                "end": 1454
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1457,
                "end": 1458
              },
              "alternate": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1461,
                "end": 1462
              },
              "start": 1450,
              "end": 1462
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1467,
                "end": 1472
              },
              "typeArguments": null,
              "start": 1467,
              "end": 1472
            },
            "start": 1449,
            "end": 1472
          },
          "definite": false,
          "start": 1444,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1440,
      "end": 1473
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1488,
            "end": 1490
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1496,
                  "end": 1497
                }
              ],
              "optional": false,
              "start": 1493,
              "end": 1498
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1507
              },
              "typeArguments": null,
              "start": 1502,
              "end": 1507
            },
            "start": 1493,
            "end": 1507
          },
          "definite": false,
          "start": 1488,
          "end": 1507
        }
      ],
      "declare": false,
      "start": 1484,
      "end": 1508
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1524,
            "end": 1526
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 1529,
              "end": 1534
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1543
              },
              "typeArguments": null,
              "start": 1538,
              "end": 1543
            },
            "start": 1529,
            "end": 1543
          },
          "definite": false,
          "start": 1524,
          "end": 1543
        }
      ],
      "declare": false,
      "start": 1520,
      "end": 1544
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1549,
            "end": 1551
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 1554,
              "end": 1559
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1563,
                "end": 1568
              },
              "typeArguments": null,
              "start": 1563,
              "end": 1568
            },
            "start": 1554,
            "end": 1568
          },
          "definite": false,
          "start": 1549,
          "end": 1568
        }
      ],
      "declare": false,
      "start": 1545,
      "end": 1569
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1574,
            "end": 1576
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1579,
                  "end": 1582
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 1584,
                  "end": 1588
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1590,
                  "end": 1592
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1584
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1590
                }
              ],
              "start": 1579,
              "end": 1592
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1601
              },
              "typeArguments": null,
              "start": 1596,
              "end": 1601
            },
            "start": 1579,
            "end": 1601
          },
          "definite": false,
          "start": 1574,
          "end": 1601
        }
      ],
      "declare": false,
      "start": 1570,
      "end": 1602
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1609
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1612,
                  "end": 1615
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 1624,
                  "end": 1628
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1637,
                  "end": 1639
                }
              ],
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "(",
                        "cooked": "("
                      },
                      "tail": false,
                      "start": 1615,
                      "end": 1619
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ")",
                        "cooked": ")"
                      },
                      "tail": true,
                      "start": 1621,
                      "end": 1624
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1621
                    }
                  ],
                  "start": 1615,
                  "end": 1624
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "(",
                        "cooked": "("
                      },
                      "tail": false,
                      "start": 1628,
                      "end": 1632
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ")",
                        "cooked": ")"
                      },
                      "tail": true,
                      "start": 1634,
                      "end": 1637
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1634
                    }
                  ],
                  "start": 1628,
                  "end": 1637
                }
              ],
              "start": 1612,
              "end": 1639
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1648
              },
              "typeArguments": null,
              "start": 1643,
              "end": 1648
            },
            "start": 1612,
            "end": 1648
          },
          "definite": false,
          "start": 1607,
          "end": 1648
        }
      ],
      "declare": false,
      "start": 1603,
      "end": 1649
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1667,
                    "end": 1672
                  },
                  "start": 1667,
                  "end": 1672
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1675,
                    "end": 1680
                  },
                  "start": 1675,
                  "end": 1680
                }
              ],
              "start": 1667,
              "end": 1680
            },
            "start": 1665,
            "end": 1680
          },
          "start": 1664,
          "end": 1680
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1685,
                    "end": 1686
                  },
                  "start": 1685,
                  "end": 1686
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1689,
                    "end": 1690
                  },
                  "start": 1689,
                  "end": 1690
                }
              ],
              "start": 1685,
              "end": 1690
            },
            "start": 1683,
            "end": 1690
          },
          "start": 1682,
          "end": 1690
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1705,
                    "end": 1708
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "-",
                      "cooked": "-"
                    },
                    "tail": false,
                    "start": 1709,
                    "end": 1713
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1714,
                    "end": 1716
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1708,
                    "end": 1709
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1713,
                    "end": 1714
                  }
                ],
                "start": 1705,
                "end": 1716
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1725
                },
                "typeArguments": null,
                "start": 1720,
                "end": 1725
              },
              "start": 1705,
              "end": 1725
            },
            "start": 1698,
            "end": 1726
          }
        ],
        "start": 1692,
        "end": 1728
      },
      "expression": false,
      "start": 1651,
      "end": 1728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1742
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
              "start": 1743,
              "end": 1744
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1753,
              "end": 1759
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1743,
            "end": 1759
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1762
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1771,
              "end": 1777
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1761,
            "end": 1777
          }
        ],
        "start": 1742,
        "end": 1778
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1782,
                "end": 1783
              },
              "typeArguments": null,
              "start": 1782,
              "end": 1783
            },
            "start": 1780,
            "end": 1783
          },
          "start": 1779,
          "end": 1783
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1788,
                "end": 1789
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1789
            },
            "start": 1786,
            "end": 1789
          },
          "start": 1785,
          "end": 1789
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1804,
                    "end": 1807
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "-",
                      "cooked": "-"
                    },
                    "tail": false,
                    "start": 1808,
                    "end": 1812
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1813,
                    "end": 1815
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1807,
                    "end": 1808
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1812,
                    "end": 1813
                  }
                ],
                "start": 1804,
                "end": 1815
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1824
                },
                "typeArguments": null,
                "start": 1819,
                "end": 1824
              },
              "start": 1804,
              "end": 1824
            },
            "start": 1797,
            "end": 1825
          }
        ],
        "start": 1791,
        "end": 1827
      },
      "expression": false,
      "start": 1730,
      "end": 1827
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
            "name": "ts1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1835,
            "end": 1838
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1844
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1845,
                "end": 1850
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1852,
                "end": 1857
              }
            ],
            "optional": false,
            "start": 1841,
            "end": 1858
          },
          "definite": false,
          "start": 1835,
          "end": 1858
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1859
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
            "name": "ts2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1866,
            "end": 1869
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1875
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1876,
                "end": 1881
              },
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1885,
                      "end": 1889
                    },
                    "prefix": true,
                    "start": 1884,
                    "end": 1889
                  },
                  "prefix": true,
                  "start": 1883,
                  "end": 1889
                },
                "consequent": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 1892,
                  "end": 1895
                },
                "alternate": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 1898,
                  "end": 1901
                },
                "start": 1883,
                "end": 1901
              }
            ],
            "optional": false,
            "start": 1872,
            "end": 1902
          },
          "definite": false,
          "start": 1866,
          "end": 1902
        }
      ],
      "declare": false,
      "start": 1860,
      "end": 1903
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
            "name": "ts3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1910,
            "end": 1913
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1916,
              "end": 1919
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1922,
                      "end": 1926
                    },
                    "prefix": true,
                    "start": 1921,
                    "end": 1926
                  },
                  "prefix": true,
                  "start": 1920,
                  "end": 1926
                },
                "consequent": {
                  "type": "Literal",
                  "value": "top",
                  "raw": "'top'",
                  "start": 1929,
                  "end": 1934
                },
                "alternate": {
                  "type": "Literal",
                  "value": "bottom",
                  "raw": "'bottom'",
                  "start": 1937,
                  "end": 1945
                },
                "start": 1920,
                "end": 1945
              },
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1949,
                      "end": 1953
                    },
                    "prefix": true,
                    "start": 1948,
                    "end": 1953
                  },
                  "prefix": true,
                  "start": 1947,
                  "end": 1953
                },
                "consequent": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 1956,
                  "end": 1962
                },
                "alternate": {
                  "type": "Literal",
                  "value": "right",
                  "raw": "'right'",
                  "start": 1965,
                  "end": 1972
                },
                "start": 1947,
                "end": 1972
              }
            ],
            "optional": false,
            "start": 1916,
            "end": 1973
          },
          "definite": false,
          "start": 1910,
          "end": 1973
        }
      ],
      "declare": false,
      "start": 1904,
      "end": 1974
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1992,
                    "end": 1997
                  },
                  "start": 1992,
                  "end": 1997
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2000,
                    "end": 2005
                  },
                  "start": 2000,
                  "end": 2005
                }
              ],
              "start": 1992,
              "end": 2005
            },
            "start": 1990,
            "end": 2005
          },
          "start": 1989,
          "end": 2005
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 2010,
              "end": 2016
            },
            "start": 2008,
            "end": 2016
          },
          "start": 2007,
          "end": 2016
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 2031,
                    "end": 2034
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 2035,
                    "end": 2038
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2039,
                    "end": 2041
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2034,
                    "end": 2035
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2039
                  }
                ],
                "start": 2031,
                "end": 2041
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2050
                },
                "typeArguments": null,
                "start": 2045,
                "end": 2050
              },
              "start": 2031,
              "end": 2050
            },
            "start": 2024,
            "end": 2051
          }
        ],
        "start": 2018,
        "end": 2053
      },
      "expression": false,
      "start": 1976,
      "end": 2053
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2066
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "verify",
              "raw": "\"verify\"",
              "start": 2069,
              "end": 2077
            },
            "start": 2069,
            "end": 2077
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "write",
              "raw": "\"write\"",
              "start": 2080,
              "end": 2087
            },
            "start": 2080,
            "end": 2087
          }
        ],
        "start": 2069,
        "end": 2087
      },
      "declare": false,
      "start": 2055,
      "end": 2088
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ContentMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2106
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "match",
              "raw": "\"match\"",
              "start": 2109,
              "end": 2116
            },
            "start": 2109,
            "end": 2116
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "nonMatch",
              "raw": "\"nonMatch\"",
              "start": 2119,
              "end": 2129
            },
            "start": 2119,
            "end": 2129
          }
        ],
        "start": 2109,
        "end": 2129
      },
      "declare": false,
      "start": 2089,
      "end": 2130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outcome",
        "optional": false,
        "typeAnnotation": null,
        "start": 2136,
        "end": 2143
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 2146,
            "end": 2149
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "_",
              "cooked": "_"
            },
            "tail": false,
            "start": 2155,
            "end": 2159
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2171,
            "end": 2173
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2155
            },
            "typeArguments": null,
            "start": 2149,
            "end": 2155
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ContentMatch",
              "optional": false,
              "typeAnnotation": null,
              "start": 2159,
              "end": 2171
            },
            "typeArguments": null,
            "start": 2159,
            "end": 2171
          }
        ],
        "start": 2146,
        "end": 2173
      },
      "declare": false,
      "start": 2131,
      "end": 2174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
        "end": 2188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2197,
              "end": 2204
            },
            "start": 2195,
            "end": 2204
          },
          "start": 2189,
          "end": 2204
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2222,
              "end": 2229
            },
            "start": 2220,
            "end": 2229
          },
          "start": 2206,
          "end": 2229
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2252,
                        "end": 2258
                      },
                      "typeArguments": null,
                      "start": 2252,
                      "end": 2258
                    },
                    "start": 2250,
                    "end": 2258
                  },
                  "start": 2243,
                  "end": 2258
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2267
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "verify",
                          "cooked": "verify"
                        },
                        "tail": true,
                        "start": 2270,
                        "end": 2278
                      }
                    ],
                    "expressions": [],
                    "start": 2270,
                    "end": 2278
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "write",
                          "cooked": "write"
                        },
                        "tail": true,
                        "start": 2281,
                        "end": 2288
                      }
                    ],
                    "expressions": [],
                    "start": 2281,
                    "end": 2288
                  },
                  "start": 2261,
                  "end": 2288
                },
                "definite": false,
                "start": 2243,
                "end": 2288
              }
            ],
            "declare": false,
            "start": 2237,
            "end": 2289
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
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2314,
                        "end": 2326
                      },
                      "typeArguments": null,
                      "start": 2314,
                      "end": 2326
                    },
                    "start": 2312,
                    "end": 2326
                  },
                  "start": 2300,
                  "end": 2326
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2329,
                    "end": 2343
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "match",
                          "cooked": "match"
                        },
                        "tail": true,
                        "start": 2346,
                        "end": 2353
                      }
                    ],
                    "expressions": [],
                    "start": 2346,
                    "end": 2353
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "nonMatch",
                          "cooked": "nonMatch"
                        },
                        "tail": true,
                        "start": 2356,
                        "end": 2366
                      }
                    ],
                    "expressions": [],
                    "start": 2356,
                    "end": 2366
                  },
                  "start": 2329,
                  "end": 2366
                },
                "definite": false,
                "start": 2300,
                "end": 2366
              }
            ],
            "declare": false,
            "start": 2294,
            "end": 2367
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
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Outcome",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2387,
                        "end": 2394
                      },
                      "typeArguments": null,
                      "start": 2387,
                      "end": 2394
                    },
                    "start": 2385,
                    "end": 2394
                  },
                  "start": 2378,
                  "end": 2394
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2397,
                        "end": 2400
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2406,
                        "end": 2410
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2422,
                        "end": 2424
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2400,
                        "end": 2406
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2410,
                        "end": 2422
                      }
                    ],
                    "start": 2397,
                    "end": 2424
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2428,
                      "end": 2433
                    },
                    "typeArguments": null,
                    "start": 2428,
                    "end": 2433
                  },
                  "start": 2397,
                  "end": 2433
                },
                "definite": false,
                "start": 2378,
                "end": 2433
              }
            ],
            "declare": false,
            "start": 2372,
            "end": 2434
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "outcome",
              "optional": false,
              "typeAnnotation": null,
              "start": 2446,
              "end": 2453
            },
            "start": 2439,
            "end": 2454
          }
        ],
        "start": 2231,
        "end": 2456
      },
      "expression": false,
      "start": 2176,
      "end": 2456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2467,
        "end": 2470
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2479,
              "end": 2486
            },
            "start": 2477,
            "end": 2486
          },
          "start": 2471,
          "end": 2486
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2504,
              "end": 2511
            },
            "start": 2502,
            "end": 2511
          },
          "start": 2488,
          "end": 2511
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2525,
                  "end": 2531
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2534,
                    "end": 2540
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "verify",
                          "cooked": "verify"
                        },
                        "tail": true,
                        "start": 2543,
                        "end": 2551
                      }
                    ],
                    "expressions": [],
                    "start": 2543,
                    "end": 2551
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "write",
                          "cooked": "write"
                        },
                        "tail": true,
                        "start": 2554,
                        "end": 2561
                      }
                    ],
                    "expressions": [],
                    "start": 2554,
                    "end": 2561
                  },
                  "start": 2534,
                  "end": 2561
                },
                "definite": false,
                "start": 2525,
                "end": 2561
              }
            ],
            "declare": false,
            "start": 2519,
            "end": 2562
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
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2573,
                  "end": 2585
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2588,
                    "end": 2602
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "match",
                          "cooked": "match"
                        },
                        "tail": true,
                        "start": 2605,
                        "end": 2612
                      }
                    ],
                    "expressions": [],
                    "start": 2605,
                    "end": 2612
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "nonMatch",
                          "cooked": "nonMatch"
                        },
                        "tail": true,
                        "start": 2615,
                        "end": 2625
                      }
                    ],
                    "expressions": [],
                    "start": 2615,
                    "end": 2625
                  },
                  "start": 2588,
                  "end": 2625
                },
                "definite": false,
                "start": 2573,
                "end": 2625
              }
            ],
            "declare": false,
            "start": 2567,
            "end": 2626
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
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2637,
                  "end": 2644
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2647,
                        "end": 2650
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2656,
                        "end": 2660
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2672,
                        "end": 2674
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2650,
                        "end": 2656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2660,
                        "end": 2672
                      }
                    ],
                    "start": 2647,
                    "end": 2674
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2678,
                      "end": 2683
                    },
                    "typeArguments": null,
                    "start": 2678,
                    "end": 2683
                  },
                  "start": 2647,
                  "end": 2683
                },
                "definite": false,
                "start": 2637,
                "end": 2683
              }
            ],
            "declare": false,
            "start": 2631,
            "end": 2684
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "outcome",
              "optional": false,
              "typeAnnotation": null,
              "start": 2696,
              "end": 2703
            },
            "start": 2689,
            "end": 2704
          }
        ],
        "start": 2513,
        "end": 2706
      },
      "expression": false,
      "start": 2458,
      "end": 2706
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessorNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 2717,
        "end": 2730
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2731,
              "end": 2732
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2741,
              "end": 2747
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2731,
            "end": 2747
          }
        ],
        "start": 2730,
        "end": 2748
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2759,
                "end": 2760
              },
              "typeArguments": null,
              "start": 2759,
              "end": 2760
            },
            "start": 2757,
            "end": 2760
          },
          "start": 2749,
          "end": 2760
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "get-",
                          "cooked": "get-"
                        },
                        "tail": false,
                        "start": 2776,
                        "end": 2783
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2791,
                        "end": 2793
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2783,
                        "end": 2791
                      }
                    ],
                    "start": 2776,
                    "end": 2793
                  },
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "set-",
                          "cooked": "set-"
                        },
                        "tail": false,
                        "start": 2795,
                        "end": 2802
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2810,
                        "end": 2812
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2802,
                        "end": 2810
                      }
                    ],
                    "start": 2795,
                    "end": 2812
                  }
                ],
                "start": 2775,
                "end": 2813
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2817,
                  "end": 2822
                },
                "typeArguments": null,
                "start": 2817,
                "end": 2822
              },
              "start": 2775,
              "end": 2822
            },
            "start": 2768,
            "end": 2823
          }
        ],
        "start": 2762,
        "end": 2825
      },
      "expression": false,
      "start": 2708,
      "end": 2825
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
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2833,
            "end": 2836
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessorNames",
              "optional": false,
              "typeAnnotation": null,
              "start": 2839,
              "end": 2852
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 2853,
                "end": 2858
              }
            ],
            "optional": false,
            "start": 2839,
            "end": 2859
          },
          "definite": false,
          "start": 2833,
          "end": 2859
        }
      ],
      "declare": false,
      "start": 2827,
      "end": 2860
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo54374",
        "optional": false,
        "typeAnnotation": null,
        "start": 2939,
        "end": 2947
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
              "start": 2952,
              "end": 2953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2955,
                  "end": 2956
                },
                "start": 2955,
                "end": 2956
              },
              "start": 2953,
              "end": 2956
            },
            "accessibility": null,
            "static": false,
            "start": 2952,
            "end": 2957
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
              "start": 2960,
              "end": 2961
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2963,
                  "end": 2964
                },
                "start": 2963,
                "end": 2964
              },
              "start": 2961,
              "end": 2964
            },
            "accessibility": null,
            "static": false,
            "start": 2960,
            "end": 2965
          }
        ],
        "start": 2948,
        "end": 2967
      },
      "declare": false,
      "start": 2929,
      "end": 2967
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
            "name": "fooConst54374",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo54374",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2990,
                  "end": 2998
                },
                "typeArguments": null,
                "start": 2990,
                "end": 2998
              },
              "start": 2988,
              "end": 2998
            },
            "start": 2975,
            "end": 2998
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3005,
                    "end": 3006
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3008,
                    "end": 3009
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3005,
                  "end": 3009
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3013,
                    "end": 3014
                  },
                  "value": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 3016,
                    "end": 3017
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3013,
                  "end": 3017
                }
              ],
              "start": 3001,
              "end": 3019
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3023,
                "end": 3028
              },
              "typeArguments": null,
              "start": 3023,
              "end": 3028
            },
            "start": 3001,
            "end": 3028
          },
          "definite": false,
          "start": 2975,
          "end": 3028
        }
      ],
      "declare": false,
      "start": 2969,
      "end": 3028
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3028
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 9,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 15,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 59,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 122,
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
    "value": "10n",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 150,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 174,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "v9",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 233,
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
    "value": "let",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 249,
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
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 296,
    "end": 297
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 320,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 346,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 360,
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
    "value": "-",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 370,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 413,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "vv1",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "vc1",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "const",
    "start": 474,
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
    "value": "let",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 490,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "3",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 500,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 522,
    "end": 523
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 524,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 539,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 562,
    "end": 563
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "as",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Numeric",
    "value": "2",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 603,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "a5",
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
    "type": "Identifier",
    "value": "as",
    "start": 620,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 658,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 668,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 672,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 701,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 768,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 804,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 821,
    "end": 822
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 826,
    "end": 827
  },
  {
    "type": "String",
    "value": "''",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 837,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 858,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 873,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 876,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 883,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 912,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 919,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 927,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 930,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 941,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "o7",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 968,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 975,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "o8",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 996,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "o7",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "o9",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1019,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1047,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1085,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1112,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1192,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
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
    "type": "Identifier",
    "value": "as",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1234,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1273,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1287,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "q3",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1297,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1304,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "q4",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1320,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "q5",
    "start": 1342,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1382,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1444,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1464,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1467,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1493,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1502,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1524,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1529,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1560,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1574,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Template",
    "value": "`(${",
    "start": 1615,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Template",
    "value": "})`",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 1624,
    "end": 1628
  },
  {
    "type": "Template",
    "value": "`(${",
    "start": 1628,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Template",
    "value": "})`",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1640,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1643,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1651,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 1660,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1705,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 1709,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1717,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1720,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1745,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1753,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1763,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1771,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1813,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1816,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1819,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1829,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "ts1",
    "start": 1835,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1852,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1860,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "ts2",
    "start": 1866,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1876,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1885,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1904,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "ts3",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1922,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "String",
    "value": "'top'",
    "start": 1929,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "String",
    "value": "'bottom'",
    "start": 1937,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1949,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "String",
    "value": "'left'",
    "start": 1956,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "String",
    "value": "'right'",
    "start": 1965,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1976,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "ff3",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1992,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2000,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2010,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2039,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2045,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 2060,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "String",
    "value": "\"verify\"",
    "start": 2069,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "String",
    "value": "\"write\"",
    "start": 2080,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2089,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "ContentMatch",
    "start": 2094,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "String",
    "value": "\"match\"",
    "start": 2109,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "String",
    "value": "\"nonMatch\"",
    "start": 2119,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2131,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "Outcome",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2146,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 2149,
    "end": 2155
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 2155,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "ContentMatch",
    "start": 2159,
    "end": 2171
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2171,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "ff4",
    "start": 2185,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "verify",
    "start": 2189,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2197,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "contentMatches",
    "start": 2206,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2222,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 2252,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "verify",
    "start": 2261,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Template",
    "value": "`verify`",
    "start": 2270,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Template",
    "value": "`write`",
    "start": 2281,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2294,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "contentMatch",
    "start": 2300,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "ContentMatch",
    "start": 2314,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "contentMatches",
    "start": 2329,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Template",
    "value": "`match`",
    "start": 2346,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Template",
    "value": "`nonMatch`",
    "start": 2356,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2372,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "outcome",
    "start": 2378,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "Outcome",
    "start": 2387,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2397,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2400,
    "end": 2406
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 2406,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "contentMatch",
    "start": 2410,
    "end": 2422
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2422,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2425,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2439,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "outcome",
    "start": 2446,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2458,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "ff5",
    "start": 2467,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "verify",
    "start": 2471,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2479,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "contentMatches",
    "start": 2488,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2504,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2519,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2525,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "verify",
    "start": 2534,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Template",
    "value": "`verify`",
    "start": 2543,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Template",
    "value": "`write`",
    "start": 2554,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2567,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "contentMatch",
    "start": 2573,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "contentMatches",
    "start": 2588,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Template",
    "value": "`match`",
    "start": 2605,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Template",
    "value": "`nonMatch`",
    "start": 2615,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2631,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "outcome",
    "start": 2637,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2650,
    "end": 2656
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 2656,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "contentMatch",
    "start": 2660,
    "end": 2672
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2672,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2675,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2678,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2689,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "outcome",
    "start": 2696,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2708,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "accessorNames",
    "start": 2717,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2733,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2741,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 2749,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2768,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Template",
    "value": "`get-${",
    "start": 2776,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 2783,
    "end": 2791
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Template",
    "value": "`set-${",
    "start": 2795,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 2802,
    "end": 2810
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2810,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2814,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2817,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2827,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "ns1",
    "start": 2833,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "accessorNames",
    "start": 2839,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2853,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2929,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "Foo54374",
    "start": 2939,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2969,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "fooConst54374",
    "start": 2975,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "Foo54374",
    "start": 2990,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3020,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3023,
    "end": 3028
  }
]
```

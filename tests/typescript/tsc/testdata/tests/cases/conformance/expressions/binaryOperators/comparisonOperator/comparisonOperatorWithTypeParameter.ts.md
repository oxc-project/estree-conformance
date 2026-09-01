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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 24
                },
                "typeArguments": null,
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 24
        }
      ],
      "declare": false,
      "start": 11,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 44
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 61
          }
        ],
        "start": 39,
        "end": 76
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 80,
                "end": 81
              },
              "typeArguments": null,
              "start": 80,
              "end": 81
            },
            "start": 78,
            "end": 81
          },
          "start": 77,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 86,
                "end": 87
              },
              "typeArguments": null,
              "start": 86,
              "end": 87
            },
            "start": 84,
            "end": 87
          },
          "start": 83,
          "end": 87
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 90,
            "end": 93
          },
          "start": 89,
          "end": 93
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "ra1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 122
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "start": 125,
                  "end": 130
                },
                "definite": false,
                "start": 119,
                "end": 130
              }
            ],
            "declare": false,
            "start": 115,
            "end": 131
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
                  "name": "ra2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 143
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 146,
                  "end": 151
                },
                "definite": false,
                "start": 140,
                "end": 151
              }
            ],
            "declare": false,
            "start": 136,
            "end": 152
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
                  "name": "ra3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 164
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 173
                  },
                  "start": 167,
                  "end": 173
                },
                "definite": false,
                "start": 161,
                "end": 173
              }
            ],
            "declare": false,
            "start": 157,
            "end": 174
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
                  "name": "ra4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 186
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "start": 189,
                  "end": 195
                },
                "definite": false,
                "start": 183,
                "end": 195
              }
            ],
            "declare": false,
            "start": 179,
            "end": 196
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
                  "name": "ra5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 208
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 212
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 211,
                  "end": 217
                },
                "definite": false,
                "start": 205,
                "end": 217
              }
            ],
            "declare": false,
            "start": 201,
            "end": 218
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
                  "name": "ra6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 230
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "start": 233,
                  "end": 239
                },
                "definite": false,
                "start": 227,
                "end": 239
              }
            ],
            "declare": false,
            "start": 223,
            "end": 240
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
                  "name": "ra7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 252
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 256
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 262
                  },
                  "start": 255,
                  "end": 262
                },
                "definite": false,
                "start": 249,
                "end": 262
              }
            ],
            "declare": false,
            "start": 245,
            "end": 263
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
                  "name": "ra8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 275
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 279
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 285
                  },
                  "start": 278,
                  "end": 285
                },
                "definite": false,
                "start": 272,
                "end": 285
              }
            ],
            "declare": false,
            "start": 268,
            "end": 286
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
                  "name": "rb1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 299
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 307
                  },
                  "start": 302,
                  "end": 307
                },
                "definite": false,
                "start": 296,
                "end": 307
              }
            ],
            "declare": false,
            "start": 292,
            "end": 308
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
                  "name": "rb2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 320
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 324
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "start": 323,
                  "end": 328
                },
                "definite": false,
                "start": 317,
                "end": 328
              }
            ],
            "declare": false,
            "start": 313,
            "end": 329
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
                  "name": "rb3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 341
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "start": 344,
                  "end": 350
                },
                "definite": false,
                "start": 338,
                "end": 350
              }
            ],
            "declare": false,
            "start": 334,
            "end": 351
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
                  "name": "rb4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 363
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "start": 366,
                  "end": 372
                },
                "definite": false,
                "start": 360,
                "end": 372
              }
            ],
            "declare": false,
            "start": 356,
            "end": 373
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
                  "name": "rb5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 385
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 389
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "start": 388,
                  "end": 394
                },
                "definite": false,
                "start": 382,
                "end": 394
              }
            ],
            "declare": false,
            "start": 378,
            "end": 395
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
                  "name": "rb6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 407
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "start": 410,
                  "end": 416
                },
                "definite": false,
                "start": 404,
                "end": 416
              }
            ],
            "declare": false,
            "start": 400,
            "end": 417
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
                  "name": "rb7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 429
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "start": 432,
                  "end": 439
                },
                "definite": false,
                "start": 426,
                "end": 439
              }
            ],
            "declare": false,
            "start": 422,
            "end": 440
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
                  "name": "rb8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 452
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 456
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "start": 455,
                  "end": 462
                },
                "definite": false,
                "start": 449,
                "end": 462
              }
            ],
            "declare": false,
            "start": 445,
            "end": 463
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
                  "name": "rc1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 476
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 480
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  "start": 479,
                  "end": 484
                },
                "definite": false,
                "start": 473,
                "end": 484
              }
            ],
            "declare": false,
            "start": 469,
            "end": 485
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
                  "name": "rc2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 497
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 501
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 505
                  },
                  "start": 500,
                  "end": 505
                },
                "definite": false,
                "start": 494,
                "end": 505
              }
            ],
            "declare": false,
            "start": 490,
            "end": 506
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
                  "name": "rc3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 518
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "start": 521,
                  "end": 527
                },
                "definite": false,
                "start": 515,
                "end": 527
              }
            ],
            "declare": false,
            "start": 511,
            "end": 528
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
                  "name": "rc4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 540
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "start": 543,
                  "end": 549
                },
                "definite": false,
                "start": 537,
                "end": 549
              }
            ],
            "declare": false,
            "start": 533,
            "end": 550
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
                  "name": "rc5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 562
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 566
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 571
                  },
                  "start": 565,
                  "end": 571
                },
                "definite": false,
                "start": 559,
                "end": 571
              }
            ],
            "declare": false,
            "start": 555,
            "end": 572
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
                  "name": "rc6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 584
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 588
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 593
                  },
                  "start": 587,
                  "end": 593
                },
                "definite": false,
                "start": 581,
                "end": 593
              }
            ],
            "declare": false,
            "start": 577,
            "end": 594
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
                  "name": "rc7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 606
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 610
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 616
                  },
                  "start": 609,
                  "end": 616
                },
                "definite": false,
                "start": 603,
                "end": 616
              }
            ],
            "declare": false,
            "start": 599,
            "end": 617
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
                  "name": "rc8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 629
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 639
                  },
                  "start": 632,
                  "end": 639
                },
                "definite": false,
                "start": 626,
                "end": 639
              }
            ],
            "declare": false,
            "start": 622,
            "end": 640
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
                  "name": "rd1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 653
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 661
                  },
                  "start": 656,
                  "end": 661
                },
                "definite": false,
                "start": 650,
                "end": 661
              }
            ],
            "declare": false,
            "start": 646,
            "end": 662
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
                  "name": "rd2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 674
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 678
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 682
                  },
                  "start": 677,
                  "end": 682
                },
                "definite": false,
                "start": 671,
                "end": 682
              }
            ],
            "declare": false,
            "start": 667,
            "end": 683
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
                  "name": "rd3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 699
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 704
                  },
                  "start": 698,
                  "end": 704
                },
                "definite": false,
                "start": 692,
                "end": 704
              }
            ],
            "declare": false,
            "start": 688,
            "end": 705
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
                  "name": "rd4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 717
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 721
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 726
                  },
                  "start": 720,
                  "end": 726
                },
                "definite": false,
                "start": 714,
                "end": 726
              }
            ],
            "declare": false,
            "start": 710,
            "end": 727
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
                  "name": "rd5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 748
                  },
                  "start": 742,
                  "end": 748
                },
                "definite": false,
                "start": 736,
                "end": 748
              }
            ],
            "declare": false,
            "start": 732,
            "end": 749
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
                  "name": "rd6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 761
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 770
                  },
                  "start": 764,
                  "end": 770
                },
                "definite": false,
                "start": 758,
                "end": 770
              }
            ],
            "declare": false,
            "start": 754,
            "end": 771
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
                  "name": "rd7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 783
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 793
                  },
                  "start": 786,
                  "end": 793
                },
                "definite": false,
                "start": 780,
                "end": 793
              }
            ],
            "declare": false,
            "start": 776,
            "end": 794
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
                  "name": "rd8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 806
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 816
                  },
                  "start": 809,
                  "end": 816
                },
                "definite": false,
                "start": 803,
                "end": 816
              }
            ],
            "declare": false,
            "start": 799,
            "end": 817
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
                  "name": "re1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 840
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 844
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 848
                  },
                  "start": 843,
                  "end": 848
                },
                "definite": false,
                "start": 837,
                "end": 848
              }
            ],
            "declare": false,
            "start": 833,
            "end": 849
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
                  "name": "re2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 861
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 865
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 868,
                    "end": 869
                  },
                  "start": 864,
                  "end": 869
                },
                "definite": false,
                "start": 858,
                "end": 869
              }
            ],
            "declare": false,
            "start": 854,
            "end": 870
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
                  "name": "re3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 882
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 886
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 891
                  },
                  "start": 885,
                  "end": 891
                },
                "definite": false,
                "start": 879,
                "end": 891
              }
            ],
            "declare": false,
            "start": 875,
            "end": 892
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
                  "name": "re4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 901,
                  "end": 904
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 908
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "start": 907,
                  "end": 913
                },
                "definite": false,
                "start": 901,
                "end": 913
              }
            ],
            "declare": false,
            "start": 897,
            "end": 914
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
                  "name": "re5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 926
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 929,
                    "end": 930
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 935
                  },
                  "start": 929,
                  "end": 935
                },
                "definite": false,
                "start": 923,
                "end": 935
              }
            ],
            "declare": false,
            "start": 919,
            "end": 936
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
                  "name": "re6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 948
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 951,
                    "end": 952
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 957
                  },
                  "start": 951,
                  "end": 957
                },
                "definite": false,
                "start": 945,
                "end": 957
              }
            ],
            "declare": false,
            "start": 941,
            "end": 958
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
                  "name": "re7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 970
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 980
                  },
                  "start": 973,
                  "end": 980
                },
                "definite": false,
                "start": 967,
                "end": 980
              }
            ],
            "declare": false,
            "start": 963,
            "end": 981
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
                  "name": "re8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 993
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 997
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1002,
                    "end": 1003
                  },
                  "start": 996,
                  "end": 1003
                },
                "definite": false,
                "start": 990,
                "end": 1003
              }
            ],
            "declare": false,
            "start": 986,
            "end": 1004
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
                  "name": "rf1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1017
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1020,
                    "end": 1021
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "start": 1020,
                  "end": 1025
                },
                "definite": false,
                "start": 1014,
                "end": 1025
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1026
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
                  "name": "rf2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1038
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1042
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1045,
                    "end": 1046
                  },
                  "start": 1041,
                  "end": 1046
                },
                "definite": false,
                "start": 1035,
                "end": 1046
              }
            ],
            "declare": false,
            "start": 1031,
            "end": 1047
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
                  "name": "rf3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1059
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1063
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1067,
                    "end": 1068
                  },
                  "start": 1062,
                  "end": 1068
                },
                "definite": false,
                "start": 1056,
                "end": 1068
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1069
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
                  "name": "rf4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1078,
                  "end": 1081
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1090
                  },
                  "start": 1084,
                  "end": 1090
                },
                "definite": false,
                "start": 1078,
                "end": 1090
              }
            ],
            "declare": false,
            "start": 1074,
            "end": 1091
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
                  "name": "rf5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1103
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1106,
                    "end": 1107
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "start": 1106,
                  "end": 1112
                },
                "definite": false,
                "start": 1100,
                "end": 1112
              }
            ],
            "declare": false,
            "start": 1096,
            "end": 1113
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
                  "name": "rf6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1125
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1129
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1133,
                    "end": 1134
                  },
                  "start": 1128,
                  "end": 1134
                },
                "definite": false,
                "start": 1122,
                "end": 1134
              }
            ],
            "declare": false,
            "start": 1118,
            "end": 1135
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
                  "name": "rf7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1144,
                  "end": 1147
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1157
                  },
                  "start": 1150,
                  "end": 1157
                },
                "definite": false,
                "start": 1144,
                "end": 1157
              }
            ],
            "declare": false,
            "start": 1140,
            "end": 1158
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
                  "name": "rf8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1170
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1174
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1179,
                    "end": 1180
                  },
                  "start": 1173,
                  "end": 1180
                },
                "definite": false,
                "start": 1167,
                "end": 1180
              }
            ],
            "declare": false,
            "start": 1163,
            "end": 1181
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
                  "name": "rg1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1194
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1202
                  },
                  "start": 1197,
                  "end": 1202
                },
                "definite": false,
                "start": 1191,
                "end": 1202
              }
            ],
            "declare": false,
            "start": 1187,
            "end": 1203
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
                  "name": "rg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "start": 1218,
                  "end": 1223
                },
                "definite": false,
                "start": 1212,
                "end": 1223
              }
            ],
            "declare": false,
            "start": 1208,
            "end": 1224
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
                  "name": "rg3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1236
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1244,
                    "end": 1245
                  },
                  "start": 1239,
                  "end": 1245
                },
                "definite": false,
                "start": 1233,
                "end": 1245
              }
            ],
            "declare": false,
            "start": 1229,
            "end": 1246
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
                  "name": "rg4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1258
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1262
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1266,
                    "end": 1267
                  },
                  "start": 1261,
                  "end": 1267
                },
                "definite": false,
                "start": 1255,
                "end": 1267
              }
            ],
            "declare": false,
            "start": 1251,
            "end": 1268
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
                  "name": "rg5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1280
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1284
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1288,
                    "end": 1289
                  },
                  "start": 1283,
                  "end": 1289
                },
                "definite": false,
                "start": 1277,
                "end": 1289
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1290
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
                  "name": "rg6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1302
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1305,
                    "end": 1306
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1310,
                    "end": 1311
                  },
                  "start": 1305,
                  "end": 1311
                },
                "definite": false,
                "start": 1299,
                "end": 1311
              }
            ],
            "declare": false,
            "start": 1295,
            "end": 1312
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
                  "name": "rg7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1324
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1334
                  },
                  "start": 1327,
                  "end": 1334
                },
                "definite": false,
                "start": 1321,
                "end": 1334
              }
            ],
            "declare": false,
            "start": 1317,
            "end": 1335
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
                  "name": "rg8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1347
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1351
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1350,
                  "end": 1357
                },
                "definite": false,
                "start": 1344,
                "end": 1357
              }
            ],
            "declare": false,
            "start": 1340,
            "end": 1358
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
                  "name": "rh1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1368,
                  "end": 1371
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1379
                  },
                  "start": 1374,
                  "end": 1379
                },
                "definite": false,
                "start": 1368,
                "end": 1379
              }
            ],
            "declare": false,
            "start": 1364,
            "end": 1380
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
                  "name": "rh2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1392
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1400
                  },
                  "start": 1395,
                  "end": 1400
                },
                "definite": false,
                "start": 1389,
                "end": 1400
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1401
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
                  "name": "rh3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1413
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1417
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1421,
                    "end": 1422
                  },
                  "start": 1416,
                  "end": 1422
                },
                "definite": false,
                "start": 1410,
                "end": 1422
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1423
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
                  "name": "rh4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1435
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1438,
                    "end": 1439
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1438,
                  "end": 1444
                },
                "definite": false,
                "start": 1432,
                "end": 1444
              }
            ],
            "declare": false,
            "start": 1428,
            "end": 1445
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
                  "name": "rh5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1454,
                  "end": 1457
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1461
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1465,
                    "end": 1466
                  },
                  "start": 1460,
                  "end": 1466
                },
                "definite": false,
                "start": 1454,
                "end": 1466
              }
            ],
            "declare": false,
            "start": 1450,
            "end": 1467
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
                  "name": "rh6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1479
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1482,
                    "end": 1483
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1488
                  },
                  "start": 1482,
                  "end": 1488
                },
                "definite": false,
                "start": 1476,
                "end": 1488
              }
            ],
            "declare": false,
            "start": 1472,
            "end": 1489
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
                  "name": "rh7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1498,
                  "end": 1501
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1504,
                    "end": 1505
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1510,
                    "end": 1511
                  },
                  "start": 1504,
                  "end": 1511
                },
                "definite": false,
                "start": 1498,
                "end": 1511
              }
            ],
            "declare": false,
            "start": 1494,
            "end": 1512
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
                  "name": "rh8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1524
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1527,
                    "end": 1528
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1533,
                    "end": 1534
                  },
                  "start": 1527,
                  "end": 1534
                },
                "definite": false,
                "start": 1521,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1517,
            "end": 1535
          }
        ],
        "start": 95,
        "end": 1537
      },
      "expression": false,
      "start": 27,
      "end": 1537
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1537
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
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
    "value": "t",
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
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 89,
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
    "value": "V",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 169,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 284,
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
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 346,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 368,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 412,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 473,
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
    "value": "t",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 545,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 567,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "rc7",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 609,
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
    "value": "v",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "rc8",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 700,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 722,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 732,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 766,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "rd7",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 799,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "rd8",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 887,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 897,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 909,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 919,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 931,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 934,
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
    "value": "var",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 945,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 953,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 963,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "re7",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 975,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "re8",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "var",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1089,
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
    "value": "var",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1108,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1118,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "rf7",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "rf8",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "rg6",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1317,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "rg7",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "rg8",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1385,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1428,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1450,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1462,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1472,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1484,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "rh7",
    "start": 1498,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "rh8",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1529,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  }
]
```

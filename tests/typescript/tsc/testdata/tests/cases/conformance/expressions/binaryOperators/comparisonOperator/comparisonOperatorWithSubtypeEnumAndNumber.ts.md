__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 10
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "initializer": null,
            "computed": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 7,
        "end": 18
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 18
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
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
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 28
        }
      ],
      "declare": false,
      "start": 20,
      "end": 29
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
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 43
        }
      ],
      "declare": false,
      "start": 30,
      "end": 44
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 67
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "start": 70,
            "end": 75
          },
          "definite": false,
          "start": 64,
          "end": 75
        }
      ],
      "declare": false,
      "start": 60,
      "end": 76
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
            "start": 81,
            "end": 84
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "start": 87,
            "end": 92
          },
          "definite": false,
          "start": 81,
          "end": 92
        }
      ],
      "declare": false,
      "start": 77,
      "end": 93
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
            "start": 98,
            "end": 101
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "optional": false,
              "computed": false,
              "start": 104,
              "end": 107
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "start": 104,
            "end": 111
          },
          "definite": false,
          "start": 98,
          "end": 111
        }
      ],
      "declare": false,
      "start": 94,
      "end": 112
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
            "start": 117,
            "end": 120
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "operator": "<",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 130
            },
            "start": 123,
            "end": 130
          },
          "definite": false,
          "start": 117,
          "end": 130
        }
      ],
      "declare": false,
      "start": 113,
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 139
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 142,
              "end": 145
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 148,
              "end": 149
            },
            "start": 142,
            "end": 149
          },
          "definite": false,
          "start": 136,
          "end": 149
        }
      ],
      "declare": false,
      "start": 132,
      "end": 150
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
            "start": 155,
            "end": 158
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 161,
              "end": 162
            },
            "operator": "<",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "optional": false,
              "computed": false,
              "start": 165,
              "end": 168
            },
            "start": 161,
            "end": 168
          },
          "definite": false,
          "start": 155,
          "end": 168
        }
      ],
      "declare": false,
      "start": 151,
      "end": 169
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
            "start": 189,
            "end": 192
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "start": 195,
            "end": 200
          },
          "definite": false,
          "start": 189,
          "end": 200
        }
      ],
      "declare": false,
      "start": 185,
      "end": 201
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
            "start": 206,
            "end": 209
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "start": 212,
            "end": 217
          },
          "definite": false,
          "start": 206,
          "end": 217
        }
      ],
      "declare": false,
      "start": 202,
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "optional": false,
              "computed": false,
              "start": 229,
              "end": 232
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "start": 229,
            "end": 236
          },
          "definite": false,
          "start": 223,
          "end": 236
        }
      ],
      "declare": false,
      "start": 219,
      "end": 237
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
            "start": 242,
            "end": 245
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "operator": ">",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "optional": false,
              "computed": false,
              "start": 252,
              "end": 255
            },
            "start": 248,
            "end": 255
          },
          "definite": false,
          "start": 242,
          "end": 255
        }
      ],
      "declare": false,
      "start": 238,
      "end": 256
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
            "start": 261,
            "end": 264
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "optional": false,
              "computed": false,
              "start": 267,
              "end": 270
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 273,
              "end": 274
            },
            "start": 267,
            "end": 274
          },
          "definite": false,
          "start": 261,
          "end": 274
        }
      ],
      "declare": false,
      "start": 257,
      "end": 275
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
            "start": 280,
            "end": 283
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 286,
              "end": 287
            },
            "operator": ">",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              "optional": false,
              "computed": false,
              "start": 290,
              "end": 293
            },
            "start": 286,
            "end": 293
          },
          "definite": false,
          "start": 280,
          "end": 293
        }
      ],
      "declare": false,
      "start": 276,
      "end": 294
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
            "start": 315,
            "end": 318
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
            },
            "start": 321,
            "end": 327
          },
          "definite": false,
          "start": 315,
          "end": 327
        }
      ],
      "declare": false,
      "start": 311,
      "end": 328
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
            "start": 333,
            "end": 336
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "start": 339,
            "end": 345
          },
          "definite": false,
          "start": 333,
          "end": 345
        }
      ],
      "declare": false,
      "start": 329,
      "end": 346
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
            "start": 351,
            "end": 354
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 357,
              "end": 360
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "start": 357,
            "end": 365
          },
          "definite": false,
          "start": 351,
          "end": 365
        }
      ],
      "declare": false,
      "start": 347,
      "end": 366
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
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 378
            },
            "operator": "<=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 385
              },
              "optional": false,
              "computed": false,
              "start": 382,
              "end": 385
            },
            "start": 377,
            "end": 385
          },
          "definite": false,
          "start": 371,
          "end": 385
        }
      ],
      "declare": false,
      "start": 367,
      "end": 386
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
            "start": 391,
            "end": 394
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "optional": false,
              "computed": false,
              "start": 397,
              "end": 400
            },
            "operator": "<=",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 404,
              "end": 405
            },
            "start": 397,
            "end": 405
          },
          "definite": false,
          "start": 391,
          "end": 405
        }
      ],
      "declare": false,
      "start": 387,
      "end": 406
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
            "start": 411,
            "end": 414
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 417,
              "end": 418
            },
            "operator": "<=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "optional": false,
              "computed": false,
              "start": 422,
              "end": 425
            },
            "start": 417,
            "end": 425
          },
          "definite": false,
          "start": 411,
          "end": 425
        }
      ],
      "declare": false,
      "start": 407,
      "end": 426
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
            "start": 447,
            "end": 450
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 459
            },
            "start": 453,
            "end": 459
          },
          "definite": false,
          "start": 447,
          "end": 459
        }
      ],
      "declare": false,
      "start": 443,
      "end": 460
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
            "start": 465,
            "end": 468
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 472
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "start": 471,
            "end": 477
          },
          "definite": false,
          "start": 465,
          "end": 477
        }
      ],
      "declare": false,
      "start": 461,
      "end": 478
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
            "start": 483,
            "end": 486
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              "optional": false,
              "computed": false,
              "start": 489,
              "end": 492
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 497
            },
            "start": 489,
            "end": 497
          },
          "definite": false,
          "start": 483,
          "end": 497
        }
      ],
      "declare": false,
      "start": 479,
      "end": 498
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
            "start": 503,
            "end": 506
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "operator": ">=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 514,
              "end": 517
            },
            "start": 509,
            "end": 517
          },
          "definite": false,
          "start": 503,
          "end": 517
        }
      ],
      "declare": false,
      "start": 499,
      "end": 518
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
            "start": 523,
            "end": 526
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              },
              "optional": false,
              "computed": false,
              "start": 529,
              "end": 532
            },
            "operator": ">=",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 536,
              "end": 537
            },
            "start": 529,
            "end": 537
          },
          "definite": false,
          "start": 523,
          "end": 537
        }
      ],
      "declare": false,
      "start": 519,
      "end": 538
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
            "start": 543,
            "end": 546
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 549,
              "end": 550
            },
            "operator": ">=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "optional": false,
              "computed": false,
              "start": 554,
              "end": 557
            },
            "start": 549,
            "end": 557
          },
          "definite": false,
          "start": 543,
          "end": 557
        }
      ],
      "declare": false,
      "start": 539,
      "end": 558
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
            "start": 579,
            "end": 582
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 591
            },
            "start": 585,
            "end": 591
          },
          "definite": false,
          "start": 579,
          "end": 591
        }
      ],
      "declare": false,
      "start": 575,
      "end": 592
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
            "start": 597,
            "end": 600
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 609
            },
            "start": 603,
            "end": 609
          },
          "definite": false,
          "start": 597,
          "end": 609
        }
      ],
      "declare": false,
      "start": 593,
      "end": 610
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
            "start": 615,
            "end": 618
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 622
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 624
              },
              "optional": false,
              "computed": false,
              "start": 621,
              "end": 624
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "start": 621,
            "end": 629
          },
          "definite": false,
          "start": 615,
          "end": 629
        }
      ],
      "declare": false,
      "start": 611,
      "end": 630
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
            "start": 635,
            "end": 638
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 642
            },
            "operator": "==",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 647
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 646,
              "end": 649
            },
            "start": 641,
            "end": 649
          },
          "definite": false,
          "start": 635,
          "end": 649
        }
      ],
      "declare": false,
      "start": 631,
      "end": 650
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
            "start": 655,
            "end": 658
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 661,
              "end": 664
            },
            "operator": "==",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 668,
              "end": 669
            },
            "start": 661,
            "end": 669
          },
          "definite": false,
          "start": 655,
          "end": 669
        }
      ],
      "declare": false,
      "start": 651,
      "end": 670
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
            "start": 675,
            "end": 678
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 681,
              "end": 682
            },
            "operator": "==",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 687
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              },
              "optional": false,
              "computed": false,
              "start": 686,
              "end": 689
            },
            "start": 681,
            "end": 689
          },
          "definite": false,
          "start": 675,
          "end": 689
        }
      ],
      "declare": false,
      "start": 671,
      "end": 690
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
            "start": 711,
            "end": 714
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 723
            },
            "start": 717,
            "end": 723
          },
          "definite": false,
          "start": 711,
          "end": 723
        }
      ],
      "declare": false,
      "start": 707,
      "end": 724
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
            "start": 729,
            "end": 732
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 736
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 741
            },
            "start": 735,
            "end": 741
          },
          "definite": false,
          "start": 729,
          "end": 741
        }
      ],
      "declare": false,
      "start": 725,
      "end": 742
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
            "start": 747,
            "end": 750
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 756
              },
              "optional": false,
              "computed": false,
              "start": 753,
              "end": 756
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 761
            },
            "start": 753,
            "end": 761
          },
          "definite": false,
          "start": 747,
          "end": 761
        }
      ],
      "declare": false,
      "start": 743,
      "end": 762
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
            "start": 767,
            "end": 770
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 774
            },
            "operator": "!=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 779
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 781
              },
              "optional": false,
              "computed": false,
              "start": 778,
              "end": 781
            },
            "start": 773,
            "end": 781
          },
          "definite": false,
          "start": 767,
          "end": 781
        }
      ],
      "declare": false,
      "start": 763,
      "end": 782
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
            "start": 787,
            "end": 790
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 794
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 796
              },
              "optional": false,
              "computed": false,
              "start": 793,
              "end": 796
            },
            "operator": "!=",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 800,
              "end": 801
            },
            "start": 793,
            "end": 801
          },
          "definite": false,
          "start": 787,
          "end": 801
        }
      ],
      "declare": false,
      "start": 783,
      "end": 802
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
            "start": 807,
            "end": 810
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 813,
              "end": 814
            },
            "operator": "!=",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 819
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 821
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 821
            },
            "start": 813,
            "end": 821
          },
          "definite": false,
          "start": 807,
          "end": 821
        }
      ],
      "declare": false,
      "start": 803,
      "end": 822
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
            "start": 844,
            "end": 847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "start": 850,
            "end": 857
          },
          "definite": false,
          "start": 844,
          "end": 857
        }
      ],
      "declare": false,
      "start": 840,
      "end": 858
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
            "start": 863,
            "end": 866
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 870
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 875,
              "end": 876
            },
            "start": 869,
            "end": 876
          },
          "definite": false,
          "start": 863,
          "end": 876
        }
      ],
      "declare": false,
      "start": 859,
      "end": 877
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
            "start": 882,
            "end": 885
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "optional": false,
              "computed": false,
              "start": 888,
              "end": 891
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 897
            },
            "start": 888,
            "end": 897
          },
          "definite": false,
          "start": 882,
          "end": 897
        }
      ],
      "declare": false,
      "start": 878,
      "end": 898
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
            "start": 903,
            "end": 906
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 910
            },
            "operator": "===",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 916
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 918
              },
              "optional": false,
              "computed": false,
              "start": 915,
              "end": 918
            },
            "start": 909,
            "end": 918
          },
          "definite": false,
          "start": 903,
          "end": 918
        }
      ],
      "declare": false,
      "start": 899,
      "end": 919
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
            "start": 924,
            "end": 927
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 931
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 933
              },
              "optional": false,
              "computed": false,
              "start": 930,
              "end": 933
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 938,
              "end": 939
            },
            "start": 930,
            "end": 939
          },
          "definite": false,
          "start": 924,
          "end": 939
        }
      ],
      "declare": false,
      "start": 920,
      "end": 940
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
            "start": 945,
            "end": 948
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 951,
              "end": 952
            },
            "operator": "===",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 957,
                "end": 958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 960
              },
              "optional": false,
              "computed": false,
              "start": 957,
              "end": 960
            },
            "start": 951,
            "end": 960
          },
          "definite": false,
          "start": 945,
          "end": 960
        }
      ],
      "declare": false,
      "start": 941,
      "end": 961
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
            "start": 983,
            "end": 986
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 990
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 996
            },
            "start": 989,
            "end": 996
          },
          "definite": false,
          "start": 983,
          "end": 996
        }
      ],
      "declare": false,
      "start": 979,
      "end": 997
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
            "start": 1002,
            "end": 1005
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1009
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "start": 1008,
            "end": 1015
          },
          "definite": false,
          "start": 1002,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 998,
      "end": 1016
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
            "start": 1021,
            "end": 1024
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1027,
                "end": 1028
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "optional": false,
              "computed": false,
              "start": 1027,
              "end": 1030
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1027,
            "end": 1036
          },
          "definite": false,
          "start": 1021,
          "end": 1036
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1037
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
            "start": 1042,
            "end": 1045
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1049
            },
            "operator": "!==",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1055
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1057
              },
              "optional": false,
              "computed": false,
              "start": 1054,
              "end": 1057
            },
            "start": 1048,
            "end": 1057
          },
          "definite": false,
          "start": 1042,
          "end": 1057
        }
      ],
      "declare": false,
      "start": 1038,
      "end": 1058
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
            "start": 1063,
            "end": 1066
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1069,
                "end": 1070
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1071,
                "end": 1072
              },
              "optional": false,
              "computed": false,
              "start": 1069,
              "end": 1072
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1077,
              "end": 1078
            },
            "start": 1069,
            "end": 1078
          },
          "definite": false,
          "start": 1063,
          "end": 1078
        }
      ],
      "declare": false,
      "start": 1059,
      "end": 1079
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
            "start": 1084,
            "end": 1087
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1090,
              "end": 1091
            },
            "operator": "!==",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1097
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1099
              },
              "optional": false,
              "computed": false,
              "start": 1096,
              "end": 1099
            },
            "start": 1090,
            "end": 1099
          },
          "definite": false,
          "start": 1084,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1080,
      "end": 1100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "type": "Identifier",
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "E",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 223,
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
    "value": "E",
    "start": 229,
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
    "value": "a",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 341,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 401,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 455,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 473,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 503,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 511,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 533,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 539,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 551,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 575,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 587,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 605,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 643,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 655,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 665,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 683,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 707,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 719,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 737,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 757,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 775,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 797,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 807,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 815,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 840,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 899,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 903,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 911,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 920,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 924,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 934,
    "end": 937
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "rg6",
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
    "type": "Numeric",
    "value": "0",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 979,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 991,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  }
]
```

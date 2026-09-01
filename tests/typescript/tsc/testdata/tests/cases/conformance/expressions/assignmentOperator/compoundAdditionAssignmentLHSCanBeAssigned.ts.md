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
          }
        ],
        "start": 7,
        "end": 15
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 15
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
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "start": 29,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 29,
          "end": 35
        }
      ],
      "declare": true,
      "start": 17,
      "end": 36
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
                "type": "TSVoidKeyword",
                "start": 52,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            "start": 49,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 56
        }
      ],
      "declare": true,
      "start": 37,
      "end": 57
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              },
              "start": 73,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 78
        }
      ],
      "declare": true,
      "start": 59,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "start": 80,
        "end": 87
      },
      "directive": null,
      "start": 80,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 91
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 96
        },
        "start": 89,
        "end": 96
      },
      "directive": null,
      "start": 89,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 100
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 104,
          "end": 108
        },
        "start": 98,
        "end": 108
      },
      "directive": null,
      "start": 98,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 112
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 116,
          "end": 117
        },
        "start": 110,
        "end": 117
      },
      "directive": null,
      "start": 110,
      "end": 118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 125,
          "end": 127
        },
        "start": 119,
        "end": 127
      },
      "directive": null,
      "start": 119,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 131
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 135,
          "end": 138
        },
        "start": 129,
        "end": 138
      },
      "directive": null,
      "start": 129,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 142
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 146,
          "end": 148
        },
        "start": 140,
        "end": 148
      },
      "directive": null,
      "start": 140,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 152
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 156,
          "end": 160
        },
        "start": 150,
        "end": 160
      },
      "directive": null,
      "start": 150,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 164
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 177
        },
        "start": 162,
        "end": 177
      },
      "directive": null,
      "start": 162,
      "end": 178
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 196,
                "end": 202
              },
              "start": 194,
              "end": 202
            },
            "start": 192,
            "end": 202
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 202
        }
      ],
      "declare": true,
      "start": 180,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 206
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 211
        },
        "start": 204,
        "end": 211
      },
      "directive": null,
      "start": 204,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 215
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "start": 213,
        "end": 220
      },
      "directive": null,
      "start": 213,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 224
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 228,
          "end": 232
        },
        "start": 222,
        "end": 232
      },
      "directive": null,
      "start": 222,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 236
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 240,
          "end": 241
        },
        "start": 234,
        "end": 241
      },
      "directive": null,
      "start": 234,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 245
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 249,
          "end": 251
        },
        "start": 243,
        "end": 251
      },
      "directive": null,
      "start": 243,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 255
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 262
          },
          "optional": false,
          "computed": false,
          "start": 259,
          "end": 262
        },
        "start": 253,
        "end": 262
      },
      "directive": null,
      "start": 253,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 266
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 270,
          "end": 272
        },
        "start": 264,
        "end": 272
      },
      "directive": null,
      "start": 264,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 276
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 280,
          "end": 284
        },
        "start": 274,
        "end": 284
      },
      "directive": null,
      "start": 274,
      "end": 285
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 288
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 301
        },
        "start": 286,
        "end": 301
      },
      "directive": null,
      "start": 286,
      "end": 302
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 320,
                "end": 326
              },
              "start": 318,
              "end": 326
            },
            "start": 316,
            "end": 326
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 326
        }
      ],
      "declare": true,
      "start": 304,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 330
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "start": 328,
        "end": 335
      },
      "directive": null,
      "start": 328,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 339
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 343,
          "end": 344
        },
        "start": 337,
        "end": 344
      },
      "directive": null,
      "start": 337,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 348
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 353
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 352,
          "end": 355
        },
        "start": 346,
        "end": 355
      },
      "directive": null,
      "start": 346,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 359
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 363,
          "end": 367
        },
        "start": 357,
        "end": 367
      },
      "directive": null,
      "start": 357,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 371
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 384
        },
        "start": 369,
        "end": 384
      },
      "directive": null,
      "start": 369,
      "end": 385
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
            "name": "x4",
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
                  "start": 403,
                  "end": 404
                },
                "typeArguments": null,
                "start": 403,
                "end": 404
              },
              "start": 401,
              "end": 404
            },
            "start": 399,
            "end": 404
          },
          "init": null,
          "definite": false,
          "start": 399,
          "end": 404
        }
      ],
      "declare": true,
      "start": 387,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 413
        },
        "start": 406,
        "end": 413
      },
      "directive": null,
      "start": 406,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 417
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 421,
          "end": 422
        },
        "start": 415,
        "end": 422
      },
      "directive": null,
      "start": 415,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "optional": false,
          "computed": false,
          "start": 430,
          "end": 433
        },
        "start": 424,
        "end": 433
      },
      "directive": null,
      "start": 424,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 437
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 441,
          "end": 445
        },
        "start": 435,
        "end": 445
      },
      "directive": null,
      "start": 435,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 462
        },
        "start": 447,
        "end": 462
      },
      "directive": null,
      "start": 447,
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 481,
                "end": 488
              },
              "start": 479,
              "end": 488
            },
            "start": 477,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 477,
          "end": 488
        }
      ],
      "declare": true,
      "start": 465,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 492
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 497
        },
        "start": 490,
        "end": 497
      },
      "directive": null,
      "start": 490,
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 516,
                "end": 518
              },
              "start": 514,
              "end": 518
            },
            "start": 512,
            "end": 518
          },
          "init": null,
          "definite": false,
          "start": 512,
          "end": 518
        }
      ],
      "declare": true,
      "start": 500,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 522
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 527
        },
        "start": 520,
        "end": 527
      },
      "directive": null,
      "start": 520,
      "end": 528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 531
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 535,
          "end": 537
        },
        "start": 529,
        "end": 537
      },
      "directive": null,
      "start": 529,
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 556,
                "end": 560
              },
              "start": 554,
              "end": 560
            },
            "start": 552,
            "end": 560
          },
          "init": null,
          "definite": false,
          "start": 552,
          "end": 560
        }
      ],
      "declare": true,
      "start": 540,
      "end": 561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x7",
          "optional": false,
          "typeAnnotation": null,
          "start": 562,
          "end": 564
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 569
        },
        "start": 562,
        "end": 569
      },
      "directive": null,
      "start": 562,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
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
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
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
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 59,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 101,
    "end": 103
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 113,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 122,
    "end": 124
  },
  {
    "type": "String",
    "value": "''",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
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
    "value": "x1",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 153,
    "end": 155
  },
  {
    "type": "Null",
    "value": "null",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 165,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 168,
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
    "value": "declare",
    "start": 180,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 225,
    "end": 227
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 237,
    "end": 239
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
    "value": "x2",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 246,
    "end": 248
  },
  {
    "type": "String",
    "value": "''",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 256,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "x2",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 277,
    "end": 279
  },
  {
    "type": "Null",
    "value": "null",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 289,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 292,
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
    "value": "declare",
    "start": 304,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 340,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 360,
    "end": 362
  },
  {
    "type": "Null",
    "value": "null",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 372,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 375,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 387,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 395,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 409,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 418,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 438,
    "end": 440
  },
  {
    "type": "Null",
    "value": "null",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 453,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 465,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "declare",
    "start": 500,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "x6",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 532,
    "end": 534
  },
  {
    "type": "String",
    "value": "''",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 540,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 556,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 562,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 565,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  }
]
```

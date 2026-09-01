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
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
              },
              "start": 73,
              "end": 82
            },
            "start": 71,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 82
        }
      ],
      "declare": true,
      "start": 59,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 86
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "directive": null,
      "start": 84,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 96
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "start": 94,
        "end": 102
      },
      "directive": null,
      "start": 94,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 106
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 111,
          "end": 115
        },
        "start": 104,
        "end": 115
      },
      "directive": null,
      "start": 104,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 119
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 124,
          "end": 125
        },
        "start": 117,
        "end": 125
      },
      "directive": null,
      "start": 117,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 129
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 134,
          "end": 136
        },
        "start": 127,
        "end": 136
      },
      "directive": null,
      "start": 127,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 139
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 147
        },
        "start": 137,
        "end": 147
      },
      "directive": null,
      "start": 137,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 151
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 156,
          "end": 158
        },
        "start": 149,
        "end": 158
      },
      "directive": null,
      "start": 149,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 162
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 167,
          "end": 171
        },
        "start": 160,
        "end": 171
      },
      "directive": null,
      "start": 160,
      "end": 172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 175
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 189
        },
        "start": 173,
        "end": 189
      },
      "directive": null,
      "start": 173,
      "end": 190
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
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "start": 204,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 204,
          "end": 214
        }
      ],
      "declare": true,
      "start": 192,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 218
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 224
        },
        "start": 216,
        "end": 224
      },
      "directive": null,
      "start": 216,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 228
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 234
        },
        "start": 226,
        "end": 234
      },
      "directive": null,
      "start": 226,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 238
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 243,
          "end": 247
        },
        "start": 236,
        "end": 247
      },
      "directive": null,
      "start": 236,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 251
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 256,
          "end": 257
        },
        "start": 249,
        "end": 257
      },
      "directive": null,
      "start": 249,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 261
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 266,
          "end": 268
        },
        "start": 259,
        "end": 268
      },
      "directive": null,
      "start": 259,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 279
        },
        "start": 269,
        "end": 279
      },
      "directive": null,
      "start": 269,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 283
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 288,
          "end": 290
        },
        "start": 281,
        "end": 290
      },
      "directive": null,
      "start": 281,
      "end": 291
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 294
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 299,
          "end": 303
        },
        "start": 292,
        "end": 303
      },
      "directive": null,
      "start": 292,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 307
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 321
        },
        "start": 305,
        "end": 321
      },
      "directive": null,
      "start": 305,
      "end": 322
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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 340,
                "end": 342
              },
              "start": 338,
              "end": 342
            },
            "start": 336,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 342
        }
      ],
      "declare": true,
      "start": 324,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 346
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 352
        },
        "start": 344,
        "end": 352
      },
      "directive": null,
      "start": 344,
      "end": 353
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 356
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 362
        },
        "start": 354,
        "end": 362
      },
      "directive": null,
      "start": 354,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 366
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 371,
          "end": 375
        },
        "start": 364,
        "end": 375
      },
      "directive": null,
      "start": 364,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 379
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 384,
          "end": 385
        },
        "start": 377,
        "end": 385
      },
      "directive": null,
      "start": 377,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 389
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 394,
          "end": 396
        },
        "start": 387,
        "end": 396
      },
      "directive": null,
      "start": 387,
      "end": 396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 399
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 407
        },
        "start": 397,
        "end": 407
      },
      "directive": null,
      "start": 397,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 411
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 416,
          "end": 418
        },
        "start": 409,
        "end": 418
      },
      "directive": null,
      "start": 409,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 422
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 427,
          "end": 431
        },
        "start": 420,
        "end": 431
      },
      "directive": null,
      "start": 420,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 435
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 449
        },
        "start": 433,
        "end": 449
      },
      "directive": null,
      "start": 433,
      "end": 450
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
                "type": "TSVoidKeyword",
                "start": 468,
                "end": 472
              },
              "start": 466,
              "end": 472
            },
            "start": 464,
            "end": 472
          },
          "init": null,
          "definite": false,
          "start": 464,
          "end": 472
        }
      ],
      "declare": true,
      "start": 452,
      "end": 473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 476
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 481,
          "end": 482
        },
        "start": 474,
        "end": 482
      },
      "directive": null,
      "start": 474,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 486
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 492
        },
        "start": 484,
        "end": 492
      },
      "directive": null,
      "start": 484,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 494,
          "end": 496
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 501,
          "end": 505
        },
        "start": 494,
        "end": 505
      },
      "directive": null,
      "start": 494,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 507,
          "end": 509
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 514,
          "end": 515
        },
        "start": 507,
        "end": 515
      },
      "directive": null,
      "start": 507,
      "end": 516
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 517,
          "end": 519
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 524,
          "end": 526
        },
        "start": 517,
        "end": 526
      },
      "directive": null,
      "start": 517,
      "end": 526
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 529
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 535
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 537
          },
          "optional": false,
          "computed": false,
          "start": 534,
          "end": 537
        },
        "start": 527,
        "end": 537
      },
      "directive": null,
      "start": 527,
      "end": 538
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 541
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 546,
          "end": 548
        },
        "start": 539,
        "end": 548
      },
      "directive": null,
      "start": 539,
      "end": 549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 550,
          "end": 552
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 557,
          "end": 561
        },
        "start": 550,
        "end": 561
      },
      "directive": null,
      "start": 550,
      "end": 562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 563,
          "end": 565
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 579
        },
        "start": 563,
        "end": 579
      },
      "directive": null,
      "start": 563,
      "end": 580
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
                "type": "TSNumberKeyword",
                "start": 598,
                "end": 604
              },
              "start": 596,
              "end": 604
            },
            "start": 594,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 604
        }
      ],
      "declare": true,
      "start": 582,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 608
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 614
        },
        "start": 606,
        "end": 614
      },
      "directive": null,
      "start": 606,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 618
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 623,
          "end": 627
        },
        "start": 616,
        "end": 627
      },
      "directive": null,
      "start": 616,
      "end": 628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 629,
          "end": 631
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 636,
          "end": 638
        },
        "start": 629,
        "end": 638
      },
      "directive": null,
      "start": 629,
      "end": 638
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 641
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 646,
          "end": 648
        },
        "start": 639,
        "end": 648
      },
      "directive": null,
      "start": 639,
      "end": 649
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 668
                },
                "typeArguments": null,
                "start": 667,
                "end": 668
              },
              "start": 665,
              "end": 668
            },
            "start": 663,
            "end": 668
          },
          "init": null,
          "definite": false,
          "start": 663,
          "end": 668
        }
      ],
      "declare": true,
      "start": 651,
      "end": 669
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 672
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 678
        },
        "start": 670,
        "end": 678
      },
      "directive": null,
      "start": 670,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 682
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 687,
          "end": 691
        },
        "start": 680,
        "end": 691
      },
      "directive": null,
      "start": 680,
      "end": 692
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 695
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 700,
          "end": 702
        },
        "start": 693,
        "end": 702
      },
      "directive": null,
      "start": 693,
      "end": 702
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 703,
          "end": 705
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 710,
          "end": 712
        },
        "start": 703,
        "end": 712
      },
      "directive": null,
      "start": 703,
      "end": 713
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 713
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
    "value": "boolean",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 87,
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
    "type": "Identifier",
    "value": "x1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 107,
    "end": 110
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 120,
    "end": 123
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
    "value": "x1",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 130,
    "end": 133
  },
  {
    "type": "String",
    "value": "''",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "x1",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 163,
    "end": 166
  },
  {
    "type": "Null",
    "value": "null",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 180,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 192,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
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
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 239,
    "end": 242
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 252,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 262,
    "end": 265
  },
  {
    "type": "String",
    "value": "''",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 295,
    "end": 298
  },
  {
    "type": "Null",
    "value": "null",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 312,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 324,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 367,
    "end": 370
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 380,
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
    "value": "x3",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 390,
    "end": 393
  },
  {
    "type": "String",
    "value": "''",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 423,
    "end": 426
  },
  {
    "type": "Null",
    "value": "null",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 440,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 452,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 497,
    "end": 500
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 510,
    "end": 513
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 520,
    "end": 523
  },
  {
    "type": "String",
    "value": "''",
    "start": 524,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 530,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "x4",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 553,
    "end": 556
  },
  {
    "type": "Null",
    "value": "null",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 570,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 582,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 619,
    "end": 622
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 632,
    "end": 635
  },
  {
    "type": "String",
    "value": "''",
    "start": 636,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 651,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "x6",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 683,
    "end": 686
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 696,
    "end": 699
  },
  {
    "type": "String",
    "value": "''",
    "start": 700,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  }
]
```

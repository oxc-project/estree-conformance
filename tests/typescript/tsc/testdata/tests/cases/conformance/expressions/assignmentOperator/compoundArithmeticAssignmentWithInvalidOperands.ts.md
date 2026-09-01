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
        "operator": "*=",
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
          "start": 90,
          "end": 91
        },
        "start": 84,
        "end": 91
      },
      "directive": null,
      "start": 84,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 95
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 100
        },
        "start": 93,
        "end": 100
      },
      "directive": null,
      "start": 93,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 104
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 108,
          "end": 112
        },
        "start": 102,
        "end": 112
      },
      "directive": null,
      "start": 102,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 116
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 120,
          "end": 121
        },
        "start": 114,
        "end": 121
      },
      "directive": null,
      "start": 114,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 125
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 129,
          "end": 131
        },
        "start": 123,
        "end": 131
      },
      "directive": null,
      "start": 123,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 134
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 141
        },
        "start": 132,
        "end": 141
      },
      "directive": null,
      "start": 132,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 145
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 149,
          "end": 151
        },
        "start": 143,
        "end": 151
      },
      "directive": null,
      "start": 143,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 155
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 159,
          "end": 163
        },
        "start": 153,
        "end": 163
      },
      "directive": null,
      "start": 153,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 167
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 180
        },
        "start": 165,
        "end": 180
      },
      "directive": null,
      "start": 165,
      "end": 181
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
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "start": 195,
            "end": 205
          },
          "init": null,
          "definite": false,
          "start": 195,
          "end": 205
        }
      ],
      "declare": true,
      "start": 183,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 209
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "start": 207,
        "end": 214
      },
      "directive": null,
      "start": 207,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
        },
        "start": 216,
        "end": 223
      },
      "directive": null,
      "start": 216,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 227
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 231,
          "end": 235
        },
        "start": 225,
        "end": 235
      },
      "directive": null,
      "start": 225,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 239
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 243,
          "end": 244
        },
        "start": 237,
        "end": 244
      },
      "directive": null,
      "start": 237,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 248
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 252,
          "end": 254
        },
        "start": 246,
        "end": 254
      },
      "directive": null,
      "start": 246,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 257
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 264
          },
          "optional": false,
          "computed": false,
          "start": 261,
          "end": 264
        },
        "start": 255,
        "end": 264
      },
      "directive": null,
      "start": 255,
      "end": 265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 268
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 272,
          "end": 274
        },
        "start": 266,
        "end": 274
      },
      "directive": null,
      "start": 266,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 278
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 282,
          "end": 286
        },
        "start": 276,
        "end": 286
      },
      "directive": null,
      "start": 276,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 290
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "start": 288,
        "end": 303
      },
      "directive": null,
      "start": 288,
      "end": 304
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
                "start": 322,
                "end": 324
              },
              "start": 320,
              "end": 324
            },
            "start": 318,
            "end": 324
          },
          "init": null,
          "definite": false,
          "start": 318,
          "end": 324
        }
      ],
      "declare": true,
      "start": 306,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 328
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 333
        },
        "start": 326,
        "end": 333
      },
      "directive": null,
      "start": 326,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 337
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 342
        },
        "start": 335,
        "end": 342
      },
      "directive": null,
      "start": 335,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 350,
          "end": 354
        },
        "start": 344,
        "end": 354
      },
      "directive": null,
      "start": 344,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 358
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 362,
          "end": 363
        },
        "start": 356,
        "end": 363
      },
      "directive": null,
      "start": 356,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 367
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 371,
          "end": 373
        },
        "start": 365,
        "end": 373
      },
      "directive": null,
      "start": 365,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 376
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 380,
          "end": 383
        },
        "start": 374,
        "end": 383
      },
      "directive": null,
      "start": 374,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 387
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 391,
          "end": 393
        },
        "start": 385,
        "end": 393
      },
      "directive": null,
      "start": 385,
      "end": 394
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 397
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 401,
          "end": 405
        },
        "start": 395,
        "end": 405
      },
      "directive": null,
      "start": 395,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 409
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 422
        },
        "start": 407,
        "end": 422
      },
      "directive": null,
      "start": 407,
      "end": 423
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
                "start": 441,
                "end": 445
              },
              "start": 439,
              "end": 445
            },
            "start": 437,
            "end": 445
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 445
        }
      ],
      "declare": true,
      "start": 425,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 454
        },
        "start": 447,
        "end": 454
      },
      "directive": null,
      "start": 447,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 458
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 463
        },
        "start": 456,
        "end": 463
      },
      "directive": null,
      "start": 456,
      "end": 464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 467
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 471,
          "end": 475
        },
        "start": 465,
        "end": 475
      },
      "directive": null,
      "start": 465,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 479
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 483,
          "end": 484
        },
        "start": 477,
        "end": 484
      },
      "directive": null,
      "start": 477,
      "end": 485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 486,
          "end": 488
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 492,
          "end": 494
        },
        "start": 486,
        "end": 494
      },
      "directive": null,
      "start": 486,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 497
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 502
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 504
          },
          "optional": false,
          "computed": false,
          "start": 501,
          "end": 504
        },
        "start": 495,
        "end": 504
      },
      "directive": null,
      "start": 495,
      "end": 505
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 506,
          "end": 508
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 512,
          "end": 514
        },
        "start": 506,
        "end": 514
      },
      "directive": null,
      "start": 506,
      "end": 515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 518
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 522,
          "end": 526
        },
        "start": 516,
        "end": 526
      },
      "directive": null,
      "start": 516,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 530
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 543
        },
        "start": 528,
        "end": 543
      },
      "directive": null,
      "start": 528,
      "end": 544
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
                "start": 562,
                "end": 568
              },
              "start": 560,
              "end": 568
            },
            "start": 558,
            "end": 568
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 568
        }
      ],
      "declare": true,
      "start": 546,
      "end": 569
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 572
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 577
        },
        "start": 570,
        "end": 577
      },
      "directive": null,
      "start": 570,
      "end": 578
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 581
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 585,
          "end": 589
        },
        "start": 579,
        "end": 589
      },
      "directive": null,
      "start": 579,
      "end": 590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 593
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 597,
          "end": 599
        },
        "start": 591,
        "end": 599
      },
      "directive": null,
      "start": 591,
      "end": 599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 600,
          "end": 602
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 606,
          "end": 608
        },
        "start": 600,
        "end": 608
      },
      "directive": null,
      "start": 600,
      "end": 609
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
                  "start": 627,
                  "end": 628
                },
                "typeArguments": null,
                "start": 627,
                "end": 628
              },
              "start": 625,
              "end": 628
            },
            "start": 623,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 623,
          "end": 628
        }
      ],
      "declare": true,
      "start": 611,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 632
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 636,
          "end": 637
        },
        "start": 630,
        "end": 637
      },
      "directive": null,
      "start": 630,
      "end": 638
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 641
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 645,
          "end": 649
        },
        "start": 639,
        "end": 649
      },
      "directive": null,
      "start": 639,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 651,
          "end": 653
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 657,
          "end": 659
        },
        "start": 651,
        "end": 659
      },
      "directive": null,
      "start": 651,
      "end": 659
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 662
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 666,
          "end": 668
        },
        "start": 660,
        "end": 668
      },
      "directive": null,
      "start": 660,
      "end": 669
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 669
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
    "value": "*=",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "x1",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 105,
    "end": 107
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 117,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 126,
    "end": 128
  },
  {
    "type": "String",
    "value": "''",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "x1",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 156,
    "end": 158
  },
  {
    "type": "Null",
    "value": "null",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 183,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 199,
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
    "value": "x2",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
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
    "value": "*=",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 228,
    "end": 230
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 231,
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
    "value": "x2",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 240,
    "end": 242
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 249,
    "end": 251
  },
  {
    "type": "String",
    "value": "''",
    "start": 252,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 258,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "x2",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 279,
    "end": 281
  },
  {
    "type": "Null",
    "value": "null",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 294,
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
    "value": "declare",
    "start": 306,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 329,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
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
    "value": "x3",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "*=",
    "start": 347,
    "end": 349
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 359,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 368,
    "end": 370
  },
  {
    "type": "String",
    "value": "''",
    "start": 371,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 377,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 398,
    "end": 400
  },
  {
    "type": "Null",
    "value": "null",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 410,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 413,
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
    "value": "declare",
    "start": 425,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "void",
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
    "value": "*=",
    "start": 450,
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
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 459,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 468,
    "end": 470
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 480,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "x4",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 489,
    "end": 491
  },
  {
    "type": "String",
    "value": "''",
    "start": 492,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 498,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 519,
    "end": 521
  },
  {
    "type": "Null",
    "value": "null",
    "start": 522,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 531,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 534,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 546,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 582,
    "end": 584
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 594,
    "end": 596
  },
  {
    "type": "String",
    "value": "''",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 611,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "type": "Identifier",
    "value": "x6",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 633,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "x6",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 642,
    "end": 644
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 654,
    "end": 656
  },
  {
    "type": "String",
    "value": "''",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 660,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  }
]
```

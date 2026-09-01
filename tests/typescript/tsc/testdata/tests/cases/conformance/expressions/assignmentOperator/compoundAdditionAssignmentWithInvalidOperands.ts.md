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
                "type": "TSVoidKeyword",
                "start": 32,
                "end": 36
              },
              "start": 30,
              "end": 36
            },
            "start": 29,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 29,
          "end": 36
        }
      ],
      "declare": true,
      "start": 17,
      "end": 37
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
                "start": 55,
                "end": 62
              },
              "start": 53,
              "end": 62
            },
            "start": 51,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 62
        }
      ],
      "declare": true,
      "start": 39,
      "end": 63
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
          "start": 64,
          "end": 66
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "start": 64,
        "end": 71
      },
      "directive": null,
      "start": 64,
      "end": 72
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
          "start": 73,
          "end": 75
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 79,
          "end": 83
        },
        "start": 73,
        "end": 83
      },
      "directive": null,
      "start": 73,
      "end": 84
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
          "start": 85,
          "end": 87
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 91,
          "end": 92
        },
        "start": 85,
        "end": 92
      },
      "directive": null,
      "start": 85,
      "end": 93
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
          "start": 94,
          "end": 96
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "optional": false,
          "computed": false,
          "start": 100,
          "end": 103
        },
        "start": 94,
        "end": 103
      },
      "directive": null,
      "start": 94,
      "end": 104
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
          "start": 105,
          "end": 107
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 111,
          "end": 113
        },
        "start": 105,
        "end": 113
      },
      "directive": null,
      "start": 105,
      "end": 114
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
          "start": 115,
          "end": 117
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 121,
          "end": 125
        },
        "start": 115,
        "end": 125
      },
      "directive": null,
      "start": 115,
      "end": 126
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
          "start": 127,
          "end": 129
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 142
        },
        "start": 127,
        "end": 142
      },
      "directive": null,
      "start": 127,
      "end": 143
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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 161,
                "end": 163
              },
              "start": 159,
              "end": 163
            },
            "start": 157,
            "end": 163
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 163
        }
      ],
      "declare": true,
      "start": 145,
      "end": 164
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
          "start": 165,
          "end": 167
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 172
        },
        "start": 165,
        "end": 172
      },
      "directive": null,
      "start": 165,
      "end": 173
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
          "start": 174,
          "end": 176
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 180,
          "end": 184
        },
        "start": 174,
        "end": 184
      },
      "directive": null,
      "start": 174,
      "end": 185
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
          "start": 186,
          "end": 188
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 192,
          "end": 193
        },
        "start": 186,
        "end": 193
      },
      "directive": null,
      "start": 186,
      "end": 194
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
          "start": 195,
          "end": 197
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 201,
          "end": 204
        },
        "start": 195,
        "end": 204
      },
      "directive": null,
      "start": 195,
      "end": 205
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
          "start": 206,
          "end": 208
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 212,
          "end": 214
        },
        "start": 206,
        "end": 214
      },
      "directive": null,
      "start": 206,
      "end": 215
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
          "start": 216,
          "end": 218
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 222,
          "end": 226
        },
        "start": 216,
        "end": 226
      },
      "directive": null,
      "start": 216,
      "end": 227
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
          "start": 228,
          "end": 230
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 243
        },
        "start": 228,
        "end": 243
      },
      "directive": null,
      "start": 228,
      "end": 244
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
                "type": "TSVoidKeyword",
                "start": 262,
                "end": 266
              },
              "start": 260,
              "end": 266
            },
            "start": 258,
            "end": 266
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 266
        }
      ],
      "declare": true,
      "start": 246,
      "end": 267
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
          "start": 268,
          "end": 270
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 275
        },
        "start": 268,
        "end": 275
      },
      "directive": null,
      "start": 268,
      "end": 276
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
          "start": 277,
          "end": 279
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 283,
          "end": 287
        },
        "start": 277,
        "end": 287
      },
      "directive": null,
      "start": 277,
      "end": 288
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
          "start": 289,
          "end": 291
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 295,
          "end": 296
        },
        "start": 289,
        "end": 296
      },
      "directive": null,
      "start": 289,
      "end": 297
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
          "start": 298,
          "end": 300
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 305
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "optional": false,
          "computed": false,
          "start": 304,
          "end": 307
        },
        "start": 298,
        "end": 307
      },
      "directive": null,
      "start": 298,
      "end": 308
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
          "start": 309,
          "end": 311
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 315,
          "end": 317
        },
        "start": 309,
        "end": 317
      },
      "directive": null,
      "start": 309,
      "end": 318
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
          "start": 319,
          "end": 321
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 325,
          "end": 329
        },
        "start": 319,
        "end": 329
      },
      "directive": null,
      "start": 319,
      "end": 330
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
          "start": 331,
          "end": 333
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 346
        },
        "start": 331,
        "end": 346
      },
      "directive": null,
      "start": 331,
      "end": 347
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
                "type": "TSNumberKeyword",
                "start": 365,
                "end": 371
              },
              "start": 363,
              "end": 371
            },
            "start": 361,
            "end": 371
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 371
        }
      ],
      "declare": true,
      "start": 349,
      "end": 372
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
          "start": 373,
          "end": 375
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 380
        },
        "start": 373,
        "end": 380
      },
      "directive": null,
      "start": 373,
      "end": 381
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
          "start": 382,
          "end": 384
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 388,
          "end": 392
        },
        "start": 382,
        "end": 392
      },
      "directive": null,
      "start": 382,
      "end": 393
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
          "start": 394,
          "end": 396
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 400,
          "end": 402
        },
        "start": 394,
        "end": 402
      },
      "directive": null,
      "start": 394,
      "end": 403
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 422
                },
                "typeArguments": null,
                "start": 421,
                "end": 422
              },
              "start": 419,
              "end": 422
            },
            "start": 417,
            "end": 422
          },
          "init": null,
          "definite": false,
          "start": 417,
          "end": 422
        }
      ],
      "declare": true,
      "start": 405,
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
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 431
        },
        "start": 424,
        "end": 431
      },
      "directive": null,
      "start": 424,
      "end": 432
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
          "start": 433,
          "end": 435
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 439,
          "end": 443
        },
        "start": 433,
        "end": 443
      },
      "directive": null,
      "start": 433,
      "end": 444
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
          "start": 445,
          "end": 447
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 451,
          "end": 453
        },
        "start": 445,
        "end": 453
      },
      "directive": null,
      "start": 445,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
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
    "type": "Keyword",
    "value": "void",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 67,
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
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 76,
    "end": 78
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 88,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "+=",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
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
    "value": "x1",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 118,
    "end": 120
  },
  {
    "type": "Null",
    "value": "null",
    "start": 121,
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
    "value": "+=",
    "start": 130,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 133,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
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
    "value": "x2",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 177,
    "end": 179
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 189,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
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
    "value": "+=",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "+=",
    "start": 219,
    "end": 221
  },
  {
    "type": "Null",
    "value": "null",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 271,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 280,
    "end": 282
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 292,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 301,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "x3",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 322,
    "end": 324
  },
  {
    "type": "Null",
    "value": "null",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 334,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 349,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 376,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 385,
    "end": 387
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 405,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "x5",
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
    "value": "a",
    "start": 430,
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
    "value": "x5",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 436,
    "end": 438
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  }
]
```

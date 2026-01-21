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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "ABC",
                  "raw": "\"ABC\"",
                  "start": 17,
                  "end": 22
                },
                "start": 17,
                "end": 22
              },
              "start": 15,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "XYZ",
                  "raw": "\"XYZ\"",
                  "start": 41,
                  "end": 46
                },
                "start": 41,
                "end": 46
              },
              "start": 39,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 46
        }
      ],
      "declare": true,
      "start": 24,
      "end": 47
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
            "name": "abcOrXyz",
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
                      "value": "ABC",
                      "raw": "\"ABC\"",
                      "start": 70,
                      "end": 75
                    },
                    "start": 70,
                    "end": 75
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "XYZ",
                      "raw": "\"XYZ\"",
                      "start": 78,
                      "end": 83
                    },
                    "start": 78,
                    "end": 83
                  }
                ],
                "start": 70,
                "end": 83
              },
              "start": 68,
              "end": 83
            },
            "start": 60,
            "end": 83
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 83
        }
      ],
      "declare": true,
      "start": 48,
      "end": 84
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
            "name": "abcOrXyzOrNumber",
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
                      "value": "ABC",
                      "raw": "\"ABC\"",
                      "start": 115,
                      "end": 120
                    },
                    "start": 115,
                    "end": 120
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "XYZ",
                      "raw": "\"XYZ\"",
                      "start": 123,
                      "end": 128
                    },
                    "start": 123,
                    "end": 128
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 131,
                    "end": 137
                  }
                ],
                "start": 115,
                "end": 137
              },
              "start": 113,
              "end": 137
            },
            "start": 97,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 137
        }
      ],
      "declare": true,
      "start": 85,
      "end": 138
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 164
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 167,
              "end": 170
            },
            "start": 148,
            "end": 170
          },
          "definite": false,
          "start": 144,
          "end": 170
        }
      ],
      "declare": false,
      "start": 140,
      "end": 171
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 180,
              "end": 183
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 202
            },
            "start": 180,
            "end": 202
          },
          "definite": false,
          "start": 176,
          "end": 202
        }
      ],
      "declare": false,
      "start": 172,
      "end": 203
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 228
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 247
            },
            "start": 212,
            "end": 247
          },
          "definite": false,
          "start": 208,
          "end": 247
        }
      ],
      "declare": false,
      "start": 204,
      "end": 248
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
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 273
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 276,
              "end": 280
            },
            "start": 257,
            "end": 280
          },
          "definite": false,
          "start": 253,
          "end": 280
        }
      ],
      "declare": false,
      "start": 249,
      "end": 281
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 290,
              "end": 295
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 314
            },
            "start": 290,
            "end": 314
          },
          "definite": false,
          "start": 286,
          "end": 314
        }
      ],
      "declare": false,
      "start": 282,
      "end": 315
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 321
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 340
            },
            "start": 324,
            "end": 342
          },
          "definite": false,
          "start": 320,
          "end": 342
        }
      ],
      "declare": false,
      "start": 316,
      "end": 343
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 370
            },
            "start": 352,
            "end": 370
          },
          "definite": false,
          "start": 348,
          "end": 370
        }
      ],
      "declare": false,
      "start": 344,
      "end": 371
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 396
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 399,
              "end": 401
            },
            "start": 380,
            "end": 401
          },
          "definite": false,
          "start": 376,
          "end": 401
        }
      ],
      "declare": false,
      "start": 372,
      "end": 402
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 408
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 427
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 430,
              "end": 432
            },
            "start": 411,
            "end": 432
          },
          "definite": false,
          "start": 407,
          "end": 432
        }
      ],
      "declare": false,
      "start": 403,
      "end": 433
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 439
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 445
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 451
            },
            "start": 442,
            "end": 451
          },
          "definite": false,
          "start": 438,
          "end": 451
        }
      ],
      "declare": false,
      "start": 434,
      "end": 452
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 458
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 464
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 472
            },
            "start": 461,
            "end": 472
          },
          "definite": false,
          "start": 457,
          "end": 472
        }
      ],
      "declare": false,
      "start": 453,
      "end": 473
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 479
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 492
            },
            "start": 482,
            "end": 492
          },
          "definite": false,
          "start": 478,
          "end": 492
        }
      ],
      "declare": false,
      "start": 474,
      "end": 493
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 493
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 24,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 78,
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
    "value": "declare",
    "start": 85,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 97,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 148,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 186,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 208,
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
    "value": "abcOrXyzOrNumber",
    "start": 212,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 231,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 257,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 274,
    "end": 275
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 298,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 324,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 352,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 354,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 380,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 397,
    "end": 398
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 411,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 428,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  }
]
```

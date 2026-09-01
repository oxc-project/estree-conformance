__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
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
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "start": 91,
                  "end": 98
                },
                "init": null,
                "definite": true,
                "start": 91,
                "end": 98
              }
            ],
            "declare": false,
            "start": 87,
            "end": 99
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
                      "type": "TSBooleanKeyword",
                      "start": 112,
                      "end": 119
                    },
                    "start": 110,
                    "end": 119
                  },
                  "start": 108,
                  "end": 119
                },
                "init": null,
                "definite": true,
                "start": 108,
                "end": 119
              }
            ],
            "declare": false,
            "start": 104,
            "end": 120
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
                  },
                  "start": 129,
                  "end": 139
                },
                "init": null,
                "definite": true,
                "start": 129,
                "end": 139
              }
            ],
            "declare": false,
            "start": 125,
            "end": 140
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 149,
                  "end": 159
                },
                "init": null,
                "definite": true,
                "start": 149,
                "end": 159
              }
            ],
            "declare": false,
            "start": 145,
            "end": 160
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 173,
                      "end": 175
                    },
                    "start": 171,
                    "end": 175
                  },
                  "start": 169,
                  "end": 175
                },
                "init": null,
                "definite": true,
                "start": 169,
                "end": 175
              }
            ],
            "declare": false,
            "start": 165,
            "end": 176
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
                  "name": "r1a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 190
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "start": 193,
                  "end": 199
                },
                "definite": false,
                "start": 186,
                "end": 199
              }
            ],
            "declare": false,
            "start": 182,
            "end": 200
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
                  "name": "r2a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "start": 216,
                  "end": 222
                },
                "definite": false,
                "start": 209,
                "end": 222
              }
            ],
            "declare": false,
            "start": 205,
            "end": 223
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
                  "name": "r1b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 245
                  },
                  "start": 239,
                  "end": 245
                },
                "definite": false,
                "start": 232,
                "end": 245
              }
            ],
            "declare": false,
            "start": 228,
            "end": 246
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
                  "name": "r2b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 259
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 263
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "start": 262,
                  "end": 268
                },
                "definite": false,
                "start": 255,
                "end": 268
              }
            ],
            "declare": false,
            "start": 251,
            "end": 269
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
                  "name": "r1c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 282
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 286
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "start": 285,
                  "end": 291
                },
                "definite": false,
                "start": 278,
                "end": 291
              }
            ],
            "declare": false,
            "start": 274,
            "end": 292
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
                  "name": "r2c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 305
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 309
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "start": 308,
                  "end": 314
                },
                "definite": false,
                "start": 301,
                "end": 314
              }
            ],
            "declare": false,
            "start": 297,
            "end": 315
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
                  "name": "r1d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 328
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 332
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "start": 331,
                  "end": 337
                },
                "definite": false,
                "start": 324,
                "end": 337
              }
            ],
            "declare": false,
            "start": 320,
            "end": 338
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
                  "name": "r2d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 351
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 355
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 360
                  },
                  "start": 354,
                  "end": 360
                },
                "definite": false,
                "start": 347,
                "end": 360
              }
            ],
            "declare": false,
            "start": 343,
            "end": 361
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
                  "name": "r1e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 374
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 378
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 383
                  },
                  "start": 377,
                  "end": 383
                },
                "definite": false,
                "start": 370,
                "end": 383
              }
            ],
            "declare": false,
            "start": 366,
            "end": 384
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
                  "name": "r2e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 397
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 406
                  },
                  "start": 400,
                  "end": 406
                },
                "definite": false,
                "start": 393,
                "end": 406
              }
            ],
            "declare": false,
            "start": 389,
            "end": 407
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
                  "name": "r1f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 420
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "start": 423,
                  "end": 429
                },
                "definite": false,
                "start": 416,
                "end": 429
              }
            ],
            "declare": false,
            "start": 412,
            "end": 430
          }
        ],
        "start": 81,
        "end": 432
      },
      "expression": false,
      "start": 59,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 432
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
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
    "value": "!",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
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
    "value": "var",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 195,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 218,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 241,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 264,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 287,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "r2c1",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 310,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 313,
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
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 333,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "r2d1",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 356,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "r1e1",
    "start": 370,
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
    "value": "e",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "r2e1",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "r1f1",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 425,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  }
]
```

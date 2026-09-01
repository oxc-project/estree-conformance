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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "onethree",
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
                    "start": 21,
                    "end": 22
                  },
                  "start": 21,
                  "end": 22
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 25,
                    "end": 26
                  },
                  "start": 25,
                  "end": 26
                }
              ],
              "start": 21,
              "end": 26
            },
            "start": 19,
            "end": 26
          },
          "start": 11,
          "end": 26
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              "start": 33,
              "end": 34
            },
            "start": 31,
            "end": 34
          },
          "start": 28,
          "end": 34
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 52,
                  "end": 56
                },
                "definite": false,
                "start": 48,
                "end": 56
              }
            ],
            "declare": false,
            "start": 42,
            "end": 57
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 72,
                  "end": 77
                },
                "definite": false,
                "start": 68,
                "end": 77
              }
            ],
            "declare": false,
            "start": 62,
            "end": 78
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
                  "start": 87,
                  "end": 89
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 100
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 106
                  },
                  "start": 92,
                  "end": 106
                },
                "definite": false,
                "start": 87,
                "end": 106
              }
            ],
            "declare": false,
            "start": 83,
            "end": 107
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
                  "start": 122,
                  "end": 124
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 135
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 138,
                    "end": 142
                  },
                  "start": 127,
                  "end": 142
                },
                "definite": false,
                "start": 122,
                "end": 142
              }
            ],
            "declare": false,
            "start": 118,
            "end": 143
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
                  "start": 181,
                  "end": 183
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 194
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 198,
                    "end": 203
                  },
                  "start": 186,
                  "end": 203
                },
                "definite": false,
                "start": 181,
                "end": 203
              }
            ],
            "declare": false,
            "start": 177,
            "end": 204
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
                  "start": 242,
                  "end": 244
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 255
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 260
                  },
                  "start": 247,
                  "end": 260
                },
                "definite": false,
                "start": 242,
                "end": 260
              }
            ],
            "declare": false,
            "start": 238,
            "end": 261
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
                  "start": 299,
                  "end": 301
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 312
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 316
                  },
                  "start": 304,
                  "end": 316
                },
                "definite": false,
                "start": 299,
                "end": 316
              }
            ],
            "declare": false,
            "start": 295,
            "end": 317
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
                  "start": 355,
                  "end": 357
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 360,
                    "end": 364
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 375
                  },
                  "start": 360,
                  "end": 375
                },
                "definite": false,
                "start": 355,
                "end": 375
              }
            ],
            "declare": false,
            "start": 351,
            "end": 376
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
                  "start": 414,
                  "end": 416
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 419,
                    "end": 424
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 430
                  },
                  "start": 419,
                  "end": 430
                },
                "definite": false,
                "start": 414,
                "end": 430
              }
            ],
            "declare": false,
            "start": 410,
            "end": 431
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
                  "start": 469,
                  "end": 471
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 474,
                    "end": 479
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 490
                  },
                  "start": 474,
                  "end": 490
                },
                "definite": false,
                "start": 469,
                "end": 490
              }
            ],
            "declare": false,
            "start": 465,
            "end": 491
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
                  "start": 528,
                  "end": 530
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 541
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 544,
                    "end": 545
                  },
                  "start": 533,
                  "end": 545
                },
                "definite": false,
                "start": 528,
                "end": 545
              }
            ],
            "declare": false,
            "start": 524,
            "end": 546
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
                  "name": "a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 564
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 567,
                    "end": 568
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 574
                  },
                  "start": 567,
                  "end": 574
                },
                "definite": false,
                "start": 561,
                "end": 574
              }
            ],
            "declare": false,
            "start": 557,
            "end": 575
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
                  "name": "a11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 593
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 596,
                    "end": 597
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 600,
                    "end": 601
                  },
                  "start": 596,
                  "end": 601
                },
                "definite": false,
                "start": 590,
                "end": 601
              }
            ],
            "declare": false,
            "start": 586,
            "end": 602
          }
        ],
        "start": 36,
        "end": 610
      },
      "expression": false,
      "start": 0,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Boolean",
    "value": "true",
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
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Identifier",
    "value": "onethree",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 186,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 195,
    "end": 197
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 256,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 304,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 482,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "onethree",
    "start": 533,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "<",
    "start": 598,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  }
]
```

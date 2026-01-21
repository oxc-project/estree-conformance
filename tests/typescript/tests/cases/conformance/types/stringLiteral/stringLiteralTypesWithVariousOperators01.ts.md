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
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 148,
              "end": 150
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "start": 148,
            "end": 156
          },
          "definite": false,
          "start": 144,
          "end": 156
        }
      ],
      "declare": false,
      "start": 140,
      "end": 157
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
            "start": 162,
            "end": 163
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 172,
              "end": 174
            },
            "start": 166,
            "end": 174
          },
          "definite": false,
          "start": 162,
          "end": 174
        }
      ],
      "declare": false,
      "start": 158,
      "end": 175
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
            "start": 180,
            "end": 181
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 184,
              "end": 186
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
            },
            "start": 184,
            "end": 192
          },
          "definite": false,
          "start": 180,
          "end": 192
        }
      ],
      "declare": false,
      "start": 176,
      "end": 193
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
            "start": 198,
            "end": 199
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 205
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 208,
              "end": 210
            },
            "start": 202,
            "end": 210
          },
          "definite": false,
          "start": 198,
          "end": 210
        }
      ],
      "declare": false,
      "start": 194,
      "end": 211
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
            "start": 216,
            "end": 217
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 223
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 229
            },
            "start": 220,
            "end": 229
          },
          "definite": false,
          "start": 216,
          "end": 229
        }
      ],
      "declare": false,
      "start": 212,
      "end": 230
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
            "start": 235,
            "end": 236
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 242
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 248
            },
            "start": 239,
            "end": 248
          },
          "definite": false,
          "start": 235,
          "end": 248
        }
      ],
      "declare": false,
      "start": 231,
      "end": 249
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
            "start": 254,
            "end": 255
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 258,
              "end": 262
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 268
            },
            "start": 258,
            "end": 268
          },
          "definite": false,
          "start": 254,
          "end": 268
        }
      ],
      "declare": false,
      "start": 250,
      "end": 269
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
            "start": 274,
            "end": 275
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 281
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 284,
              "end": 288
            },
            "start": 278,
            "end": 288
          },
          "definite": false,
          "start": 274,
          "end": 288
        }
      ],
      "declare": false,
      "start": 270,
      "end": 289
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
            "start": 294,
            "end": 295
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 301
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "abcOrXyz",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 312
              },
              "start": 298,
              "end": 312
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 318
            },
            "start": 298,
            "end": 318
          },
          "definite": false,
          "start": 294,
          "end": 318
        }
      ],
      "declare": false,
      "start": 290,
      "end": 319
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
            "start": 324,
            "end": 325
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 336
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 347
            },
            "start": 328,
            "end": 347
          },
          "definite": false,
          "start": 324,
          "end": 347
        }
      ],
      "declare": false,
      "start": 320,
      "end": 348
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
            "start": 353,
            "end": 354
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 366
            },
            "prefix": true,
            "start": 357,
            "end": 366
          },
          "definite": false,
          "start": 353,
          "end": 366
        }
      ],
      "declare": false,
      "start": 349,
      "end": 367
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
            "start": 372,
            "end": 373
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 385
            },
            "prefix": true,
            "start": 376,
            "end": 385
          },
          "definite": false,
          "start": 372,
          "end": 385
        }
      ],
      "declare": false,
      "start": 368,
      "end": 386
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 411
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 414,
              "end": 416
            },
            "start": 395,
            "end": 416
          },
          "definite": false,
          "start": 391,
          "end": 416
        }
      ],
      "declare": false,
      "start": 387,
      "end": 417
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 426,
              "end": 428
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 447
            },
            "start": 426,
            "end": 447
          },
          "definite": false,
          "start": 422,
          "end": 447
        }
      ],
      "declare": false,
      "start": 418,
      "end": 448
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 473
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 484
            },
            "start": 457,
            "end": 484
          },
          "definite": false,
          "start": 453,
          "end": 484
        }
      ],
      "declare": false,
      "start": 449,
      "end": 485
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 491
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 502
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 521
            },
            "start": 494,
            "end": 521
          },
          "definite": false,
          "start": 490,
          "end": 521
        }
      ],
      "declare": false,
      "start": 486,
      "end": 522
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 528
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 548
            },
            "prefix": true,
            "start": 531,
            "end": 548
          },
          "definite": false,
          "start": 527,
          "end": 548
        }
      ],
      "declare": false,
      "start": 523,
      "end": 549
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 575
            },
            "prefix": true,
            "start": 558,
            "end": 575
          },
          "definite": false,
          "start": 554,
          "end": 575
        }
      ],
      "declare": false,
      "start": 550,
      "end": 576
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 582
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 601
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 620
            },
            "start": 585,
            "end": 620
          },
          "definite": false,
          "start": 581,
          "end": 620
        }
      ],
      "declare": false,
      "start": 577,
      "end": 621
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 627
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 646
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 658
            },
            "start": 630,
            "end": 658
          },
          "definite": false,
          "start": 626,
          "end": 658
        }
      ],
      "declare": false,
      "start": 622,
      "end": 659
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 665
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 671
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 684
            },
            "start": 668,
            "end": 684
          },
          "definite": false,
          "start": 664,
          "end": 684
        }
      ],
      "declare": false,
      "start": 660,
      "end": 685
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 691
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 702
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 723
            },
            "start": 694,
            "end": 723
          },
          "definite": false,
          "start": 690,
          "end": 723
        }
      ],
      "declare": false,
      "start": 686,
      "end": 724
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 724
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
    "type": "String",
    "value": "\"\"",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 170,
    "end": 171
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 235,
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
    "value": "abc",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 265,
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
    "value": "let",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 274,
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
    "value": "abc",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 282,
    "end": 283
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 304,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 328,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 358,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 377,
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
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 395,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 414,
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
    "value": "let",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 431,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 457,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 476,
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
    "value": "let",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 505,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 532,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 554,
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
    "value": "~",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 559,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 581,
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
    "value": "abcOrXyzOrNumber",
    "start": 585,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 604,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 630,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 647,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 650,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 676,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 694,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 707,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  }
]
```

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
        "start": 111,
        "end": 112
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
              "start": 115,
              "end": 116
            },
            "initializer": null,
            "computed": false,
            "start": 115,
            "end": 116
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "initializer": null,
            "computed": false,
            "start": 118,
            "end": 119
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "initializer": null,
            "computed": false,
            "start": 121,
            "end": 122
          }
        ],
        "start": 113,
        "end": 124
      },
      "const": false,
      "declare": false,
      "start": 106,
      "end": 124
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
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 138,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 144
        }
      ],
      "declare": true,
      "start": 126,
      "end": 145
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
                "start": 161,
                "end": 167
              },
              "start": 159,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": true,
      "start": 146,
      "end": 168
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 185
                },
                "typeArguments": null,
                "start": 184,
                "end": 185
              },
              "start": 182,
              "end": 185
            },
            "start": 181,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 185
        }
      ],
      "declare": true,
      "start": 169,
      "end": 186
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
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "start": 199,
            "end": 208
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 208
        }
      ],
      "declare": true,
      "start": 187,
      "end": 209
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 233,
                "end": 236
              },
              "start": 231,
              "end": 236
            },
            "start": 229,
            "end": 236
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 239,
              "end": 243
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "start": 239,
            "end": 247
          },
          "definite": false,
          "start": 229,
          "end": 247
        }
      ],
      "declare": false,
      "start": 225,
      "end": 248
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 257,
                "end": 260
              },
              "start": 255,
              "end": 260
            },
            "start": 253,
            "end": 260
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 267,
              "end": 271
            },
            "start": 263,
            "end": 271
          },
          "definite": false,
          "start": 253,
          "end": 271
        }
      ],
      "declare": false,
      "start": 249,
      "end": 272
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 302
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 305,
              "end": 309
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "start": 305,
            "end": 313
          },
          "definite": false,
          "start": 300,
          "end": 313
        }
      ],
      "declare": false,
      "start": 296,
      "end": 314
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 324,
              "end": 328
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 331,
              "end": 332
            },
            "start": 324,
            "end": 332
          },
          "definite": false,
          "start": 319,
          "end": 332
        }
      ],
      "declare": false,
      "start": 315,
      "end": 333
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 343,
              "end": 347
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "start": 343,
            "end": 351
          },
          "definite": false,
          "start": 338,
          "end": 351
        }
      ],
      "declare": false,
      "start": 334,
      "end": 352
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 359
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 362,
              "end": 366
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 372
              },
              "optional": false,
              "computed": false,
              "start": 369,
              "end": 372
            },
            "start": 362,
            "end": 372
          },
          "definite": false,
          "start": 357,
          "end": 372
        }
      ],
      "declare": false,
      "start": 353,
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 380
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 383,
              "end": 387
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 392,
                "end": 395
              },
              "optional": false,
              "computed": true,
              "start": 390,
              "end": 396
            },
            "start": 383,
            "end": 396
          },
          "definite": false,
          "start": 378,
          "end": 396
        }
      ],
      "declare": false,
      "start": 374,
      "end": 397
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 404
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 411,
              "end": 415
            },
            "start": 407,
            "end": 415
          },
          "definite": false,
          "start": 402,
          "end": 415
        }
      ],
      "declare": false,
      "start": 398,
      "end": 416
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 426,
              "end": 427
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 430,
              "end": 434
            },
            "start": 426,
            "end": 434
          },
          "definite": false,
          "start": 421,
          "end": 434
        }
      ],
      "declare": false,
      "start": 417,
      "end": 435
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 443
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 447
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 450,
              "end": 454
            },
            "start": 446,
            "end": 454
          },
          "definite": false,
          "start": 440,
          "end": 454
        }
      ],
      "declare": false,
      "start": 436,
      "end": 454
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 462
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
                "start": 465,
                "end": 466
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "optional": false,
              "computed": false,
              "start": 465,
              "end": 468
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 471,
              "end": 475
            },
            "start": 465,
            "end": 475
          },
          "definite": false,
          "start": 459,
          "end": 475
        }
      ],
      "declare": false,
      "start": 455,
      "end": 476
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 484
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
                "start": 487,
                "end": 488
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 489,
                "end": 492
              },
              "optional": false,
              "computed": true,
              "start": 487,
              "end": 493
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 496,
              "end": 500
            },
            "start": 487,
            "end": 500
          },
          "definite": false,
          "start": 481,
          "end": 500
        }
      ],
      "declare": false,
      "start": 477,
      "end": 501
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 527
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 530,
              "end": 534
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "start": 530,
            "end": 538
          },
          "definite": false,
          "start": 524,
          "end": 538
        }
      ],
      "declare": false,
      "start": 520,
      "end": 539
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 547
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 550,
              "end": 554
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 557,
              "end": 559
            },
            "start": 550,
            "end": 559
          },
          "definite": false,
          "start": 544,
          "end": 559
        }
      ],
      "declare": false,
      "start": 540,
      "end": 560
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 568
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 572
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 575,
              "end": 579
            },
            "start": 571,
            "end": 579
          },
          "definite": false,
          "start": 565,
          "end": 579
        }
      ],
      "declare": false,
      "start": 561,
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 588
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 591,
              "end": 593
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 596,
              "end": 600
            },
            "start": 591,
            "end": 600
          },
          "definite": false,
          "start": 585,
          "end": 600
        }
      ],
      "declare": false,
      "start": 581,
      "end": 601
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 601
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 146,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Null",
    "value": "null",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 246,
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
    "value": "var",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 265,
    "end": 266
  },
  {
    "type": "Null",
    "value": "null",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Null",
    "value": "null",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Null",
    "value": "null",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 329,
    "end": 330
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Null",
    "value": "null",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Null",
    "value": "null",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Null",
    "value": "null",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 409,
    "end": 410
  },
  {
    "type": "Null",
    "value": "null",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 428,
    "end": 429
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 448,
    "end": 449
  },
  {
    "type": "Null",
    "value": "null",
    "start": 450,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 469,
    "end": 470
  },
  {
    "type": "Null",
    "value": "null",
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
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 488,
    "end": 489
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 494,
    "end": 495
  },
  {
    "type": "Null",
    "value": "null",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 520,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Null",
    "value": "null",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Null",
    "value": "null",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 555,
    "end": 556
  },
  {
    "type": "String",
    "value": "''",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 573,
    "end": 574
  },
  {
    "type": "Null",
    "value": "null",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "String",
    "value": "''",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 594,
    "end": 595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  }
]
```

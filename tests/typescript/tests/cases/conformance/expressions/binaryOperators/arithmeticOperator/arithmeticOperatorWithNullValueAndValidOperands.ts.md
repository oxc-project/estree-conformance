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
        "start": 114,
        "end": 115
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
              "start": 122,
              "end": 123
            },
            "initializer": null,
            "computed": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": null,
            "computed": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "const": false,
      "declare": false,
      "start": 109,
      "end": 132
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
                "start": 149,
                "end": 152
              },
              "start": 147,
              "end": 152
            },
            "start": 146,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 152
        }
      ],
      "declare": true,
      "start": 134,
      "end": 153
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
                "start": 169,
                "end": 175
              },
              "start": 167,
              "end": 175
            },
            "start": 166,
            "end": 175
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 175
        }
      ],
      "declare": true,
      "start": 154,
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 199
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 202,
              "end": 206
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "start": 202,
            "end": 210
          },
          "definite": false,
          "start": 196,
          "end": 210
        }
      ],
      "declare": false,
      "start": 192,
      "end": 211
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
            "start": 216,
            "end": 219
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 222,
              "end": 226
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "start": 222,
            "end": 230
          },
          "definite": false,
          "start": 216,
          "end": 230
        }
      ],
      "declare": false,
      "start": 212,
      "end": 231
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
            "start": 236,
            "end": 239
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 242,
              "end": 246
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 249,
              "end": 250
            },
            "start": 242,
            "end": 250
          },
          "definite": false,
          "start": 236,
          "end": 250
        }
      ],
      "declare": false,
      "start": 232,
      "end": 251
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
            "start": 256,
            "end": 259
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 262,
              "end": 266
            },
            "operator": "*",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "optional": false,
              "computed": false,
              "start": 269,
              "end": 272
            },
            "start": 262,
            "end": 272
          },
          "definite": false,
          "start": 256,
          "end": 272
        }
      ],
      "declare": false,
      "start": 252,
      "end": 273
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
            "start": 278,
            "end": 281
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 288,
              "end": 292
            },
            "start": 284,
            "end": 292
          },
          "definite": false,
          "start": 278,
          "end": 292
        }
      ],
      "declare": false,
      "start": 274,
      "end": 293
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
            "start": 298,
            "end": 301
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 308,
              "end": 312
            },
            "start": 304,
            "end": 312
          },
          "definite": false,
          "start": 298,
          "end": 312
        }
      ],
      "declare": false,
      "start": 294,
      "end": 313
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 321
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 324,
              "end": 325
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 328,
              "end": 332
            },
            "start": 324,
            "end": 332
          },
          "definite": false,
          "start": 318,
          "end": 332
        }
      ],
      "declare": false,
      "start": 314,
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 341
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
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 347
              },
              "optional": false,
              "computed": false,
              "start": 344,
              "end": 347
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 350,
              "end": 354
            },
            "start": 344,
            "end": 354
          },
          "definite": false,
          "start": 338,
          "end": 354
        }
      ],
      "declare": false,
      "start": 334,
      "end": 355
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
            "start": 375,
            "end": 378
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 381,
              "end": 385
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
            },
            "start": 381,
            "end": 389
          },
          "definite": false,
          "start": 375,
          "end": 389
        }
      ],
      "declare": false,
      "start": 371,
      "end": 390
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
            "start": 395,
            "end": 398
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 401,
              "end": 405
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 409
            },
            "start": 401,
            "end": 409
          },
          "definite": false,
          "start": 395,
          "end": 409
        }
      ],
      "declare": false,
      "start": 391,
      "end": 410
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
            "start": 415,
            "end": 418
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 421,
              "end": 425
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 428,
              "end": 429
            },
            "start": 421,
            "end": 429
          },
          "definite": false,
          "start": 415,
          "end": 429
        }
      ],
      "declare": false,
      "start": 411,
      "end": 430
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
            "start": 435,
            "end": 438
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 441,
              "end": 445
            },
            "operator": "/",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "optional": false,
              "computed": false,
              "start": 448,
              "end": 451
            },
            "start": 441,
            "end": 451
          },
          "definite": false,
          "start": 435,
          "end": 451
        }
      ],
      "declare": false,
      "start": 431,
      "end": 452
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
            "start": 457,
            "end": 460
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 467,
              "end": 471
            },
            "start": 463,
            "end": 471
          },
          "definite": false,
          "start": 457,
          "end": 471
        }
      ],
      "declare": false,
      "start": 453,
      "end": 472
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
            "start": 477,
            "end": 480
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 487,
              "end": 491
            },
            "start": 483,
            "end": 491
          },
          "definite": false,
          "start": 477,
          "end": 491
        }
      ],
      "declare": false,
      "start": 473,
      "end": 492
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
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 500
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 503,
              "end": 504
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 507,
              "end": 511
            },
            "start": 503,
            "end": 511
          },
          "definite": false,
          "start": 497,
          "end": 511
        }
      ],
      "declare": false,
      "start": 493,
      "end": 512
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
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 520
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
                "start": 523,
                "end": 524
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              },
              "optional": false,
              "computed": false,
              "start": 523,
              "end": 526
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 529,
              "end": 533
            },
            "start": 523,
            "end": 533
          },
          "definite": false,
          "start": 517,
          "end": 533
        }
      ],
      "declare": false,
      "start": 513,
      "end": 534
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
            "start": 554,
            "end": 557
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 560,
              "end": 564
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "start": 560,
            "end": 568
          },
          "definite": false,
          "start": 554,
          "end": 568
        }
      ],
      "declare": false,
      "start": 550,
      "end": 569
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
            "start": 574,
            "end": 577
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 580,
              "end": 584
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 588
            },
            "start": 580,
            "end": 588
          },
          "definite": false,
          "start": 574,
          "end": 588
        }
      ],
      "declare": false,
      "start": 570,
      "end": 589
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
            "start": 594,
            "end": 597
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 600,
              "end": 604
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 607,
              "end": 608
            },
            "start": 600,
            "end": 608
          },
          "definite": false,
          "start": 594,
          "end": 608
        }
      ],
      "declare": false,
      "start": 590,
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
            "name": "rc4",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 617
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 620,
              "end": 624
            },
            "operator": "%",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 630
              },
              "optional": false,
              "computed": false,
              "start": 627,
              "end": 630
            },
            "start": 620,
            "end": 630
          },
          "definite": false,
          "start": 614,
          "end": 630
        }
      ],
      "declare": false,
      "start": 610,
      "end": 631
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
            "start": 636,
            "end": 639
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 643
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 646,
              "end": 650
            },
            "start": 642,
            "end": 650
          },
          "definite": false,
          "start": 636,
          "end": 650
        }
      ],
      "declare": false,
      "start": 632,
      "end": 651
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
            "start": 656,
            "end": 659
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 663
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 666,
              "end": 670
            },
            "start": 662,
            "end": 670
          },
          "definite": false,
          "start": 656,
          "end": 670
        }
      ],
      "declare": false,
      "start": 652,
      "end": 671
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
            "name": "rc7",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 679
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 682,
              "end": 683
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 686,
              "end": 690
            },
            "start": 682,
            "end": 690
          },
          "definite": false,
          "start": 676,
          "end": 690
        }
      ],
      "declare": false,
      "start": 672,
      "end": 691
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
            "name": "rc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 699
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
                "start": 702,
                "end": 703
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "optional": false,
              "computed": false,
              "start": 702,
              "end": 705
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 708,
              "end": 712
            },
            "start": 702,
            "end": 712
          },
          "definite": false,
          "start": 696,
          "end": 712
        }
      ],
      "declare": false,
      "start": 692,
      "end": 713
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
            "start": 733,
            "end": 736
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 739,
              "end": 743
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 747
            },
            "start": 739,
            "end": 747
          },
          "definite": false,
          "start": 733,
          "end": 747
        }
      ],
      "declare": false,
      "start": 729,
      "end": 748
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
            "start": 753,
            "end": 756
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 759,
              "end": 763
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 767
            },
            "start": 759,
            "end": 767
          },
          "definite": false,
          "start": 753,
          "end": 767
        }
      ],
      "declare": false,
      "start": 749,
      "end": 768
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
            "start": 773,
            "end": 776
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 779,
              "end": 783
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 786,
              "end": 787
            },
            "start": 779,
            "end": 787
          },
          "definite": false,
          "start": 773,
          "end": 787
        }
      ],
      "declare": false,
      "start": 769,
      "end": 788
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
            "start": 793,
            "end": 796
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 799,
              "end": 803
            },
            "operator": "-",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 807
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "optional": false,
              "computed": false,
              "start": 806,
              "end": 809
            },
            "start": 799,
            "end": 809
          },
          "definite": false,
          "start": 793,
          "end": 809
        }
      ],
      "declare": false,
      "start": 789,
      "end": 810
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
            "start": 815,
            "end": 818
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 822
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 825,
              "end": 829
            },
            "start": 821,
            "end": 829
          },
          "definite": false,
          "start": 815,
          "end": 829
        }
      ],
      "declare": false,
      "start": 811,
      "end": 830
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
            "start": 835,
            "end": 838
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 842
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 845,
              "end": 849
            },
            "start": 841,
            "end": 849
          },
          "definite": false,
          "start": 835,
          "end": 849
        }
      ],
      "declare": false,
      "start": 831,
      "end": 850
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
            "name": "rd7",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 858
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 861,
              "end": 862
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 865,
              "end": 869
            },
            "start": 861,
            "end": 869
          },
          "definite": false,
          "start": 855,
          "end": 869
        }
      ],
      "declare": false,
      "start": 851,
      "end": 870
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
            "name": "rd8",
            "optional": false,
            "typeAnnotation": null,
            "start": 875,
            "end": 878
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
                "start": 881,
                "end": 882
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 884
              },
              "optional": false,
              "computed": false,
              "start": 881,
              "end": 884
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 887,
              "end": 891
            },
            "start": 881,
            "end": 891
          },
          "definite": false,
          "start": 875,
          "end": 891
        }
      ],
      "declare": false,
      "start": 871,
      "end": 892
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
            "start": 913,
            "end": 916
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 919,
              "end": 923
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 928
            },
            "start": 919,
            "end": 928
          },
          "definite": false,
          "start": 913,
          "end": 928
        }
      ],
      "declare": false,
      "start": 909,
      "end": 929
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
            "start": 934,
            "end": 937
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 940,
              "end": 944
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 949
            },
            "start": 940,
            "end": 949
          },
          "definite": false,
          "start": 934,
          "end": 949
        }
      ],
      "declare": false,
      "start": 930,
      "end": 950
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
            "start": 955,
            "end": 958
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 961,
              "end": 965
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 969,
              "end": 970
            },
            "start": 961,
            "end": 970
          },
          "definite": false,
          "start": 955,
          "end": 970
        }
      ],
      "declare": false,
      "start": 951,
      "end": 971
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
            "start": 976,
            "end": 979
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 982,
              "end": 986
            },
            "operator": "<<",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 991
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 992,
                "end": 993
              },
              "optional": false,
              "computed": false,
              "start": 990,
              "end": 993
            },
            "start": 982,
            "end": 993
          },
          "definite": false,
          "start": 976,
          "end": 993
        }
      ],
      "declare": false,
      "start": 972,
      "end": 994
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
            "start": 999,
            "end": 1002
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1006
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1010,
              "end": 1014
            },
            "start": 1005,
            "end": 1014
          },
          "definite": false,
          "start": 999,
          "end": 1014
        }
      ],
      "declare": false,
      "start": 995,
      "end": 1015
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
            "start": 1020,
            "end": 1023
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1027
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1031,
              "end": 1035
            },
            "start": 1026,
            "end": 1035
          },
          "definite": false,
          "start": 1020,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1016,
      "end": 1036
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
            "name": "re7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1044
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1047,
              "end": 1048
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1052,
              "end": 1056
            },
            "start": 1047,
            "end": 1056
          },
          "definite": false,
          "start": 1041,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 1037,
      "end": 1057
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
            "name": "re8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1062,
            "end": 1065
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
                "start": 1068,
                "end": 1069
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1070,
                "end": 1071
              },
              "optional": false,
              "computed": false,
              "start": 1068,
              "end": 1071
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1075,
              "end": 1079
            },
            "start": 1068,
            "end": 1079
          },
          "definite": false,
          "start": 1062,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1080
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
            "start": 1101,
            "end": 1104
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1107,
              "end": 1111
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "start": 1107,
            "end": 1116
          },
          "definite": false,
          "start": 1101,
          "end": 1116
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1117
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
            "start": 1122,
            "end": 1125
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1128,
              "end": 1132
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1136,
              "end": 1137
            },
            "start": 1128,
            "end": 1137
          },
          "definite": false,
          "start": 1122,
          "end": 1137
        }
      ],
      "declare": false,
      "start": 1118,
      "end": 1138
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
            "start": 1143,
            "end": 1146
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1149,
              "end": 1153
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1157,
              "end": 1158
            },
            "start": 1149,
            "end": 1158
          },
          "definite": false,
          "start": 1143,
          "end": 1158
        }
      ],
      "declare": false,
      "start": 1139,
      "end": 1159
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
            "start": 1164,
            "end": 1167
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1170,
              "end": 1174
            },
            "operator": ">>",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1178,
                "end": 1179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1181
              },
              "optional": false,
              "computed": false,
              "start": 1178,
              "end": 1181
            },
            "start": 1170,
            "end": 1181
          },
          "definite": false,
          "start": 1164,
          "end": 1181
        }
      ],
      "declare": false,
      "start": 1160,
      "end": 1182
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
            "start": 1187,
            "end": 1190
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1193,
              "end": 1194
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1198,
              "end": 1202
            },
            "start": 1193,
            "end": 1202
          },
          "definite": false,
          "start": 1187,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1183,
      "end": 1203
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
            "start": 1208,
            "end": 1211
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1215
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1219,
              "end": 1223
            },
            "start": 1214,
            "end": 1223
          },
          "definite": false,
          "start": 1208,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1224
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
            "name": "rf7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1232
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1235,
              "end": 1236
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1240,
              "end": 1244
            },
            "start": 1235,
            "end": 1244
          },
          "definite": false,
          "start": 1229,
          "end": 1244
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1245
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
            "name": "rf8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1250,
            "end": 1253
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
                "start": 1256,
                "end": 1257
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1259
              },
              "optional": false,
              "computed": false,
              "start": 1256,
              "end": 1259
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1263,
              "end": 1267
            },
            "start": 1256,
            "end": 1267
          },
          "definite": false,
          "start": 1250,
          "end": 1267
        }
      ],
      "declare": false,
      "start": 1246,
      "end": 1268
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
            "start": 1290,
            "end": 1293
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1296,
              "end": 1300
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1306
            },
            "start": 1296,
            "end": 1306
          },
          "definite": false,
          "start": 1290,
          "end": 1306
        }
      ],
      "declare": false,
      "start": 1286,
      "end": 1307
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
            "start": 1312,
            "end": 1315
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1318,
              "end": 1322
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1327,
              "end": 1328
            },
            "start": 1318,
            "end": 1328
          },
          "definite": false,
          "start": 1312,
          "end": 1328
        }
      ],
      "declare": false,
      "start": 1308,
      "end": 1329
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
            "start": 1334,
            "end": 1337
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1340,
              "end": 1344
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1349,
              "end": 1350
            },
            "start": 1340,
            "end": 1350
          },
          "definite": false,
          "start": 1334,
          "end": 1350
        }
      ],
      "declare": false,
      "start": 1330,
      "end": 1351
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
            "start": 1356,
            "end": 1359
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1362,
              "end": 1366
            },
            "operator": ">>>",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1372
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1374
              },
              "optional": false,
              "computed": false,
              "start": 1371,
              "end": 1374
            },
            "start": 1362,
            "end": 1374
          },
          "definite": false,
          "start": 1356,
          "end": 1374
        }
      ],
      "declare": false,
      "start": 1352,
      "end": 1375
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
            "start": 1380,
            "end": 1383
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1387
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1392,
              "end": 1396
            },
            "start": 1386,
            "end": 1396
          },
          "definite": false,
          "start": 1380,
          "end": 1396
        }
      ],
      "declare": false,
      "start": 1376,
      "end": 1397
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
            "start": 1402,
            "end": 1405
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1409
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1414,
              "end": 1418
            },
            "start": 1408,
            "end": 1418
          },
          "definite": false,
          "start": 1402,
          "end": 1418
        }
      ],
      "declare": false,
      "start": 1398,
      "end": 1419
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
            "name": "rg7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1424,
            "end": 1427
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1430,
              "end": 1431
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1436,
              "end": 1440
            },
            "start": 1430,
            "end": 1440
          },
          "definite": false,
          "start": 1424,
          "end": 1440
        }
      ],
      "declare": false,
      "start": 1420,
      "end": 1441
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
            "name": "rg8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1446,
            "end": 1449
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
                "start": 1452,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1455
              },
              "optional": false,
              "computed": false,
              "start": 1452,
              "end": 1455
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1460,
              "end": 1464
            },
            "start": 1452,
            "end": 1464
          },
          "definite": false,
          "start": 1446,
          "end": 1464
        }
      ],
      "declare": false,
      "start": 1442,
      "end": 1465
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
            "start": 1485,
            "end": 1488
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1491,
              "end": 1495
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1498,
              "end": 1499
            },
            "start": 1491,
            "end": 1499
          },
          "definite": false,
          "start": 1485,
          "end": 1499
        }
      ],
      "declare": false,
      "start": 1481,
      "end": 1500
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
            "start": 1505,
            "end": 1508
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1511,
              "end": 1515
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1518,
              "end": 1519
            },
            "start": 1511,
            "end": 1519
          },
          "definite": false,
          "start": 1505,
          "end": 1519
        }
      ],
      "declare": false,
      "start": 1501,
      "end": 1520
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
            "start": 1525,
            "end": 1528
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1531,
              "end": 1535
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1538,
              "end": 1539
            },
            "start": 1531,
            "end": 1539
          },
          "definite": false,
          "start": 1525,
          "end": 1539
        }
      ],
      "declare": false,
      "start": 1521,
      "end": 1540
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
            "start": 1545,
            "end": 1548
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1551,
              "end": 1555
            },
            "operator": "&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1559
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1560,
                "end": 1561
              },
              "optional": false,
              "computed": false,
              "start": 1558,
              "end": 1561
            },
            "start": 1551,
            "end": 1561
          },
          "definite": false,
          "start": 1545,
          "end": 1561
        }
      ],
      "declare": false,
      "start": 1541,
      "end": 1562
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
            "start": 1567,
            "end": 1570
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1574
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1577,
              "end": 1581
            },
            "start": 1573,
            "end": 1581
          },
          "definite": false,
          "start": 1567,
          "end": 1581
        }
      ],
      "declare": false,
      "start": 1563,
      "end": 1582
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
            "start": 1587,
            "end": 1590
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1594
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1597,
              "end": 1601
            },
            "start": 1593,
            "end": 1601
          },
          "definite": false,
          "start": 1587,
          "end": 1601
        }
      ],
      "declare": false,
      "start": 1583,
      "end": 1602
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
            "name": "rh7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1610
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1613,
              "end": 1614
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1617,
              "end": 1621
            },
            "start": 1613,
            "end": 1621
          },
          "definite": false,
          "start": 1607,
          "end": 1621
        }
      ],
      "declare": false,
      "start": 1603,
      "end": 1622
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
            "name": "rh8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1630
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
                "start": 1633,
                "end": 1634
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1636
              },
              "optional": false,
              "computed": false,
              "start": 1633,
              "end": 1636
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1639,
              "end": 1643
            },
            "start": 1633,
            "end": 1643
          },
          "definite": false,
          "start": 1627,
          "end": 1643
        }
      ],
      "declare": false,
      "start": 1623,
      "end": 1644
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
            "name": "ri1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1664,
            "end": 1667
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1670,
              "end": 1674
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1678
            },
            "start": 1670,
            "end": 1678
          },
          "definite": false,
          "start": 1664,
          "end": 1678
        }
      ],
      "declare": false,
      "start": 1660,
      "end": 1679
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
            "name": "ri2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1687
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1690,
              "end": 1694
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1697,
              "end": 1698
            },
            "start": 1690,
            "end": 1698
          },
          "definite": false,
          "start": 1684,
          "end": 1698
        }
      ],
      "declare": false,
      "start": 1680,
      "end": 1699
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
            "name": "ri3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1704,
            "end": 1707
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1710,
              "end": 1714
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1717,
              "end": 1718
            },
            "start": 1710,
            "end": 1718
          },
          "definite": false,
          "start": 1704,
          "end": 1718
        }
      ],
      "declare": false,
      "start": 1700,
      "end": 1719
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
            "name": "ri4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1724,
            "end": 1727
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1730,
              "end": 1734
            },
            "operator": "^",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1738
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1740
              },
              "optional": false,
              "computed": false,
              "start": 1737,
              "end": 1740
            },
            "start": 1730,
            "end": 1740
          },
          "definite": false,
          "start": 1724,
          "end": 1740
        }
      ],
      "declare": false,
      "start": 1720,
      "end": 1741
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
            "name": "ri5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1746,
            "end": 1749
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1752,
              "end": 1753
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1756,
              "end": 1760
            },
            "start": 1752,
            "end": 1760
          },
          "definite": false,
          "start": 1746,
          "end": 1760
        }
      ],
      "declare": false,
      "start": 1742,
      "end": 1761
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
            "name": "ri6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1766,
            "end": 1769
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1772,
              "end": 1773
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1776,
              "end": 1780
            },
            "start": 1772,
            "end": 1780
          },
          "definite": false,
          "start": 1766,
          "end": 1780
        }
      ],
      "declare": false,
      "start": 1762,
      "end": 1781
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
            "name": "ri7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1786,
            "end": 1789
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1792,
              "end": 1793
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1796,
              "end": 1800
            },
            "start": 1792,
            "end": 1800
          },
          "definite": false,
          "start": 1786,
          "end": 1800
        }
      ],
      "declare": false,
      "start": 1782,
      "end": 1801
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
            "name": "ri8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1806,
            "end": 1809
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
                "start": 1812,
                "end": 1813
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1815
              },
              "optional": false,
              "computed": false,
              "start": 1812,
              "end": 1815
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1818,
              "end": 1822
            },
            "start": 1812,
            "end": 1822
          },
          "definite": false,
          "start": 1806,
          "end": 1822
        }
      ],
      "declare": false,
      "start": 1802,
      "end": 1823
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
            "name": "rj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1843,
            "end": 1846
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1849,
              "end": 1853
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1856,
              "end": 1857
            },
            "start": 1849,
            "end": 1857
          },
          "definite": false,
          "start": 1843,
          "end": 1857
        }
      ],
      "declare": false,
      "start": 1839,
      "end": 1858
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
            "name": "rj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1863,
            "end": 1866
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1869,
              "end": 1873
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1877
            },
            "start": 1869,
            "end": 1877
          },
          "definite": false,
          "start": 1863,
          "end": 1877
        }
      ],
      "declare": false,
      "start": 1859,
      "end": 1878
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
            "name": "rj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1883,
            "end": 1886
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1889,
              "end": 1893
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1896,
              "end": 1897
            },
            "start": 1889,
            "end": 1897
          },
          "definite": false,
          "start": 1883,
          "end": 1897
        }
      ],
      "declare": false,
      "start": 1879,
      "end": 1898
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
            "name": "rj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1903,
            "end": 1906
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1909,
              "end": 1913
            },
            "operator": "|",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1916,
                "end": 1917
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1918,
                "end": 1919
              },
              "optional": false,
              "computed": false,
              "start": 1916,
              "end": 1919
            },
            "start": 1909,
            "end": 1919
          },
          "definite": false,
          "start": 1903,
          "end": 1919
        }
      ],
      "declare": false,
      "start": 1899,
      "end": 1920
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
            "name": "rj5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1925,
            "end": 1928
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1931,
              "end": 1932
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1935,
              "end": 1939
            },
            "start": 1931,
            "end": 1939
          },
          "definite": false,
          "start": 1925,
          "end": 1939
        }
      ],
      "declare": false,
      "start": 1921,
      "end": 1940
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
            "name": "rj6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1945,
            "end": 1948
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1952
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1955,
              "end": 1959
            },
            "start": 1951,
            "end": 1959
          },
          "definite": false,
          "start": 1945,
          "end": 1959
        }
      ],
      "declare": false,
      "start": 1941,
      "end": 1960
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
            "name": "rj7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1965,
            "end": 1968
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1971,
              "end": 1972
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1975,
              "end": 1979
            },
            "start": 1971,
            "end": 1979
          },
          "definite": false,
          "start": 1965,
          "end": 1979
        }
      ],
      "declare": false,
      "start": 1961,
      "end": 1980
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
            "name": "rj8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1988
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
                "start": 1991,
                "end": 1992
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1993,
                "end": 1994
              },
              "optional": false,
              "computed": false,
              "start": 1991,
              "end": 1994
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1997,
              "end": 2001
            },
            "start": 1991,
            "end": 2001
          },
          "definite": false,
          "start": 1985,
          "end": 2001
        }
      ],
      "declare": false,
      "start": 1981,
      "end": 2002
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 109,
  "end": 2002
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 134,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
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
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Null",
    "value": "null",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 209,
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
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
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
    "value": "*",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Null",
    "value": "null",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Null",
    "value": "null",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 286,
    "end": 287
  },
  {
    "type": "Null",
    "value": "null",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 298,
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
    "value": "b",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 306,
    "end": 307
  },
  {
    "type": "Null",
    "value": "null",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
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
    "value": "ra7",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 326,
    "end": 327
  },
  {
    "type": "Null",
    "value": "null",
    "start": 328,
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
    "value": "ra8",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 348,
    "end": 349
  },
  {
    "type": "Null",
    "value": "null",
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
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Null",
    "value": "null",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
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
    "value": "/",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Null",
    "value": "null",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "var",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
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
    "value": "/",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 450,
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
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 465,
    "end": 466
  },
  {
    "type": "Null",
    "value": "null",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
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
    "value": "rb6",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 485,
    "end": 486
  },
  {
    "type": "Null",
    "value": "null",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 493,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 505,
    "end": 506
  },
  {
    "type": "Null",
    "value": "null",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 527,
    "end": 528
  },
  {
    "type": "Null",
    "value": "null",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Null",
    "value": "null",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Null",
    "value": "null",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
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
    "value": "rc3",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Null",
    "value": "null",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 605,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 614,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Null",
    "value": "null",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "%",
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
    "value": ".",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 644,
    "end": 645
  },
  {
    "type": "Null",
    "value": "null",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 656,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 664,
    "end": 665
  },
  {
    "type": "Null",
    "value": "null",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "rc7",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 684,
    "end": 685
  },
  {
    "type": "Null",
    "value": "null",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "rc8",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 706,
    "end": 707
  },
  {
    "type": "Null",
    "value": "null",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 729,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Null",
    "value": "null",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Null",
    "value": "null",
    "start": 759,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 773,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Null",
    "value": "null",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 784,
    "end": 785
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Null",
    "value": "null",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 823,
    "end": 824
  },
  {
    "type": "Null",
    "value": "null",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 843,
    "end": 844
  },
  {
    "type": "Null",
    "value": "null",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 851,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "rd7",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 863,
    "end": 864
  },
  {
    "type": "Null",
    "value": "null",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "rd8",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 885,
    "end": 886
  },
  {
    "type": "Null",
    "value": "null",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 909,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Null",
    "value": "null",
    "start": 919,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 924,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 930,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Null",
    "value": "null",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 945,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 951,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Null",
    "value": "null",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 966,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 980,
    "end": 981
  },
  {
    "type": "Null",
    "value": "null",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 987,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 995,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "re7",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "re8",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1118,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 1143,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1170,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1219,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1225,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "rf7",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1246,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "rf8",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1263,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1296,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1362,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1392,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "rg6",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "rg7",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "rg8",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1460,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1531,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1577,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "rh7",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "rh8",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1660,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "ri1",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1670,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "ri2",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1690,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "ri3",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "ri4",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "ri5",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1756,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "ri6",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1776,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "ri7",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1802,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "ri8",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1818,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "rj1",
    "start": 1843,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1849,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "rj2",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1869,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "rj3",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1889,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "rj4",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1909,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "rj5",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1935,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "rj6",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1955,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1961,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "rj7",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1975,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "rj8",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1997,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  }
]
```

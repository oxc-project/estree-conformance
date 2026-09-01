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
        "start": 119,
        "end": 120
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
              "start": 127,
              "end": 128
            },
            "initializer": null,
            "computed": false,
            "start": 127,
            "end": 128
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "initializer": null,
            "computed": false,
            "start": 134,
            "end": 135
          }
        ],
        "start": 121,
        "end": 137
      },
      "const": false,
      "declare": false,
      "start": 114,
      "end": 137
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
                "start": 154,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 151,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 157
        }
      ],
      "declare": true,
      "start": 139,
      "end": 158
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
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "start": 171,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 171,
          "end": 180
        }
      ],
      "declare": true,
      "start": 159,
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 204
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 216
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "start": 207,
            "end": 220
          },
          "definite": false,
          "start": 201,
          "end": 220
        }
      ],
      "declare": false,
      "start": 197,
      "end": 221
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
            "start": 226,
            "end": 229
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 241
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "start": 232,
            "end": 245
          },
          "definite": false,
          "start": 226,
          "end": 245
        }
      ],
      "declare": false,
      "start": 222,
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 254
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 266
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 269,
              "end": 270
            },
            "start": 257,
            "end": 270
          },
          "definite": false,
          "start": 251,
          "end": 270
        }
      ],
      "declare": false,
      "start": 247,
      "end": 271
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
            "start": 276,
            "end": 279
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 291
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
                "start": 294,
                "end": 295
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              },
              "optional": false,
              "computed": false,
              "start": 294,
              "end": 297
            },
            "start": 282,
            "end": 297
          },
          "definite": false,
          "start": 276,
          "end": 297
        }
      ],
      "declare": false,
      "start": 272,
      "end": 298
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
            "start": 303,
            "end": 306
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 322
            },
            "start": 309,
            "end": 322
          },
          "definite": false,
          "start": 303,
          "end": 322
        }
      ],
      "declare": false,
      "start": 299,
      "end": 323
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
            "start": 328,
            "end": 331
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 347
            },
            "start": 334,
            "end": 347
          },
          "definite": false,
          "start": 328,
          "end": 347
        }
      ],
      "declare": false,
      "start": 324,
      "end": 348
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
            "start": 353,
            "end": 356
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 359,
              "end": 360
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 372
            },
            "start": 359,
            "end": 372
          },
          "definite": false,
          "start": 353,
          "end": 372
        }
      ],
      "declare": false,
      "start": 349,
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 381
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
                "start": 384,
                "end": 385
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 387
              },
              "optional": false,
              "computed": false,
              "start": 384,
              "end": 387
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 399
            },
            "start": 384,
            "end": 399
          },
          "definite": false,
          "start": 378,
          "end": 399
        }
      ],
      "declare": false,
      "start": 374,
      "end": 400
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
            "start": 420,
            "end": 423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 435
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 439
            },
            "start": 426,
            "end": 439
          },
          "definite": false,
          "start": 420,
          "end": 439
        }
      ],
      "declare": false,
      "start": 416,
      "end": 440
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
            "start": 445,
            "end": 448
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 460
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "start": 451,
            "end": 464
          },
          "definite": false,
          "start": 445,
          "end": 464
        }
      ],
      "declare": false,
      "start": 441,
      "end": 465
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
            "start": 470,
            "end": 473
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 485
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 488,
              "end": 489
            },
            "start": 476,
            "end": 489
          },
          "definite": false,
          "start": 470,
          "end": 489
        }
      ],
      "declare": false,
      "start": 466,
      "end": 490
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
            "start": 495,
            "end": 498
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 510
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
                "start": 513,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 516
              },
              "optional": false,
              "computed": false,
              "start": 513,
              "end": 516
            },
            "start": 501,
            "end": 516
          },
          "definite": false,
          "start": 495,
          "end": 516
        }
      ],
      "declare": false,
      "start": 491,
      "end": 517
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
            "start": 522,
            "end": 525
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 529
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 541
            },
            "start": 528,
            "end": 541
          },
          "definite": false,
          "start": 522,
          "end": 541
        }
      ],
      "declare": false,
      "start": 518,
      "end": 542
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
            "start": 547,
            "end": 550
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 566
            },
            "start": 553,
            "end": 566
          },
          "definite": false,
          "start": 547,
          "end": 566
        }
      ],
      "declare": false,
      "start": 543,
      "end": 567
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
            "start": 572,
            "end": 575
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 578,
              "end": 579
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 591
            },
            "start": 578,
            "end": 591
          },
          "definite": false,
          "start": 572,
          "end": 591
        }
      ],
      "declare": false,
      "start": 568,
      "end": 592
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
            "start": 597,
            "end": 600
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
                "start": 603,
                "end": 604
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "optional": false,
              "computed": false,
              "start": 603,
              "end": 606
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 618
            },
            "start": 603,
            "end": 618
          },
          "definite": false,
          "start": 597,
          "end": 618
        }
      ],
      "declare": false,
      "start": 593,
      "end": 619
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
            "start": 639,
            "end": 642
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 654
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 658
            },
            "start": 645,
            "end": 658
          },
          "definite": false,
          "start": 639,
          "end": 658
        }
      ],
      "declare": false,
      "start": 635,
      "end": 659
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
            "start": 664,
            "end": 667
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 679
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "start": 670,
            "end": 683
          },
          "definite": false,
          "start": 664,
          "end": 683
        }
      ],
      "declare": false,
      "start": 660,
      "end": 684
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
            "start": 689,
            "end": 692
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 704
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 707,
              "end": 708
            },
            "start": 695,
            "end": 708
          },
          "definite": false,
          "start": 689,
          "end": 708
        }
      ],
      "declare": false,
      "start": 685,
      "end": 709
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
            "start": 714,
            "end": 717
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 729
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
                "start": 732,
                "end": 733
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "optional": false,
              "computed": false,
              "start": 732,
              "end": 735
            },
            "start": 720,
            "end": 735
          },
          "definite": false,
          "start": 714,
          "end": 735
        }
      ],
      "declare": false,
      "start": 710,
      "end": 736
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
            "start": 741,
            "end": 744
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 760
            },
            "start": 747,
            "end": 760
          },
          "definite": false,
          "start": 741,
          "end": 760
        }
      ],
      "declare": false,
      "start": 737,
      "end": 761
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
            "start": 766,
            "end": 769
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 785
            },
            "start": 772,
            "end": 785
          },
          "definite": false,
          "start": 766,
          "end": 785
        }
      ],
      "declare": false,
      "start": 762,
      "end": 786
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
            "start": 791,
            "end": 794
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 797,
              "end": 798
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 810
            },
            "start": 797,
            "end": 810
          },
          "definite": false,
          "start": 791,
          "end": 810
        }
      ],
      "declare": false,
      "start": 787,
      "end": 811
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
            "start": 816,
            "end": 819
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
                "start": 822,
                "end": 823
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "optional": false,
              "computed": false,
              "start": 822,
              "end": 825
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 837
            },
            "start": 822,
            "end": 837
          },
          "definite": false,
          "start": 816,
          "end": 837
        }
      ],
      "declare": false,
      "start": 812,
      "end": 838
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
            "start": 858,
            "end": 861
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 873
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 877
            },
            "start": 864,
            "end": 877
          },
          "definite": false,
          "start": 858,
          "end": 877
        }
      ],
      "declare": false,
      "start": 854,
      "end": 878
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
            "start": 883,
            "end": 886
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 898
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 902
            },
            "start": 889,
            "end": 902
          },
          "definite": false,
          "start": 883,
          "end": 902
        }
      ],
      "declare": false,
      "start": 879,
      "end": 903
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
            "start": 908,
            "end": 911
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 923
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 926,
              "end": 927
            },
            "start": 914,
            "end": 927
          },
          "definite": false,
          "start": 908,
          "end": 927
        }
      ],
      "declare": false,
      "start": 904,
      "end": 928
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
            "start": 933,
            "end": 936
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 948
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
                "start": 951,
                "end": 952
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 953,
                "end": 954
              },
              "optional": false,
              "computed": false,
              "start": 951,
              "end": 954
            },
            "start": 939,
            "end": 954
          },
          "definite": false,
          "start": 933,
          "end": 954
        }
      ],
      "declare": false,
      "start": 929,
      "end": 955
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
            "start": 960,
            "end": 963
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 979
            },
            "start": 966,
            "end": 979
          },
          "definite": false,
          "start": 960,
          "end": 979
        }
      ],
      "declare": false,
      "start": 956,
      "end": 980
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
            "start": 985,
            "end": 988
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 992
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 1004
            },
            "start": 991,
            "end": 1004
          },
          "definite": false,
          "start": 985,
          "end": 1004
        }
      ],
      "declare": false,
      "start": 981,
      "end": 1005
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
            "start": 1010,
            "end": 1013
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1016,
              "end": 1017
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1020,
              "end": 1029
            },
            "start": 1016,
            "end": 1029
          },
          "definite": false,
          "start": 1010,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 1006,
      "end": 1030
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
            "start": 1035,
            "end": 1038
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
                "start": 1041,
                "end": 1042
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1044
              },
              "optional": false,
              "computed": false,
              "start": 1041,
              "end": 1044
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1056
            },
            "start": 1041,
            "end": 1056
          },
          "definite": false,
          "start": 1035,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 1031,
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
            "name": "re1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1078,
            "end": 1081
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1093
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1098
            },
            "start": 1084,
            "end": 1098
          },
          "definite": false,
          "start": 1078,
          "end": 1098
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1099
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
            "start": 1104,
            "end": 1107
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1119
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1124
            },
            "start": 1110,
            "end": 1124
          },
          "definite": false,
          "start": 1104,
          "end": 1124
        }
      ],
      "declare": false,
      "start": 1100,
      "end": 1125
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
            "start": 1130,
            "end": 1133
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1136,
              "end": 1145
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1149,
              "end": 1150
            },
            "start": 1136,
            "end": 1150
          },
          "definite": false,
          "start": 1130,
          "end": 1150
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1151
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
            "start": 1156,
            "end": 1159
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1171
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
                "start": 1175,
                "end": 1176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1177,
                "end": 1178
              },
              "optional": false,
              "computed": false,
              "start": 1175,
              "end": 1178
            },
            "start": 1162,
            "end": 1178
          },
          "definite": false,
          "start": 1156,
          "end": 1178
        }
      ],
      "declare": false,
      "start": 1152,
      "end": 1179
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
            "start": 1184,
            "end": 1187
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1190,
              "end": 1191
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1204
            },
            "start": 1190,
            "end": 1204
          },
          "definite": false,
          "start": 1184,
          "end": 1204
        }
      ],
      "declare": false,
      "start": 1180,
      "end": 1205
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
            "start": 1210,
            "end": 1213
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1216,
              "end": 1217
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1230
            },
            "start": 1216,
            "end": 1230
          },
          "definite": false,
          "start": 1210,
          "end": 1230
        }
      ],
      "declare": false,
      "start": 1206,
      "end": 1231
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
            "start": 1236,
            "end": 1239
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1242,
              "end": 1243
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1256
            },
            "start": 1242,
            "end": 1256
          },
          "definite": false,
          "start": 1236,
          "end": 1256
        }
      ],
      "declare": false,
      "start": 1232,
      "end": 1257
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
            "start": 1262,
            "end": 1265
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
                "start": 1268,
                "end": 1269
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1270,
                "end": 1271
              },
              "optional": false,
              "computed": false,
              "start": 1268,
              "end": 1271
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1275,
              "end": 1284
            },
            "start": 1268,
            "end": 1284
          },
          "definite": false,
          "start": 1262,
          "end": 1284
        }
      ],
      "declare": false,
      "start": 1258,
      "end": 1285
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
            "start": 1306,
            "end": 1309
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1321
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1326
            },
            "start": 1312,
            "end": 1326
          },
          "definite": false,
          "start": 1306,
          "end": 1326
        }
      ],
      "declare": false,
      "start": 1302,
      "end": 1327
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
            "start": 1332,
            "end": 1335
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1347
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1351,
              "end": 1352
            },
            "start": 1338,
            "end": 1352
          },
          "definite": false,
          "start": 1332,
          "end": 1352
        }
      ],
      "declare": false,
      "start": 1328,
      "end": 1353
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
            "start": 1358,
            "end": 1361
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1373
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1377,
              "end": 1378
            },
            "start": 1364,
            "end": 1378
          },
          "definite": false,
          "start": 1358,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1354,
      "end": 1379
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
            "start": 1384,
            "end": 1387
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1399
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
                "start": 1403,
                "end": 1404
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1405,
                "end": 1406
              },
              "optional": false,
              "computed": false,
              "start": 1403,
              "end": 1406
            },
            "start": 1390,
            "end": 1406
          },
          "definite": false,
          "start": 1384,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1407
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
            "start": 1412,
            "end": 1415
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1419
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1423,
              "end": 1432
            },
            "start": 1418,
            "end": 1432
          },
          "definite": false,
          "start": 1412,
          "end": 1432
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1433
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
            "start": 1438,
            "end": 1441
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1445
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1458
            },
            "start": 1444,
            "end": 1458
          },
          "definite": false,
          "start": 1438,
          "end": 1458
        }
      ],
      "declare": false,
      "start": 1434,
      "end": 1459
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
            "start": 1464,
            "end": 1467
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1470,
              "end": 1471
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1475,
              "end": 1484
            },
            "start": 1470,
            "end": 1484
          },
          "definite": false,
          "start": 1464,
          "end": 1484
        }
      ],
      "declare": false,
      "start": 1460,
      "end": 1485
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
            "start": 1490,
            "end": 1493
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
                "start": 1496,
                "end": 1497
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1499
              },
              "optional": false,
              "computed": false,
              "start": 1496,
              "end": 1499
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1512
            },
            "start": 1496,
            "end": 1512
          },
          "definite": false,
          "start": 1490,
          "end": 1512
        }
      ],
      "declare": false,
      "start": 1486,
      "end": 1513
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
            "start": 1535,
            "end": 1538
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1550
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1556
            },
            "start": 1541,
            "end": 1556
          },
          "definite": false,
          "start": 1535,
          "end": 1556
        }
      ],
      "declare": false,
      "start": 1531,
      "end": 1557
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
            "start": 1562,
            "end": 1565
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1577
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1583
            },
            "start": 1568,
            "end": 1583
          },
          "definite": false,
          "start": 1562,
          "end": 1583
        }
      ],
      "declare": false,
      "start": 1558,
      "end": 1584
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
            "start": 1589,
            "end": 1592
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1604
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1609,
              "end": 1610
            },
            "start": 1595,
            "end": 1610
          },
          "definite": false,
          "start": 1589,
          "end": 1610
        }
      ],
      "declare": false,
      "start": 1585,
      "end": 1611
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
            "start": 1616,
            "end": 1619
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1631
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
                "start": 1636,
                "end": 1637
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1639
              },
              "optional": false,
              "computed": false,
              "start": 1636,
              "end": 1639
            },
            "start": 1622,
            "end": 1639
          },
          "definite": false,
          "start": 1616,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1612,
      "end": 1640
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
            "start": 1645,
            "end": 1648
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1652
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1666
            },
            "start": 1651,
            "end": 1666
          },
          "definite": false,
          "start": 1645,
          "end": 1666
        }
      ],
      "declare": false,
      "start": 1641,
      "end": 1667
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
            "start": 1672,
            "end": 1675
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1678,
              "end": 1679
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1684,
              "end": 1693
            },
            "start": 1678,
            "end": 1693
          },
          "definite": false,
          "start": 1672,
          "end": 1693
        }
      ],
      "declare": false,
      "start": 1668,
      "end": 1694
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
            "start": 1699,
            "end": 1702
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1705,
              "end": 1706
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1711,
              "end": 1720
            },
            "start": 1705,
            "end": 1720
          },
          "definite": false,
          "start": 1699,
          "end": 1720
        }
      ],
      "declare": false,
      "start": 1695,
      "end": 1721
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
            "start": 1726,
            "end": 1729
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
                "start": 1732,
                "end": 1733
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1735
              },
              "optional": false,
              "computed": false,
              "start": 1732,
              "end": 1735
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1740,
              "end": 1749
            },
            "start": 1732,
            "end": 1749
          },
          "definite": false,
          "start": 1726,
          "end": 1749
        }
      ],
      "declare": false,
      "start": 1722,
      "end": 1750
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
            "start": 1770,
            "end": 1773
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1776,
              "end": 1785
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1789
            },
            "start": 1776,
            "end": 1789
          },
          "definite": false,
          "start": 1770,
          "end": 1789
        }
      ],
      "declare": false,
      "start": 1766,
      "end": 1790
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
            "start": 1795,
            "end": 1798
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1810
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1813,
              "end": 1814
            },
            "start": 1801,
            "end": 1814
          },
          "definite": false,
          "start": 1795,
          "end": 1814
        }
      ],
      "declare": false,
      "start": 1791,
      "end": 1815
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
            "start": 1820,
            "end": 1823
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1835
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1838,
              "end": 1839
            },
            "start": 1826,
            "end": 1839
          },
          "definite": false,
          "start": 1820,
          "end": 1839
        }
      ],
      "declare": false,
      "start": 1816,
      "end": 1840
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
            "start": 1845,
            "end": 1848
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1860
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
                "start": 1863,
                "end": 1864
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1865,
                "end": 1866
              },
              "optional": false,
              "computed": false,
              "start": 1863,
              "end": 1866
            },
            "start": 1851,
            "end": 1866
          },
          "definite": false,
          "start": 1845,
          "end": 1866
        }
      ],
      "declare": false,
      "start": 1841,
      "end": 1867
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
            "start": 1872,
            "end": 1875
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1878,
              "end": 1879
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1882,
              "end": 1891
            },
            "start": 1878,
            "end": 1891
          },
          "definite": false,
          "start": 1872,
          "end": 1891
        }
      ],
      "declare": false,
      "start": 1868,
      "end": 1892
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
            "start": 1897,
            "end": 1900
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1904
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1907,
              "end": 1916
            },
            "start": 1903,
            "end": 1916
          },
          "definite": false,
          "start": 1897,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1893,
      "end": 1917
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
            "start": 1922,
            "end": 1925
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1928,
              "end": 1929
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1932,
              "end": 1941
            },
            "start": 1928,
            "end": 1941
          },
          "definite": false,
          "start": 1922,
          "end": 1941
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1942
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
            "start": 1947,
            "end": 1950
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
                "start": 1953,
                "end": 1954
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1955,
                "end": 1956
              },
              "optional": false,
              "computed": false,
              "start": 1953,
              "end": 1956
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1968
            },
            "start": 1953,
            "end": 1968
          },
          "definite": false,
          "start": 1947,
          "end": 1968
        }
      ],
      "declare": false,
      "start": 1943,
      "end": 1969
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
            "start": 1989,
            "end": 1992
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1995,
              "end": 2004
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "start": 1995,
            "end": 2008
          },
          "definite": false,
          "start": 1989,
          "end": 2008
        }
      ],
      "declare": false,
      "start": 1985,
      "end": 2009
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
            "start": 2014,
            "end": 2017
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2020,
              "end": 2029
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2032,
              "end": 2033
            },
            "start": 2020,
            "end": 2033
          },
          "definite": false,
          "start": 2014,
          "end": 2033
        }
      ],
      "declare": false,
      "start": 2010,
      "end": 2034
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
            "start": 2039,
            "end": 2042
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2045,
              "end": 2054
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2057,
              "end": 2058
            },
            "start": 2045,
            "end": 2058
          },
          "definite": false,
          "start": 2039,
          "end": 2058
        }
      ],
      "declare": false,
      "start": 2035,
      "end": 2059
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
            "start": 2064,
            "end": 2067
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2070,
              "end": 2079
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
                "start": 2082,
                "end": 2083
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2084,
                "end": 2085
              },
              "optional": false,
              "computed": false,
              "start": 2082,
              "end": 2085
            },
            "start": 2070,
            "end": 2085
          },
          "definite": false,
          "start": 2064,
          "end": 2085
        }
      ],
      "declare": false,
      "start": 2060,
      "end": 2086
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
            "start": 2091,
            "end": 2094
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2097,
              "end": 2098
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2110
            },
            "start": 2097,
            "end": 2110
          },
          "definite": false,
          "start": 2091,
          "end": 2110
        }
      ],
      "declare": false,
      "start": 2087,
      "end": 2111
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
            "start": 2116,
            "end": 2119
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2122,
              "end": 2123
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2135
            },
            "start": 2122,
            "end": 2135
          },
          "definite": false,
          "start": 2116,
          "end": 2135
        }
      ],
      "declare": false,
      "start": 2112,
      "end": 2136
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
            "start": 2141,
            "end": 2144
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2147,
              "end": 2148
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2151,
              "end": 2160
            },
            "start": 2147,
            "end": 2160
          },
          "definite": false,
          "start": 2141,
          "end": 2160
        }
      ],
      "declare": false,
      "start": 2137,
      "end": 2161
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
            "start": 2166,
            "end": 2169
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
                "start": 2172,
                "end": 2173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2174,
                "end": 2175
              },
              "optional": false,
              "computed": false,
              "start": 2172,
              "end": 2175
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2178,
              "end": 2187
            },
            "start": 2172,
            "end": 2187
          },
          "definite": false,
          "start": 2166,
          "end": 2187
        }
      ],
      "declare": false,
      "start": 2162,
      "end": 2188
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
            "start": 2208,
            "end": 2211
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2214,
              "end": 2223
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2227
            },
            "start": 2214,
            "end": 2227
          },
          "definite": false,
          "start": 2208,
          "end": 2227
        }
      ],
      "declare": false,
      "start": 2204,
      "end": 2228
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
            "start": 2233,
            "end": 2236
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2248
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2251,
              "end": 2252
            },
            "start": 2239,
            "end": 2252
          },
          "definite": false,
          "start": 2233,
          "end": 2252
        }
      ],
      "declare": false,
      "start": 2229,
      "end": 2253
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
            "start": 2258,
            "end": 2261
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2264,
              "end": 2273
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2276,
              "end": 2277
            },
            "start": 2264,
            "end": 2277
          },
          "definite": false,
          "start": 2258,
          "end": 2277
        }
      ],
      "declare": false,
      "start": 2254,
      "end": 2278
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
            "start": 2283,
            "end": 2286
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2289,
              "end": 2298
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
                "start": 2301,
                "end": 2302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2303,
                "end": 2304
              },
              "optional": false,
              "computed": false,
              "start": 2301,
              "end": 2304
            },
            "start": 2289,
            "end": 2304
          },
          "definite": false,
          "start": 2283,
          "end": 2304
        }
      ],
      "declare": false,
      "start": 2279,
      "end": 2305
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
            "start": 2310,
            "end": 2313
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2316,
              "end": 2317
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2329
            },
            "start": 2316,
            "end": 2329
          },
          "definite": false,
          "start": 2310,
          "end": 2329
        }
      ],
      "declare": false,
      "start": 2306,
      "end": 2330
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
            "start": 2335,
            "end": 2338
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2341,
              "end": 2342
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2354
            },
            "start": 2341,
            "end": 2354
          },
          "definite": false,
          "start": 2335,
          "end": 2354
        }
      ],
      "declare": false,
      "start": 2331,
      "end": 2355
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
            "start": 2360,
            "end": 2363
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2366,
              "end": 2367
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2370,
              "end": 2379
            },
            "start": 2366,
            "end": 2379
          },
          "definite": false,
          "start": 2360,
          "end": 2379
        }
      ],
      "declare": false,
      "start": 2356,
      "end": 2380
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
            "start": 2385,
            "end": 2388
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
                "start": 2391,
                "end": 2392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2394
              },
              "optional": false,
              "computed": false,
              "start": 2391,
              "end": 2394
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2397,
              "end": 2406
            },
            "start": 2391,
            "end": 2406
          },
          "definite": false,
          "start": 2385,
          "end": 2406
        }
      ],
      "declare": false,
      "start": 2381,
      "end": 2407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 2407
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 114,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 139,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 251,
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
    "value": "undefined",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 338,
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
    "value": "var",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 363,
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
    "value": "ra8",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 390,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 426,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 451,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 476,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 495,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 501,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 532,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 582,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 609,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 639,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 657,
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
    "value": "var",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 670,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 705,
    "end": 706
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 720,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 751,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 762,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 776,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "rc7",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 801,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "rc8",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 828,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 864,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 879,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 889,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 914,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 924,
    "end": 925
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 939,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 970,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 995,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "rd7",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1020,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "rd8",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1047,
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
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1084,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1110,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1120,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1136,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1180,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1192,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1195,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1221,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "re7",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1247,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1258,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "re8",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1275,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1338,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1364,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1374,
    "end": 1376
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1390,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1423,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1449,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1460,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "rf7",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1475,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "rf8",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1503,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1541,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1558,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1568,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1595,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1605,
    "end": 1608
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1622,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1632,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1641,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1653,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1657,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "rg6",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1684,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "rg7",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1707,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1711,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "rg8",
    "start": 1726,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1740,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1776,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1801,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1826,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1845,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1851,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1868,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1882,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1893,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1907,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "rh7",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1932,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "rh8",
    "start": 1947,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1959,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "ri1",
    "start": 1989,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1995,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2010,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "ri2",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2020,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "ri3",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2045,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "ri4",
    "start": 2064,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2070,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2087,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "ri5",
    "start": 2091,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2101,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2112,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "ri6",
    "start": 2116,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2126,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2137,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "ri7",
    "start": 2141,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2151,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "ri8",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2178,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2204,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "rj1",
    "start": 2208,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2214,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2229,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "rj2",
    "start": 2233,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2239,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "rj3",
    "start": 2258,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2264,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "rj4",
    "start": 2283,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2289,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2306,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "rj5",
    "start": 2310,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2320,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2331,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "rj6",
    "start": 2335,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2345,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "rj7",
    "start": 2360,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2370,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2381,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "rj8",
    "start": 2385,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2397,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2406,
    "end": 2407
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 28
              },
              "initializer": null,
              "computed": false,
              "start": 25,
              "end": 28
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 37
              },
              "initializer": null,
              "computed": false,
              "start": 34,
              "end": 37
            }
          ],
          "start": 19,
          "end": 40
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
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
            "name": "choice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 62
                },
                "typeArguments": null,
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "start": 48,
            "end": 62
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 75
            },
            "optional": false,
            "computed": false,
            "start": 65,
            "end": 75
          },
          "definite": false,
          "start": 48,
          "end": 75
        }
      ],
      "declare": false,
      "start": 42,
      "end": 76
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
            "name": "choiceOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 92
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 101
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 95,
            "end": 105
          },
          "definite": false,
          "start": 83,
          "end": 105
        }
      ],
      "declare": false,
      "start": 77,
      "end": 106
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 118
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 132
        },
        "start": 112,
        "end": 132
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 134,
        "end": 136
      },
      "alternate": null,
      "start": 108,
      "end": 136
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 147
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 161
        },
        "start": 141,
        "end": 161
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 163,
        "end": 165
      },
      "alternate": null,
      "start": 137,
      "end": 165
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 176
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 190
        },
        "start": 170,
        "end": 190
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 192,
        "end": 194
      },
      "alternate": null,
      "start": 166,
      "end": 194
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 205
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 219
        },
        "start": 199,
        "end": 219
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 221,
        "end": 223
      },
      "alternate": null,
      "start": 195,
      "end": 223
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 248
        },
        "start": 228,
        "end": 248
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 250,
        "end": 252
      },
      "alternate": null,
      "start": 224,
      "end": 252
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 263
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 277
        },
        "start": 257,
        "end": 277
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 279,
        "end": 281
      },
      "alternate": null,
      "start": 253,
      "end": 281
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 292
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 306
        },
        "start": 286,
        "end": 306
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 308,
        "end": 310
      },
      "alternate": null,
      "start": 282,
      "end": 310
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 321
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 335
        },
        "start": 315,
        "end": 335
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 337,
        "end": 339
      },
      "alternate": null,
      "start": 311,
      "end": 339
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 350
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 364
        },
        "start": 344,
        "end": 364
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 366,
        "end": 368
      },
      "alternate": null,
      "start": 340,
      "end": 368
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 379
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 393
        },
        "start": 373,
        "end": 393
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 395,
        "end": 397
      },
      "alternate": null,
      "start": 369,
      "end": 397
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 408
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 422
        },
        "start": 402,
        "end": 422
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 424,
        "end": 426
      },
      "alternate": null,
      "start": 398,
      "end": 426
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 437
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 451
        },
        "start": 431,
        "end": 451
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 453,
        "end": 455
      },
      "alternate": null,
      "start": 427,
      "end": 455
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 466
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 480
        },
        "start": 460,
        "end": 480
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 482,
        "end": 484
      },
      "alternate": null,
      "start": 456,
      "end": 484
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 495
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 500,
          "end": 509
        },
        "start": 489,
        "end": 509
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 511,
        "end": 513
      },
      "alternate": null,
      "start": 485,
      "end": 513
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 524
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 538
        },
        "start": 518,
        "end": 538
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 540,
        "end": 542
      },
      "alternate": null,
      "start": 514,
      "end": 542
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 553
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 567
        },
        "start": 547,
        "end": 567
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 569,
        "end": 571
      },
      "alternate": null,
      "start": 543,
      "end": 571
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 582
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 596
        },
        "start": 576,
        "end": 596
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 598,
        "end": 600
      },
      "alternate": null,
      "start": 572,
      "end": 600
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 611
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 625
        },
        "start": 605,
        "end": 625
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 627,
        "end": 629
      },
      "alternate": null,
      "start": 601,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 634,
          "end": 640
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 654
        },
        "start": 634,
        "end": 654
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 656,
        "end": 658
      },
      "alternate": null,
      "start": 630,
      "end": 658
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 663,
          "end": 669
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 674,
          "end": 683
        },
        "start": 663,
        "end": 683
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 685,
        "end": 687
      },
      "alternate": null,
      "start": 659,
      "end": 687
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 698
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 703,
          "end": 712
        },
        "start": 692,
        "end": 712
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 714,
        "end": 716
      },
      "alternate": null,
      "start": 688,
      "end": 716
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 727
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 741
        },
        "start": 721,
        "end": 741
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 743,
        "end": 745
      },
      "alternate": null,
      "start": 717,
      "end": 745
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 750,
          "end": 756
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 770
        },
        "start": 750,
        "end": 770
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 772,
        "end": 774
      },
      "alternate": null,
      "start": 746,
      "end": 774
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 785
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 790,
          "end": 799
        },
        "start": 779,
        "end": 799
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 801,
        "end": 803
      },
      "alternate": null,
      "start": 775,
      "end": 803
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 808,
          "end": 814
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 819,
          "end": 828
        },
        "start": 808,
        "end": 828
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 830,
        "end": 832
      },
      "alternate": null,
      "start": 804,
      "end": 832
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 843
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 857
        },
        "start": 837,
        "end": 857
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 859,
        "end": 861
      },
      "alternate": null,
      "start": 833,
      "end": 861
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 872
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 877,
          "end": 886
        },
        "start": 866,
        "end": 886
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 888,
        "end": 890
      },
      "alternate": null,
      "start": 862,
      "end": 890
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 895,
          "end": 901
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 906,
          "end": 915
        },
        "start": 895,
        "end": 915
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 917,
        "end": 919
      },
      "alternate": null,
      "start": 891,
      "end": 919
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 924,
          "end": 930
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 935,
          "end": 944
        },
        "start": 924,
        "end": 944
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 948
      },
      "alternate": null,
      "start": 920,
      "end": 948
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 953,
          "end": 959
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 973
        },
        "start": 953,
        "end": 973
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 975,
        "end": 977
      },
      "alternate": null,
      "start": 949,
      "end": 977
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 982,
          "end": 988
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 993,
          "end": 1002
        },
        "start": 982,
        "end": 1002
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1004,
        "end": 1006
      },
      "alternate": null,
      "start": 978,
      "end": 1006
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1011,
          "end": 1017
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1022,
          "end": 1031
        },
        "start": 1011,
        "end": 1031
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1033,
        "end": 1035
      },
      "alternate": null,
      "start": 1007,
      "end": 1035
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1040,
          "end": 1046
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1060
        },
        "start": 1040,
        "end": 1060
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1062,
        "end": 1064
      },
      "alternate": null,
      "start": 1036,
      "end": 1064
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1075
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1080,
          "end": 1089
        },
        "start": 1069,
        "end": 1089
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1091,
        "end": 1093
      },
      "alternate": null,
      "start": 1065,
      "end": 1093
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1098,
          "end": 1104
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1118
        },
        "start": 1098,
        "end": 1118
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1120,
        "end": 1122
      },
      "alternate": null,
      "start": 1094,
      "end": 1122
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1133
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1147
        },
        "start": 1127,
        "end": 1147
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1149,
        "end": 1151
      },
      "alternate": null,
      "start": 1123,
      "end": 1151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1156,
          "end": 1162
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1176
        },
        "start": 1156,
        "end": 1176
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1178,
        "end": 1180
      },
      "alternate": null,
      "start": 1152,
      "end": 1180
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1191
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1196,
          "end": 1205
        },
        "start": 1185,
        "end": 1205
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1207,
        "end": 1209
      },
      "alternate": null,
      "start": 1181,
      "end": 1209
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1214,
          "end": 1220
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1225,
          "end": 1234
        },
        "start": 1214,
        "end": 1234
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1236,
        "end": 1238
      },
      "alternate": null,
      "start": 1210,
      "end": 1238
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1249
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1263
        },
        "start": 1243,
        "end": 1263
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1265,
        "end": 1267
      },
      "alternate": null,
      "start": 1239,
      "end": 1267
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1278
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1292
        },
        "start": 1272,
        "end": 1292
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1294,
        "end": 1296
      },
      "alternate": null,
      "start": 1268,
      "end": 1296
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1301,
          "end": 1307
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1321
        },
        "start": 1301,
        "end": 1321
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1323,
        "end": 1325
      },
      "alternate": null,
      "start": 1297,
      "end": 1325
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1330,
          "end": 1336
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1341,
          "end": 1350
        },
        "start": 1330,
        "end": 1350
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1352,
        "end": 1354
      },
      "alternate": null,
      "start": 1326,
      "end": 1354
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1359,
          "end": 1365
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1370,
          "end": 1379
        },
        "start": 1359,
        "end": 1379
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1381,
        "end": 1383
      },
      "alternate": null,
      "start": 1355,
      "end": 1383
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1394
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1399,
          "end": 1408
        },
        "start": 1388,
        "end": 1408
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1410,
        "end": 1412
      },
      "alternate": null,
      "start": 1384,
      "end": 1412
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1417,
          "end": 1423
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1428,
          "end": 1437
        },
        "start": 1417,
        "end": 1437
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1439,
        "end": 1441
      },
      "alternate": null,
      "start": 1413,
      "end": 1441
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1452
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1457,
          "end": 1466
        },
        "start": 1446,
        "end": 1466
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1468,
        "end": 1470
      },
      "alternate": null,
      "start": 1442,
      "end": 1470
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1481
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1486,
          "end": 1495
        },
        "start": 1475,
        "end": 1495
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1497,
        "end": 1499
      },
      "alternate": null,
      "start": 1471,
      "end": 1499
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1504,
          "end": 1510
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1515,
          "end": 1524
        },
        "start": 1504,
        "end": 1524
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1526,
        "end": 1528
      },
      "alternate": null,
      "start": 1500,
      "end": 1528
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1533,
          "end": 1539
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1544,
          "end": 1553
        },
        "start": 1533,
        "end": 1553
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1555,
        "end": 1557
      },
      "alternate": null,
      "start": 1529,
      "end": 1557
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1562,
          "end": 1568
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1582
        },
        "start": 1562,
        "end": 1582
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1584,
        "end": 1586
      },
      "alternate": null,
      "start": 1558,
      "end": 1586
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1591,
          "end": 1597
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1611
        },
        "start": 1591,
        "end": 1611
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1613,
        "end": 1615
      },
      "alternate": null,
      "start": 1587,
      "end": 1615
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1620,
          "end": 1626
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1631,
          "end": 1640
        },
        "start": 1620,
        "end": 1640
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1642,
        "end": 1644
      },
      "alternate": null,
      "start": 1616,
      "end": 1644
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1649,
          "end": 1655
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1660,
          "end": 1669
        },
        "start": 1649,
        "end": 1669
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1671,
        "end": 1673
      },
      "alternate": null,
      "start": 1645,
      "end": 1673
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1678,
          "end": 1684
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1689,
          "end": 1698
        },
        "start": 1678,
        "end": 1698
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1700,
        "end": 1702
      },
      "alternate": null,
      "start": 1674,
      "end": 1702
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1707,
          "end": 1713
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1718,
          "end": 1727
        },
        "start": 1707,
        "end": 1727
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1729,
        "end": 1731
      },
      "alternate": null,
      "start": 1703,
      "end": 1731
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1736,
          "end": 1742
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1747,
          "end": 1756
        },
        "start": 1736,
        "end": 1756
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1758,
        "end": 1760
      },
      "alternate": null,
      "start": 1732,
      "end": 1760
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1765,
          "end": 1771
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1776,
          "end": 1785
        },
        "start": 1765,
        "end": 1785
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1787,
        "end": 1789
      },
      "alternate": null,
      "start": 1761,
      "end": 1789
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1794,
          "end": 1800
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1814
        },
        "start": 1794,
        "end": 1814
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1816,
        "end": 1818
      },
      "alternate": null,
      "start": 1790,
      "end": 1818
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1823,
          "end": 1829
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1834,
          "end": 1843
        },
        "start": 1823,
        "end": 1843
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1845,
        "end": 1847
      },
      "alternate": null,
      "start": 1819,
      "end": 1847
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 1857,
        "end": 1861
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1873,
                "end": 1879
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1884,
                "end": 1893
              },
              "start": 1873,
              "end": 1893
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1895,
              "end": 1897
            },
            "alternate": null,
            "start": 1869,
            "end": 1897
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1906,
                "end": 1912
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1917,
                "end": 1926
              },
              "start": 1906,
              "end": 1926
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1928,
              "end": 1930
            },
            "alternate": null,
            "start": 1902,
            "end": 1930
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1939,
                "end": 1945
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1950,
                "end": 1959
              },
              "start": 1939,
              "end": 1959
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1961,
              "end": 1963
            },
            "alternate": null,
            "start": 1935,
            "end": 1963
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1972,
                "end": 1978
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1992
              },
              "start": 1972,
              "end": 1992
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1994,
              "end": 1996
            },
            "alternate": null,
            "start": 1968,
            "end": 1996
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2011
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2016,
                "end": 2025
              },
              "start": 2005,
              "end": 2025
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2027,
              "end": 2029
            },
            "alternate": null,
            "start": 2001,
            "end": 2029
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2044
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2049,
                "end": 2058
              },
              "start": 2038,
              "end": 2058
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2060,
              "end": 2062
            },
            "alternate": null,
            "start": 2034,
            "end": 2062
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2071,
                "end": 2077
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2091
              },
              "start": 2071,
              "end": 2091
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2093,
              "end": 2095
            },
            "alternate": null,
            "start": 2067,
            "end": 2095
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2104,
                "end": 2110
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2115,
                "end": 2124
              },
              "start": 2104,
              "end": 2124
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2126,
              "end": 2128
            },
            "alternate": null,
            "start": 2100,
            "end": 2128
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2137,
                "end": 2143
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2148,
                "end": 2157
              },
              "start": 2137,
              "end": 2157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2159,
              "end": 2161
            },
            "alternate": null,
            "start": 2133,
            "end": 2161
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2170,
                "end": 2176
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2181,
                "end": 2190
              },
              "start": 2170,
              "end": 2190
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2192,
              "end": 2194
            },
            "alternate": null,
            "start": 2166,
            "end": 2194
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2203,
                "end": 2209
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2214,
                "end": 2223
              },
              "start": 2203,
              "end": 2223
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2225,
              "end": 2227
            },
            "alternate": null,
            "start": 2199,
            "end": 2227
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2236,
                "end": 2242
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2247,
                "end": 2256
              },
              "start": 2236,
              "end": 2256
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2258,
              "end": 2260
            },
            "alternate": null,
            "start": 2232,
            "end": 2260
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2269,
                "end": 2275
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2280,
                "end": 2289
              },
              "start": 2269,
              "end": 2289
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2291,
              "end": 2293
            },
            "alternate": null,
            "start": 2265,
            "end": 2293
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2302,
                "end": 2308
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2313,
                "end": 2322
              },
              "start": 2302,
              "end": 2322
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2324,
              "end": 2326
            },
            "alternate": null,
            "start": 2298,
            "end": 2326
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2335,
                "end": 2341
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2346,
                "end": 2355
              },
              "start": 2335,
              "end": 2355
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2357,
              "end": 2359
            },
            "alternate": null,
            "start": 2331,
            "end": 2359
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2368,
                "end": 2374
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2379,
                "end": 2388
              },
              "start": 2368,
              "end": 2388
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2390,
              "end": 2392
            },
            "alternate": null,
            "start": 2364,
            "end": 2392
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2401,
                "end": 2407
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2412,
                "end": 2421
              },
              "start": 2401,
              "end": 2421
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2423,
              "end": 2425
            },
            "alternate": null,
            "start": 2397,
            "end": 2425
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2440
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2445,
                "end": 2454
              },
              "start": 2434,
              "end": 2454
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2456,
              "end": 2458
            },
            "alternate": null,
            "start": 2430,
            "end": 2458
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2467,
                "end": 2473
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2478,
                "end": 2487
              },
              "start": 2467,
              "end": 2487
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2489,
              "end": 2491
            },
            "alternate": null,
            "start": 2463,
            "end": 2491
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2500,
                "end": 2506
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2511,
                "end": 2520
              },
              "start": 2500,
              "end": 2520
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2522,
              "end": 2524
            },
            "alternate": null,
            "start": 2496,
            "end": 2524
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2533,
                "end": 2539
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2544,
                "end": 2553
              },
              "start": 2533,
              "end": 2553
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2555,
              "end": 2557
            },
            "alternate": null,
            "start": 2529,
            "end": 2557
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2566,
                "end": 2572
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2577,
                "end": 2586
              },
              "start": 2566,
              "end": 2586
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2588,
              "end": 2590
            },
            "alternate": null,
            "start": 2562,
            "end": 2590
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2599,
                "end": 2605
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2610,
                "end": 2619
              },
              "start": 2599,
              "end": 2619
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2621,
              "end": 2623
            },
            "alternate": null,
            "start": 2595,
            "end": 2623
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2632,
                "end": 2638
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2643,
                "end": 2652
              },
              "start": 2632,
              "end": 2652
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2654,
              "end": 2656
            },
            "alternate": null,
            "start": 2628,
            "end": 2656
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2665,
                "end": 2671
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2676,
                "end": 2685
              },
              "start": 2665,
              "end": 2685
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2687,
              "end": 2689
            },
            "alternate": null,
            "start": 2661,
            "end": 2689
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2698,
                "end": 2704
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2709,
                "end": 2718
              },
              "start": 2698,
              "end": 2718
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2720,
              "end": 2722
            },
            "alternate": null,
            "start": 2694,
            "end": 2722
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2731,
                "end": 2737
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2742,
                "end": 2751
              },
              "start": 2731,
              "end": 2751
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2753,
              "end": 2755
            },
            "alternate": null,
            "start": 2727,
            "end": 2755
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2764,
                "end": 2770
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2775,
                "end": 2784
              },
              "start": 2764,
              "end": 2784
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2786,
              "end": 2788
            },
            "alternate": null,
            "start": 2760,
            "end": 2788
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2797,
                "end": 2803
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2808,
                "end": 2817
              },
              "start": 2797,
              "end": 2817
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2819,
              "end": 2821
            },
            "alternate": null,
            "start": 2793,
            "end": 2821
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2830,
                "end": 2836
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2841,
                "end": 2850
              },
              "start": 2830,
              "end": 2850
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2852,
              "end": 2854
            },
            "alternate": null,
            "start": 2826,
            "end": 2854
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2863,
                "end": 2869
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2874,
                "end": 2883
              },
              "start": 2863,
              "end": 2883
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2885,
              "end": 2887
            },
            "alternate": null,
            "start": 2859,
            "end": 2887
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2896,
                "end": 2902
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2907,
                "end": 2916
              },
              "start": 2896,
              "end": 2916
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2918,
              "end": 2920
            },
            "alternate": null,
            "start": 2892,
            "end": 2920
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2929,
                "end": 2935
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2940,
                "end": 2949
              },
              "start": 2929,
              "end": 2949
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2951,
              "end": 2953
            },
            "alternate": null,
            "start": 2925,
            "end": 2953
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2962,
                "end": 2968
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2973,
                "end": 2982
              },
              "start": 2962,
              "end": 2982
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2984,
              "end": 2986
            },
            "alternate": null,
            "start": 2958,
            "end": 2986
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2995,
                "end": 3001
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3006,
                "end": 3015
              },
              "start": 2995,
              "end": 3015
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3017,
              "end": 3019
            },
            "alternate": null,
            "start": 2991,
            "end": 3019
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3034
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3039,
                "end": 3048
              },
              "start": 3028,
              "end": 3048
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3050,
              "end": 3052
            },
            "alternate": null,
            "start": 3024,
            "end": 3052
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3061,
                "end": 3067
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3072,
                "end": 3081
              },
              "start": 3061,
              "end": 3081
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3083,
              "end": 3085
            },
            "alternate": null,
            "start": 3057,
            "end": 3085
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3094,
                "end": 3100
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3105,
                "end": 3114
              },
              "start": 3094,
              "end": 3114
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3116,
              "end": 3118
            },
            "alternate": null,
            "start": 3090,
            "end": 3118
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3127,
                "end": 3133
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3138,
                "end": 3147
              },
              "start": 3127,
              "end": 3147
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3149,
              "end": 3151
            },
            "alternate": null,
            "start": 3123,
            "end": 3151
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3160,
                "end": 3166
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3171,
                "end": 3180
              },
              "start": 3160,
              "end": 3180
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3182,
              "end": 3184
            },
            "alternate": null,
            "start": 3156,
            "end": 3184
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3193,
                "end": 3199
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3204,
                "end": 3213
              },
              "start": 3193,
              "end": 3213
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3215,
              "end": 3217
            },
            "alternate": null,
            "start": 3189,
            "end": 3217
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3226,
                "end": 3232
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3237,
                "end": 3246
              },
              "start": 3226,
              "end": 3246
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3248,
              "end": 3250
            },
            "alternate": null,
            "start": 3222,
            "end": 3250
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3265
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3270,
                "end": 3279
              },
              "start": 3259,
              "end": 3279
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3281,
              "end": 3283
            },
            "alternate": null,
            "start": 3255,
            "end": 3283
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3298
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3303,
                "end": 3312
              },
              "start": 3292,
              "end": 3312
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3314,
              "end": 3316
            },
            "alternate": null,
            "start": 3288,
            "end": 3316
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3325,
                "end": 3331
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3336,
                "end": 3345
              },
              "start": 3325,
              "end": 3345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3347,
              "end": 3349
            },
            "alternate": null,
            "start": 3321,
            "end": 3349
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3364
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3369,
                "end": 3378
              },
              "start": 3358,
              "end": 3378
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3380,
              "end": 3382
            },
            "alternate": null,
            "start": 3354,
            "end": 3382
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3391,
                "end": 3397
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3411
              },
              "start": 3391,
              "end": 3411
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3413,
              "end": 3415
            },
            "alternate": null,
            "start": 3387,
            "end": 3415
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3424,
                "end": 3430
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3435,
                "end": 3444
              },
              "start": 3424,
              "end": 3444
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3446,
              "end": 3448
            },
            "alternate": null,
            "start": 3420,
            "end": 3448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3457,
                "end": 3463
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3468,
                "end": 3477
              },
              "start": 3457,
              "end": 3477
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3479,
              "end": 3481
            },
            "alternate": null,
            "start": 3453,
            "end": 3481
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3490,
                "end": 3496
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3501,
                "end": 3510
              },
              "start": 3490,
              "end": 3510
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3512,
              "end": 3514
            },
            "alternate": null,
            "start": 3486,
            "end": 3514
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3523,
                "end": 3529
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3534,
                "end": 3543
              },
              "start": 3523,
              "end": 3543
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3545,
              "end": 3547
            },
            "alternate": null,
            "start": 3519,
            "end": 3547
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3556,
                "end": 3562
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3567,
                "end": 3576
              },
              "start": 3556,
              "end": 3576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3578,
              "end": 3580
            },
            "alternate": null,
            "start": 3552,
            "end": 3580
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3589,
                "end": 3595
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3600,
                "end": 3609
              },
              "start": 3589,
              "end": 3609
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3611,
              "end": 3613
            },
            "alternate": null,
            "start": 3585,
            "end": 3613
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3622,
                "end": 3628
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3642
              },
              "start": 3622,
              "end": 3642
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3644,
              "end": 3646
            },
            "alternate": null,
            "start": 3618,
            "end": 3646
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3655,
                "end": 3661
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3666,
                "end": 3675
              },
              "start": 3655,
              "end": 3675
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3677,
              "end": 3679
            },
            "alternate": null,
            "start": 3651,
            "end": 3679
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3688,
                "end": 3694
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3699,
                "end": 3708
              },
              "start": 3688,
              "end": 3708
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3710,
              "end": 3712
            },
            "alternate": null,
            "start": 3684,
            "end": 3712
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3721,
                "end": 3727
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3732,
                "end": 3741
              },
              "start": 3721,
              "end": 3741
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3743,
              "end": 3745
            },
            "alternate": null,
            "start": 3717,
            "end": 3745
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3754,
                "end": 3760
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3765,
                "end": 3774
              },
              "start": 3754,
              "end": 3774
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3776,
              "end": 3778
            },
            "alternate": null,
            "start": 3750,
            "end": 3778
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3787,
                "end": 3793
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3798,
                "end": 3807
              },
              "start": 3787,
              "end": 3807
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3809,
              "end": 3811
            },
            "alternate": null,
            "start": 3783,
            "end": 3811
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3820,
                "end": 3826
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3831,
                "end": 3840
              },
              "start": 3820,
              "end": 3840
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3842,
              "end": 3844
            },
            "alternate": null,
            "start": 3816,
            "end": 3844
          }
        ],
        "start": 1863,
        "end": 3847
      },
      "start": 1850,
      "end": 3847
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3847
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 95,
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
    "value": "One",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 123,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 152,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 181,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 239,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 268,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 297,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 384,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 413,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 442,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 471,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 500,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 525,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 529,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 558,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 587,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 616,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 674,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 703,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 732,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 761,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 786,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 790,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 819,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 848,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 877,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 902,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 906,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 935,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 949,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 953,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 960,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 964,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 982,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 993,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1022,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1036,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1051,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1069,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1080,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1109,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1138,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1167,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1181,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1185,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1196,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1225,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1254,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1283,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1341,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1355,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1370,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1388,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1399,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1413,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1428,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1457,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1471,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1486,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1511,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1515,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1533,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1544,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1573,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1602,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1616,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1631,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1660,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1678,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1685,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1689,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1703,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1707,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1718,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1736,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1743,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1747,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1761,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1765,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1776,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1790,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1805,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1819,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1823,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1834,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1850,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1857,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1869,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1873,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1880,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1884,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1902,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1906,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1913,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1917,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1935,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1939,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1950,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1968,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 1972,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1979,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 1983,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2001,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2005,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2012,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2016,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2034,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2038,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2045,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2049,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2067,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2071,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2082,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2104,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2111,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2115,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2133,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2148,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2166,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2170,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2181,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2199,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2210,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2214,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2232,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2247,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2265,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2269,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2276,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2280,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2302,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2313,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2331,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2335,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2342,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2346,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2364,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2368,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2375,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2379,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2397,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2401,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2408,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2412,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2430,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2434,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2441,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2445,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2463,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2467,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2478,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2496,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2500,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2507,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2511,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2529,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2533,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2540,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2544,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2562,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2566,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2573,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2577,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2595,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2599,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2606,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2610,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2628,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2632,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2643,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2661,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2665,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2672,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2676,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2694,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2698,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2705,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2709,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2727,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2731,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2738,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2742,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2760,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2764,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2775,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2793,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2797,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2808,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2826,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2830,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2837,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2841,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2859,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2863,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2874,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2892,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2896,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2903,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2907,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2925,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2929,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2936,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2940,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2958,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2962,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2969,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 2973,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2991,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 2995,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3006,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3024,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3028,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3039,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3057,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3061,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3068,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3072,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3090,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3094,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3101,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3105,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3123,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3127,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3134,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3138,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3160,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3167,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3171,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3189,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3193,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3200,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3204,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3222,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3226,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3233,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3237,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3259,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3270,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3288,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3292,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3299,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3303,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3321,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3325,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3336,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3354,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3358,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3365,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3369,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3387,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3391,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3398,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3402,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3420,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3424,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3431,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3435,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3453,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3457,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3464,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3468,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3486,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3490,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3497,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3501,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3519,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3523,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3530,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3534,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3552,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3556,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3563,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3567,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3585,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3589,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3596,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3600,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3618,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3622,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3629,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3633,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3651,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3655,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3662,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3666,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3684,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3688,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3695,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3699,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3717,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3721,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3728,
    "end": 3731
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3732,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3750,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3754,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3761,
    "end": 3764
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3765,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3783,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3787,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3794,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3798,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3816,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 3820,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3827,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "choiceOne",
    "start": 3831,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3846,
    "end": 3847
  }
]
```

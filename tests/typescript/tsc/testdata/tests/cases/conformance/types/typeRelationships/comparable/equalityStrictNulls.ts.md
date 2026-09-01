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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 47
              },
              "start": 33,
              "end": 47
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 49,
              "end": 56
            },
            "alternate": null,
            "start": 29,
            "end": 56
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 79
              },
              "start": 65,
              "end": 79
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 81,
              "end": 88
            },
            "alternate": null,
            "start": 61,
            "end": 88
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 112
              },
              "start": 97,
              "end": 112
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 114,
              "end": 121
            },
            "alternate": null,
            "start": 93,
            "end": 121
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "start": 130,
              "end": 145
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 147,
              "end": 154
            },
            "alternate": null,
            "start": 126,
            "end": 154
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 168,
                "end": 172
              },
              "start": 163,
              "end": 172
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 174,
              "end": 181
            },
            "alternate": null,
            "start": 159,
            "end": 181
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 195,
                "end": 199
              },
              "start": 190,
              "end": 199
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 201,
              "end": 208
            },
            "alternate": null,
            "start": 186,
            "end": 208
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 223,
                "end": 227
              },
              "start": 217,
              "end": 227
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 229,
              "end": 236
            },
            "alternate": null,
            "start": 213,
            "end": 236
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 251,
                "end": 255
              },
              "start": 245,
              "end": 255
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 257,
              "end": 264
            },
            "alternate": null,
            "start": 241,
            "end": 264
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 282
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "start": 273,
              "end": 287
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 289,
              "end": 296
            },
            "alternate": null,
            "start": 269,
            "end": 296
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 314
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "start": 305,
              "end": 319
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 321,
              "end": 328
            },
            "alternate": null,
            "start": 301,
            "end": 328
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 346
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "start": 337,
              "end": 352
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 354,
              "end": 361
            },
            "alternate": null,
            "start": 333,
            "end": 361
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 379
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 385
              },
              "start": 370,
              "end": 385
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 387,
              "end": 394
            },
            "alternate": null,
            "start": 366,
            "end": 394
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 403,
                "end": 407
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "start": 403,
              "end": 412
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 414,
              "end": 421
            },
            "alternate": null,
            "start": 399,
            "end": 421
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 430,
                "end": 434
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 439
              },
              "start": 430,
              "end": 439
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 441,
              "end": 448
            },
            "alternate": null,
            "start": 426,
            "end": 448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 457,
                "end": 461
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 467
              },
              "start": 457,
              "end": 467
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 469,
              "end": 476
            },
            "alternate": null,
            "start": 453,
            "end": 476
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 485,
                "end": 489
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              },
              "start": 485,
              "end": 495
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 497,
              "end": 504
            },
            "alternate": null,
            "start": 481,
            "end": 504
          }
        ],
        "start": 23,
        "end": 506
      },
      "expression": false,
      "start": 0,
      "end": 506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 541
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 554
              },
              "start": 532,
              "end": 554
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 556,
              "end": 563
            },
            "alternate": null,
            "start": 528,
            "end": 563
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 581
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 585,
                "end": 589
              },
              "start": 572,
              "end": 589
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 591,
              "end": 598
            },
            "alternate": null,
            "start": 568,
            "end": 598
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 607,
                "end": 611
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 624
              },
              "start": 607,
              "end": 624
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 626,
              "end": 633
            },
            "alternate": null,
            "start": 603,
            "end": 633
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 642,
                "end": 646
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 650,
                "end": 654
              },
              "start": 642,
              "end": 654
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 656,
              "end": 663
            },
            "alternate": null,
            "start": 638,
            "end": 663
          }
        ],
        "start": 522,
        "end": 665
      },
      "expression": false,
      "start": 508,
      "end": 665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 678
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 682,
              "end": 688
            },
            "start": 680,
            "end": 688
          },
          "start": 679,
          "end": 688
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 693,
              "end": 700
            },
            "start": 691,
            "end": 700
          },
          "start": 690,
          "end": 700
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 710,
                      "end": 716
                    },
                    "start": 708,
                    "end": 716
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 707,
                  "end": 716
                }
              ],
              "start": 705,
              "end": 718
            },
            "start": 703,
            "end": 718
          },
          "start": 702,
          "end": 718
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 723,
                  "end": 729
                },
                {
                  "type": "TSStringKeyword",
                  "start": 732,
                  "end": 738
                }
              ],
              "start": 723,
              "end": 738
            },
            "start": 721,
            "end": 738
          },
          "start": 720,
          "end": 738
        }
      ],
      "returnType": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 751
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 755,
                "end": 759
              },
              "start": 750,
              "end": 759
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 761,
              "end": 768
            },
            "alternate": null,
            "start": 746,
            "end": 768
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 778
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 782,
                "end": 786
              },
              "start": 777,
              "end": 786
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 788,
              "end": 795
            },
            "alternate": null,
            "start": 773,
            "end": 795
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 809,
                "end": 813
              },
              "start": 804,
              "end": 813
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 815,
              "end": 822
            },
            "alternate": null,
            "start": 800,
            "end": 822
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 832
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 836,
                "end": 840
              },
              "start": 831,
              "end": 840
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 842,
              "end": 849
            },
            "alternate": null,
            "start": 827,
            "end": 849
          }
        ],
        "start": 740,
        "end": 851
      },
      "expression": false,
      "start": 667,
      "end": 851
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 864
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 868,
              "end": 874
            },
            "start": 866,
            "end": 874
          },
          "start": 865,
          "end": 874
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 887
              },
              "operator": ">",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 899
              },
              "start": 886,
              "end": 899
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 901,
              "end": 908
            },
            "alternate": null,
            "start": 882,
            "end": 908
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 918
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 930
              },
              "start": 917,
              "end": 930
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 932,
              "end": 939
            },
            "alternate": null,
            "start": 913,
            "end": 939
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 949
              },
              "operator": ">=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 953,
                "end": 962
              },
              "start": 948,
              "end": 962
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 964,
              "end": 971
            },
            "alternate": null,
            "start": 944,
            "end": 971
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 981
              },
              "operator": "<=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 994
              },
              "start": 980,
              "end": 994
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 996,
              "end": 1003
            },
            "alternate": null,
            "start": 976,
            "end": 1003
          }
        ],
        "start": 876,
        "end": 1005
      },
      "expression": false,
      "start": 853,
      "end": 1005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1017
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1021,
              "end": 1027
            },
            "start": 1019,
            "end": 1027
          },
          "start": 1018,
          "end": 1027
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1043
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1060,
                  "end": 1064
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1078,
                    "end": 1084
                  }
                ],
                "start": 1055,
                "end": 1084
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1107
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1121,
                    "end": 1127
                  }
                ],
                "start": 1093,
                "end": 1127
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1157,
                    "end": 1164
                  }
                ],
                "start": 1136,
                "end": 1164
              }
            ],
            "start": 1035,
            "end": 1170
          }
        ],
        "start": 1029,
        "end": 1172
      },
      "expression": false,
      "start": 1006,
      "end": 1172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1172
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 38,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 70,
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
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 165,
    "end": 167
  },
  {
    "type": "Null",
    "value": "null",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 192,
    "end": 194
  },
  {
    "type": "Null",
    "value": "null",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 219,
    "end": 222
  },
  {
    "type": "Null",
    "value": "null",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 247,
    "end": 250
  },
  {
    "type": "Null",
    "value": "null",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 273,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 305,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 370,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Null",
    "value": "null",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 408,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 435,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Null",
    "value": "null",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Null",
    "value": "null",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 508,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 532,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 545,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 572,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 582,
    "end": 584
  },
  {
    "type": "Null",
    "value": "null",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Null",
    "value": "null",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 612,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 615,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Null",
    "value": "null",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 647,
    "end": 649
  },
  {
    "type": "Null",
    "value": "null",
    "start": 650,
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
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 667,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 693,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
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
    "value": "a",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 752,
    "end": 754
  },
  {
    "type": "Null",
    "value": "null",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 779,
    "end": 781
  },
  {
    "type": "Null",
    "value": "null",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 800,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 806,
    "end": 808
  },
  {
    "type": "Null",
    "value": "null",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 833,
    "end": 835
  },
  {
    "type": "Null",
    "value": "null",
    "start": 836,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 853,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 890,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 921,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 950,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 953,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 982,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 985,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1078,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1098,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172
  }
]
```

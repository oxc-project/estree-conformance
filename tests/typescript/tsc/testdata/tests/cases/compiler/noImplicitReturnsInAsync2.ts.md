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
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              },
              "start": 98,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 110,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 114
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 133
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 138,
                "end": 142
              },
              "start": 126,
              "end": 142
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 161,
                    "end": 162
                  },
                  "start": 154,
                  "end": 163
                }
              ],
              "start": 144,
              "end": 169
            },
            "alternate": null,
            "start": 122,
            "end": 169
          }
        ],
        "start": 116,
        "end": 171
      },
      "expression": false,
      "start": 70,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 260
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 270,
                "end": 277
              },
              "start": 268,
              "end": 277
            },
            "start": 261,
            "end": 277
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 280,
            "end": 284
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 284
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 305
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 310,
                "end": 314
              },
              "start": 298,
              "end": 314
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 342
                  },
                  "start": 326,
                  "end": 343
                }
              ],
              "start": 316,
              "end": 349
            },
            "alternate": null,
            "start": 294,
            "end": 349
          }
        ],
        "start": 286,
        "end": 351
      },
      "expression": false,
      "start": 240,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 439
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 449,
                "end": 456
              },
              "start": 447,
              "end": 456
            },
            "start": 440,
            "end": 456
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 459,
            "end": 463
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 463
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 473
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              }
            ],
            "start": 473,
            "end": 478
          },
          "start": 466,
          "end": 478
        },
        "start": 464,
        "end": 478
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 518
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 523,
                "end": 527
              },
              "start": 511,
              "end": 527
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 555
                  },
                  "start": 539,
                  "end": 556
                }
              ],
              "start": 529,
              "end": 562
            },
            "alternate": null,
            "start": 507,
            "end": 562
          }
        ],
        "start": 479,
        "end": 564
      },
      "expression": false,
      "start": 419,
      "end": 564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 637
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "start": 638,
            "end": 654
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 657,
            "end": 661
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 661
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 671
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              }
            ],
            "start": 671,
            "end": 679
          },
          "start": 664,
          "end": 679
        },
        "start": 662,
        "end": 679
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 698
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 703,
                "end": 707
              },
              "start": 691,
              "end": 707
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 735
                  },
                  "start": 719,
                  "end": 736
                }
              ],
              "start": 709,
              "end": 742
            },
            "alternate": null,
            "start": 687,
            "end": 742
          }
        ],
        "start": 680,
        "end": 744
      },
      "expression": false,
      "start": 617,
      "end": 744
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 847,
        "end": 852
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 862,
                "end": 869
              },
              "start": 860,
              "end": 869
            },
            "start": 853,
            "end": 869
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 872,
            "end": 876
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 876
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 896
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 901,
                "end": 905
              },
              "start": 889,
              "end": 905
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 917,
                  "end": 924
                }
              ],
              "start": 907,
              "end": 930
            },
            "alternate": null,
            "start": 885,
            "end": 930
          }
        ],
        "start": 878,
        "end": 932
      },
      "expression": false,
      "start": 832,
      "end": 932
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 932
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 70,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 76,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 134,
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
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 240,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 306,
    "end": 309
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 419,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 425,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 519,
    "end": 522
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 539,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 546,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 617,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 687,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 699,
    "end": 702
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 719,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 726,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 832,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 838,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 853,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 870,
    "end": 871
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 889,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 897,
    "end": 900
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  }
]
```

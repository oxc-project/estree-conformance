__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 50
          }
        ],
        "start": 25,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 52
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 74
                    },
                    "typeArguments": null,
                    "start": 72,
                    "end": 74
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 77,
                    "end": 83
                  }
                ],
                "start": 72,
                "end": 83
              },
              "start": 70,
              "end": 83
            },
            "start": 66,
            "end": 83
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 83
        }
      ],
      "declare": true,
      "start": 54,
      "end": 84
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 105
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 111
        },
        "start": 89,
        "end": 111
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "directive": null,
            "start": 119,
            "end": 124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 149
              },
              "optional": false,
              "computed": false,
              "start": 135,
              "end": 149
            },
            "directive": null,
            "start": 135,
            "end": 150
          }
        ],
        "start": 113,
        "end": 162
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
            },
            "directive": null,
            "start": 174,
            "end": 179
          }
        ],
        "start": 168,
        "end": 196
      },
      "start": 85,
      "end": 196
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 205
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 206,
            "end": 219
          },
          "optional": false,
          "computed": true,
          "start": 201,
          "end": 220
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 226
        },
        "start": 201,
        "end": 226
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 238
            },
            "directive": null,
            "start": 234,
            "end": 239
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 264
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 264
            },
            "directive": null,
            "start": 250,
            "end": 265
          }
        ],
        "start": 228,
        "end": 277
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 293
            },
            "directive": null,
            "start": 289,
            "end": 294
          }
        ],
        "start": 283,
        "end": 311
      },
      "start": 197,
      "end": 311
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 320
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 332
          },
          "optional": false,
          "computed": false,
          "start": 316,
          "end": 332
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 339
        },
        "start": 316,
        "end": 339
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 351
            },
            "directive": null,
            "start": 347,
            "end": 352
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 367
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 377
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 377
            },
            "directive": null,
            "start": 363,
            "end": 378
          }
        ],
        "start": 341,
        "end": 390
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 406
            },
            "directive": null,
            "start": 402,
            "end": 407
          }
        ],
        "start": 396,
        "end": 424
      },
      "start": 312,
      "end": 424
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 433
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 434,
            "end": 447
          },
          "optional": false,
          "computed": true,
          "start": 429,
          "end": 448
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 455
        },
        "start": 429,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 467
            },
            "directive": null,
            "start": 463,
            "end": 468
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 493
              },
              "optional": false,
              "computed": false,
              "start": 479,
              "end": 493
            },
            "directive": null,
            "start": 479,
            "end": 494
          }
        ],
        "start": 457,
        "end": 506
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 522
            },
            "directive": null,
            "start": 518,
            "end": 523
          }
        ],
        "start": 512,
        "end": 540
      },
      "start": 425,
      "end": 540
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 547
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 555
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 567
          },
          "optional": false,
          "computed": false,
          "start": 551,
          "end": 567
        },
        "start": 545,
        "end": 567
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 579
            },
            "directive": null,
            "start": 575,
            "end": 580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 595
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 605
              },
              "optional": false,
              "computed": false,
              "start": 591,
              "end": 605
            },
            "directive": null,
            "start": 591,
            "end": 606
          }
        ],
        "start": 569,
        "end": 618
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 634
            },
            "directive": null,
            "start": 630,
            "end": 635
          }
        ],
        "start": 624,
        "end": 652
      },
      "start": 541,
      "end": 652
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 657,
          "end": 659
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 667
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 668,
            "end": 681
          },
          "optional": false,
          "computed": true,
          "start": 663,
          "end": 682
        },
        "start": 657,
        "end": 682
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 694
            },
            "directive": null,
            "start": 690,
            "end": 695
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 710
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 720
              },
              "optional": false,
              "computed": false,
              "start": 706,
              "end": 720
            },
            "directive": null,
            "start": 706,
            "end": 721
          }
        ],
        "start": 684,
        "end": 733
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 749
            },
            "directive": null,
            "start": 745,
            "end": 750
          }
        ],
        "start": 739,
        "end": 767
      },
      "start": 653,
      "end": 767
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 774
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 783
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 795
          },
          "optional": false,
          "computed": false,
          "start": 779,
          "end": 795
        },
        "start": 772,
        "end": 795
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 807
            },
            "directive": null,
            "start": 803,
            "end": 808
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 823
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 833
              },
              "optional": false,
              "computed": false,
              "start": 819,
              "end": 833
            },
            "directive": null,
            "start": 819,
            "end": 834
          }
        ],
        "start": 797,
        "end": 846
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 862
            },
            "directive": null,
            "start": 858,
            "end": 863
          }
        ],
        "start": 852,
        "end": 880
      },
      "start": 768,
      "end": 880
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 885,
          "end": 887
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 896
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 897,
            "end": 910
          },
          "optional": false,
          "computed": true,
          "start": 892,
          "end": 911
        },
        "start": 885,
        "end": 911
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 923
            },
            "directive": null,
            "start": 919,
            "end": 924
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 939
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 949
              },
              "optional": false,
              "computed": false,
              "start": 935,
              "end": 949
            },
            "directive": null,
            "start": 935,
            "end": 950
          }
        ],
        "start": 913,
        "end": 962
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 974,
              "end": 978
            },
            "directive": null,
            "start": 974,
            "end": 979
          }
        ],
        "start": 968,
        "end": 996
      },
      "start": 881,
      "end": 996
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1006
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1018
          },
          "optional": false,
          "computed": false,
          "start": 1002,
          "end": 1018
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1022,
          "end": 1024
        },
        "start": 1002,
        "end": 1024
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1036
            },
            "directive": null,
            "start": 1032,
            "end": 1037
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1057,
                "end": 1061
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1071
              },
              "optional": false,
              "computed": false,
              "start": 1057,
              "end": 1071
            },
            "directive": null,
            "start": 1057,
            "end": 1072
          }
        ],
        "start": 1026,
        "end": 1083
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1099
            },
            "directive": null,
            "start": 1095,
            "end": 1100
          }
        ],
        "start": 1089,
        "end": 1108
      },
      "start": 998,
      "end": 1108
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1117
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1118,
            "end": 1131
          },
          "optional": false,
          "computed": true,
          "start": 1113,
          "end": 1132
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1138
        },
        "start": 1113,
        "end": 1138
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1150
            },
            "directive": null,
            "start": 1146,
            "end": 1151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1175
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1176,
                "end": 1185
              },
              "optional": false,
              "computed": false,
              "start": 1171,
              "end": 1185
            },
            "directive": null,
            "start": 1171,
            "end": 1186
          }
        ],
        "start": 1140,
        "end": 1197
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1213
            },
            "directive": null,
            "start": 1209,
            "end": 1214
          }
        ],
        "start": 1203,
        "end": 1222
      },
      "start": 1109,
      "end": 1222
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1227,
            "end": 1231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1232,
            "end": 1243
          },
          "optional": false,
          "computed": false,
          "start": 1227,
          "end": 1243
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1248,
          "end": 1250
        },
        "start": 1227,
        "end": 1250
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1262
            },
            "directive": null,
            "start": 1258,
            "end": 1263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1287
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1297
              },
              "optional": false,
              "computed": false,
              "start": 1283,
              "end": 1297
            },
            "directive": null,
            "start": 1283,
            "end": 1298
          }
        ],
        "start": 1252,
        "end": 1309
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1325
            },
            "directive": null,
            "start": 1321,
            "end": 1326
          }
        ],
        "start": 1315,
        "end": 1334
      },
      "start": 1223,
      "end": 1334
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1339,
            "end": 1343
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1344,
            "end": 1357
          },
          "optional": false,
          "computed": true,
          "start": 1339,
          "end": 1358
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1363,
          "end": 1365
        },
        "start": 1339,
        "end": 1365
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1377
            },
            "directive": null,
            "start": 1373,
            "end": 1378
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1398,
                "end": 1402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1412
              },
              "optional": false,
              "computed": false,
              "start": 1398,
              "end": 1412
            },
            "directive": null,
            "start": 1398,
            "end": 1413
          }
        ],
        "start": 1367,
        "end": 1424
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1440
            },
            "directive": null,
            "start": 1436,
            "end": 1441
          }
        ],
        "start": 1430,
        "end": 1449
      },
      "start": 1335,
      "end": 1449
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1454,
          "end": 1456
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1460,
            "end": 1464
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1476
          },
          "optional": false,
          "computed": false,
          "start": 1460,
          "end": 1476
        },
        "start": 1454,
        "end": 1476
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1488
            },
            "directive": null,
            "start": 1484,
            "end": 1489
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1514,
                "end": 1523
              },
              "optional": false,
              "computed": false,
              "start": 1509,
              "end": 1523
            },
            "directive": null,
            "start": 1509,
            "end": 1524
          }
        ],
        "start": 1478,
        "end": 1535
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1547,
              "end": 1551
            },
            "directive": null,
            "start": 1547,
            "end": 1552
          }
        ],
        "start": 1541,
        "end": 1560
      },
      "start": 1450,
      "end": 1560
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1565,
          "end": 1567
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1571,
            "end": 1575
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1576,
            "end": 1589
          },
          "optional": false,
          "computed": true,
          "start": 1571,
          "end": 1590
        },
        "start": 1565,
        "end": 1590
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1602
            },
            "directive": null,
            "start": 1598,
            "end": 1603
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1623,
                "end": 1627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1637
              },
              "optional": false,
              "computed": false,
              "start": 1623,
              "end": 1637
            },
            "directive": null,
            "start": 1623,
            "end": 1638
          }
        ],
        "start": 1592,
        "end": 1649
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1661,
              "end": 1665
            },
            "directive": null,
            "start": 1661,
            "end": 1666
          }
        ],
        "start": 1655,
        "end": 1674
      },
      "start": 1561,
      "end": 1674
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1679,
          "end": 1681
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1686,
            "end": 1690
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1691,
            "end": 1702
          },
          "optional": false,
          "computed": false,
          "start": 1686,
          "end": 1702
        },
        "start": 1679,
        "end": 1702
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1710,
              "end": 1714
            },
            "directive": null,
            "start": 1710,
            "end": 1715
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1735,
                "end": 1739
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1749
              },
              "optional": false,
              "computed": false,
              "start": 1735,
              "end": 1749
            },
            "directive": null,
            "start": 1735,
            "end": 1750
          }
        ],
        "start": 1704,
        "end": 1761
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1777
            },
            "directive": null,
            "start": 1773,
            "end": 1778
          }
        ],
        "start": 1767,
        "end": 1786
      },
      "start": 1675,
      "end": 1786
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1791,
          "end": 1793
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1798,
            "end": 1802
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1803,
            "end": 1816
          },
          "optional": false,
          "computed": true,
          "start": 1798,
          "end": 1817
        },
        "start": 1791,
        "end": 1817
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1825,
              "end": 1829
            },
            "directive": null,
            "start": 1825,
            "end": 1830
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1850,
                "end": 1854
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1864
              },
              "optional": false,
              "computed": false,
              "start": 1850,
              "end": 1864
            },
            "directive": null,
            "start": 1850,
            "end": 1865
          }
        ],
        "start": 1819,
        "end": 1876
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1888,
              "end": 1892
            },
            "directive": null,
            "start": 1888,
            "end": 1893
          }
        ],
        "start": 1882,
        "end": 1901
      },
      "start": 1787,
      "end": 1901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1934,
        "end": 1937
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1948,
                    "end": 1956
                  },
                  "typeArguments": null,
                  "start": 1948,
                  "end": 1956
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 1959,
                  "end": 1965
                }
              ],
              "start": 1948,
              "end": 1965
            },
            "start": 1946,
            "end": 1965
          },
          "start": 1938,
          "end": 1965
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "instance",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1984,
                  "end": 1992
                },
                "prefix": true,
                "start": 1977,
                "end": 1992
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "'function'",
                "start": 1997,
                "end": 2007
              },
              "start": 1977,
              "end": 2007
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2023,
                          "end": 2031
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2032,
                          "end": 2041
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2023,
                        "end": 2041
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2045,
                        "end": 2049
                      },
                      "start": 2023,
                      "end": 2049
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2053,
                            "end": 2061
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2062,
                            "end": 2071
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2053,
                          "end": 2071
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2072,
                          "end": 2083
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2053,
                        "end": 2083
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2087,
                        "end": 2091
                      },
                      "start": 2053,
                      "end": 2091
                    },
                    "start": 2023,
                    "end": 2091
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2114,
                            "end": 2122
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2123,
                            "end": 2129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2114,
                          "end": 2129
                        },
                        "start": 2107,
                        "end": 2130
                      }
                    ],
                    "start": 2093,
                    "end": 2140
                  },
                  "alternate": null,
                  "start": 2019,
                  "end": 2140
                }
              ],
              "start": 2009,
              "end": 2146
            },
            "alternate": null,
            "start": 1973,
            "end": 2146
          }
        ],
        "start": 1967,
        "end": 2148
      },
      "expression": false,
      "start": 1925,
      "end": 2148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 2148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 94,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 106,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var1",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 206,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 255,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 368,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 434,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 484,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 545,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 548,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 556,
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
    "type": "Identifier",
    "value": "var1",
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
    "type": "Identifier",
    "value": "var1",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 596,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 660,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 668,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 711,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 745,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 775,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 784,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 803,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 819,
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
    "value": "property1",
    "start": 824,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 888,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 892,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 896,
    "end": 897
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 897,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 919,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 935,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 940,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 963,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 974,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1007,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1019,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1062,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1095,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1118,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1176,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1232,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1283,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1288,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1310,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1339,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1344,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1403,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1425,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "var1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1450,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1454,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1460,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1465,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1484,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1509,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1514,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1536,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1547,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1561,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1565,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1571,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1576,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1598,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1628,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1650,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1661,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1686,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1691,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1735,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "property1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1762,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1773,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1798,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1803,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1825,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1850,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1855,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1877,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1888,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1925,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1938,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1948,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1973,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1977,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1984,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1997,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2023,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2032,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2062,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2072,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2084,
    "end": 2086
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2087,
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
    "type": "Keyword",
    "value": "return",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2114,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2123,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  }
]
```

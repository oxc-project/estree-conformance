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
          "name": "cnd",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 22
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 31,
                    "end": 38
                  }
                ],
                "start": 22,
                "end": 39
              },
              "start": 16,
              "end": 39
            },
            "start": 14,
            "end": 39
          },
          "start": 11,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnd",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 203
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 204,
                          "end": 205
                        },
                        "optional": false,
                        "computed": true,
                        "start": 200,
                        "end": 206
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnd",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 225
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 226,
                          "end": 227
                        },
                        "optional": false,
                        "computed": true,
                        "start": 222,
                        "end": 228
                      },
                      "start": 200,
                      "end": 228
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 251
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 253,
                            "end": 254
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 246,
                          "end": 254
                        }
                      ],
                      "start": 232,
                      "end": 265
                    },
                    "start": 200,
                    "end": 265
                  },
                  "start": 196,
                  "end": 266
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 357
                      },
                      "property": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 358,
                        "end": 359
                      },
                      "optional": false,
                      "computed": true,
                      "start": 354,
                      "end": 360
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop3a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 384
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 386,
                            "end": 387
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 378,
                          "end": 387
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop3b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 401,
                            "end": 407
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 409,
                            "end": 410
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 401,
                          "end": 410
                        }
                      ],
                      "start": 364,
                      "end": 421
                    },
                    "start": 354,
                    "end": 421
                  },
                  "start": 350,
                  "end": 422
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 439
                      },
                      "property": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 440,
                        "end": 441
                      },
                      "optional": false,
                      "computed": true,
                      "start": 436,
                      "end": 442
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop4a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 460,
                            "end": 466
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 468,
                            "end": 469
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 460,
                          "end": 469
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop4b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 489
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 491,
                            "end": 492
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 483,
                          "end": 492
                        }
                      ],
                      "start": 446,
                      "end": 503
                    },
                    "start": 436,
                    "end": 503
                  },
                  "start": 432,
                  "end": 504
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 521
                      },
                      "property": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 522,
                        "end": 523
                      },
                      "optional": false,
                      "computed": true,
                      "start": 518,
                      "end": 524
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop5a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 548
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 550,
                            "end": 551
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 542,
                          "end": 551
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop5b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 565,
                            "end": 571
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 573,
                            "end": 574
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 565,
                          "end": 574
                        }
                      ],
                      "start": 528,
                      "end": 585
                    },
                    "start": 518,
                    "end": 585
                  },
                  "start": 514,
                  "end": 586
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 603
                      },
                      "property": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 604,
                        "end": 605
                      },
                      "optional": false,
                      "computed": true,
                      "start": 600,
                      "end": 606
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop6a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 630
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 632,
                            "end": 633
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 624,
                          "end": 633
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop6b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 653
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 655,
                            "end": 656
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 647,
                          "end": 656
                        }
                      ],
                      "start": 610,
                      "end": 667
                    },
                    "start": 600,
                    "end": 667
                  },
                  "start": 596,
                  "end": 668
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 682,
                        "end": 685
                      },
                      "property": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 686,
                        "end": 687
                      },
                      "optional": false,
                      "computed": true,
                      "start": 682,
                      "end": 688
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop7a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 712
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 714,
                            "end": 715
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 706,
                          "end": 715
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop7b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 729,
                            "end": 735
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 737,
                            "end": 738
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 729,
                          "end": 738
                        }
                      ],
                      "start": 692,
                      "end": 749
                    },
                    "start": 682,
                    "end": 749
                  },
                  "start": 678,
                  "end": 750
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 767
                      },
                      "property": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 768,
                        "end": 769
                      },
                      "optional": false,
                      "computed": true,
                      "start": 764,
                      "end": 770
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop8a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 788,
                            "end": 794
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 796,
                            "end": 797
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 788,
                          "end": 797
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop8b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 811,
                            "end": 817
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 819,
                            "end": 820
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 811,
                          "end": 820
                        }
                      ],
                      "start": 774,
                      "end": 831
                    },
                    "start": 764,
                    "end": 831
                  },
                  "start": 760,
                  "end": 832
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 849
                      },
                      "property": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 850,
                        "end": 851
                      },
                      "optional": false,
                      "computed": true,
                      "start": 846,
                      "end": 852
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop9a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 876
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 878,
                            "end": 879
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 870,
                          "end": 879
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop9b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 899
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 901,
                            "end": 902
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 893,
                          "end": 902
                        }
                      ],
                      "start": 856,
                      "end": 913
                    },
                    "start": 846,
                    "end": 913
                  },
                  "start": 842,
                  "end": 914
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 931
                      },
                      "property": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 932,
                        "end": 934
                      },
                      "optional": false,
                      "computed": true,
                      "start": 928,
                      "end": 935
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop10a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 953,
                            "end": 960
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 962,
                            "end": 963
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 953,
                          "end": 963
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop10b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 977,
                            "end": 984
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 986,
                            "end": 987
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 977,
                          "end": 987
                        }
                      ],
                      "start": 939,
                      "end": 998
                    },
                    "start": 928,
                    "end": 998
                  },
                  "start": 924,
                  "end": 999
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1013,
                        "end": 1016
                      },
                      "property": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 1017,
                        "end": 1019
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1013,
                      "end": 1020
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop11a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1045
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1047,
                            "end": 1048
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1038,
                          "end": 1048
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop11b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1062,
                            "end": 1069
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1071,
                            "end": 1072
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1062,
                          "end": 1072
                        }
                      ],
                      "start": 1024,
                      "end": 1083
                    },
                    "start": 1013,
                    "end": 1083
                  },
                  "start": 1009,
                  "end": 1084
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1101
                      },
                      "property": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1102,
                        "end": 1104
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1098,
                      "end": 1105
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop12a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1123,
                            "end": 1130
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1132,
                            "end": 1133
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1123,
                          "end": 1133
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop12b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1147,
                            "end": 1154
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1156,
                            "end": 1157
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1147,
                          "end": 1157
                        }
                      ],
                      "start": 1109,
                      "end": 1168
                    },
                    "start": 1098,
                    "end": 1168
                  },
                  "start": 1094,
                  "end": 1169
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1186
                      },
                      "property": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1187,
                        "end": 1189
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1183,
                      "end": 1190
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop13a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1208,
                            "end": 1215
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1217,
                            "end": 1218
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1208,
                          "end": 1218
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop13b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1232,
                            "end": 1239
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1241,
                            "end": 1242
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1232,
                          "end": 1242
                        }
                      ],
                      "start": 1194,
                      "end": 1253
                    },
                    "start": 1183,
                    "end": 1253
                  },
                  "start": 1179,
                  "end": 1254
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1268,
                        "end": 1271
                      },
                      "property": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 1272,
                        "end": 1274
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1268,
                      "end": 1275
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop14a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1293,
                            "end": 1300
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1302,
                            "end": 1303
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1293,
                          "end": 1303
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop14b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1317,
                            "end": 1324
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1326,
                            "end": 1327
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1317,
                          "end": 1327
                        }
                      ],
                      "start": 1279,
                      "end": 1338
                    },
                    "start": 1268,
                    "end": 1338
                  },
                  "start": 1264,
                  "end": 1339
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1353,
                        "end": 1356
                      },
                      "property": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1357,
                        "end": 1359
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1353,
                      "end": 1360
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop15a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1378,
                            "end": 1385
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1387,
                            "end": 1388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1378,
                          "end": 1388
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop15b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1402,
                            "end": 1409
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1411,
                            "end": 1412
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1402,
                          "end": 1412
                        }
                      ],
                      "start": 1364,
                      "end": 1423
                    },
                    "start": 1353,
                    "end": 1423
                  },
                  "start": 1349,
                  "end": 1424
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1441
                      },
                      "property": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1442,
                        "end": 1444
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1438,
                      "end": 1445
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop16a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1463,
                            "end": 1470
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1472,
                            "end": 1473
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1463,
                          "end": 1473
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop16b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1487,
                            "end": 1494
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1496,
                            "end": 1497
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1487,
                          "end": 1497
                        }
                      ],
                      "start": 1449,
                      "end": 1508
                    },
                    "start": 1438,
                    "end": 1508
                  },
                  "start": 1434,
                  "end": 1509
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1526
                      },
                      "property": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1527,
                        "end": 1529
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1523,
                      "end": 1530
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop17a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1548,
                            "end": 1555
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1557,
                            "end": 1558
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1548,
                          "end": 1558
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop17b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1572,
                            "end": 1579
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1581,
                            "end": 1582
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1572,
                          "end": 1582
                        }
                      ],
                      "start": 1534,
                      "end": 1593
                    },
                    "start": 1523,
                    "end": 1593
                  },
                  "start": 1519,
                  "end": 1594
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1611
                      },
                      "property": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 1612,
                        "end": 1614
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1608,
                      "end": 1615
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop18a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1633,
                            "end": 1640
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1642,
                            "end": 1643
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1633,
                          "end": 1643
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop18b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1657,
                            "end": 1664
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1666,
                            "end": 1667
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1657,
                          "end": 1667
                        }
                      ],
                      "start": 1619,
                      "end": 1678
                    },
                    "start": 1608,
                    "end": 1678
                  },
                  "start": 1604,
                  "end": 1679
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1693,
                        "end": 1696
                      },
                      "property": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 1697,
                        "end": 1699
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1693,
                      "end": 1700
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop19a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1718,
                            "end": 1725
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1727,
                            "end": 1728
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1718,
                          "end": 1728
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop19b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1742,
                            "end": 1749
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1751,
                            "end": 1752
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1742,
                          "end": 1752
                        }
                      ],
                      "start": 1704,
                      "end": 1763
                    },
                    "start": 1693,
                    "end": 1763
                  },
                  "start": 1689,
                  "end": 1764
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1778,
                        "end": 1781
                      },
                      "property": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1782,
                        "end": 1784
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1778,
                      "end": 1785
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop20a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1803,
                            "end": 1810
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1812,
                            "end": 1813
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1803,
                          "end": 1813
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop20b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1827,
                            "end": 1834
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1836,
                            "end": 1837
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1827,
                          "end": 1837
                        }
                      ],
                      "start": 1789,
                      "end": 1848
                    },
                    "start": 1778,
                    "end": 1848
                  },
                  "start": 1774,
                  "end": 1849
                }
              ],
              "start": 136,
              "end": 1856
            },
            "start": 129,
            "end": 1857
          }
        ],
        "start": 40,
        "end": 1859
      },
      "expression": false,
      "start": 0,
      "end": 1859
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1859
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
    "value": "cnd",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "prop0",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "prop3a",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "prop3b",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 439,
    "end": 440
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "prop4a",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "prop4b",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "prop5a",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "prop5b",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 603,
    "end": 604
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "prop6a",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "prop6b",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "prop7a",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "prop7b",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "prop8a",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "prop8b",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 842,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "prop9a",
    "start": 870,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "prop9b",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 924,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 928,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 932,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "prop10a",
    "start": 953,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "prop10b",
    "start": 977,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "prop11a",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "prop11b",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1106,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "prop12a",
    "start": 1123,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "prop12b",
    "start": 1147,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1187,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "prop13a",
    "start": 1208,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "prop13b",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "prop14a",
    "start": 1293,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "prop14b",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "prop15a",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "prop15b",
    "start": 1402,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "prop16a",
    "start": 1463,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "prop16b",
    "start": 1487,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1531,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "prop17a",
    "start": 1548,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "prop17b",
    "start": 1572,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1616,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "prop18a",
    "start": 1633,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "prop18b",
    "start": 1657,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1693,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1701,
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
    "value": "prop19a",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "prop19b",
    "start": 1742,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "cnd",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1782,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1786,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "prop20a",
    "start": 1803,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "prop20b",
    "start": 1827,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1858,
    "end": 1859
  }
]
```

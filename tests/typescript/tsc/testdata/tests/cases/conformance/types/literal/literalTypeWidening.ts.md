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
        "start": 53,
        "end": 55
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 72
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 75,
                  "end": 82
                },
                "definite": false,
                "start": 70,
                "end": 82
              }
            ],
            "declare": false,
            "start": 64,
            "end": 83
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 120
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 125
                },
                "definite": false,
                "start": 118,
                "end": 125
              }
            ],
            "declare": false,
            "start": 114,
            "end": 126
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 155
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 160
                },
                "definite": false,
                "start": 153,
                "end": 160
              }
            ],
            "declare": false,
            "start": 147,
            "end": 161
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 198
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 203
                },
                "definite": false,
                "start": 196,
                "end": 203
              }
            ],
            "declare": false,
            "start": 192,
            "end": 204
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 235,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "start": 231,
                  "end": 242
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 245,
                  "end": 252
                },
                "definite": false,
                "start": 231,
                "end": 252
              }
            ],
            "declare": false,
            "start": 225,
            "end": 253
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 281
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 286
                },
                "definite": false,
                "start": 279,
                "end": 286
              }
            ],
            "declare": false,
            "start": 275,
            "end": 287
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 319,
                        "end": 326
                      },
                      "start": 319,
                      "end": 326
                    },
                    "start": 317,
                    "end": 326
                  },
                  "start": 315,
                  "end": 326
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 331
                },
                "definite": false,
                "start": 315,
                "end": 331
              }
            ],
            "declare": false,
            "start": 309,
            "end": 332
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 360
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 365
                },
                "definite": false,
                "start": 358,
                "end": 365
              }
            ],
            "declare": false,
            "start": 354,
            "end": 366
          }
        ],
        "start": 58,
        "end": 385
      },
      "expression": false,
      "start": 44,
      "end": 385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 405,
              "end": 412
            },
            "start": 403,
            "end": 412
          },
          "start": 399,
          "end": 412
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 428
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 435
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 438,
                    "end": 443
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 446,
                    "end": 451
                  },
                  "start": 431,
                  "end": 451
                },
                "definite": false,
                "start": 426,
                "end": 451
              }
            ],
            "declare": false,
            "start": 420,
            "end": 452
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
                  "name": "c2",
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
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 503,
                            "end": 508
                          },
                          "start": 503,
                          "end": 508
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 511,
                            "end": 516
                          },
                          "start": 511,
                          "end": 516
                        }
                      ],
                      "start": 503,
                      "end": 516
                    },
                    "start": 501,
                    "end": 516
                  },
                  "start": 499,
                  "end": 516
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 521
                },
                "definite": false,
                "start": 499,
                "end": 521
              }
            ],
            "declare": false,
            "start": 493,
            "end": 522
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 553
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 560
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 565
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 570
                  },
                  "start": 556,
                  "end": 570
                },
                "definite": false,
                "start": 551,
                "end": 570
              }
            ],
            "declare": false,
            "start": 545,
            "end": 571
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 602
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 609
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 614
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "\"baz\"",
                    "start": 617,
                    "end": 622
                  },
                  "start": 605,
                  "end": 622
                },
                "definite": false,
                "start": 600,
                "end": 622
              }
            ],
            "declare": false,
            "start": 594,
            "end": 623
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
                  "name": "c5",
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
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 673,
                            "end": 678
                          },
                          "start": 673,
                          "end": 678
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 681,
                            "end": 686
                          },
                          "start": 681,
                          "end": 686
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "baz",
                            "raw": "\"baz\"",
                            "start": 689,
                            "end": 694
                          },
                          "start": 689,
                          "end": 694
                        }
                      ],
                      "start": 673,
                      "end": 694
                    },
                    "start": 671,
                    "end": 694
                  },
                  "start": 669,
                  "end": 694
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 699
                },
                "definite": false,
                "start": 669,
                "end": 699
              }
            ],
            "declare": false,
            "start": 663,
            "end": 700
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 741
                },
                "definite": false,
                "start": 734,
                "end": 741
              }
            ],
            "declare": false,
            "start": 730,
            "end": 742
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 764
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 769
                },
                "definite": false,
                "start": 762,
                "end": 769
              }
            ],
            "declare": false,
            "start": 758,
            "end": 770
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 797,
                  "end": 799
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 804
                },
                "definite": false,
                "start": 797,
                "end": 804
              }
            ],
            "declare": false,
            "start": 793,
            "end": 805
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 834
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 839
                },
                "definite": false,
                "start": 832,
                "end": 839
              }
            ],
            "declare": false,
            "start": 828,
            "end": 840
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 862
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 867
                },
                "definite": false,
                "start": 860,
                "end": 867
              }
            ],
            "declare": false,
            "start": 856,
            "end": 868
          }
        ],
        "start": 414,
        "end": 896
      },
      "expression": false,
      "start": 387,
      "end": 896
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 907,
        "end": 909
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "init": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 929,
                  "end": 932
                },
                "definite": false,
                "start": 924,
                "end": 932
              }
            ],
            "declare": false,
            "start": 918,
            "end": 933
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 966
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 971
                },
                "definite": false,
                "start": 964,
                "end": 971
              }
            ],
            "declare": false,
            "start": 960,
            "end": 972
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1001
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1006
                },
                "definite": false,
                "start": 999,
                "end": 1006
              }
            ],
            "declare": false,
            "start": 993,
            "end": 1007
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1040
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1043,
                  "end": 1045
                },
                "definite": false,
                "start": 1038,
                "end": 1045
              }
            ],
            "declare": false,
            "start": 1034,
            "end": 1046
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 1077,
                        "end": 1080
                      },
                      "start": 1077,
                      "end": 1080
                    },
                    "start": 1075,
                    "end": 1080
                  },
                  "start": 1073,
                  "end": 1080
                },
                "init": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 1083,
                  "end": 1086
                },
                "definite": false,
                "start": 1073,
                "end": 1086
              }
            ],
            "declare": false,
            "start": 1067,
            "end": 1087
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1111
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1116
                },
                "definite": false,
                "start": 1109,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1105,
            "end": 1117
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 1145,
                        "end": 1148
                      },
                      "start": 1145,
                      "end": 1148
                    },
                    "start": 1143,
                    "end": 1148
                  },
                  "start": 1141,
                  "end": 1148
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1153
                },
                "definite": false,
                "start": 1141,
                "end": 1153
              }
            ],
            "declare": false,
            "start": 1135,
            "end": 1154
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1178
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1181,
                  "end": 1183
                },
                "definite": false,
                "start": 1176,
                "end": 1183
              }
            ],
            "declare": false,
            "start": 1172,
            "end": 1184
          }
        ],
        "start": 912,
        "end": 1199
      },
      "expression": false,
      "start": 898,
      "end": 1199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1219,
              "end": 1226
            },
            "start": 1217,
            "end": 1226
          },
          "start": 1213,
          "end": 1226
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1240,
                  "end": 1242
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1249
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 1252,
                    "end": 1255
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 456,
                    "raw": "456",
                    "start": 1258,
                    "end": 1261
                  },
                  "start": 1245,
                  "end": 1261
                },
                "definite": false,
                "start": 1240,
                "end": 1261
              }
            ],
            "declare": false,
            "start": 1234,
            "end": 1262
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
                  "name": "c2",
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
                            "value": 123,
                            "raw": "123",
                            "start": 1309,
                            "end": 1312
                          },
                          "start": 1309,
                          "end": 1312
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 456,
                            "raw": "456",
                            "start": 1315,
                            "end": 1318
                          },
                          "start": 1315,
                          "end": 1318
                        }
                      ],
                      "start": 1309,
                      "end": 1318
                    },
                    "start": 1307,
                    "end": 1318
                  },
                  "start": 1305,
                  "end": 1318
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1323
                },
                "definite": false,
                "start": 1305,
                "end": 1323
              }
            ],
            "declare": false,
            "start": 1299,
            "end": 1324
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1349,
                  "end": 1351
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1354,
                    "end": 1358
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1361,
                    "end": 1363
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1366,
                    "end": 1368
                  },
                  "start": 1354,
                  "end": 1368
                },
                "definite": false,
                "start": 1349,
                "end": 1368
              }
            ],
            "declare": false,
            "start": 1343,
            "end": 1369
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1396
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1403
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1406,
                    "end": 1408
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 789,
                    "raw": "789",
                    "start": 1411,
                    "end": 1414
                  },
                  "start": 1399,
                  "end": 1414
                },
                "definite": false,
                "start": 1394,
                "end": 1414
              }
            ],
            "declare": false,
            "start": 1388,
            "end": 1415
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
                  "name": "c5",
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
                            "value": 123,
                            "raw": "123",
                            "start": 1459,
                            "end": 1462
                          },
                          "start": 1459,
                          "end": 1462
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 456,
                            "raw": "456",
                            "start": 1465,
                            "end": 1468
                          },
                          "start": 1465,
                          "end": 1468
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 789,
                            "raw": "789",
                            "start": 1471,
                            "end": 1474
                          },
                          "start": 1471,
                          "end": 1474
                        }
                      ],
                      "start": 1459,
                      "end": 1474
                    },
                    "start": 1457,
                    "end": 1474
                  },
                  "start": 1455,
                  "end": 1474
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1479
                },
                "definite": false,
                "start": 1455,
                "end": 1479
              }
            ],
            "declare": false,
            "start": 1449,
            "end": 1480
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1510
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1515
                },
                "definite": false,
                "start": 1508,
                "end": 1515
              }
            ],
            "declare": false,
            "start": 1504,
            "end": 1516
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1538
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1543
                },
                "definite": false,
                "start": 1536,
                "end": 1543
              }
            ],
            "declare": false,
            "start": 1532,
            "end": 1544
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1567,
                  "end": 1569
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1572,
                  "end": 1574
                },
                "definite": false,
                "start": 1567,
                "end": 1574
              }
            ],
            "declare": false,
            "start": 1563,
            "end": 1575
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1600
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1603,
                  "end": 1605
                },
                "definite": false,
                "start": 1598,
                "end": 1605
              }
            ],
            "declare": false,
            "start": 1594,
            "end": 1606
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1626,
                  "end": 1628
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1631,
                  "end": 1633
                },
                "definite": false,
                "start": 1626,
                "end": 1633
              }
            ],
            "declare": false,
            "start": 1622,
            "end": 1634
          }
        ],
        "start": 1228,
        "end": 1656
      },
      "expression": false,
      "start": 1201,
      "end": 1656
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1669
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1686
                },
                "init": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1689,
                  "end": 1694
                },
                "definite": false,
                "start": 1684,
                "end": 1694
              }
            ],
            "declare": false,
            "start": 1678,
            "end": 1695
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1704,
                  "end": 1706
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1709,
                  "end": 1711
                },
                "definite": false,
                "start": 1704,
                "end": 1711
              }
            ],
            "declare": false,
            "start": 1700,
            "end": 1712
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 1727,
                        "end": 1732
                      },
                      "start": 1727,
                      "end": 1732
                    },
                    "start": 1725,
                    "end": 1732
                  },
                  "start": 1723,
                  "end": 1732
                },
                "init": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1735,
                  "end": 1740
                },
                "definite": false,
                "start": 1723,
                "end": 1740
              }
            ],
            "declare": false,
            "start": 1717,
            "end": 1741
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1750,
                  "end": 1752
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1757
                },
                "definite": false,
                "start": 1750,
                "end": 1757
              }
            ],
            "declare": false,
            "start": 1746,
            "end": 1758
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1771
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 1774,
                    "end": 1779
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 1783,
                      "end": 1788
                    },
                    "start": 1783,
                    "end": 1788
                  },
                  "start": 1774,
                  "end": 1788
                },
                "definite": false,
                "start": 1769,
                "end": 1788
              }
            ],
            "declare": false,
            "start": 1763,
            "end": 1789
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1798,
                  "end": 1800
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1803,
                  "end": 1805
                },
                "definite": false,
                "start": 1798,
                "end": 1805
              }
            ],
            "declare": false,
            "start": 1794,
            "end": 1806
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1817,
                  "end": 1819
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 1823,
                      "end": 1828
                    },
                    "start": 1823,
                    "end": 1828
                  },
                  "expression": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 1829,
                    "end": 1834
                  },
                  "start": 1822,
                  "end": 1834
                },
                "definite": false,
                "start": 1817,
                "end": 1834
              }
            ],
            "declare": false,
            "start": 1811,
            "end": 1835
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1846
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1849,
                  "end": 1851
                },
                "definite": false,
                "start": 1844,
                "end": 1851
              }
            ],
            "declare": false,
            "start": 1840,
            "end": 1852
          }
        ],
        "start": 1672,
        "end": 1854
      },
      "expression": false,
      "start": 1658,
      "end": 1854
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "widening",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1881
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1882,
              "end": 1883
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1882,
            "end": 1883
          }
        ],
        "start": 1881,
        "end": 1884
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1888,
                "end": 1889
              },
              "typeArguments": null,
              "start": 1888,
              "end": 1889
            },
            "start": 1886,
            "end": 1889
          },
          "start": 1885,
          "end": 1889
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1892,
            "end": 1893
          },
          "typeArguments": null,
          "start": 1892,
          "end": 1893
        },
        "start": 1890,
        "end": 1893
      },
      "body": null,
      "expression": false,
      "start": 1856,
      "end": 1894
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonWidening",
        "optional": false,
        "typeAnnotation": null,
        "start": 1912,
        "end": 1923
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1925
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1934,
                  "end": 1940
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1943,
                  "end": 1949
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 1952,
                  "end": 1958
                }
              ],
              "start": 1934,
              "end": 1958
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1924,
            "end": 1958
          }
        ],
        "start": 1923,
        "end": 1959
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1963,
                "end": 1964
              },
              "typeArguments": null,
              "start": 1963,
              "end": 1964
            },
            "start": 1961,
            "end": 1964
          },
          "start": 1960,
          "end": 1964
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1967,
            "end": 1968
          },
          "typeArguments": null,
          "start": 1967,
          "end": 1968
        },
        "start": 1965,
        "end": 1968
      },
      "body": null,
      "expression": false,
      "start": 1895,
      "end": 1969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1980,
        "end": 1982
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1989,
              "end": 1996
            },
            "start": 1987,
            "end": 1996
          },
          "start": 1983,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2010
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2013,
                    "end": 2021
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 2022,
                      "end": 2025
                    }
                  ],
                  "optional": false,
                  "start": 2013,
                  "end": 2026
                },
                "definite": false,
                "start": 2008,
                "end": 2026
              }
            ],
            "declare": false,
            "start": 2004,
            "end": 2027
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2036,
                  "end": 2038
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2041,
                    "end": 2049
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2050,
                      "end": 2052
                    }
                  ],
                  "optional": false,
                  "start": 2041,
                  "end": 2053
                },
                "definite": false,
                "start": 2036,
                "end": 2053
              }
            ],
            "declare": false,
            "start": 2032,
            "end": 2054
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2063,
                  "end": 2065
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2068,
                    "end": 2076
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2077,
                        "end": 2081
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 2084,
                        "end": 2087
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 2090,
                        "end": 2092
                      },
                      "start": 2077,
                      "end": 2092
                    }
                  ],
                  "optional": false,
                  "start": 2068,
                  "end": 2093
                },
                "definite": false,
                "start": 2063,
                "end": 2093
              }
            ],
            "declare": false,
            "start": 2059,
            "end": 2094
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2105
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2119
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 2120,
                      "end": 2123
                    }
                  ],
                  "optional": false,
                  "start": 2108,
                  "end": 2124
                },
                "definite": false,
                "start": 2103,
                "end": 2124
              }
            ],
            "declare": false,
            "start": 2099,
            "end": 2125
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2134,
                  "end": 2136
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2139,
                    "end": 2150
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2151,
                      "end": 2153
                    }
                  ],
                  "optional": false,
                  "start": 2139,
                  "end": 2154
                },
                "definite": false,
                "start": 2134,
                "end": 2154
              }
            ],
            "declare": false,
            "start": 2130,
            "end": 2155
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
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2164,
                  "end": 2166
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2169,
                    "end": 2180
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2181,
                        "end": 2185
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 2188,
                        "end": 2191
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 2194,
                        "end": 2196
                      },
                      "start": 2181,
                      "end": 2196
                    }
                  ],
                  "optional": false,
                  "start": 2169,
                  "end": 2197
                },
                "definite": false,
                "start": 2164,
                "end": 2197
              }
            ],
            "declare": false,
            "start": 2160,
            "end": 2198
          }
        ],
        "start": 1998,
        "end": 2200
      },
      "expression": false,
      "start": 1971,
      "end": 2200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FAILURE",
        "optional": false,
        "typeAnnotation": null,
        "start": 2229,
        "end": 2236
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "FAILURE",
          "raw": "\"FAILURE\"",
          "start": 2239,
          "end": 2248
        },
        "start": 2239,
        "end": 2248
      },
      "declare": false,
      "start": 2224,
      "end": 2249
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
            "name": "FAILURE",
            "optional": false,
            "typeAnnotation": null,
            "start": 2256,
            "end": 2263
          },
          "init": {
            "type": "Literal",
            "value": "FAILURE",
            "raw": "\"FAILURE\"",
            "start": 2266,
            "end": 2275
          },
          "definite": false,
          "start": 2256,
          "end": 2275
        }
      ],
      "declare": false,
      "start": 2250,
      "end": 2276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 2283,
        "end": 2289
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2290,
              "end": 2291
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2290,
            "end": 2291
          }
        ],
        "start": 2289,
        "end": 2292
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2295,
              "end": 2296
            },
            "typeArguments": null,
            "start": 2295,
            "end": 2296
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FAILURE",
              "optional": false,
              "typeAnnotation": null,
              "start": 2299,
              "end": 2306
            },
            "typeArguments": null,
            "start": 2299,
            "end": 2306
          }
        ],
        "start": 2295,
        "end": 2306
      },
      "declare": false,
      "start": 2278,
      "end": 2307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 2318,
        "end": 2324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2325,
              "end": 2326
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2325,
            "end": 2326
          }
        ],
        "start": 2324,
        "end": 2327
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 2331,
            "end": 2337
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2338,
                  "end": 2339
                },
                "typeArguments": null,
                "start": 2338,
                "end": 2339
              }
            ],
            "start": 2337,
            "end": 2340
          },
          "start": 2331,
          "end": 2340
        },
        "start": 2329,
        "end": 2340
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "FAILURE",
              "optional": false,
              "typeAnnotation": null,
              "start": 2352,
              "end": 2359
            },
            "start": 2345,
            "end": 2360
          }
        ],
        "start": 2341,
        "end": 2362
      },
      "expression": false,
      "start": 2309,
      "end": 2362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isSuccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 2373,
        "end": 2382
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2383,
            "end": 2384
          }
        ],
        "start": 2382,
        "end": 2385
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 2394,
                "end": 2400
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2401,
                      "end": 2402
                    },
                    "typeArguments": null,
                    "start": 2401,
                    "end": 2402
                  }
                ],
                "start": 2400,
                "end": 2403
              },
              "start": 2394,
              "end": 2403
            },
            "start": 2392,
            "end": 2403
          },
          "start": 2386,
          "end": 2403
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 2406,
            "end": 2412
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2416,
                "end": 2417
              },
              "typeArguments": null,
              "start": 2416,
              "end": 2417
            },
            "start": 2416,
            "end": 2417
          },
          "start": 2406,
          "end": 2417
        },
        "start": 2404,
        "end": 2417
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFailure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2430,
                  "end": 2439
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2440,
                    "end": 2446
                  }
                ],
                "optional": false,
                "start": 2430,
                "end": 2447
              },
              "prefix": true,
              "start": 2429,
              "end": 2447
            },
            "start": 2422,
            "end": 2448
          }
        ],
        "start": 2418,
        "end": 2450
      },
      "expression": false,
      "start": 2364,
      "end": 2450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFailure",
        "optional": false,
        "typeAnnotation": null,
        "start": 2461,
        "end": 2470
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2471,
              "end": 2472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2471,
            "end": 2472
          }
        ],
        "start": 2470,
        "end": 2473
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 2482,
                "end": 2488
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2489,
                      "end": 2490
                    },
                    "typeArguments": null,
                    "start": 2489,
                    "end": 2490
                  }
                ],
                "start": 2488,
                "end": 2491
              },
              "start": 2482,
              "end": 2491
            },
            "start": 2480,
            "end": 2491
          },
          "start": 2474,
          "end": 2491
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 2494,
            "end": 2500
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FAILURE",
                "optional": false,
                "typeAnnotation": null,
                "start": 2504,
                "end": 2511
              },
              "typeArguments": null,
              "start": 2504,
              "end": 2511
            },
            "start": 2504,
            "end": 2511
          },
          "start": 2494,
          "end": 2511
        },
        "start": 2492,
        "end": 2511
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 2523,
                "end": 2529
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "FAILURE",
                "optional": false,
                "typeAnnotation": null,
                "start": 2534,
                "end": 2541
              },
              "start": 2523,
              "end": 2541
            },
            "start": 2516,
            "end": 2542
          }
        ],
        "start": 2512,
        "end": 2544
      },
      "expression": false,
      "start": 2452,
      "end": 2544
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "increment",
        "optional": false,
        "typeAnnotation": null,
        "start": 2555,
        "end": 2564
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
              "start": 2568,
              "end": 2574
            },
            "start": 2566,
            "end": 2574
          },
          "start": 2565,
          "end": 2574
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2577,
          "end": 2583
        },
        "start": 2575,
        "end": 2583
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2595,
                "end": 2596
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2599,
                "end": 2600
              },
              "start": 2595,
              "end": 2600
            },
            "start": 2588,
            "end": 2601
          }
        ],
        "start": 2584,
        "end": 2603
      },
      "expression": false,
      "start": 2546,
      "end": 2603
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 2609,
            "end": 2615
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doWork",
              "optional": false,
              "typeAnnotation": null,
              "start": 2618,
              "end": 2624
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2625,
                  "end": 2631
                }
              ],
              "start": 2624,
              "end": 2632
            },
            "arguments": [],
            "optional": false,
            "start": 2618,
            "end": 2634
          },
          "definite": false,
          "start": 2609,
          "end": 2634
        }
      ],
      "declare": false,
      "start": 2605,
      "end": 2635
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isSuccess",
          "optional": false,
          "typeAnnotation": null,
          "start": 2641,
          "end": 2650
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 2651,
            "end": 2657
          }
        ],
        "optional": false,
        "start": 2641,
        "end": 2658
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "increment",
                "optional": false,
                "typeAnnotation": null,
                "start": 2664,
                "end": 2673
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2674,
                  "end": 2680
                }
              ],
              "optional": false,
              "start": 2664,
              "end": 2681
            },
            "directive": null,
            "start": 2664,
            "end": 2682
          }
        ],
        "start": 2660,
        "end": 2684
      },
      "alternate": null,
      "start": 2637,
      "end": 2684
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 2713,
        "end": 2722
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "onmouseover",
              "raw": "\"onmouseover\"",
              "start": 2725,
              "end": 2738
            },
            "start": 2725,
            "end": 2738
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "onmouseout",
              "raw": "\"onmouseout\"",
              "start": 2741,
              "end": 2753
            },
            "start": 2741,
            "end": 2753
          }
        ],
        "start": 2725,
        "end": 2753
      },
      "declare": false,
      "start": 2708,
      "end": 2754
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onMouseOver",
        "optional": false,
        "typeAnnotation": null,
        "start": 2765,
        "end": 2776
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 2780,
            "end": 2789
          },
          "typeArguments": null,
          "start": 2780,
          "end": 2789
        },
        "start": 2778,
        "end": 2789
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "onmouseover",
              "raw": "\"onmouseover\"",
              "start": 2799,
              "end": 2812
            },
            "start": 2792,
            "end": 2813
          }
        ],
        "start": 2790,
        "end": 2815
      },
      "expression": false,
      "start": 2756,
      "end": 2815
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2821,
            "end": 2822
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onMouseOver",
              "optional": false,
              "typeAnnotation": null,
              "start": 2825,
              "end": 2836
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2825,
            "end": 2838
          },
          "definite": false,
          "start": 2821,
          "end": 2838
        }
      ],
      "declare": false,
      "start": 2817,
      "end": 2839
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Set",
          "optional": false,
          "typeAnnotation": null,
          "start": 2879,
          "end": 2882
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2883,
                "end": 2884
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 2893,
                "end": 2899
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2883,
              "end": 2899
            }
          ],
          "start": 2882,
          "end": 2900
        },
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2904,
              "end": 2908
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2910,
                    "end": 2911
                  },
                  "typeArguments": null,
                  "start": 2910,
                  "end": 2911
                },
                "start": 2910,
                "end": 2913
              },
              "start": 2908,
              "end": 2913
            },
            "value": null,
            "start": 2901,
            "end": 2913
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 2916,
              "end": 2922
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2923,
                    "end": 2924
                  },
                  "typeArguments": null,
                  "start": 2923,
                  "end": 2924
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2926,
                        "end": 2930
                      },
                      "start": 2926,
                      "end": 2930
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2933,
                      "end": 2942
                    }
                  ],
                  "start": 2926,
                  "end": 2942
                }
              ],
              "start": 2922,
              "end": 2943
            },
            "start": 2916,
            "end": 2943
          },
          "start": 2914,
          "end": 2943
        },
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
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2954,
                    "end": 2960
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 2963,
                      "end": 2965
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2969,
                        "end": 2975
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2976,
                              "end": 2977
                            },
                            "typeArguments": null,
                            "start": 2976,
                            "end": 2977
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2979,
                                  "end": 2983
                                },
                                "start": 2979,
                                "end": 2983
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 2986,
                                "end": 2995
                              }
                            ],
                            "start": 2979,
                            "end": 2995
                          }
                        ],
                        "start": 2975,
                        "end": 2996
                      },
                      "start": 2969,
                      "end": 2996
                    },
                    "start": 2963,
                    "end": 2996
                  },
                  "definite": false,
                  "start": 2954,
                  "end": 2996
                }
              ],
              "declare": false,
              "start": 2948,
              "end": 2996
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2999,
                    "end": 3003
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3004,
                    "end": 3011
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2999,
                  "end": 3011
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3012,
                        "end": 3015
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3019,
                          "end": 3025
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3026,
                          "end": 3029
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3019,
                        "end": 3030
                      },
                      "right": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 3033,
                        "end": 3037
                      },
                      "start": 3019,
                      "end": 3037
                    },
                    "id": null,
                    "generator": false,
                    "start": 3012,
                    "end": 3037
                  }
                ],
                "optional": false,
                "start": 2999,
                "end": 3038
              },
              "directive": null,
              "start": 2999,
              "end": 3038
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 3048,
                "end": 3054
              },
              "start": 3041,
              "end": 3054
            }
          ],
          "start": 2944,
          "end": 3056
        },
        "expression": false,
        "start": 2870,
        "end": 3056
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2863,
      "end": 3056
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "keys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3074,
          "end": 3078
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3079,
                "end": 3080
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 3089,
                "end": 3095
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3079,
              "end": 3095
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 3097,
                "end": 3098
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3097,
              "end": 3098
            }
          ],
          "start": 3078,
          "end": 3099
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 3105,
                  "end": 3111
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3112,
                        "end": 3113
                      },
                      "typeArguments": null,
                      "start": 3112,
                      "end": 3113
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3115,
                        "end": 3116
                      },
                      "typeArguments": null,
                      "start": 3115,
                      "end": 3116
                    }
                  ],
                  "start": 3111,
                  "end": 3117
                },
                "start": 3105,
                "end": 3117
              },
              "start": 3103,
              "end": 3117
            },
            "start": 3100,
            "end": 3117
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3120,
                "end": 3121
              },
              "typeArguments": null,
              "start": 3120,
              "end": 3121
            },
            "start": 3120,
            "end": 3123
          },
          "start": 3118,
          "end": 3123
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3135,
                      "end": 3141
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3142,
                      "end": 3146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3135,
                    "end": 3146
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3147,
                      "end": 3150
                    }
                  ],
                  "optional": false,
                  "start": 3135,
                  "end": 3151
                },
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3156
                    },
                    "typeArguments": null,
                    "start": 3155,
                    "end": 3156
                  },
                  "start": 3155,
                  "end": 3158
                },
                "start": 3135,
                "end": 3158
              },
              "start": 3128,
              "end": 3158
            }
          ],
          "start": 3124,
          "end": 3160
        },
        "expression": false,
        "start": 3065,
        "end": 3160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3058,
      "end": 3160
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 3167,
        "end": 3170
      },
      "typeParameters": null,
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
              "name": "code",
              "optional": false,
              "typeAnnotation": null,
              "start": 3175,
              "end": 3179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LangCode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3181,
                  "end": 3189
                },
                "typeArguments": null,
                "start": 3181,
                "end": 3189
              },
              "start": 3179,
              "end": 3189
            },
            "accessibility": null,
            "static": false,
            "start": 3175,
            "end": 3189
          }
        ],
        "start": 3173,
        "end": 3191
      },
      "declare": false,
      "start": 3162,
      "end": 3191
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
            "name": "langCodeSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 3199,
            "end": 3210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 3213,
              "end": 3216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "'fr'",
                "start": 3217,
                "end": 3221
              },
              {
                "type": "Literal",
                "value": "en",
                "raw": "'en'",
                "start": 3223,
                "end": 3227
              },
              {
                "type": "Literal",
                "value": "es",
                "raw": "'es'",
                "start": 3229,
                "end": 3233
              },
              {
                "type": "Literal",
                "value": "it",
                "raw": "'it'",
                "start": 3235,
                "end": 3239
              },
              {
                "type": "Literal",
                "value": "nl",
                "raw": "'nl'",
                "start": 3241,
                "end": 3245
              }
            ],
            "optional": false,
            "start": 3213,
            "end": 3246
          },
          "definite": false,
          "start": 3199,
          "end": 3246
        }
      ],
      "declare": false,
      "start": 3193,
      "end": 3246
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LangCode",
          "optional": false,
          "typeAnnotation": null,
          "start": 3259,
          "end": 3267
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "langCodeSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 3283,
              "end": 3294
            },
            "typeArguments": null,
            "start": 3276,
            "end": 3294
          },
          "start": 3270,
          "end": 3294
        },
        "declare": false,
        "start": 3254,
        "end": 3294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3247,
      "end": 3294
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "langCodes",
              "optional": false,
              "typeAnnotation": null,
              "start": 3308,
              "end": 3317
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 3320,
                "end": 3324
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "langCodeSet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3325,
                  "end": 3336
                }
              ],
              "optional": false,
              "start": 3320,
              "end": 3337
            },
            "definite": false,
            "start": 3308,
            "end": 3337
          }
        ],
        "declare": false,
        "start": 3302,
        "end": 3337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3295,
      "end": 3337
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3350,
                    "end": 3353
                  },
                  "typeArguments": null,
                  "start": 3350,
                  "end": 3353
                },
                "start": 3350,
                "end": 3355
              },
              "start": 3348,
              "end": 3355
            },
            "start": 3345,
            "end": 3355
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "langCodes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3367
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3368,
                "end": 3371
              },
              "optional": false,
              "computed": false,
              "start": 3358,
              "end": 3371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3372,
                    "end": 3376
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3383,
                        "end": 3387
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3383,
                        "end": 3387
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3383,
                      "end": 3387
                    }
                  ],
                  "start": 3381,
                  "end": 3389
                },
                "id": null,
                "generator": false,
                "start": 3372,
                "end": 3390
              }
            ],
            "optional": false,
            "start": 3358,
            "end": 3391
          },
          "definite": false,
          "start": 3345,
          "end": 3391
        }
      ],
      "declare": false,
      "start": 3339,
      "end": 3391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 3424,
        "end": 3428
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3429,
              "end": 3430
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3441,
                    "end": 3442
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3444,
                      "end": 3450
                    },
                    "start": 3442,
                    "end": 3450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3441,
                  "end": 3451
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3452,
                    "end": 3453
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3455,
                      "end": 3461
                    },
                    "start": 3453,
                    "end": 3461
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3452,
                  "end": 3461
                }
              ],
              "start": 3439,
              "end": 3463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3429,
            "end": 3463
          }
        ],
        "start": 3428,
        "end": 3464
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3470,
                "end": 3471
              },
              "typeArguments": null,
              "start": 3470,
              "end": 3471
            },
            "start": 3468,
            "end": 3471
          },
          "start": 3465,
          "end": 3471
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3474,
            "end": 3475
          },
          "typeArguments": null,
          "start": 3474,
          "end": 3475
        },
        "start": 3472,
        "end": 3475
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3488,
                        "end": 3489
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3488,
                        "end": 3489
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3488,
                      "end": 3489
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3494,
                        "end": 3498
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 3491,
                      "end": 3498
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3486,
                  "end": 3500
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3503,
                  "end": 3506
                },
                "definite": false,
                "start": 3486,
                "end": 3506
              }
            ],
            "declare": false,
            "start": 3482,
            "end": 3507
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3521,
                      "end": 3522
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 3524,
                      "end": 3531
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3521,
                    "end": 3531
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3536,
                      "end": 3540
                    },
                    "start": 3533,
                    "end": 3540
                  }
                ],
                "start": 3519,
                "end": 3542
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3546,
                  "end": 3547
                },
                "typeArguments": null,
                "start": 3546,
                "end": 3547
              },
              "start": 3519,
              "end": 3547
            },
            "start": 3512,
            "end": 3548
          }
        ],
        "start": 3476,
        "end": 3550
      },
      "expression": false,
      "start": 3415,
      "end": 3550
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3591,
        "end": 3592
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3593,
              "end": 3594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3593,
            "end": 3594
          }
        ],
        "start": 3592,
        "end": 3595
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3599,
                "end": 3600
              },
              "typeArguments": null,
              "start": 3599,
              "end": 3600
            },
            "start": 3597,
            "end": 3600
          },
          "start": 3596,
          "end": 3600
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 3603,
            "end": 3614
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3615,
                  "end": 3616
                },
                "typeArguments": null,
                "start": 3615,
                "end": 3616
              }
            ],
            "start": 3614,
            "end": 3617
          },
          "start": 3603,
          "end": 3617
        },
        "start": 3601,
        "end": 3617
      },
      "body": null,
      "expression": false,
      "start": 3574,
      "end": 3618
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 3624,
        "end": 3625
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3628,
              "end": 3629
            },
            "initializer": null,
            "computed": false,
            "start": 3628,
            "end": 3629
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3631,
              "end": 3632
            },
            "initializer": null,
            "computed": false,
            "start": 3631,
            "end": 3632
          }
        ],
        "start": 3626,
        "end": 3634
      },
      "const": false,
      "declare": false,
      "start": 3619,
      "end": 3634
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3641,
            "end": 3642
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3645,
              "end": 3646
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3647,
                  "end": 3648
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3649,
                  "end": 3650
                },
                "optional": false,
                "computed": false,
                "start": 3647,
                "end": 3650
              }
            ],
            "optional": false,
            "start": 3645,
            "end": 3651
          },
          "definite": false,
          "start": 3641,
          "end": 3651
        }
      ],
      "declare": false,
      "start": 3635,
      "end": 3652
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3662,
                    "end": 3663
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3664,
                    "end": 3665
                  },
                  "start": 3662,
                  "end": 3665
                },
                "typeArguments": null,
                "start": 3662,
                "end": 3665
              },
              "start": 3660,
              "end": 3665
            },
            "start": 3659,
            "end": 3665
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3668,
            "end": 3669
          },
          "definite": false,
          "start": 3659,
          "end": 3669
        }
      ],
      "declare": false,
      "start": 3653,
      "end": 3670
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 3670
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 201,
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
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 279,
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
    "value": "c3",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 387,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 405,
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
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 436,
    "end": 437
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 438,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 446,
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
    "value": "const",
    "start": 493,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 509,
    "end": 510
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 519,
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
    "value": "const",
    "start": 545,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 556,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 594,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 663,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 679,
    "end": 680
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 681,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 687,
    "end": 688
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 689,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 758,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 793,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 828,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 856,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 865,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 898,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 918,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 960,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 964,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 969,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 993,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1038,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1043,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1114,
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
    "value": "const",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1181,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1201,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1213,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1219,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1234,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 1258,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1354,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1388,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Numeric",
    "value": "789",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1455,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Numeric",
    "value": "789",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1513,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1536,
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
    "value": "c2",
    "start": 1541,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1567,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1598,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1658,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1709,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1717,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1723,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1727,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1735,
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
    "value": "let",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1750,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1755,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1769,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1774,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1780,
    "end": 1782
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1783,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1798,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1803,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1811,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1817,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1829,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1840,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1844,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1849,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1856,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1864,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 1873,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1895,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1903,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 1912,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1926,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1943,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1952,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1967,
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
    "value": "function",
    "start": 1971,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1983,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1989,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2008,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2022,
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
    "value": ";",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2036,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 2041,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2059,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2063,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 2068,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2084,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2090,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 2108,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2130,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 2134,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 2139,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2151,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2160,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 2164,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 2169,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2224,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2229,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "String",
    "value": "\"FAILURE\"",
    "start": 2239,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2250,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2256,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "String",
    "value": "\"FAILURE\"",
    "start": 2266,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2283,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2299,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2309,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2318,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2331,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2345,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2364,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 2373,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2386,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2394,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2406,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2413,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2422,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "isFailure",
    "start": 2430,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2440,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2452,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "isFailure",
    "start": 2461,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2474,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2482,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2501,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2504,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2516,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2523,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "FAILURE",
    "start": 2534,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2546,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "increment",
    "start": 2555,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2568,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2577,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2605,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2609,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2618,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2625,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2637,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 2641,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2651,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "increment",
    "start": 2664,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2674,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2708,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "TestEvent",
    "start": 2713,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "String",
    "value": "\"onmouseover\"",
    "start": 2725,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "String",
    "value": "\"onmouseout\"",
    "start": 2741,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2756,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "onMouseOver",
    "start": 2765,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "TestEvent",
    "start": 2780,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2792,
    "end": 2798
  },
  {
    "type": "String",
    "value": "\"onmouseover\"",
    "start": 2799,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2817,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "onMouseOver",
    "start": 2825,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2863,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2870,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 2879,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2885,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2893,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2901,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2904,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2916,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2926,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2933,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2948,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2954,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2969,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2979,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2986,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2999,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 3004,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3012,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3016,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3019,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3026,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3033,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3041,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3048,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3058,
    "end": 3064
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3065,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 3074,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3081,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3089,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3100,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3105,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3128,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3135,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 3142,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3147,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3152,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3162,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 3167,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 3175,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "LangCode",
    "start": 3181,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3193,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "langCodeSet",
    "start": 3199,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 3213,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 3217,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 3223,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "String",
    "value": "'es'",
    "start": 3229,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "String",
    "value": "'it'",
    "start": 3235,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "String",
    "value": "'nl'",
    "start": 3241,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3247,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3254,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "LangCode",
    "start": 3259,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3270,
    "end": 3275
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3276,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "langCodeSet",
    "start": 3283,
    "end": 3294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3295,
    "end": 3301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3302,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "langCodes",
    "start": 3308,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 3320,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "langCodeSet",
    "start": 3325,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3339,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 3345,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 3350,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "langCodes",
    "start": 3358,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3368,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 3372,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3377,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 3383,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3415,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3424,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3431,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3444,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3455,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3465,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3482,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3491,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3494,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3503,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3512,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3524,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3533,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3536,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3543,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3574,
    "end": 3581
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3582,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 3603,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3619,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3635,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3653,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3669,
    "end": 3670
  }
]
```

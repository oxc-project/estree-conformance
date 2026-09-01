__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 169,
                "end": 171
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 175
              }
            ],
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      },
                      "start": 182,
                      "end": 190
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 180,
                    "end": 191
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 196,
                        "end": 202
                      },
                      "start": 194,
                      "end": 202
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 192,
                    "end": 202
                  }
                ],
                "start": 178,
                "end": 204
              },
              "start": 176,
              "end": 204
            },
            "start": 168,
            "end": 204
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 213,
                  "end": 215
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 215
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 221,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 217,
                "end": 228
              }
            ],
            "start": 207,
            "end": 230
          },
          "definite": false,
          "start": 168,
          "end": 230
        }
      ],
      "declare": false,
      "start": 164,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a3",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 238
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 244
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 245
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a5",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 250
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 264,
                            "end": 270
                          }
                        ],
                        "start": 263,
                        "end": 271
                      }
                    ],
                    "start": 262,
                    "end": 272
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 274,
                    "end": 281
                  }
                ],
                "start": 253,
                "end": 282
              },
              "start": 251,
              "end": 282
            },
            "start": 235,
            "end": 282
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 286,
                "end": 287
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 291,
                        "end": 298
                      }
                    ],
                    "start": 290,
                    "end": 299
                  }
                ],
                "start": 289,
                "end": 300
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 302,
                "end": 306
              }
            ],
            "start": 285,
            "end": 307
          },
          "definite": false,
          "start": 235,
          "end": 307
        }
      ],
      "declare": false,
      "start": 231,
      "end": 308
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 531
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 538
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 538
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 535,
                        "end": 538
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 540
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 548
                        },
                        "value": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 550,
                          "end": 558
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 545,
                        "end": 558
                      }
                    ],
                    "start": 543,
                    "end": 560
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 560
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 529,
                "end": 560
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 563
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 570
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 577
                      },
                      "value": {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 579,
                        "end": 586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 574,
                      "end": 586
                    }
                  ],
                  "start": 572,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 568,
                "end": 588
              }
            ],
            "start": 566,
            "end": 590
          },
          "definite": false,
          "start": 527,
          "end": 590
        }
      ],
      "declare": false,
      "start": 523,
      "end": 591
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 600
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 607
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 609,
                  "end": 613
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 605,
                "end": 613
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 617
                },
                "value": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 619,
                  "end": 626
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 615,
                "end": 626
              }
            ],
            "start": 603,
            "end": 628
          },
          "definite": false,
          "start": 596,
          "end": 628
        }
      ],
      "declare": false,
      "start": 592,
      "end": 629
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 637
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 640,
                  "end": 641
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 641
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 648,
                  "end": 652
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 652
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 663
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 663
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 664
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 668,
                "end": 669
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 671,
                "end": 676
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 682
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 684,
                      "end": 689
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 680,
                    "end": 689
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 691,
                      "end": 693
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 695,
                      "end": 702
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 691,
                    "end": 702
                  }
                ],
                "start": 678,
                "end": 704
              }
            ],
            "start": 667,
            "end": 705
          },
          "definite": false,
          "start": 634,
          "end": 705
        }
      ],
      "declare": false,
      "start": 630,
      "end": 706
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 714
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 717,
                  "end": 718
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 718
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 722
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 725,
                  "end": 729
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 729
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 733
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 740
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 740
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 741
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 765
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 776
              }
            ],
            "start": 744,
            "end": 777
          },
          "definite": false,
          "start": 711,
          "end": 777
        }
      ],
      "declare": false,
      "start": 707,
      "end": 778
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1026
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1021,
                "end": 1026
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1020,
            "end": 1027
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1031,
                "end": 1032
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1033,
                "end": 1034
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1035,
                "end": 1036
              }
            ],
            "start": 1030,
            "end": 1037
          },
          "definite": false,
          "start": 1020,
          "end": 1037
        }
      ],
      "declare": false,
      "start": 1016,
      "end": 1038
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1048,
                  "end": 1050
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1045,
                "end": 1050
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1051
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1055,
                "end": 1056
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1057,
                "end": 1058
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1059,
                "end": 1060
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1062,
                "end": 1070
              }
            ],
            "start": 1054,
            "end": 1071
          },
          "definite": false,
          "start": 1044,
          "end": 1071
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1072
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1410
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1413
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1407,
            "end": 1414
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1418,
                "end": 1419
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1420,
                "end": 1428
              }
            ],
            "start": 1417,
            "end": 1429
          },
          "definite": false,
          "start": 1407,
          "end": 1429
        }
      ],
      "declare": false,
      "start": 1403,
      "end": 1429
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
            "name": "temp1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1687
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1691,
                "end": 1695
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1697,
                "end": 1702
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1704,
                "end": 1708
              }
            ],
            "start": 1690,
            "end": 1709
          },
          "definite": false,
          "start": 1682,
          "end": 1709
        }
      ],
      "declare": false,
      "start": 1678,
      "end": 1709
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1715,
                "end": 1717
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1719,
                "end": 1721
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1722
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1726,
                "end": 1727
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1729,
                "end": 1737
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1742,
                  "end": 1747
                },
                "start": 1739,
                "end": 1747
              }
            ],
            "start": 1725,
            "end": 1748
          },
          "definite": false,
          "start": 1714,
          "end": 1748
        }
      ],
      "declare": false,
      "start": 1710,
      "end": 1749
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1800
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1803,
                      "end": 1805
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1809
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1811,
                        "end": 1813
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1818,
                              "end": 1820
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1000,
                              "raw": "1000",
                              "start": 1822,
                              "end": 1826
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1818,
                            "end": 1826
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1828,
                              "end": 1830
                            },
                            "value": {
                              "type": "Literal",
                              "value": 200,
                              "raw": "200",
                              "start": 1832,
                              "end": 1835
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1828,
                            "end": 1835
                          }
                        ],
                        "start": 1816,
                        "end": 1837
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1811,
                      "end": 1837
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1802,
                  "end": 1838
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1799,
                "end": 1838
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1798,
            "end": 1839
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1845
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1848,
                      "end": 1849
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1851,
                      "end": 1852
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1856,
                            "end": 1858
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1860,
                            "end": 1861
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1856,
                          "end": 1861
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1863,
                            "end": 1865
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1867,
                            "end": 1868
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1863,
                          "end": 1868
                        }
                      ],
                      "start": 1854,
                      "end": 1870
                    }
                  ],
                  "start": 1847,
                  "end": 1871
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1844,
                "end": 1871
              }
            ],
            "start": 1842,
            "end": 1873
          },
          "definite": false,
          "start": 1798,
          "end": 1873
        }
      ],
      "declare": false,
      "start": 1794,
      "end": 1874
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1881,
                  "end": 1882
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1885,
                      "end": 1887
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1889,
                      "end": 1891
                    },
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1895,
                            "end": 1897
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1899,
                            "end": 1901
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1895,
                          "end": 1901
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1903,
                            "end": 1905
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1903,
                            "end": 1905
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1903,
                          "end": 1905
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1893,
                      "end": 1907
                    },
                    null
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1884,
                  "end": 1912
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1881,
                "end": 1912
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1880,
            "end": 1913
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1919
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1922,
                      "end": 1923
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1925,
                      "end": 1926
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1930,
                            "end": 1932
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1934,
                            "end": 1935
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1930,
                          "end": 1935
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1937,
                            "end": 1939
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1941,
                            "end": 1942
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1937,
                          "end": 1942
                        }
                      ],
                      "start": 1928,
                      "end": 1944
                    }
                  ],
                  "start": 1921,
                  "end": 1945
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1918,
                "end": 1945
              }
            ],
            "start": 1916,
            "end": 1947
          },
          "definite": false,
          "start": 1880,
          "end": 1947
        }
      ],
      "declare": false,
      "start": 1876,
      "end": 1948
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2275,
                  "end": 2276
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2281
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2279,
                          "end": 2281
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2285,
                              "end": 2294
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 2296,
                              "end": 2300
                            }
                          ],
                          "start": 2284,
                          "end": 2301
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2301
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2279,
                      "end": 2301
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2278,
                  "end": 2302
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2275,
                "end": 2302
              }
            ],
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
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2308
                    },
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
                              "name": "g1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2312,
                              "end": 2314
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2316,
                                  "end": 2319
                                },
                                "start": 2316,
                                "end": 2321
                              },
                              "start": 2314,
                              "end": 2321
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2312,
                            "end": 2321
                          }
                        ],
                        "start": 2310,
                        "end": 2323
                      },
                      "start": 2308,
                      "end": 2323
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2307,
                    "end": 2323
                  }
                ],
                "start": 2305,
                "end": 2325
              },
              "start": 2303,
              "end": 2325
            },
            "start": 2274,
            "end": 2325
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2330,
                  "end": 2331
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2337
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2340,
                            "end": 2341
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2343,
                            "end": 2344
                          }
                        ],
                        "start": 2339,
                        "end": 2345
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2335,
                      "end": 2345
                    }
                  ],
                  "start": 2333,
                  "end": 2347
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2330,
                "end": 2347
              }
            ],
            "start": 2328,
            "end": 2349
          },
          "definite": false,
          "start": 2274,
          "end": 2349
        }
      ],
      "declare": false,
      "start": 2270,
      "end": 2350
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2356,
                  "end": 2357
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2360,
                        "end": 2362
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2360,
                          "end": 2362
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2366,
                              "end": 2375
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 2377,
                              "end": 2381
                            }
                          ],
                          "start": 2365,
                          "end": 2382
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2360,
                        "end": 2382
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2360,
                      "end": 2382
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2359,
                  "end": 2383
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2356,
                "end": 2383
              }
            ],
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
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2388,
                      "end": 2389
                    },
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
                              "name": "h1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2393,
                              "end": 2395
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2397,
                                  "end": 2403
                                },
                                "start": 2397,
                                "end": 2405
                              },
                              "start": 2395,
                              "end": 2405
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2393,
                            "end": 2405
                          }
                        ],
                        "start": 2391,
                        "end": 2407
                      },
                      "start": 2389,
                      "end": 2407
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2388,
                    "end": 2407
                  }
                ],
                "start": 2386,
                "end": 2409
              },
              "start": 2384,
              "end": 2409
            },
            "start": 2355,
            "end": 2409
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2415
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2419,
                        "end": 2421
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2424,
                            "end": 2425
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2427,
                            "end": 2428
                          }
                        ],
                        "start": 2423,
                        "end": 2429
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2419,
                      "end": 2429
                    }
                  ],
                  "start": 2417,
                  "end": 2431
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2414,
                "end": 2431
              }
            ],
            "start": 2412,
            "end": 2433
          },
          "definite": false,
          "start": 2355,
          "end": 2433
        }
      ],
      "declare": false,
      "start": 2351,
      "end": 2434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 164,
  "end": 2435
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
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
    "value": "a1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 180,
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
    "value": "number",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 619,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "b6",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 736,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 745,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 756,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 767,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1411,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1420,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1691,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1697,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1704,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1710,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1719,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 1742,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1803,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1807,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1811,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "b1",
    "start": 1818,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1822,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1832,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Numeric",
    "value": "2",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1863,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1876,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1885,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1889,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1895,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1903,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "f3",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1937,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2270,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2279,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2285,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2296,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2312,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2316,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2335,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2360,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2366,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2377,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2393,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2397,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2419,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  }
]
```

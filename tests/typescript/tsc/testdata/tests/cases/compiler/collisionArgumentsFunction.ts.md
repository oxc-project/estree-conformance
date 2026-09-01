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
        "start": 22,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 25,
          "end": 42
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 61
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 44,
          "end": 61
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 103
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 106,
                  "end": 108
                },
                "definite": false,
                "start": 94,
                "end": 108
              }
            ],
            "declare": false,
            "start": 90,
            "end": 109
          }
        ],
        "start": 63,
        "end": 123
      },
      "expression": false,
      "start": 13,
      "end": 123
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 136
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 140,
              "end": 146
            },
            "start": 138,
            "end": 146
          },
          "start": 137,
          "end": 146
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 160
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 148,
          "end": 160
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 204,
                        "end": 207
                      },
                      "start": 204,
                      "end": 209
                    },
                    "start": 202,
                    "end": 209
                  },
                  "start": 193,
                  "end": 209
                },
                "init": null,
                "definite": false,
                "start": 193,
                "end": 209
              }
            ],
            "declare": false,
            "start": 189,
            "end": 210
          }
        ],
        "start": 162,
        "end": 224
      },
      "expression": false,
      "start": 124,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 255,
              "end": 261
            },
            "start": 253,
            "end": 261
          },
          "start": 244,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 294
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 297,
                  "end": 299
                },
                "definite": false,
                "start": 285,
                "end": 299
              }
            ],
            "declare": false,
            "start": 281,
            "end": 300
          }
        ],
        "start": 263,
        "end": 314
      },
      "expression": false,
      "start": 225,
      "end": 314
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 339,
              "end": 345
            },
            "start": 337,
            "end": 345
          },
          "start": 336,
          "end": 345
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 359
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 347,
          "end": 359
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 316,
      "end": 361
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 408
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 420,
              "end": 426
            },
            "start": 418,
            "end": 426
          },
          "start": 409,
          "end": 426
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
            "start": 431,
            "end": 435
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 428,
          "end": 435
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 388,
      "end": 437
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 490
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 502,
              "end": 508
            },
            "start": 500,
            "end": 508
          },
          "start": 491,
          "end": 508
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 464,
      "end": 510
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 535
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 553
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 536,
          "end": 553
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 574
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 577,
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
          }
        ],
        "start": 555,
        "end": 594
      },
      "expression": false,
      "start": 524,
      "end": 594
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 613
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 635
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 638,
                  "end": 640
                },
                "definite": false,
                "start": 626,
                "end": 640
              }
            ],
            "declare": false,
            "start": 622,
            "end": 641
          }
        ],
        "start": 616,
        "end": 655
      },
      "expression": false,
      "start": 595,
      "end": 655
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 668
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 680,
              "end": 686
            },
            "start": 678,
            "end": 686
          },
          "start": 669,
          "end": 686
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
            "start": 691,
            "end": 695
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 688,
          "end": 695
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 657,
      "end": 697
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 732
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 744,
              "end": 750
            },
            "start": 742,
            "end": 750
          },
          "start": 733,
          "end": 750
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
            "start": 755,
            "end": 759
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 752,
          "end": 759
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 721,
      "end": 761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 796
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            },
            "start": 806,
            "end": 811
          },
          "start": 797,
          "end": 811
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
            "start": 816,
            "end": 820
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 813,
          "end": 820
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 852,
                      "end": 855
                    },
                    "start": 850,
                    "end": 855
                  },
                  "start": 841,
                  "end": 855
                },
                "init": null,
                "definite": false,
                "start": 841,
                "end": 855
              }
            ],
            "declare": false,
            "start": 837,
            "end": 856
          }
        ],
        "start": 822,
        "end": 870
      },
      "expression": false,
      "start": 785,
      "end": 870
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 883
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 887,
              "end": 893
            },
            "start": 885,
            "end": 893
          },
          "start": 884,
          "end": 893
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 907
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 895,
          "end": 907
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 871,
      "end": 909
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 945
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 949,
              "end": 955
            },
            "start": 947,
            "end": 955
          },
          "start": 946,
          "end": 955
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 969
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 957,
          "end": 969
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 933,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1007
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1011,
              "end": 1014
            },
            "start": 1009,
            "end": 1014
          },
          "start": 1008,
          "end": 1014
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1028
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1016,
          "end": 1028
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1060,
                        "end": 1063
                      },
                      "start": 1060,
                      "end": 1065
                    },
                    "start": 1058,
                    "end": 1065
                  },
                  "start": 1049,
                  "end": 1065
                },
                "init": null,
                "definite": false,
                "start": 1049,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1045,
            "end": 1066
          }
        ],
        "start": 1030,
        "end": 1080
      },
      "expression": false,
      "start": 995,
      "end": 1080
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1099
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1111,
              "end": 1117
            },
            "start": 1109,
            "end": 1117
          },
          "start": 1100,
          "end": 1117
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1081,
      "end": 1119
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1150
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1162,
              "end": 1168
            },
            "start": 1160,
            "end": 1168
          },
          "start": 1151,
          "end": 1168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1132,
      "end": 1170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1213,
              "end": 1216
            },
            "start": 1211,
            "end": 1216
          },
          "start": 1202,
          "end": 1216
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1251,
                      "end": 1254
                    },
                    "start": 1249,
                    "end": 1254
                  },
                  "start": 1240,
                  "end": 1254
                },
                "init": null,
                "definite": false,
                "start": 1240,
                "end": 1254
              }
            ],
            "declare": false,
            "start": 1236,
            "end": 1255
          }
        ],
        "start": 1218,
        "end": 1269
      },
      "expression": false,
      "start": 1183,
      "end": 1269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1290
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1302,
              "end": 1308
            },
            "start": 1300,
            "end": 1308
          },
          "start": 1291,
          "end": 1308
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
            "start": 1313,
            "end": 1317
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1310,
          "end": 1317
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1271,
      "end": 1319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1360,
        "end": 1362
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1374,
              "end": 1380
            },
            "start": 1372,
            "end": 1380
          },
          "start": 1363,
          "end": 1380
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
            "start": 1385,
            "end": 1389
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1382,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1343,
      "end": 1391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1435
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1439,
              "end": 1445
            },
            "start": 1437,
            "end": 1445
          },
          "start": 1436,
          "end": 1445
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1459
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1447,
          "end": 1459
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1415,
      "end": 1461
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1502,
        "end": 1505
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1509,
              "end": 1515
            },
            "start": 1507,
            "end": 1515
          },
          "start": 1506,
          "end": 1515
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1529
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1517,
          "end": 1529
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1485,
      "end": 1531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1572,
        "end": 1574
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1586,
              "end": 1592
            },
            "start": 1584,
            "end": 1592
          },
          "start": 1575,
          "end": 1592
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1555,
      "end": 1594
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1649,
              "end": 1655
            },
            "start": 1647,
            "end": 1655
          },
          "start": 1638,
          "end": 1655
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1618,
      "end": 1657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 1680
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 47,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "f1NoError",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 285,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 316,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 324,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 350,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 388,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 396,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 409,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 464,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 472,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "f2NoError",
    "start": 481,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 491,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 539,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 565,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 595,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "f3NoError",
    "start": 604,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 657,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 669,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 721,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 733,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 744,
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
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "rest",
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
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 785,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 797,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 813,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 841,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 871,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 895,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 898,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 933,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 949,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 960,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1019,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1049,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1090,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1100,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1141,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1151,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1162,
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
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1183,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1192,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1202,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1240,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1271,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1291,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1343,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1351,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1363,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1415,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1423,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "f52",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1447,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1450,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1485,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1493,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "f52",
    "start": 1502,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1520,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1555,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1563,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1575,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1618,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1626,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1635,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1638,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  }
]
```

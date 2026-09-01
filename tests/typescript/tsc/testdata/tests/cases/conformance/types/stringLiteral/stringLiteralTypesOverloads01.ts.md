__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrimitiveName",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 21,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "number",
              "raw": "'number'",
              "start": 32,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "boolean",
              "raw": "'boolean'",
              "start": 43,
              "end": 52
            },
            "start": 43,
            "end": 52
          }
        ],
        "start": 21,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 81
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 85,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 83,
            "end": 93
          },
          "start": 82,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 96,
          "end": 102
        },
        "start": 94,
        "end": 102
      },
      "body": null,
      "expression": false,
      "start": 55,
      "end": 103
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 130
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 134,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "start": 132,
            "end": 142
          },
          "start": 131,
          "end": 142
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 145,
          "end": 151
        },
        "start": 143,
        "end": 151
      },
      "body": null,
      "expression": false,
      "start": 104,
      "end": 152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 179
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 183,
                "end": 192
              },
              "start": 183,
              "end": 192
            },
            "start": 181,
            "end": 192
          },
          "start": 180,
          "end": 192
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 195,
          "end": 202
        },
        "start": 193,
        "end": 202
      },
      "body": null,
      "expression": false,
      "start": 153,
      "end": 203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 230
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 234,
                    "end": 243
                  },
                  "start": 234,
                  "end": 243
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 246,
                    "end": 254
                  },
                  "start": 246,
                  "end": 254
                }
              ],
              "start": 234,
              "end": 254
            },
            "start": 232,
            "end": 254
          },
          "start": 231,
          "end": 254
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSBooleanKeyword",
              "start": 257,
              "end": 264
            },
            {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            }
          ],
          "start": 257,
          "end": 273
        },
        "start": 255,
        "end": 273
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 301
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 305,
                    "end": 314
                  },
                  "start": 305,
                  "end": 314
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 317,
                    "end": 325
                  },
                  "start": 317,
                  "end": 325
                }
              ],
              "start": 305,
              "end": 325
            },
            "start": 303,
            "end": 325
          },
          "start": 302,
          "end": 325
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSBooleanKeyword",
              "start": 328,
              "end": 335
            },
            {
              "type": "TSNumberKeyword",
              "start": 338,
              "end": 344
            }
          ],
          "start": 328,
          "end": 344
        },
        "start": 326,
        "end": 344
      },
      "body": null,
      "expression": false,
      "start": 275,
      "end": 345
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 372
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 376,
                    "end": 384
                  },
                  "start": 376,
                  "end": 384
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 387,
                    "end": 395
                  },
                  "start": 387,
                  "end": 395
                }
              ],
              "start": 376,
              "end": 395
            },
            "start": 374,
            "end": 395
          },
          "start": 373,
          "end": 395
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 398,
              "end": 404
            },
            {
              "type": "TSStringKeyword",
              "start": 407,
              "end": 413
            }
          ],
          "start": 398,
          "end": 413
        },
        "start": 396,
        "end": 413
      },
      "body": null,
      "expression": false,
      "start": 346,
      "end": 414
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 441
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 445,
                    "end": 453
                  },
                  "start": 445,
                  "end": 453
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 456,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 467,
                    "end": 476
                  },
                  "start": 467,
                  "end": 476
                }
              ],
              "start": 445,
              "end": 476
            },
            "start": 443,
            "end": 476
          },
          "start": 442,
          "end": 476
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 479,
              "end": 485
            },
            {
              "type": "TSStringKeyword",
              "start": 488,
              "end": 494
            },
            {
              "type": "TSBooleanKeyword",
              "start": 497,
              "end": 504
            }
          ],
          "start": 479,
          "end": 504
        },
        "start": 477,
        "end": 504
      },
      "body": null,
      "expression": false,
      "start": 415,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 532
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrimitiveName",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 549
              },
              "typeArguments": null,
              "start": 536,
              "end": 549
            },
            "start": 534,
            "end": 549
          },
          "start": 533,
          "end": 549
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 552,
              "end": 558
            },
            {
              "type": "TSStringKeyword",
              "start": 561,
              "end": 567
            },
            {
              "type": "TSBooleanKeyword",
              "start": 570,
              "end": 577
            }
          ],
          "start": 552,
          "end": 577
        },
        "start": 550,
        "end": 577
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 594,
                "end": 602
              },
              "start": 588,
              "end": 602
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 621,
                    "end": 623
                  },
                  "start": 614,
                  "end": 624
                }
              ],
              "start": 604,
              "end": 630
            },
            "alternate": null,
            "start": 584,
            "end": 630
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
                "start": 639,
                "end": 640
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 645,
                "end": 653
              },
              "start": 639,
              "end": 653
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 672,
                    "end": 673
                  },
                  "start": 665,
                  "end": 674
                }
              ],
              "start": 655,
              "end": 680
            },
            "alternate": null,
            "start": 635,
            "end": 680
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
                "start": 689,
                "end": 690
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 695,
                "end": 704
              },
              "start": 689,
              "end": 704
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 723,
                    "end": 728
                  },
                  "start": 716,
                  "end": 729
                }
              ],
              "start": 706,
              "end": 735
            },
            "alternate": null,
            "start": 685,
            "end": 735
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "Invalid value",
              "raw": "\"Invalid value\"",
              "start": 777,
              "end": 792
            },
            "start": 771,
            "end": 793
          }
        ],
        "start": 578,
        "end": 795
      },
      "expression": false,
      "start": 506,
      "end": 795
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consts1",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 814
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "EMPTY_STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 839
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 859
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 860,
                      "end": 868
                    }
                  ],
                  "optional": false,
                  "start": 842,
                  "end": 869
                },
                "definite": false,
                "start": 827,
                "end": 869
              }
            ],
            "declare": false,
            "start": 821,
            "end": 870
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
                  "name": "ZERO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 885
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 905
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'",
                      "start": 906,
                      "end": 914
                    }
                  ],
                  "optional": false,
                  "start": 888,
                  "end": 915
                },
                "definite": false,
                "start": 881,
                "end": 915
              }
            ],
            "declare": false,
            "start": 875,
            "end": 916
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
                  "name": "FALSE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 932
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 952
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 953,
                      "end": 962
                    }
                  ],
                  "optional": false,
                  "start": 935,
                  "end": 963
                },
                "definite": false,
                "start": 927,
                "end": 963
              }
            ],
            "declare": false,
            "start": 921,
            "end": 964
          }
        ],
        "start": 815,
        "end": 966
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 797,
      "end": 966
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
            "name": "string",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 982,
                  "end": 990
                },
                "start": 982,
                "end": 990
              },
              "start": 980,
              "end": 990
            },
            "start": 974,
            "end": 990
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 993,
            "end": 1001
          },
          "definite": false,
          "start": 974,
          "end": 1001
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1001
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
            "name": "number",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1016,
                  "end": 1024
                },
                "start": 1016,
                "end": 1024
              },
              "start": 1014,
              "end": 1024
            },
            "start": 1008,
            "end": 1024
          },
          "init": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 1027,
            "end": 1035
          },
          "definite": false,
          "start": 1008,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1002,
      "end": 1035
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
            "name": "boolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1051,
                  "end": 1060
                },
                "start": 1051,
                "end": 1060
              },
              "start": 1049,
              "end": 1060
            },
            "start": 1042,
            "end": 1060
          },
          "init": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1063,
            "end": 1072
          },
          "definite": false,
          "start": 1042,
          "end": 1072
        }
      ],
      "declare": false,
      "start": 1036,
      "end": 1072
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1094
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1103
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1113
            },
            "start": 1097,
            "end": 1113
          },
          "definite": false,
          "start": 1080,
          "end": 1113
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1114
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
            "name": "stringOrBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1136
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1145
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1156
            },
            "start": 1139,
            "end": 1156
          },
          "definite": false,
          "start": 1121,
          "end": 1156
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1157
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
            "name": "booleanOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1179
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1188
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1199
            },
            "start": 1182,
            "end": 1199
          },
          "definite": false,
          "start": 1164,
          "end": 1199
        }
      ],
      "declare": false,
      "start": 1158,
      "end": 1200
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
            "name": "stringOrBooleanOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1207,
            "end": 1230
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrBoolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1248
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1258
            },
            "start": 1233,
            "end": 1258
          },
          "definite": false,
          "start": 1207,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1201,
      "end": 1259
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consts2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1271,
        "end": 1278
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "EMPTY_STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1303
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1323
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1330
                    }
                  ],
                  "optional": false,
                  "start": 1306,
                  "end": 1331
                },
                "definite": false,
                "start": 1291,
                "end": 1331
              }
            ],
            "declare": false,
            "start": 1285,
            "end": 1332
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
                  "name": "ZERO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1347
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1367
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1374
                    }
                  ],
                  "optional": false,
                  "start": 1350,
                  "end": 1375
                },
                "definite": false,
                "start": 1343,
                "end": 1375
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1376
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
                  "name": "FALSE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1392
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1412
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1413,
                      "end": 1420
                    }
                  ],
                  "optional": false,
                  "start": 1395,
                  "end": 1421
                },
                "definite": false,
                "start": 1387,
                "end": 1421
              }
            ],
            "declare": false,
            "start": 1381,
            "end": 1422
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
                  "start": 1434,
                  "end": 1435
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1438,
                    "end": 1455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1456,
                      "end": 1470
                    }
                  ],
                  "optional": false,
                  "start": 1438,
                  "end": 1471
                },
                "definite": false,
                "start": 1434,
                "end": 1471
              }
            ],
            "declare": false,
            "start": 1428,
            "end": 1472
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
                  "typeAnnotation": null,
                  "start": 1483,
                  "end": 1484
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1504
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrBoolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1520
                    }
                  ],
                  "optional": false,
                  "start": 1487,
                  "end": 1521
                },
                "definite": false,
                "start": 1483,
                "end": 1521
              }
            ],
            "declare": false,
            "start": 1477,
            "end": 1522
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1534
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1537,
                    "end": 1554
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1555,
                      "end": 1570
                    }
                  ],
                  "optional": false,
                  "start": 1537,
                  "end": 1571
                },
                "definite": false,
                "start": 1533,
                "end": 1571
              }
            ],
            "declare": false,
            "start": 1527,
            "end": 1572
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1584
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1587,
                    "end": 1604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrBooleanOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1628
                    }
                  ],
                  "optional": false,
                  "start": 1587,
                  "end": 1629
                },
                "definite": false,
                "start": 1583,
                "end": 1629
              }
            ],
            "declare": false,
            "start": 1577,
            "end": 1630
          }
        ],
        "start": 1279,
        "end": 1632
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1261,
      "end": 1632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1634
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "PrimitiveName",
    "start": 5,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 43,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 113,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 134,
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
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 153,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 162,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 183,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 213,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 244,
    "end": 245
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 275,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 284,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 305,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 317,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 346,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 355,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 376,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 387,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 415,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 424,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 454,
    "end": 455
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 456,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 467,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 479,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 506,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 515,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "PrimitiveName",
    "start": 536,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 552,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 570,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 590,
    "end": 593
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 594,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 614,
    "end": 620
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 641,
    "end": 644
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 691,
    "end": 694
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 716,
    "end": 722
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 771,
    "end": 776
  },
  {
    "type": "String",
    "value": "\"Invalid value\"",
    "start": 777,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 797,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "Consts1",
    "start": 807,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 821,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "EMPTY_STRING",
    "start": 827,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 842,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 860,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
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
    "value": "const",
    "start": 875,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "ZERO",
    "start": 881,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 888,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 906,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 921,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "FALSE",
    "start": 927,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 935,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "String",
    "value": "\"boolean\"",
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
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 968,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 982,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 993,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1027,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1051,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1063,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 1080,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "stringOrBoolean",
    "start": 1121,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1149,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "booleanOrNumber",
    "start": 1164,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1192,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "stringOrBooleanOrNumber",
    "start": 1207,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "stringOrBoolean",
    "start": 1233,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1252,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1261,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "Consts2",
    "start": 1271,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "EMPTY_STRING",
    "start": 1291,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1306,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1324,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "ZERO",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1350,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1368,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1381,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "FALSE",
    "start": 1387,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1395,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1413,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1428,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1438,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 1456,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1477,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1487,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "stringOrBoolean",
    "start": 1505,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1537,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "booleanOrNumber",
    "start": 1555,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1577,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "getFalsyPrimitive",
    "start": 1587,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "stringOrBooleanOrNumber",
    "start": 1605,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  }
]
```

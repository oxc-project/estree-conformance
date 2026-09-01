__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
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
              "start": 53,
              "end": 59
            },
            "start": 51,
            "end": 59
          },
          "start": 50,
          "end": 59
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 26,
      "end": 69
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
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
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 85,
              "end": 91
            },
            "start": 83,
            "end": 91
          },
          "start": 82,
          "end": 91
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 94,
          "end": 100
        },
        "start": 92,
        "end": 100
      },
      "body": null,
      "expression": false,
      "start": 70,
      "end": 101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            },
            "start": 118,
            "end": 123
          },
          "start": 114,
          "end": 123
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 138,
              "end": 140
            },
            "start": 131,
            "end": 141
          }
        ],
        "start": 125,
        "end": 143
      },
      "expression": false,
      "start": 102,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 147,
            "end": 154
          }
        ],
        "optional": false,
        "start": 144,
        "end": 155
      },
      "directive": null,
      "start": 144,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 159
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 160,
            "end": 162
          }
        ],
        "optional": false,
        "start": 157,
        "end": 163
      },
      "directive": null,
      "start": 157,
      "end": 164
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
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
              "start": 180,
              "end": 186
            },
            "start": 178,
            "end": 186
          },
          "start": 177,
          "end": 186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 189,
          "end": 195
        },
        "start": 187,
        "end": 195
      },
      "body": null,
      "expression": false,
      "start": 165,
      "end": 196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 238,
              "end": 244
            },
            "start": 236,
            "end": 244
          },
          "start": 235,
          "end": 244
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 247,
          "end": 253
        },
        "start": 245,
        "end": 253
      },
      "body": null,
      "expression": false,
      "start": 223,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 295
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 302,
              "end": 305
            },
            "start": 300,
            "end": 305
          },
          "start": 296,
          "end": 305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 320,
              "end": 322
            },
            "start": 313,
            "end": 323
          }
        ],
        "start": 307,
        "end": 325
      },
      "expression": false,
      "start": 284,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 329,
            "end": 336
          }
        ],
        "optional": false,
        "start": 326,
        "end": 337
      },
      "directive": null,
      "start": 326,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 341
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 342,
            "end": 344
          }
        ],
        "optional": false,
        "start": 339,
        "end": 345
      },
      "directive": null,
      "start": 339,
      "end": 346
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 358
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
              "start": 362,
              "end": 368
            },
            "start": 360,
            "end": 368
          },
          "start": 359,
          "end": 368
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 371,
          "end": 377
        },
        "start": 369,
        "end": 377
      },
      "body": null,
      "expression": false,
      "start": 347,
      "end": 378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 390
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 394,
              "end": 400
            },
            "start": 392,
            "end": 400
          },
          "start": 391,
          "end": 400
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 403,
          "end": 409
        },
        "start": 401,
        "end": 409
      },
      "body": null,
      "expression": false,
      "start": 379,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 422
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 429,
              "end": 432
            },
            "start": 427,
            "end": 432
          },
          "start": 423,
          "end": 432
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 447,
              "end": 449
            },
            "start": 440,
            "end": 450
          }
        ],
        "start": 434,
        "end": 452
      },
      "expression": false,
      "start": 411,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 455
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 456,
            "end": 463
          }
        ],
        "optional": false,
        "start": 453,
        "end": 464
      },
      "directive": null,
      "start": 453,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 469,
            "end": 471
          }
        ],
        "optional": false,
        "start": 466,
        "end": 472
      },
      "directive": null,
      "start": 466,
      "end": 473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 551,
              "end": 557
            },
            "start": 549,
            "end": 557
          },
          "start": 548,
          "end": 557
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 560,
          "end": 566
        },
        "start": 558,
        "end": 566
      },
      "body": null,
      "expression": false,
      "start": 524,
      "end": 567
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 629
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 633,
              "end": 639
            },
            "start": 631,
            "end": 639
          },
          "start": 630,
          "end": 639
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 642,
          "end": 648
        },
        "start": 640,
        "end": 648
      },
      "body": null,
      "expression": false,
      "start": 618,
      "end": 649
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 668,
              "end": 671
            },
            "start": 666,
            "end": 671
          },
          "start": 662,
          "end": 671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 686,
              "end": 688
            },
            "start": 679,
            "end": 689
          }
        ],
        "start": 673,
        "end": 691
      },
      "expression": false,
      "start": 650,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 694
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 695,
            "end": 702
          }
        ],
        "optional": false,
        "start": 692,
        "end": 703
      },
      "directive": null,
      "start": 692,
      "end": 704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 708,
            "end": 710
          }
        ],
        "optional": false,
        "start": 705,
        "end": 711
      },
      "directive": null,
      "start": 705,
      "end": 712
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 725
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 775,
                    "end": 781
                  },
                  "start": 773,
                  "end": 781
                },
                "start": 772,
                "end": 781
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 784,
                "end": 790
              },
              "start": 782,
              "end": 790
            },
            "start": 758,
            "end": 791
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 829,
                    "end": 835
                  },
                  "start": 827,
                  "end": 835
                },
                "start": 826,
                "end": 835
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              },
              "start": 836,
              "end": 844
            },
            "start": 825,
            "end": 845
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 869
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 873,
                    "end": 879
                  },
                  "start": 871,
                  "end": 879
                },
                "start": 870,
                "end": 879
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 882,
                "end": 888
              },
              "start": 880,
              "end": 888
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 866,
            "end": 889
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 913
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  },
                  "start": 915,
                  "end": 923
                },
                "start": 914,
                "end": 923
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 926,
                "end": 932
              },
              "start": 924,
              "end": 932
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 910,
            "end": 933
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 954
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    },
                    "start": 960,
                    "end": 968
                  },
                  "start": 958,
                  "end": 968
                },
                "start": 955,
                "end": 968
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 971,
                "end": 977
              },
              "start": 969,
              "end": 977
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 951,
            "end": 978
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1003
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1009,
                      "end": 1015
                    },
                    "start": 1009,
                    "end": 1017
                  },
                  "start": 1007,
                  "end": 1017
                },
                "start": 1004,
                "end": 1017
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1020,
                "end": 1026
              },
              "start": 1018,
              "end": 1026
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1000,
            "end": 1027
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1037
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1041,
                    "end": 1047
                  },
                  "start": 1039,
                  "end": 1047
                },
                "start": 1038,
                "end": 1047
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1050,
                "end": 1056
              },
              "start": 1048,
              "end": 1056
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1033,
            "end": 1057
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1083
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1087,
                    "end": 1093
                  },
                  "start": 1085,
                  "end": 1093
                },
                "start": 1084,
                "end": 1093
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1096,
                "end": 1102
              },
              "start": 1094,
              "end": 1102
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1079,
            "end": 1103
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1112
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1116,
                    "end": 1122
                  },
                  "start": 1114,
                  "end": 1122
                },
                "start": 1113,
                "end": 1122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1108,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1141
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1145,
                    "end": 1151
                  },
                  "start": 1143,
                  "end": 1151
                },
                "start": 1142,
                "end": 1151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1154,
                "end": 1160
              },
              "start": 1152,
              "end": 1160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1161
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1187
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1191,
                    "end": 1197
                  },
                  "start": 1189,
                  "end": 1197
                },
                "start": 1188,
                "end": 1197
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1200,
                "end": 1206
              },
              "start": 1198,
              "end": 1206
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1183,
            "end": 1207
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1216
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  },
                  "start": 1218,
                  "end": 1226
                },
                "start": 1217,
                "end": 1226
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1229,
                "end": 1235
              },
              "start": 1227,
              "end": 1235
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1212,
            "end": 1236
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1265
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1269,
                    "end": 1272
                  },
                  "start": 1267,
                  "end": 1272
                },
                "start": 1266,
                "end": 1272
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1275,
                "end": 1278
              },
              "start": 1273,
              "end": 1278
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1261,
            "end": 1279
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 1306,
                    "end": 1312
                  },
                  "start": 1304,
                  "end": 1312
                },
                "start": 1303,
                "end": 1312
              }
            ],
            "returnType": null,
            "start": 1298,
            "end": 1314
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1343,
                    "end": 1349
                  },
                  "start": 1341,
                  "end": 1349
                },
                "start": 1340,
                "end": 1349
              }
            ],
            "returnType": null,
            "start": 1335,
            "end": 1351
          }
        ],
        "start": 726,
        "end": 1353
      },
      "declare": false,
      "start": 713,
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1364,
                  "end": 1366
                },
                "typeArguments": null,
                "start": 1364,
                "end": 1366
              },
              "start": 1362,
              "end": 1366
            },
            "start": 1358,
            "end": 1366
          },
          "init": null,
          "definite": false,
          "start": 1358,
          "end": 1366
        }
      ],
      "declare": false,
      "start": 1354,
      "end": 1367
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1378,
        "end": 1380
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 1395,
                    "end": 1401
                  },
                  "start": 1393,
                  "end": 1401
                },
                "start": 1392,
                "end": 1401
              }
            ],
            "returnType": null,
            "start": 1387,
            "end": 1403
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1432,
                    "end": 1438
                  },
                  "start": 1430,
                  "end": 1438
                },
                "start": 1429,
                "end": 1438
              }
            ],
            "returnType": null,
            "start": 1424,
            "end": 1440
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1449,
                    "end": 1455
                  },
                  "start": 1447,
                  "end": 1455
                },
                "start": 1446,
                "end": 1455
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1458,
                "end": 1464
              },
              "start": 1456,
              "end": 1464
            },
            "start": 1445,
            "end": 1465
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1503,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                "start": 1500,
                "end": 1509
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1512,
                "end": 1518
              },
              "start": 1510,
              "end": 1518
            },
            "start": 1499,
            "end": 1519
          }
        ],
        "start": 1381,
        "end": 1521
      },
      "declare": false,
      "start": 1368,
      "end": 1521
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
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1534
                },
                "typeArguments": null,
                "start": 1532,
                "end": 1534
              },
              "start": 1530,
              "end": 1534
            },
            "start": 1526,
            "end": 1534
          },
          "init": null,
          "definite": false,
          "start": 1526,
          "end": 1534
        }
      ],
      "declare": false,
      "start": 1522,
      "end": 1535
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1546,
        "end": 1548
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 1579,
                    "end": 1585
                  },
                  "start": 1577,
                  "end": 1585
                },
                "start": 1576,
                "end": 1585
              }
            ],
            "returnType": null,
            "start": 1571,
            "end": 1587
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1616,
                    "end": 1622
                  },
                  "start": 1614,
                  "end": 1622
                },
                "start": 1613,
                "end": 1622
              }
            ],
            "returnType": null,
            "start": 1608,
            "end": 1624
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1662,
                    "end": 1668
                  },
                  "start": 1660,
                  "end": 1668
                },
                "start": 1659,
                "end": 1668
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1671,
                "end": 1677
              },
              "start": 1669,
              "end": 1677
            },
            "start": 1658,
            "end": 1678
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1687,
                    "end": 1693
                  },
                  "start": 1685,
                  "end": 1693
                },
                "start": 1684,
                "end": 1693
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1696,
                "end": 1702
              },
              "start": 1694,
              "end": 1702
            },
            "start": 1683,
            "end": 1703
          }
        ],
        "start": 1549,
        "end": 1705
      },
      "declare": false,
      "start": 1536,
      "end": 1705
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
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1718
                },
                "typeArguments": null,
                "start": 1716,
                "end": 1718
              },
              "start": 1714,
              "end": 1718
            },
            "start": 1710,
            "end": 1718
          },
          "init": null,
          "definite": false,
          "start": 1710,
          "end": 1718
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1719
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1730,
        "end": 1732
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 1747,
                    "end": 1753
                  },
                  "start": 1745,
                  "end": 1753
                },
                "start": 1744,
                "end": 1753
              }
            ],
            "returnType": null,
            "start": 1739,
            "end": 1755
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1768,
                    "end": 1774
                  },
                  "start": 1766,
                  "end": 1774
                },
                "start": 1765,
                "end": 1774
              }
            ],
            "returnType": null,
            "start": 1760,
            "end": 1776
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1785,
                    "end": 1791
                  },
                  "start": 1783,
                  "end": 1791
                },
                "start": 1782,
                "end": 1791
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              },
              "start": 1792,
              "end": 1800
            },
            "start": 1781,
            "end": 1801
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1810,
                    "end": 1816
                  },
                  "start": 1808,
                  "end": 1816
                },
                "start": 1807,
                "end": 1816
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1819,
                "end": 1825
              },
              "start": 1817,
              "end": 1825
            },
            "start": 1806,
            "end": 1826
          }
        ],
        "start": 1733,
        "end": 1828
      },
      "declare": false,
      "start": 1720,
      "end": 1828
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1836
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1855
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 1859,
                      "end": 1865
                    },
                    "start": 1857,
                    "end": 1865
                  },
                  "start": 1856,
                  "end": 1865
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1868,
                  "end": 1874
                },
                "start": 1866,
                "end": 1874
              },
              "body": null,
              "expression": false,
              "start": 1855,
              "end": 1875
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1843,
            "end": 1875
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1887,
              "end": 1892
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1896,
                      "end": 1902
                    },
                    "start": 1894,
                    "end": 1902
                  },
                  "start": 1893,
                  "end": 1902
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1905,
                  "end": 1911
                },
                "start": 1903,
                "end": 1911
              },
              "body": null,
              "expression": false,
              "start": 1892,
              "end": 1912
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1880,
            "end": 1912
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1929
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1936,
                      "end": 1939
                    },
                    "start": 1934,
                    "end": 1939
                  },
                  "start": 1930,
                  "end": 1939
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1958,
                      "end": 1960
                    },
                    "start": 1951,
                    "end": 1961
                  }
                ],
                "start": 1941,
                "end": 1967
              },
              "expression": false,
              "start": 1929,
              "end": 1967
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1917,
            "end": 1967
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1997,
              "end": 2002
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2006,
                      "end": 2012
                    },
                    "start": 2004,
                    "end": 2012
                  },
                  "start": 2003,
                  "end": 2012
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2015,
                  "end": 2021
                },
                "start": 2013,
                "end": 2021
              },
              "body": null,
              "expression": false,
              "start": 2002,
              "end": 2022
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1990,
            "end": 2022
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2034,
              "end": 2039
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2043,
                      "end": 2049
                    },
                    "start": 2041,
                    "end": 2049
                  },
                  "start": 2040,
                  "end": 2049
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2052,
                  "end": 2058
                },
                "start": 2050,
                "end": 2058
              },
              "body": null,
              "expression": false,
              "start": 2039,
              "end": 2059
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2027,
            "end": 2059
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2071,
              "end": 2076
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2083,
                      "end": 2086
                    },
                    "start": 2081,
                    "end": 2086
                  },
                  "start": 2077,
                  "end": 2086
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2105,
                      "end": 2107
                    },
                    "start": 2098,
                    "end": 2108
                  }
                ],
                "start": 2088,
                "end": 2114
              },
              "expression": false,
              "start": 2076,
              "end": 2114
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2064,
            "end": 2114
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2131
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2135,
                      "end": 2141
                    },
                    "start": 2133,
                    "end": 2141
                  },
                  "start": 2132,
                  "end": 2141
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2144,
                  "end": 2150
                },
                "start": 2142,
                "end": 2150
              },
              "body": null,
              "expression": false,
              "start": 2131,
              "end": 2151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2119,
            "end": 2151
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2181,
              "end": 2186
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2190,
                      "end": 2196
                    },
                    "start": 2188,
                    "end": 2196
                  },
                  "start": 2187,
                  "end": 2196
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2199,
                  "end": 2205
                },
                "start": 2197,
                "end": 2205
              },
              "body": null,
              "expression": false,
              "start": 2186,
              "end": 2206
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2174,
            "end": 2206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2218,
              "end": 2223
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2230,
                      "end": 2233
                    },
                    "start": 2228,
                    "end": 2233
                  },
                  "start": 2224,
                  "end": 2233
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2252,
                      "end": 2254
                    },
                    "start": 2245,
                    "end": 2255
                  }
                ],
                "start": 2235,
                "end": 2261
              },
              "expression": false,
              "start": 2223,
              "end": 2261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2211,
            "end": 2261
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2291,
              "end": 2296
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2300,
                      "end": 2306
                    },
                    "start": 2298,
                    "end": 2306
                  },
                  "start": 2297,
                  "end": 2306
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2309,
                  "end": 2315
                },
                "start": 2307,
                "end": 2315
              },
              "body": null,
              "expression": false,
              "start": 2296,
              "end": 2316
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2284,
            "end": 2316
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2346,
              "end": 2351
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2355,
                      "end": 2361
                    },
                    "start": 2353,
                    "end": 2361
                  },
                  "start": 2352,
                  "end": 2361
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2364,
                  "end": 2370
                },
                "start": 2362,
                "end": 2370
              },
              "body": null,
              "expression": false,
              "start": 2351,
              "end": 2371
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2339,
            "end": 2371
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2388
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2395,
                      "end": 2398
                    },
                    "start": 2393,
                    "end": 2398
                  },
                  "start": 2389,
                  "end": 2398
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2417,
                      "end": 2419
                    },
                    "start": 2410,
                    "end": 2420
                  }
                ],
                "start": 2400,
                "end": 2426
              },
              "expression": false,
              "start": 2388,
              "end": 2426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2376,
            "end": 2426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2461
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2465,
                      "end": 2471
                    },
                    "start": 2463,
                    "end": 2471
                  },
                  "start": 2462,
                  "end": 2471
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2474,
                  "end": 2480
                },
                "start": 2472,
                "end": 2480
              },
              "body": null,
              "expression": false,
              "start": 2461,
              "end": 2481
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2449,
            "end": 2481
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2511,
              "end": 2516
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2520,
                      "end": 2526
                    },
                    "start": 2518,
                    "end": 2526
                  },
                  "start": 2517,
                  "end": 2526
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2529,
                  "end": 2535
                },
                "start": 2527,
                "end": 2535
              },
              "body": null,
              "expression": false,
              "start": 2516,
              "end": 2536
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2504,
            "end": 2536
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2578,
              "end": 2583
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2590,
                      "end": 2593
                    },
                    "start": 2588,
                    "end": 2593
                  },
                  "start": 2584,
                  "end": 2593
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2612,
                      "end": 2614
                    },
                    "start": 2605,
                    "end": 2615
                  }
                ],
                "start": 2595,
                "end": 2621
              },
              "expression": false,
              "start": 2583,
              "end": 2621
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2571,
            "end": 2621
          }
        ],
        "start": 1837,
        "end": 2623
      },
      "abstract": false,
      "declare": false,
      "start": 1829,
      "end": 2623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2630,
        "end": 2632
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2639,
              "end": 2650
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2654,
                      "end": 2660
                    },
                    "start": 2652,
                    "end": 2660
                  },
                  "start": 2651,
                  "end": 2660
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2650,
              "end": 2662
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2639,
            "end": 2662
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2667,
              "end": 2678
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2682,
                      "end": 2688
                    },
                    "start": 2680,
                    "end": 2688
                  },
                  "start": 2679,
                  "end": 2688
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2678,
              "end": 2690
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2667,
            "end": 2690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2706
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2713,
                      "end": 2716
                    },
                    "start": 2711,
                    "end": 2716
                  },
                  "start": 2707,
                  "end": 2716
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2718,
                "end": 2725
              },
              "expression": false,
              "start": 2706,
              "end": 2725
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2695,
            "end": 2725
          }
        ],
        "start": 2633,
        "end": 2727
      },
      "abstract": false,
      "declare": false,
      "start": 2624,
      "end": 2727
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2734,
        "end": 2736
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2758,
              "end": 2769
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2773,
                      "end": 2779
                    },
                    "start": 2771,
                    "end": 2779
                  },
                  "start": 2770,
                  "end": 2779
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2769,
              "end": 2781
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2758,
            "end": 2781
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2798,
              "end": 2809
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2813,
                      "end": 2819
                    },
                    "start": 2811,
                    "end": 2819
                  },
                  "start": 2810,
                  "end": 2819
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2809,
              "end": 2821
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2798,
            "end": 2821
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2826,
              "end": 2837
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2844,
                      "end": 2847
                    },
                    "start": 2842,
                    "end": 2847
                  },
                  "start": 2838,
                  "end": 2847
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2849,
                "end": 2856
              },
              "expression": false,
              "start": 2837,
              "end": 2856
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2826,
            "end": 2856
          }
        ],
        "start": 2737,
        "end": 2858
      },
      "abstract": false,
      "declare": false,
      "start": 2728,
      "end": 2858
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2865,
        "end": 2867
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2874,
              "end": 2885
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2889,
                      "end": 2895
                    },
                    "start": 2887,
                    "end": 2895
                  },
                  "start": 2886,
                  "end": 2895
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2885,
              "end": 2897
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2874,
            "end": 2897
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2917,
              "end": 2928
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2932,
                      "end": 2938
                    },
                    "start": 2930,
                    "end": 2938
                  },
                  "start": 2929,
                  "end": 2938
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2928,
              "end": 2940
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2917,
            "end": 2940
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2956
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2963,
                      "end": 2966
                    },
                    "start": 2961,
                    "end": 2966
                  },
                  "start": 2957,
                  "end": 2966
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2968,
                "end": 2975
              },
              "expression": false,
              "start": 2956,
              "end": 2975
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2945,
            "end": 2975
          }
        ],
        "start": 2868,
        "end": 2977
      },
      "abstract": false,
      "declare": false,
      "start": 2859,
      "end": 2977
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2984,
        "end": 2986
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3008,
              "end": 3019
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 3023,
                      "end": 3029
                    },
                    "start": 3021,
                    "end": 3029
                  },
                  "start": 3020,
                  "end": 3029
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3019,
              "end": 3031
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3008,
            "end": 3031
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3051,
              "end": 3062
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3066,
                      "end": 3072
                    },
                    "start": 3064,
                    "end": 3072
                  },
                  "start": 3063,
                  "end": 3072
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3062,
              "end": 3074
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3051,
            "end": 3074
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3106
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3113,
                      "end": 3116
                    },
                    "start": 3111,
                    "end": 3116
                  },
                  "start": 3107,
                  "end": 3116
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3118,
                "end": 3125
              },
              "expression": false,
              "start": 3106,
              "end": 3125
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3095,
            "end": 3125
          }
        ],
        "start": 2987,
        "end": 3127
      },
      "abstract": false,
      "declare": false,
      "start": 2978,
      "end": 3127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3134,
        "end": 3136
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3158,
              "end": 3169
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 3173,
                      "end": 3179
                    },
                    "start": 3171,
                    "end": 3179
                  },
                  "start": 3170,
                  "end": 3179
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3169,
              "end": 3181
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3158,
            "end": 3181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3201,
              "end": 3212
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3216,
                      "end": 3222
                    },
                    "start": 3214,
                    "end": 3222
                  },
                  "start": 3213,
                  "end": 3222
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3212,
              "end": 3224
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3201,
            "end": 3224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3257,
              "end": 3268
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3275,
                      "end": 3278
                    },
                    "start": 3273,
                    "end": 3278
                  },
                  "start": 3269,
                  "end": 3278
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3280,
                "end": 3287
              },
              "expression": false,
              "start": 3268,
              "end": 3287
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3257,
            "end": 3287
          }
        ],
        "start": 3137,
        "end": 3289
      },
      "abstract": false,
      "declare": false,
      "start": 3128,
      "end": 3289
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
            "name": "c_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3297
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3304,
              "end": 3305
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3300,
            "end": 3307
          },
          "definite": false,
          "start": 3294,
          "end": 3307
        }
      ],
      "declare": false,
      "start": 3290,
      "end": 3308
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
            "name": "c1_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3314,
            "end": 3320
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3329
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3330,
                "end": 3332
              }
            ],
            "start": 3323,
            "end": 3333
          },
          "definite": false,
          "start": 3314,
          "end": 3333
        }
      ],
      "declare": false,
      "start": 3310,
      "end": 3334
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
            "name": "c1_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3339,
            "end": 3345
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3355,
                "end": 3362
              }
            ],
            "start": 3348,
            "end": 3363
          },
          "definite": false,
          "start": 3339,
          "end": 3363
        }
      ],
      "declare": false,
      "start": 3335,
      "end": 3364
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
            "name": "c2_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3369,
            "end": 3375
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3382,
              "end": 3384
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3385,
                "end": 3387
              }
            ],
            "start": 3378,
            "end": 3388
          },
          "definite": false,
          "start": 3369,
          "end": 3388
        }
      ],
      "declare": false,
      "start": 3365,
      "end": 3389
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
            "name": "c2_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3394,
            "end": 3400
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3407,
              "end": 3409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3410,
                "end": 3417
              }
            ],
            "start": 3403,
            "end": 3418
          },
          "definite": false,
          "start": 3394,
          "end": 3418
        }
      ],
      "declare": false,
      "start": 3390,
      "end": 3419
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
            "name": "c3_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3424,
            "end": 3430
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3437,
              "end": 3439
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3440,
                "end": 3442
              }
            ],
            "start": 3433,
            "end": 3443
          },
          "definite": false,
          "start": 3424,
          "end": 3443
        }
      ],
      "declare": false,
      "start": 3420,
      "end": 3444
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
            "name": "c3_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3449,
            "end": 3455
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3464
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3465,
                "end": 3472
              }
            ],
            "start": 3458,
            "end": 3473
          },
          "definite": false,
          "start": 3449,
          "end": 3473
        }
      ],
      "declare": false,
      "start": 3445,
      "end": 3474
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
            "name": "c4_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3479,
            "end": 3485
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3492,
              "end": 3494
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3495,
                "end": 3497
              }
            ],
            "start": 3488,
            "end": 3498
          },
          "definite": false,
          "start": 3479,
          "end": 3498
        }
      ],
      "declare": false,
      "start": 3475,
      "end": 3499
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
            "name": "c4_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3504,
            "end": 3510
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3517,
              "end": 3519
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3520,
                "end": 3527
              }
            ],
            "start": 3513,
            "end": 3528
          },
          "definite": false,
          "start": 3504,
          "end": 3528
        }
      ],
      "declare": false,
      "start": 3500,
      "end": 3529
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
            "name": "c5_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3534,
            "end": 3540
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3547,
              "end": 3549
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3550,
                "end": 3552
              }
            ],
            "start": 3543,
            "end": 3553
          },
          "definite": false,
          "start": 3534,
          "end": 3553
        }
      ],
      "declare": false,
      "start": 3530,
      "end": 3554
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
            "name": "c5_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3559,
            "end": 3565
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3572,
              "end": 3574
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3575,
                "end": 3582
              }
            ],
            "start": 3568,
            "end": 3583
          },
          "definite": false,
          "start": 3559,
          "end": 3583
        }
      ],
      "declare": false,
      "start": 3555,
      "end": 3584
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 3584
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 79,
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
    "value": "b",
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
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 284,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 440,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 456,
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
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "f4",
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
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 560,
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
    "value": "function",
    "start": 618,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 679,
    "end": 685
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 713,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 784,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 882,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1137,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1212,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
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
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1306,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1343,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "i1_i",
    "start": 1358,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1368,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1458,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1532,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1536,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1546,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1616,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1716,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1720,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1760,
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
    "value": "b",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1810,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1829,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1843,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1850,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1859,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1868,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1880,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1887,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1896,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1905,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 1930,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1936,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1951,
    "end": 1957
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1990,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1997,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2015,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2027,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2034,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2052,
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
    "value": "public",
    "start": 2064,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2071,
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
    "value": "aorb",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2105,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2119,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2126,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2135,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2144,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2174,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2181,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2190,
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
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2199,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2211,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2218,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2224,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2230,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2245,
    "end": 2251
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2252,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2284,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2291,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2300,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2309,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2339,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2346,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2355,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2364,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2376,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2383,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2389,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2395,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2410,
    "end": 2416
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2417,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2449,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2456,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2465,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2474,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2504,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2511,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2520,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2529,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2571,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2578,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2584,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2605,
    "end": 2611
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2612,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2624,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2630,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2639,
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
    "value": "a",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2654,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2667,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2682,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2695,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2707,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2713,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2728,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2734,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2758,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2798,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2813,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2826,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2838,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2859,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2865,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2874,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2889,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2917,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2945,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2957,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2963,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2978,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 2984,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3008,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3023,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3051,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3066,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3095,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 3107,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3113,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3128,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3134,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3158,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3173,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3201,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3216,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3257,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 3269,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3275,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3290,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "c_i",
    "start": 3294,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3300,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3310,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "c1_i_1",
    "start": 3314,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3323,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3327,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3330,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3335,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "c1_i_2",
    "start": 3339,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3348,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3352,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3355,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3365,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "c2_i_1",
    "start": 3369,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3378,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3382,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3385,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3390,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "c2_i_2",
    "start": 3394,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3403,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3407,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3410,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3420,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "c3_i_1",
    "start": 3424,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3433,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 3437,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3440,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3445,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "c3_i_2",
    "start": 3449,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3458,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 3462,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3465,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3475,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "c4_i_1",
    "start": 3479,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3488,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 3492,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3495,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3500,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "c4_i_2",
    "start": 3504,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3513,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 3517,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3520,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3530,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "c5_i_1",
    "start": 3534,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3543,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3547,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3550,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3555,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "c5_i_2",
    "start": 3559,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3568,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3572,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3575,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3583,
    "end": 3584
  }
]
```
